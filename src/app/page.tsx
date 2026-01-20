"use client";

import { Check, Shield, TrendingUp, Users, Clock, Award, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-cyan-600/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-lg">
              <Award className="w-4 h-4" />
              Planejamento Inteligente de Aposentadoria
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Transforme seu Futuro:<br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Planeje a Aposentadoria
              </span><br />
              dos Seus Sonhos
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Chega de insegurança! O Aposentauto ajuda você a definir metas claras e apresenta os melhores caminhos para uma aposentadoria tranquila, independente do sistema convencional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Baixar Aposentauto Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Saiba Mais
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>30 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Garantia total</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Você se preocupa com o futuro?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A aposentadoria convencional no Brasil está cheia de incertezas e promessas vazias. Com o Aposentauto, você não precisa mais viver na sombra do desespero. Este aplicativo é a solução prática e eficaz para quem quer garantir um futuro confortável e seguro.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Imagine Acordar Todos os Dias Sem Preocupações Financeiras
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Realizando os sonhos que você sempre desejou: viajar, estudar, ou simplesmente passar mais tempo com a família. Você merece isso, e nós vamos te ajudar a conquistar!
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Conheça o <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Aposentauto</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              O aplicativo que irá revolucionar sua forma de planejar a aposentadoria. Com um sistema intuitivo que define metas personalizadas e apresenta alternativas concretas e seguras, a aposentadoria dos seus sonhos está a poucos cliques de distância!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Planejamento Personalizado
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Metas que se adaptem ao seu estilo de vida e objetivos únicos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Orientação Completa
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Caminhos alternativos que garantem segurança e flexibilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Fácil de Usar
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interface simples que qualquer um pode dominar rapidamente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Apoio Contínuo
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dicas e atualizações para otimizar seu planejamento sempre.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              O Que Você Vai Receber
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Acesso completo ao Aposentauto",
              "Ferramentas de monitoramento de suas metas",
              "Relatórios periódicos sobre o seu progresso",
              "Suporte direto com especialistas em planejamento financeiro"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              O Que Nossos Usuários Dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200 italic">
                  "Aposentauto mudou minha visão sobre aposentadoria! Agora, me sinto seguro e otimista."
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  — Maria S.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200 italic">
                  "Com a ajuda do Aposentauto, consegui economizar 30% a mais do que planejava."
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  — Carlos R.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Garantia de 30 Dias — Risco Zero
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Experimente o Aposentauto por 30 dias sem riscos. Se você não estiver 100% satisfeito, devolvemos seu dinheiro!
          </p>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
            🎁 OFERTA LIMITADA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Bônus Exclusivo por Tempo Limitado!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Inscreva-se agora e receba um e-book exclusivo com dicas imperdíveis sobre investimento e aposentadoria!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-8 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  E se eu não souber usar o aplicativo?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nós temos tutoriais completos e suporte dedicado para te ajudar em cada passo da jornada!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all duration-300">
              <CardContent className="p-8 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  O que acontece se eu não atingir minhas metas?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  O Aposentauto analisará seu perfil e ajustará suas metas conforme necessário, garantindo um plano sempre realista.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Não Perca Mais Tempo!
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
            Baixe o Aposentauto agora e comece a planejar a aposentadoria dos seus sonhos!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-7 text-xl rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 font-bold"
          >
            Baixar Aposentauto Agora
          </Button>
          <p className="text-white/80 text-sm">
            ✓ Sem compromisso • ✓ 30 dias grátis • ✓ Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Aposentauto</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Aposente-se com segurança e tranquilidade. Chega de incertezas! O futuro que você deseja começa agora. Baixe o Aposentauto e tome o controle da sua aposentadoria!
          </p>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 Aposentauto. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
