// Mapeamento normalizado para o padrão exato de chaves do n8n.
// Compartilhado entre forms.ts (formulário da página) e WhatsAppWidget para que
// todo formulário do site envie os mesmos nomes de campo ao webhook.
export const keyMap: Record<string, string> = {
  nome: 'Nome',
  email: 'E-mail',
  'e-mail': 'E-mail',
  telefone: 'WhatsApp',
  whatsapp: 'WhatsApp',
  data: 'Data do evento',
  data_evento: 'Data do evento',
  'data do evento': 'Data do evento',
  tipo_evento: 'Tipo de evento',
  'tipo de evento': 'Tipo de evento',
  convidados: 'Convidados',
  budget: 'Budget',
  empresa: 'Empresa',
  mensagem: 'Mensagem',
  detalhes_adicionais: 'Mensagem',
  'detalhes adicionais': 'Mensagem',
};

// Opções de "Tipo de evento" — fonte única compartilhada entre os formulários
// normais (formulário da página) e o popup de WhatsApp, para que todos ofereçam
// exatamente a mesma lista. Não inclui o placeholder "Selecione...".
export const tipoEventoOptions: { value: string; label: string }[] = [
  { value: 'Confraternização corporativa', label: 'Confraternização corporativa' },
  { value: 'Evento corporativo',           label: 'Evento corporativo' },
  { value: 'Outro (Informe no campo mensagem)', label: 'Outro (Informe no campo mensagem)' },
];

export const tipoEventoOptionsCatering: { value: string; label: string }[] = [
  { value: 'Aniversário',                       label: 'Aniversário' },
  { value: 'Aniversário debutante',             label: 'Aniversário debutante' },
  { value: 'Bodas',                             label: 'Bodas' },
  { value: 'Casamento',                         label: 'Casamento' },
  { value: 'Confraternização social',           label: 'Confraternização social' },
  { value: 'Confraternização corporativa',      label: 'Confraternização corporativa' },
  { value: 'Evento corporativo',                label: 'Evento corporativo' },
  { value: 'Locação do espaço',                 label: 'Locação do espaço' },
  { value: 'Outro (Informe no campo mensagem)', label: 'Outro (Informe no campo mensagem)' },
];

export const tipoEventoOptionsBio: { value: string; label: string }[] = [
  { value: 'Corporativo',                       label: 'Corporativo' },
  { value: 'Social',                            label: 'Social' },
  { value: 'Casamento',                         label: 'Casamento' },
  { value: 'Outro (Informe no campo mensagem)', label: 'Outro (Informe no campo mensagem)' },
];

export const convidadosOptions: { value: string; label: string }[] = [
  { value: '10 a 50 convidados',    label: '10 a 50 convidados' },
  { value: '51 a 100 convidados',   label: '51 a 100 convidados' },
  { value: '101 a 300 convidados',  label: '101 a 300 convidados' },
  { value: 'Mais de 300 convidados', label: 'Mais de 300 convidados' },
];

export const budgetOptions: { value: string; label: string }[] = [
  { value: '5k a 10k',  label: '5k a 10k' },
  { value: '11k a 30k', label: '11k a 30k' },
  { value: '31k a 60k', label: '31k a 60k' },
  { value: '61k a 100k', label: '61k a 100k' },
  { value: '101k+',     label: '101k+' },
];

export const trackingParamKeys = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
  'utm_content', 'utm_id', 'gclid', 'gbraid', 'wbraid',
  'fbclid', 'ttclid', 'msclkid', 'sck',
  'fbc', 'fbp', 'external_id', 'event_id',
];

// Deriva "Landing page/<slug>" a partir da URL atual, sem precisar configurar
// nada manualmente por página. A home (slug vazio) é a landing de casamentos.
export function getPageSource(pathname: string): string {
  const slug = pathname.replace(/\/$/, '').split('/').filter(Boolean)[0];
  return `Landing page/${slug || 'casamentos'}`;
}
