import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://nizhbhxgsuggdsfyfyab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pemhiaHhnc3VnZ2RzZnlmeWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTI3NzYsImV4cCI6MTk4NTQ2ODc3Nn0.AEtV7kCzk5VwWzc5kzEE1vkkggnz8hMc8YsYGkETDOM";
export const supabase = createClient(supabaseUrl, supabaseKey);
