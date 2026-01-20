"use client";

import PremiumCard from "@/components/custom/premium-card";
import { Target, Plus, Calendar, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Planejamento() {
  const goals = [
    {
      id: 1,
      title: "Aposentadoria aos 55 anos",
      targetAmount: 2500000,
      currentAmount: 127450,
      deadline: "2045-12-31",
      priority: "high",
      monthlyContribution: 2000,
    },
    {
      id: 2,
      title: "Viagem Internacional 2025",
      targetAmount: 15000,
      currentAmount: 8500,
      deadline: "2025-06-30",
      priority: "medium",
      monthlyContribution: 500,
    },
    {
      id: 3,
      title: "Fundo de Emergência",
      targetAmount: 50000,
      currentAmount: 32000,
      deadline: "2024-12-31",
      priority: "high",
      monthlyContribution: 1500,
    },
    {
      id: 4,
      title: "Compra de Imóvel",
      targetAmount: 500000,
      currentAmount: 45000,
      deadline: "2030-12-31",
      priority: "medium",
      monthlyContribution: 3000,
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-[#00FFB3] bg-[#00FFB3]/10";
      case "medium":
        return "text-yellow-400 bg-yellow-400/10";
      case "low":
        return "text-blue-400 bg-blue-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const calculateMonthsRemaining = (deadline: string) => {
    const today = new Date();
    const target = new Date(deadline);
    const months = Math.max(
      0,
      (target.getFullYear() - today.getFullYear()) * 12 +
        (target.getMonth() - today.getMonth())
    );
    return months;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-inter">
          Planejamento Financeiro
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Defina e acompanhe suas metas de forma inteligente
        </p>
      </div>

      {/* Add New Goal Button */}
      <div className="mb-8">
        <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#00FFB3] to-[#00CC8F] text-[#0D0D0D] px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-[#00FFB3]/30 transition-all duration-300 hover:scale-105">
          <Plus className="w-5 h-5" />
          <span>Criar Nova Meta</span>
        </button>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
          const monthsRemaining = calculateMonthsRemaining(goal.deadline);
          const projectedTotal =
            goal.currentAmount + goal.monthlyContribution * monthsRemaining;
          const willReachGoal = projectedTotal >= goal.targetAmount;

          return (
            <PremiumCard key={goal.id} hover>
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{goal.title}</h3>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                        goal.priority
                      )}`}
                    >
                      <Target className="w-3 h-3" />
                      {goal.priority === "high"
                        ? "Alta Prioridade"
                        : goal.priority === "medium"
                        ? "Média Prioridade"
                        : "Baixa Prioridade"}
                    </span>
                  </div>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">
                      {formatCurrency(goal.currentAmount)}
                    </span>
                    <span className="text-sm text-gray-400">
                      de {formatCurrency(goal.targetAmount)}
                    </span>
                  </div>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#00FFB3] to-[#00CC8F] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{progress.toFixed(1)}% concluído</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#00FFB3]/10">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#00FFB3]/10 rounded-lg">
                      <Calendar className="w-4 h-4 text-[#00FFB3]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Prazo</p>
                      <p className="text-sm font-medium text-white">
                        {monthsRemaining} meses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#00FFB3]/10 rounded-lg">
                      <DollarSign className="w-4 h-4 text-[#00FFB3]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Mensal</p>
                      <p className="text-sm font-medium text-white">
                        {formatCurrency(goal.monthlyContribution)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projection */}
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    willReachGoal
                      ? "bg-[#00FFB3]/10 border border-[#00FFB3]/20"
                      : "bg-yellow-400/10 border border-yellow-400/20"
                  }`}
                >
                  {willReachGoal ? (
                    <CheckCircle2 className="w-5 h-5 text-[#00FFB3]" />
                  ) : (
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                  )}
                  <div className="flex-1">
                    <p className="text-xs text-gray-400">Projeção no prazo</p>
                    <p
                      className={`text-sm font-bold ${
                        willReachGoal ? "text-[#00FFB3]" : "text-yellow-400"
                      }`}
                    >
                      {formatCurrency(projectedTotal)}
                    </p>
                  </div>
                  {!willReachGoal && (
                    <span className="text-xs text-yellow-400 font-medium">
                      Ajuste necessário
                    </span>
                  )}
                </div>
              </div>
            </PremiumCard>
          );
        })}
      </div>

      {/* Summary Card */}
      <div className="mt-8">
        <PremiumCard glow>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Resumo do Planejamento</h3>
              <p className="text-gray-400 text-sm">
                {goals.length} metas ativas • Contribuição total mensal:{" "}
                {formatCurrency(
                  goals.reduce((acc, goal) => acc + goal.monthlyContribution, 0)
                )}
              </p>
            </div>
            <div className="p-4 bg-[#00FFB3]/10 rounded-xl">
              <Target className="w-8 h-8 text-[#00FFB3]" />
            </div>
          </div>
        </PremiumCard>
      </div>
    </div>
  );
}
