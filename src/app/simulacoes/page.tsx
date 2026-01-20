"use client";

import { useState } from "react";
import PremiumCard from "@/components/custom/premium-card";
import { TrendingUp, Calculator, DollarSign, Calendar, Percent, LineChart } from "lucide-react";

export default function Simulacoes() {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [years, setYears] = useState(20);
  const [returnRate, setReturnRate] = useState(10);

  const calculateCompoundInterest = () => {
    const months = years * 12;
    const monthlyRate = returnRate / 100 / 12;
    
    let total = initialAmount;
    for (let i = 0; i < months; i++) {
      total = total * (1 + monthlyRate) + monthlyContribution;
    }
    
    const totalContributed = initialAmount + monthlyContribution * months;
    const totalEarnings = total - totalContributed;
    
    return {
      total: Math.round(total),
      contributed: Math.round(totalContributed),
      earnings: Math.round(totalEarnings),
    };
  };

  const result = calculateCompoundInterest();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const savedSimulations = [
    {
      id: 1,
      name: "Aposentadoria Conservadora",
      initialAmount: 50000,
      monthlyContribution: 2000,
      years: 25,
      returnRate: 8,
      projectedTotal: 2145000,
      createdAt: "15/01/2024",
    },
    {
      id: 2,
      name: "Investimento Agressivo",
      initialAmount: 20000,
      monthlyContribution: 3000,
      years: 15,
      returnRate: 12,
      projectedTotal: 1850000,
      createdAt: "10/01/2024",
    },
    {
      id: 3,
      name: "Fundo de Emergência",
      initialAmount: 5000,
      monthlyContribution: 1500,
      years: 3,
      returnRate: 6,
      projectedTotal: 62000,
      createdAt: "05/01/2024",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-inter">
          Simulador de Investimentos
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Projete seu futuro financeiro com precisão
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Simulator Form */}
        <div className="lg:col-span-2 space-y-6">
          <PremiumCard glow>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#00FFB3] to-[#00CC8F] rounded-xl">
                <Calculator className="w-6 h-6 text-[#0D0D0D]" />
              </div>
              <h2 className="text-2xl font-bold text-white font-inter">Nova Simulação</h2>
            </div>

            <div className="space-y-6">
              {/* Initial Amount */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <DollarSign className="w-4 h-4 text-[#00FFB3]" />
                  Valor Inicial
                </label>
                <input
                  type="number"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(Number(e.target.value))}
                  className="w-full bg-[#0D0D0D] border border-[#00FFB3]/20 rounded-xl px-4 py-3 text-white focus:border-[#00FFB3] focus:outline-none transition-colors"
                />
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(Number(e.target.value))}
                  className="w-full mt-3 accent-[#00FFB3]"
                />
                <p className="text-xs text-gray-500 mt-2">{formatCurrency(initialAmount)}</p>
              </div>

              {/* Monthly Contribution */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <TrendingUp className="w-4 h-4 text-[#00FFB3]" />
                  Contribuição Mensal
                </label>
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full bg-[#0D0D0D] border border-[#00FFB3]/20 rounded-xl px-4 py-3 text-white focus:border-[#00FFB3] focus:outline-none transition-colors"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full mt-3 accent-[#00FFB3]"
                />
                <p className="text-xs text-gray-500 mt-2">{formatCurrency(monthlyContribution)}</p>
              </div>

              {/* Years */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Calendar className="w-4 h-4 text-[#00FFB3]" />
                  Período (anos)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full bg-[#0D0D0D] border border-[#00FFB3]/20 rounded-xl px-4 py-3 text-white focus:border-[#00FFB3] focus:outline-none transition-colors"
                />
                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full mt-3 accent-[#00FFB3]"
                />
                <p className="text-xs text-gray-500 mt-2">{years} anos</p>
              </div>

              {/* Return Rate */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Percent className="w-4 h-4 text-[#00FFB3]" />
                  Taxa de Retorno Anual
                </label>
                <input
                  type="number"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  step="0.1"
                  className="w-full bg-[#0D0D0D] border border-[#00FFB3]/20 rounded-xl px-4 py-3 text-white focus:border-[#00FFB3] focus:outline-none transition-colors"
                />
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.5"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full mt-3 accent-[#00FFB3]"
                />
                <p className="text-xs text-gray-500 mt-2">{returnRate}% ao ano</p>
              </div>

              {/* Save Button */}
              <button className="w-full bg-gradient-to-r from-[#00FFB3] to-[#00CC8F] text-[#0D0D0D] py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-[#00FFB3]/30 transition-all duration-300 hover:scale-105">
                Salvar Simulação
              </button>
            </div>
          </PremiumCard>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <PremiumCard glow>
            <div className="flex items-center gap-2 mb-6">
              <LineChart className="w-5 h-5 text-[#00FFB3]" />
              <h3 className="text-lg font-bold text-white">Resultado</h3>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-400 mb-2">Valor Final Projetado</p>
                <p className="text-3xl font-bold text-[#00FFB3]">
                  {formatCurrency(result.total)}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#00FFB3]/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Total Investido</span>
                  <span className="text-sm font-medium text-white">
                    {formatCurrency(result.contributed)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Rendimentos</span>
                  <span className="text-sm font-medium text-[#00FFB3]">
                    {formatCurrency(result.earnings)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#00FFB3]/10">
                  <span className="text-sm font-bold text-white">Multiplicador</span>
                  <span className="text-sm font-bold text-[#00FFB3]">
                    {(result.total / result.contributed).toFixed(2)}x
                  </span>
                </div>
              </div>

              {/* Visual Progress */}
              <div className="pt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Investido</span>
                    <span className="text-white">
                      {((result.contributed / result.total) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: `${(result.contributed / result.total) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Rendimentos</span>
                    <span className="text-[#00FFB3]">
                      {((result.earnings / result.total) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#00FFB3] to-[#00CC8F] h-2 rounded-full"
                      style={{ width: `${(result.earnings / result.total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </PremiumCard>

          {/* Quick Tips */}
          <PremiumCard>
            <h3 className="text-sm font-bold text-white mb-3">💡 Dicas Rápidas</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] mt-0.5">•</span>
                <span>Renda fixa: 6-10% ao ano</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] mt-0.5">•</span>
                <span>Ações: 10-15% ao ano</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] mt-0.5">•</span>
                <span>Fundos imobiliários: 8-12% ao ano</span>
              </li>
            </ul>
          </PremiumCard>
        </div>
      </div>

      {/* Saved Simulations */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-6 font-inter">Simulações Salvas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedSimulations.map((sim) => (
            <PremiumCard key={sim.id} hover>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-white">{sim.name}</h3>
                  <span className="text-xs text-gray-500">
                    {sim.createdAt}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Inicial</span>
                    <span className="text-white">{formatCurrency(sim.initialAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mensal</span>
                    <span className="text-white">{formatCurrency(sim.monthlyContribution)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Período</span>
                    <span className="text-white">{sim.years} anos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Taxa</span>
                    <span className="text-white">{sim.returnRate}% a.a.</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#00FFB3]/10">
                  <p className="text-xs text-gray-400 mb-1">Projeção Final</p>
                  <p className="text-2xl font-bold text-[#00FFB3]">
                    {formatCurrency(sim.projectedTotal)}
                  </p>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </div>
  );
}
