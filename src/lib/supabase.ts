import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  age: number;
  target_retirement_age: number;
  investment_goal: number;
  risk_profile: string;
  monthly_contribution: number;
  member_since: string;
  created_at: string;
  updated_at: string;
}

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  target_amount: number;
  current_amount: number;
  deadline: string;
  priority: string;
  monthly_contribution: number;
  created_at: string;
  updated_at: string;
}

export interface Simulation {
  id: string;
  user_id: string;
  name: string;
  initial_amount: number;
  monthly_contribution: number;
  years: number;
  return_rate: number;
  projected_total: number;
  created_at: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: string;
  created_at: string;
}

export interface UserBadge {
  id: string;
  user_id: string;
  badge_id: string;
  unlocked_at: string;
  badge?: Badge;
}

export interface Activity {
  id: string;
  user_id: string;
  title: string;
  amount: number | null;
  type: string;
  created_at: string;
}

export interface Investment {
  id: string;
  user_id: string;
  name: string;
  percentage: number;
  amount: number;
  color: string;
  created_at: string;
}
