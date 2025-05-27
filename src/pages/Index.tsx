
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, FileText, Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Dashboard = () => {
  // Dados simulados para o dashboard
  const totalProcessos = 142;
  const totalClientesAtivos = 89;
  
  const processosPorStatus = [
    { status: "Em andamento", quantidade: 65, cor: "#3b82f6" },
    { status: "Arquivados", quantidade: 38, cor: "#6b7280" },
    { status: "Encerrados com êxito", quantidade: 28, cor: "#22c55e" },
    { status: "Encerrados sem êxito", quantidade: 11, cor: "#ef4444" }
  ];

  const processosPorTipo = [
    { tipo: "Aposentadoria", quantidade: 45 },
    { tipo: "Revisão", quantidade: 32 },
    { tipo: "Pensão", quantidade: 28 },
    { tipo: "Auxílio-doença", quantidade: 21 },
    { tipo: "LOAS", quantidade: 16 }
  ];

  const eventosPorDia = [
    { dia: "Seg", data: "27/01", eventos: 8 },
    { dia: "Ter", data: "28/01", eventos: 12 },
    { dia: "Qua", data: "29/01", eventos: 6 },
    { dia: "Qui", data: "30/01", eventos: 15 },
    { dia: "Sex", data: "31/01", eventos: 9 },
    { dia: "Sáb", data: "01/02", eventos: 3 },
    { dia: "Dom", data: "02/02", eventos: 1 }
  ];

  const eventosPorCategoria = [
    { categoria: "Audiências", quantidade: 25, cor: "#8b5cf6" },
    { categoria: "Reuniões", quantidade: 18, cor: "#06b6d4" },
    { categoria: "Prazos judiciais", quantidade: 22, cor: "#f59e0b" },
    { categoria: "Perícias", quantidade: 12, cor: "#10b981" },
    { categoria: "Outros", quantidade: 8, cor: "#64748b" }
  ];

  const audienciasPorTipo = [
    { tipo: "Aposentadoria", audiencias: 12 },
    { tipo: "Revisão", audiencias: 8 },
    { tipo: "Pensão", audiencias: 5 }
  ];

  const advogadosAtivos = [
    { nome: "Dr. João Silva", eventos: 18 },
    { nome: "Dra. Maria Santos", eventos: 15 },
    { nome: "Dr. Carlos Lima", eventos: 12 },
    { nome: "Dra. Ana Costa", eventos: 9 }
  ];

  const prazosProximos = 7;
  const eventosNaoConcluidos = 5;
  const tempoMedioProcesso = "8.5 meses";
  const totalEventosMes = 85;

  const COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Central de Processos</h1>
          <p className="text-lg text-gray-600">Visão Geral do Escritório Jurídico</p>
        </div>

        {/* Cards principais de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total de Processos</CardTitle>
              <FileText className="h-5 w-5 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalProcessos}</div>
              <p className="text-xs opacity-80 mt-1">Processos ativos</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Clientes Ativos</CardTitle>
              <Users className="h-5 w-5 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalClientesAtivos}</div>
              <p className="text-xs opacity-80 mt-1">Clientes em acompanhamento</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Eventos do Mês</CardTitle>
              <Calendar className="h-5 w-5 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalEventosMes}</div>
              <p className="text-xs opacity-80 mt-1">Compromissos agendados</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Tempo Médio</CardTitle>
              <Clock className="h-5 w-5 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{tempoMedioProcesso}</div>
              <p className="text-xs opacity-80 mt-1">Duração dos processos</p>
            </CardContent>
          </Card>
        </div>

        {/* Alertas importantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-red-500 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Prazos Próximos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{prazosProximos}</div>
              <p className="text-sm text-red-600 mt-1">Processos com prazos nos próximos 7 dias</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-700 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Eventos Pendentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{eventosNaoConcluidos}</div>
              <p className="text-sm text-yellow-600 mt-1">Eventos marcados e não concluídos</p>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Eventos por dia da semana */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Eventos nos Próximos 7 Dias
              </CardTitle>
              <CardDescription>Distribuição de compromissos por dia</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={eventosPorDia}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dia" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [value, 'Eventos']}
                    labelFormatter={(label, payload) => {
                      const item = payload?.[0]?.payload;
                      return item ? `${label} - ${item.data}` : label;
                    }}
                  />
                  <Bar dataKey="eventos" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Processos por status */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Processos por Status</CardTitle>
              <CardDescription>Distribuição atual dos processos</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={processosPorStatus}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="quantidade"
                    label={({ status, quantidade }) => `${status}: ${quantidade}`}
                  >
                    {processosPorStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.cor} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Seção de estatísticas detalhadas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Processos por tipo */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Processos por Tipo de Ação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {processosPorTipo.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.tipo}</span>
                    <div className="flex items-center gap-3">
                      <Progress 
                        value={(item.quantidade / totalProcessos) * 100} 
                        className="w-20 h-2"
                      />
                      <Badge variant="secondary">{item.quantidade}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Eventos por categoria */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Eventos por Categoria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {eventosPorCategoria.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.categoria}</span>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: item.cor }}
                      ></div>
                      <Badge variant="outline">{item.quantidade}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Advogados mais ativos */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Advogados Mais Ativos</CardTitle>
              <CardDescription>Por número de compromissos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {advogadosAtivos.map((advogado, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{advogado.nome}</span>
                    <Badge variant="default">{advogado.eventos} eventos</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Audiências agendadas */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Audiências Agendadas por Tipo de Processo</CardTitle>
            <CardDescription>Distribuição das audiências por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={audienciasPorTipo} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="tipo" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="audiencias" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
