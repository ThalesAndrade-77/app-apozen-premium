// Types para o Aposentauto
export interface UserProfile {
  id: string;
  name: string;
  age: number;
  targetRetirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  avatar?: string;
}

export interface Investment {
  id: string;
  name: string;
  type: 'stocks' | 'bonds' | 'crypto' | 'real-estate';
  amount: number;
  returnRate: number;
  risk: 'low' | 'medium' | 'high';
}

export interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  completed: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface Simulation {
  id: string;
  name: string;
  initialAmount: number;
  monthlyContribution: number;
  years: number;
  returnRate: number;
  projectedTotal: number;
  createdAt: string;
}
