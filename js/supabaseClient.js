import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://fmmtgzlgwaiyhbgnhqwy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbXRnemxnd2FpeWhiZ25ocXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NjE0NjgsImV4cCI6MjA5MzAzNzQ2OH0.VwOaD1gyIj7fZg26DqWu9Sb8I7yysKf-MocINTagnPM';

export const supabase = createClient(supabaseUrl, supabaseKey);