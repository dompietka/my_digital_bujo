import { useEffect, useMemo, useState } from 'react'
import ExpenseList from '../components/ExpenseList.jsx'
import { getExpenses } from '../services/expenses.js'

const currency = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
})

export default function HomePage({ onNavigate }) {
  const [expenses, setExpenses] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    getExpenses()
      .then(setExpenses)
      .catch((error) => setMessage(error.message))
  }, [])

  const total = useMemo(
    () => expenses.reduce((sum, expense) => sum + Number(expense.amount), 0),
    [expenses],
  )

  return (
    <>
      <section className="summary-card">
        <span>Wydatki w tym miesiącu</span>
        <strong>{currency.format(total)}</strong>
      </section>

      <div className="section-heading">
        <h3>Ostatnie wydatki</h3>
        <button className="secondary-button" type="button" onClick={() => onNavigate('add')}>
          + Dodaj
        </button>
      </div>

      {message && <p className="status-message">{message}</p>}
      <ExpenseList expenses={expenses} />
    </>
  )
}
