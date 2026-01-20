"use client";

import { useState } from "react";
import PremiumCard from "@/components/custom/premium-card";
import { User, Mail, Calendar, DollarSign, Target, TrendingUp, Edit, Settings, LogOut } from "lucide-react";

export default function Perfil() {
  const [targetRetirementAge, setTargetRetirementAge] = useState(55);
  const [investmentGoal, setInvestmentGoal] = useState("2500000");
  const [riskProfile, setRiskProfile] = useState("Moderado");

  const userProfile = {
    name: "João Silva",
    email: "joao.silva@email.com",
    age: 32,
    memberSince: "05/01/2024",
    currentSavings: 127450,
    monthlyContribution: 2000,
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateYearsToRetirement = () => {
    return targetRetirementAge - userProfile.age;
  };

  const preferences = [
    { label: "Notificações por Email", enabled: true },
    { label: "Alertas de Metas", enabled: true },
    { label: "Relatórios Mensais", enabled: true },
    { label: "Dicas de Investimento", enabled: false },
  ];

  const accountStats = [
    {
      label: "Patrimônio Atual",
      value: formatCurrency(userProfile.currentSavings),
      icon: DollarSign,
      color: "text-[#00FFB3]",
    },
    {
      label: "Meta de Aposentadoria",
      value: formatCurrency(Number(investmentGoal)),
      icon: Target,
      color: "text-blue-400",
    },
    {
      label: "Contribuição Mensal",
      value: formatCurrency(userProfile.monthlyContribution),
      icon: TrendingUp,
      color: "text-yellow-400",
    },
    {
      label: "Anos até Aposentadoria",
      value: `${calculateYearsToRetirement()} anos`,
      icon: Calendar,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-inter">
          Meu Perfil
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Gerencie suas informações e preferências
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <PremiumCard glow>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00FFB3] to-[#00CC8F] rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-[#0D0D0D]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">{userProfile.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{userProfile.email}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                <Calendar className="w-3 h-3" />
                <span>
                  Membro desde {userProfile.memberSince}
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-[#00FFB3] to-[#00CC8F] text-[#0D0D0D] py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-[#00FFB3]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Edit className="w-4 h-4" />
                Editar Perfil
              </button>
            </div>
          </PremiumCard>

          {/* Quick Info */}
          <PremiumCard className="mt-6">
            <h3 className="text-lg font-bold text-white mb-4">Informações Rápidas</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Idade</span>
                <span className="text-sm font-medium text-white">{userProfile.age} anos</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Perfil de Risco</span>
                <span className="text-sm font-medium text-white">{riskProfile}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Meta de Idade</span>
                <span className="text-sm font-medium text-white">
                  {targetRetirementAge} anos
                </span>
              </div>
            </div>
          </PremiumCard>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Stats */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 font-inter">Resumo da Conta</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {accountStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <PremiumCard key={index} hover>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#00FFB3]/10 rounded-xl">
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                        <p className="text-lg font-bold text-white">{stat.value}</p>
                      </div>
                    </div>
                  </PremiumCard>
                );
              })}
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 font-inter">Preferências</h2>
            <PremiumCard>
              <div className="space-y-4">
                {preferences.map((pref, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-[#0D0D0D]/50 rounded-xl border border-[#00FFB3]/5"
                  >
                    <span className="text-sm text-white">{pref.label}</span>
                    <button
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                        pref.enabled ? "bg-[#00FFB3]" : "bg-gray-700"
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                          pref.enabled ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>

          {/* Investment Profile */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 font-inter">Perfil de Investidor</h2>
            <PremiumCard>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Perfil de Risco</label>
                  <select 
                    value={riskProfile}
                    onChange={(e) => setRiskProfile(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-[#00FFB3]/20 rounded-xl px-4 py-3 text-white focus:border-[#00FFB3] focus:outline-none transition-colors"
                  >
                    <option>Conservador</option>
                    <option>Moderado</option>
                    <option>Agressivo</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Idade Alvo de Aposentadoria
                  </label>
                  <input
                    type="number"
                    value={targetRetirementAge}
                    onChange={(e) => setTargetRetirementAge(Number(e.target.value))}
                    className="w-full bg-[#0D0D0D] border border-[#00FFB3]/20 rounded-xl px-4 py-3 text-white focus:border-[#00FFB3] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Meta de Patrimônio
                  </label>
                  <input
                    type="text"
                    value={formatCurrency(Number(investmentGoal))}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, '');
                      setInvestmentGoal(numericValue);
                    }}
                    className="w-full bg-[#0D0D0D] border border-[#00FFB3]/20 rounded-xl px-4 py-3 text-white focus:border-[#00FFB3] focus:outline-none transition-colors"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-[#00FFB3] to-[#00CC8F] text-[#0D0D0D] py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-[#00FFB3]/30 transition-all duration-300 hover:scale-105">
                  Salvar Alterações
                </button>
              </div>
            </PremiumCard>
          </div>

          {/* Account Actions */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 font-inter">Ações da Conta</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#00FFB3]/20 rounded-xl p-4 hover:border-[#00FFB3]/40 transition-all duration-300 hover:-translate-y-1">
                <Settings className="w-5 h-5 text-[#00FFB3]" />
                <span className="text-white font-medium">Configurações</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
                <LogOut className="w-5 h-5 text-red-500" />
                <span className="text-white font-medium">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
