import { createClient } from '@supabase/supabase-js'

const supabase_url = import.meta.env.VITE_SUPABASE_API_URL
const supabase_api_key = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabase_url, supabase_api_key)