export interface Game {
  id: string
  name: string
  emoji: string
  subtitle: string
  category: string
  badges: Badge[]
  featured?: boolean
  accentColor: string
}

export interface Badge {
  label: string
  emoji: string
  colorClass: string
}

export interface NavItem {
  id: string
  emoji: string
  label: string
  category?: string
  badge?: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'lobby', emoji: '\u{1F3E0}', label: 'Lobby' },
  { id: 'slots', emoji: '\u{1F3B0}', label: 'Slots & Classico', category: 'slots' },
  { id: 'cartas', emoji: '\u{1F0CF}', label: 'Cartas', category: 'cartas' },
  { id: 'mesa', emoji: '\u{1F3B2}', label: 'Mesa', category: 'mesa' },
  { id: 'crash', emoji: '\u{1F4A3}', label: 'Crash Games', category: 'crash' },
  { id: 'brasileiro', emoji: '\u{1F1E7}\u{1F1F7}', label: 'Brasileiro', category: 'brasileiro' },
  { id: 'pvp', emoji: '\u{2694}\u{FE0F}', label: 'PVP Arena', category: 'pvp' },
  { id: 'loja', emoji: '\u{1F3EA}', label: 'Loja' },
  { id: 'eventos', emoji: '\u{1F381}', label: 'Eventos', badge: 'NEW' },
  { id: 'stats', emoji: '\u{1F4CA}', label: 'Minhas Stats' },
  { id: 'config', emoji: '\u{2699}\u{FE0F}', label: 'Configuracoes' },
]

const HOT: Badge = { label: 'Hot', emoji: '\u{1F525}', colorClass: 'bg-red-500/20 text-red-400' }
const NOVO: Badge = { label: 'Novo', emoji: '\u{2B50}', colorClass: 'bg-yellow-500/20 text-yellow-400' }
const PVP_BADGE: Badge = { label: 'PVP', emoji: '\u{1F3C6}', colorClass: 'bg-purple-500/20 text-purple-400' }
const EXCLUSIVO: Badge = { label: 'Exclusivo', emoji: '\u{1F1E7}\u{1F1F7}', colorClass: 'bg-green-500/20 text-green-400' }
const PREMIUM: Badge = { label: 'Premium', emoji: '\u{1F451}', colorClass: 'bg-amber-500/20 text-amber-400' }

