import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pkdyciejnuqsuudmcjap.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTA0NjQ4MCwiZXhwIjoxOTQwNjIyNDgwfQ.G3jUyzta288HxoMC0kWl4oD2aHvI8hp_DHXqe6AUkrk'
export const supabase = createClient(supabaseUrl, SUPABASE_KEY)