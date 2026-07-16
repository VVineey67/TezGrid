import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import './Select.css'

export default function Select({ label, value, onChange, options, multiple = false, placeholder = 'Select an option' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const isSelected = (optValue) => (multiple ? value.includes(optValue) : optValue === value)

  const handlePick = (optValue) => {
    if (multiple) {
      const next = value.includes(optValue)
        ? value.filter((v) => v !== optValue)
        : [...value, optValue]
      onChange(next)
    } else {
      onChange(optValue)
      setOpen(false)
    }
  }

  let summary
  if (multiple) {
    const picked = options.filter((o) => value.includes(o.value))
    if (picked.length === 0) summary = placeholder
    else if (picked.length <= 2) summary = picked.map((o) => o.label).join(', ')
    else summary = `${picked[0].label} +${picked.length - 1} more`
  } else {
    summary = options.find((o) => o.value === value)?.label ?? placeholder
  }
  const currentIcon = !multiple ? options.find((o) => o.value === value)?.icon : null

  return (
    <div className="select" ref={ref}>
      {label && <span className="select__label">{label}</span>}
      <button
        type="button"
        className={`select__control ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="select__current">
          {currentIcon && (() => { const Icon = currentIcon; return <Icon size={17} /> })()}
          {summary}
        </span>
        <ChevronDown size={18} className={`select__chevron ${open ? 'is-open' : ''}`} />
      </button>

      <ul className={`select__menu ${open ? 'is-open' : ''}`} role="listbox" aria-multiselectable={multiple}>
        {options.map((opt, i) => (
          <li
            key={opt.value}
            role="option"
            aria-selected={isSelected(opt.value)}
            className={`select__option ${isSelected(opt.value) ? 'is-selected' : ''} ${multiple ? 'select__option--checkbox' : ''}`}
            style={{ transitionDelay: open ? `${i * 25}ms` : '0ms' }}
            onClick={() => handlePick(opt.value)}
          >
            {multiple && (
              <span className={`select__box ${isSelected(opt.value) ? 'is-checked' : ''}`}>
                <Check size={12} />
              </span>
            )}
            {opt.icon && <opt.icon size={16} className="select__option-icon" />}
            <span className="select__option-label">{opt.label}</span>
            {!multiple && isSelected(opt.value) && <Check size={15} className="select__check" />}
          </li>
        ))}

        {multiple && (
          <li className="select__menu-footer">
            <button type="button" className="select__done" onClick={() => setOpen(false)}>
              Done
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}