export const GAMES: Game[] = [
  // SLOTS & CLASSICO
  { id: 'classic-slots', name: 'Classic Slots', emoji: '\u{1F3B0}', subtitle: '3 rolos vintage', category: 'slots', badges: [HOT], accentColor: '#EF4444' },
  { id: 'video-slots', name: 'Video Slots', emoji: '\u{1F3B0}', subtitle: '5 rolos moderno', category: 'slots', badges: [NOVO], accentColor: '#8B5CF6' },
  { id: 'roleta', name: 'Roleta', emoji: '\u{1F534}', subtitle: 'Europeia 37', category: 'slots', badges: [HOT], accentColor: '#EF4444' },
  { id: 'keno', name: 'Keno', emoji: '\u{1F522}', subtitle: 'Sorteio numerico', category: 'slots', badges: [], accentColor: '#3B82F6' },
  { id: 'bingo', name: 'Bingo', emoji: '\u{1F4CB}', subtitle: 'Cartela classica', category: 'slots', badges: [], accentColor: '#F59E0B' },
  { id: 'wheel', name: 'Wheel of Fortune', emoji: '\u{1F3A1}', subtitle: 'Gire a roda', category: 'slots', badges: [PREMIUM], accentColor: '#FFD700' },

  // CARTAS
  { id: 'blackjack', name: 'Blackjack', emoji: '\u{1F0CF}', subtitle: 'Bata o dealer', category: 'cartas', badges: [HOT], accentColor: '#10B981' },
  { id: 'poker-texas', name: 'Poker Texas', emoji: '\u{2660}\u{FE0F}', subtitle: "Hold'em PVP", category: 'cartas', badges: [PVP_BADGE], accentColor: '#EF4444' },
  { id: 'baccarat', name: 'Baccarat', emoji: '\u{1F451}', subtitle: 'Punto Banco', category: 'cartas', badges: [PREMIUM], accentColor: '#FFD700' },
  { id: 'video-poker', name: 'Video Poker', emoji: '\u{1F3B4}', subtitle: 'Jacks or Better', category: 'cartas', badges: [], accentColor: '#8B5CF6' },

  // MESA
  { id: 'dice', name: 'Dice', emoji: '\u{1F3B2}', subtitle: 'Over/Under', category: 'mesa', badges: [HOT], accentColor: '#3B82F6' },
  { id: 'hi-lo', name: 'Hi-Lo', emoji: '\u{2B06}\u{FE0F}\u{2B07}\u{FE0F}', subtitle: 'Maior ou Menor', category: 'mesa', badges: [NOVO], accentColor: '#10B981' },

  // CRASH GAMES
  { id: 'crash', name: 'Crash', emoji: '\u{1F4C8}', subtitle: 'Cash out a tempo', category: 'crash', badges: [HOT], featured: true, accentColor: '#8B5CF6' },
  { id: 'mines', name: 'Mines', emoji: '\u{1F48E}', subtitle: 'Evite as bombas', category: 'crash', badges: [HOT], accentColor: '#10B981' },
  { id: 'plinko', name: 'Plinko', emoji: '\u{26AA}', subtitle: 'Queda de bola', category: 'crash', badges: [NOVO], accentColor: '#3B82F6' },
  { id: 'tower', name: 'Tower', emoji: '\u{1F3D7}\u{FE0F}', subtitle: 'Escale por multiplicadores', category: 'crash', badges: [], accentColor: '#F59E0B' },
  { id: 'limbo', name: 'Limbo', emoji: '\u{267E}\u{FE0F}', subtitle: 'Alvo de multiplicador', category: 'crash', badges: [], accentColor: '#6D28D9' },

  // BRASILEIRO
  { id: 'jogo-bicho', name: 'Jogo do Bicho', emoji: '\u{1F981}', subtitle: 'Loteria de animais', category: 'brasileiro', badges: [EXCLUSIVO], featured: true, accentColor: '#FFD700' },
  { id: 'roleta-br', name: 'Roleta Brasileira', emoji: '\u{1F1E7}\u{1F1F7}', subtitle: 'Com jeitinho brasileiro', category: 'brasileiro', badges: [EXCLUSIVO], accentColor: '#10B981' },

  // PVP
  { id: 'poker-pvp', name: 'Poker PVP', emoji: '\u{2660}\u{FE0F}', subtitle: 'Mesas reais', category: 'pvp', badges: [PVP_BADGE, HOT], accentColor: '#EF4444' },
  { id: 'blackjack-pvp', name: 'Blackjack PVP', emoji: '\u{1F0CF}', subtitle: '1v1 ou mesa', category: 'pvp', badges: [PVP_BADGE], accentColor: '#10B981' },
  { id: 'coinflip', name: 'Coinflip', emoji: '\u{1FA99}', subtitle: 'Cara ou coroa', category: 'pvp', badges: [HOT], accentColor: '#FFD700' },
  { id: 'battles', name: 'Battles', emoji: '\u{2694}\u{FE0F}', subtitle: 'Case Battles', category: 'pvp', badges: [NOVO], accentColor: '#8B5CF6' },
  { id: 'jackpot', name: 'Jackpot', emoji: '\u{1F4B0}', subtitle: 'O vencedor leva tudo', category: 'pvp', badges: [PREMIUM], accentColor: '#FFD700' },
]

export const CATEGORIES = [
  { id: 'slots', emoji: '\u{1F3B0}', label: 'Slots & Classico' },
  { id: 'cartas', emoji: '\u{1F0CF}', label: 'Cartas' },
  { id: 'mesa', emoji: '\u{1F3B2}', label: 'Mesa' },
  { id: 'crash', emoji: '\u{1F4A3}', label: 'Crash Games' },
  { id: 'brasileiro', emoji: '\u{1F1E7}\u{1F1F7}', label: 'Exclusivo Brasileiro' },
  { id: 'pvp', emoji: '\u{2694}\u{FE0F}', label: 'PVP Arena' },
]

export const TICKER_MESSAGES = [
  'Joao G. ganhou R$ 12.450 no Crash',
  'Maria S. jackpot R$ 45.000 nos Slots',
  'Pedro venceu R$ 8.200 no Blackjack',
  'Ana C. ganhou R$ 3.780 no Mines',
  'Lucas F. faturou R$ 22.100 no Plinko',
  'Bruna R. ganhou R$ 6.500 na Roleta',
  'Diego M. jackpot R$ 67.300 no Jogo do Bicho',
  'Camila T. venceu R$ 15.900 no Poker PVP',
]

export function formatBRL(value: number): string {
  return 'R$ ' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
