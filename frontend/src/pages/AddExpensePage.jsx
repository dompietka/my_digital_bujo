import { useState } from 'react'
import ExpenseForm from '../components/ExpenseForm.jsx'
import { addExpense } from '../services/expenses.js'

export default function AddExpensePage({ onNavigate }) {
  const [message, setMessage] = useState('')

  async function handleSubmit(expense) {
    setMessage('')

    try {
      await addExpense(expense)
      onNavigate('home')
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <section>
      <div className="page-header">
        <h2>Dodaj wydatek</h2>
        <p>Zapisz kwotę, kategorię i datę.</p>
      </div>

      <div className="panel">
        <ExpenseForm onSubmit={handleSubmit} />
        {message && <p className="status-message">{message}</p>}
      </div>
    </section>
  )
}
