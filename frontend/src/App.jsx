import { useState } from 'react'
import Layout from './components/Layout.jsx'
import AddExpensePage from './pages/AddExpensePage.jsx'
import HomePage from './pages/HomePage.jsx'
import StatisticsPage from './pages/StatisticsPage.jsx'

const pages = {
  home: HomePage,
  add: AddExpensePage,
  statistics: StatisticsPage,
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const ActivePage = pages[activePage]

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      <ActivePage onNavigate={setActivePage} />
    </Layout>
  )
}
