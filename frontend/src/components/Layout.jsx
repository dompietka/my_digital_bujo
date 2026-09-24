const navigation = [
  { id: 'home', label: 'Start' },
  { id: 'add', label: 'Dodaj' },
  { id: 'statistics', label: 'Statystyki' },
]

export default function Layout({ activePage, children, onNavigate }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>My Digital Bujo</h1>
        <p>Twoje wydatki w jednym miejscu.</p>
      </header>

      <main>{children}</main>

      <nav className="bottom-nav" aria-label="Główna nawigacja">
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-current={activePage === item.id ? 'page' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
