const currency = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
})

export default function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p className="muted">Nie masz jeszcze zapisanych wydatków.</p>
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li className="expense-row" key={expense.id}>
          <strong>{expense.description || expense.category}</strong>
          <strong>{currency.format(expense.amount)}</strong>
          <span>{expense.category}</span>
          <time dateTime={expense.spent_at}>{expense.spent_at}</time>
        </li>
      ))}
    </ul>
  )
}
