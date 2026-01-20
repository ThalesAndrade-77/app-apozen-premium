"use client";

import PremiumCard from "@/components/custom/premium-card";
import { TrendingUp, Target, Wallet, Award, ArrowUpRight, Zap } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      label: "Patrimônio Total",
      value: "R$ 127.450,00",
      change: "+12.5%",
      icon: Wallet,
      trend: "up",
    },
    {
      label: "Meta de Aposentadoria",
      value: "R$ 2.500.000",
      progress: 5.1,
      icon: Target,
      trend: "up",
    },
    {
      label: "Retorno Mensal",
      value: "R$ 3.240,00",
      change: "+8.2%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      label: "Badges Conquistadas",
      value: "12",
      total: 24,
      icon: Award,
      trend: "neutral",
    },
  ];

  const recentActivities = [
    { title: "Contribuição mensal realizada", amount: "+R$ 2.000", time: "Há 2 dias", type: "deposit" },
    { title: "Rendimento de investimentos", amount: "+R$ 1.240", time: "Há 3 dias", type: "profit" },
    { title: "Nova meta criada: Viagem 2025", amount: "R$ 15.000", time: "Há 5 dias", type: "goal" },
    { title: "Badge desbloqueada: Investidor Bronze", amount: "", time: "Há 1 semana", type: "badge" },
  ];

  const quickActions = [
    { label: "Nova Simulação", icon: TrendingUp, color: "from-[#00FFB3] to-[#00CC8F]" },
    { label: "Adicionar Meta", icon: Target, color: "from-[#00FFB3] to-[#00CC8F]" },
    { label: "Ver Progresso", icon: Award, color: "from-[#00FFB3] to-[#00CC8F]" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-inter">
          Bem-vindo de volta! 👋
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Seu progresso está incrível. Continue assim!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <PremiumCard key={index} hover glow={index === 0}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-[#00FFB3]/10 rounded-lg">
                  <Icon className="w-5 h-5 text-[#00FFB3]" />
                </div>
                {stat.change && (
                  <span className="text-[#00FFB3] text-sm font-medium flex items-center gap-1">
                    <ArrowUpRight className="w-4 h-4" />
                    {stat.change}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">{stat.label}</p>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</p>
              {stat.progress && (
                <div className="mt-3">
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#00FFB3] to-[#00CC8F] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{stat.progress}% da meta</p>
                </div>
              )}
              {stat.total && (
                <p className="text-xs text-gray-500 mt-1">
                  {stat.value} de {stat.total} conquistadas
                </p>
              )}
            </PremiumCard>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 font-inter">Ações Rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#00FFB3]/20 rounded-2xl p-6 hover:border-[#00FFB3]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-br ${action.color} rounded-xl`}>
                    <Icon className="w-6 h-6 text-[#0D0D0D]" />
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">{action.label}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FFB3]/0 via-[#00FFB3]/5 to-[#00FFB3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Activity & Investment Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <PremiumCard>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white font-inter">Atividades Recentes</h2>
            <Zap className="w-5 h-5 text-[#00FFB3]" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#0D0D0D]/50 rounded-xl border border-[#00FFB3]/5 hover:border-[#00FFB3]/20 transition-all duration-300"
              >
                <div className="flex-1">
                  <p className="text-white text-sm font-medium mb-1">{activity.title}</p>
                  <p className="text-gray-500 text-xs">{activity.time}</p>
                </div>
                {activity.amount && (
                  <span
                    className={`text-sm font-bold ${
                      activity.type === "deposit" || activity.type === "profit"
                        ? "text-[#00FFB3]"
                        : "text-gray-400"
                    }`}
                  >
                    {activity.amount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </PremiumCard>

        {/* Investment Distribution */}
        <PremiumCard>
          <h2 className="text-xl font-bold text-white mb-6 font-inter">Distribuição de Investimentos</h2>
          <div className="space-y-4">
            {[
              { name: "Ações", percentage: 45, amount: "R$ 57.352", color: "#00FFB3" },
              { name: "Renda Fixa", percentage: 30, amount: "R$ 38.235", color: "#00CC8F" },
              { name: "Fundos Imobiliários", percentage: 15, amount: "R$ 19.117", color: "#00AA7A" },
              { name: "Criptomoedas", percentage: 10, amount: "R$ 12.745", color: "#008866" },
            ].map((investment, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-medium">{investment.name}</span>
                  <span className="text-gray-400 text-sm">{investment.amount}</span>
                </div>
                <div className="w-full bg-[#1A1A1A] rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-2.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${investment.percentage}%`,
                      backgroundColor: investment.color,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{investment.percentage}%</p>
              </div>
            ))}
          </div>
        </PremiumCard>
      </div>
    </div>
  );
}
