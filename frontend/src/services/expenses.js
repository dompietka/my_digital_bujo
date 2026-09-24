import { isSupabaseConfigured, supabase } from '../lib/supabase.js'

function requireSupabase() {
  if (!isSupabaseConfigured) {
    throw new Error('Uzupełnij dane Supabase w pliku frontend/.env.local.')
  }
}

export async function getExpenses() {
  requireSupabase()

  const { data, error } = await supabase
    .from('expenses')
    .select('id, amount, category, description, spent_at')
    .order('spent_at', { ascending: false })

  if (error) throw error
  return data
}

export async function addExpense(expense) {
  requireSupabase()

  const { data, error } = await supabase
    .from('expenses')
    .insert(expense)
    .select('id, amount, category, description, spent_at')
    .single()

  if (error) throw error
  return data
}
