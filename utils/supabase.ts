import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publicAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ANON_KEY;

export const supabase = createClient(url ?? "", publicAnonKey ?? "");
