import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// import {createClient} from '@supabase/supabase-js';

// const supabaseUrl =process.env.NEXT_PUBLIC_SUPABASE_URL as string;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string;

// export const supabase = createClient(supabaseUrl, supabaseKey);
