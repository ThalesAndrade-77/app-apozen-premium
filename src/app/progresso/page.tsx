"use client";

import PremiumCard from "@/components/custom/premium-card";
import { Award, Trophy, Star, Zap, Target, TrendingUp, Calendar, CheckCircle2 } from "lucide-react";

export default function Progresso() {
  const badges = [
    {
      id: 1,
      name: "Primeiro Passo",
      description: "Realizou sua primeira contribuição",
      icon: "🎯",
      unlocked: true,
      unlockedAt: "05/01/2024",
      rarity: "common",
    },
    {
      id: 2,
      name: "Investidor Bronze",
      description: "Atingiu R$ 10.000 em patrimônio",
      icon: "🥉",
      unlocked: true,
      unlockedAt: "15/01/2024",
      rarity: "common",
    },
    {
      id: 3,
      name: "Consistência",
      description: "3 meses consecutivos de contribuições",
      icon: "📅",
      unlocked: true,
      unlockedAt: "01/02/2024",
      rarity: "uncommon",
    },
    {
      id: 4,
      name: "Investidor Prata",
      description: "Atingiu R$ 50.000 em patrimônio",
      icon: "🥈",
      unlocked: true,
      unlockedAt: "10/03/2024",
      rarity: "uncommon",
    },
    {
      id: 5,
      name: "Diversificação",
      description: "Investiu em 3 tipos diferentes de ativos",
      icon: "🎲",
      unlocked: true,
      unlockedAt: "20/03/2024",
      rarity: "rare",
    },
    {
      id: 6,
      name: "Investidor Ouro",
      description: "Atingiu R$ 100.000 em patrimônio",
      icon: "🥇",
      unlocked: false,
      rarity: "rare",
    },
    {
      id: 7,
      name: "Maratonista",
      description: "12 meses consecutivos de contribuições",
      icon: "🏃",
      unlocked: false,
      rarity: "epic",
    },
    {
      id: 8,
      name: "Investidor Diamante",
      description: "Atingiu R$ 500.000 em patrimônio",
      icon: "💎",
      unlocked: false,
      rarity: "epic",
    },
    {
      id: 9,
      name: "Mestre dos Investimentos",
      description: "Atingiu R$ 1.000.000 em patrimônio",
      icon: "👑",
      unlocked: false,
      rarity: "legendary",
    },
  ];

  const milestones = [
    {
      id: 1,
      title: "Primeira Contribuição",
      date: "05/01/2024",
      amount: "R$ 1.000",
      completed: true,
    },
    {
      id: 2,
      title: "R$ 10.000 em Patrimônio",
      date: "15/01/2024",
      amount: "R$ 10.000",
      completed: true,
    },
    {
      id: 3,
      title: "R$ 50.000 em Patrimônio",
      date: "10/03/2024",
      amount: "R$ 50.000",
      completed: true,
    },
    {
      id: 4,
      title: "R$ 100.000 em Patrimônio",
      date: "Previsto: Jun/2024",
      amount: "R$ 100.000",
      completed: false,
    },
    {
      id: 5,
      title: "R$ 250.000 em Patrimônio",
      date: "Previsto: 2026",
      amount: "R$ 250.000",
      completed: false,
    },
  ];

  const stats = [
    {
      label: "Badges Conquistadas",
      value: "5",
      total: 9,
      icon: Award,
      color: "text-[#00FFB3]",
    },
    {
      label: "Dias Consecutivos",
      value: "87",
      icon: Calendar,
      color: "text-yellow-400",
    },
    {
      label: "Metas Concluídas",
      value: "3",
      total: 7,
      icon: Target,
      color: "text-blue-400",
    },
    {
      label: "Nível de Investidor",
      value: "Prata",
      icon: Trophy,
      color: "text-purple-400",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "border-gray-500 bg-gray-500/10";
      case "uncommon":
        return "border-green-500 bg-green-500/10";
      case "rare":
        return "border-blue-500 bg-blue-500/10";
      case "epic":
        return "border-purple-500 bg-purple-500/10";
      case "legendary":
        return "border-yellow-500 bg-yellow-500/10";
      default:
        return "border-gray-500 bg-gray-500/10";
    }
  };

  const getRarityLabel = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "Comum";
      case "uncommon":
        return "Incomum";
      case "rare":
        return "Raro";
      case "epic":
        return "Épico";
      case "legendary":
        return "Lendário";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-inter">
          Seu Progresso
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Acompanhe suas conquistas e evolução
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <PremiumCard key={index} hover>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-[#00FFB3]/10 rounded-xl mb-3">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className="text-gray-400 text-xs mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-white">
                  {stat.value}
                  {stat.total && <span className="text-sm text-gray-500">/{stat.total}</span>}
                </p>
              </div>
            </PremiumCard>
          );
        })}
      </div>

      {/* Badges Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-inter">Badges Conquistadas</h2>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Award className="w-4 h-4 text-[#00FFB3]" />
            <span>5 de 9 desbloqueadas</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {badges.map((badge) => (
            <PremiumCard
              key={badge.id}
              hover={badge.unlocked}
              className={`${!badge.unlocked ? "opacity-50" : ""}`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl border-2 ${getRarityColor(
                    badge.rarity
                  )}`}
                >
                  {badge.unlocked ? badge.icon : "🔒"}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{badge.name}</h3>
                  <p className="text-xs text-gray-400 mb-2">{badge.description}</p>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                      badge.rarity
                    )}`}
                  >
                    {getRarityLabel(badge.rarity)}
                  </span>
                  {badge.unlocked && badge.unlockedAt && (
                    <p className="text-xs text-[#00FFB3] mt-2">
                      {badge.unlockedAt}
                    </p>
                  )}
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>

      {/* Milestones Timeline */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 font-inter">Marcos Importantes</h2>
        <PremiumCard>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    milestone.completed
                      ? "bg-[#00FFB3]/20 border-2 border-[#00FFB3]"
                      : "bg-gray-700/20 border-2 border-gray-700"
                  }`}
                >
                  {milestone.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-[#00FFB3]" />
                  ) : (
                    <span className="text-gray-500 text-sm font-bold">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1 pb-6 border-b border-[#00FFB3]/10 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        className={`text-base font-bold mb-1 ${
                          milestone.completed ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-500">{milestone.date}</p>
                    </div>
                    <span
                      className={`text-sm font-bold ${
                        milestone.completed ? "text-[#00FFB3]" : "text-gray-500"
                      }`}
                    >
                      {milestone.amount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PremiumCard>
      </div>

      {/* Motivational Card */}
      <div className="mt-8">
        <PremiumCard glow>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-[#00FFB3] to-[#00CC8F] rounded-xl">
              <Zap className="w-8 h-8 text-[#0D0D0D]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">Continue assim!</h3>
              <p className="text-gray-400 text-sm">
                Você está no caminho certo. Próxima badge em{" "}
                <span className="text-[#00FFB3] font-medium">R$ 27.550</span>
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="text-right">
                <p className="text-2xl font-bold text-[#00FFB3]">73%</p>
                <p className="text-xs text-gray-400">Progresso</p>
              </div>
            </div>
          </div>
        </PremiumCard>
      </div>
    </div>
  );
}
