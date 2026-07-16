import { Router } from 'express'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, '..', 'data', 'submissions.json')

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const router = Router()

router.post('/', async (req, res) => {
  const { name, email, company, services, message } = req.body ?? {}

  if (!name || !String(name).trim()) {
    return res.status(400).json({ error: 'Name is required.' })
  }
  if (!email || !EMAIL_RE.test(String(email).trim())) {
    return res.status(400).json({ error: 'A valid email is required.' })
  }
  if (!message || !String(message).trim()) {
    return res.status(400).json({ error: 'Please tell us a bit about your app.' })
  }

  const serviceList = Array.isArray(services)
    ? services.map((s) => String(s).trim().slice(0, 100)).filter(Boolean).slice(0, 20)
    : []

  const entry = {
    name: String(name).trim().slice(0, 200),
    email: String(email).trim().slice(0, 200),
    company: company ? String(company).trim().slice(0, 200) : '',
    services: serviceList,
    message: String(message).trim().slice(0, 4000),
    submittedAt: new Date().toISOString(),
  }

  try {
    const raw = await readFile(DATA_FILE, 'utf-8').catch(() => '[]')
    const submissions = JSON.parse(raw)
    submissions.push(entry)
    await writeFile(DATA_FILE, JSON.stringify(submissions, null, 2))
  } catch (err) {
    console.error('Failed to persist contact submission:', err)
    return res.status(500).json({ error: 'Something went wrong on our end. Please try again.' })
  }

  console.log(`New contact submission from ${entry.name} <${entry.email}>`)
  res.status(201).json({ ok: true })
})

export default router
