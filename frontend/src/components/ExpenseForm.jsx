import { useState } from 'react'

const categories = [
  'Jedzenie',
  'Transport',
  'Dom',
  'Rozrywka',
  'Zakupy',
  'Zdrowie',
  'Inne',
]

const initialExpense = {
  amount: '',
  category: categories[0],
  description: '',
  spent_at: new Date().toISOString().slice(0, 10),
}

export default function ExpenseForm({ onSubmit }) {
  const [expense, setExpense] = useState(initialExpense)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setExpense((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      await onSubmit({
        ...expense,
        amount: Number(expense.amount.replace(',', '.')),
      })
      setExpense(initialExpense)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label className="field">
        Kwota
        <input
          name="amount"
          value={expense.amount}
          onChange={updateField}
          inputMode="decimal"
          placeholder="42,50"
          required
        />
      </label>

      <label className="field">
        Kategoria
        <select name="category" value={expense.category} onChange={updateField}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>

      <label className="field">
        Opis
        <textarea
          name="description"
          value={expense.description}
          onChange={updateField}
          placeholder="Np. zakupy spożywcze"
          rows="3"
        />
      </label>

      <label className="field">
        Data
        <input
          type="date"
          name="spent_at"
          value={expense.spent_at}
          onChange={updateField}
          required
        />
      </label>

      <button className="primary-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Zapisywanie…' : 'Dodaj wydatek'}
      </button>
    </form>
  )
}
