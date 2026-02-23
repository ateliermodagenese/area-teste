export type GameCategory = "cassino" | "pvp" | "loja" | "eventos" | "perfil" | "config"

export interface CasinoGame {
  id: string
  name: string
  subtitle: string
  icon: string
  color: string
  glowColor: string
  featured?: boolean
  badge?: string
  category: GameCategory
}

export const CASINO_GAMES: CasinoGame[] = [
  // --- CASSINO (19 jogos) ---
  { id: "crash", name: "Crash", subtitle: "Cash out a tempo", icon: "/games/crash.svg", color: "#FF6B35", glowColor: "rgba(255,107,53,0.3)", featured: true, badge: "HOT", category: "cassino" },
  { id: "bicho", name: "Jogo do Bicho", subtitle: "Aposte no animal", icon: "/games/bicho.svg", color: "#FFD700", glowColor: "rgba(255,215,0,0.3)", featured: true, badge: "EXCL", category: "cassino" },
  { id: "roleta", name: "Roleta", subtitle: "Gire a roda", icon: "/games/roleta.svg", color: "#EF4444", glowColor: "rgba(239,68,68,0.3)", category: "cassino" },
  { id: "blackjack", name: "Blackjack", subtitle: "Faca 21", icon: "/games/blackjack.svg", color: "#10B981", glowColor: "rgba(16,185,129,0.3)", category: "cassino" },
  { id: "poker", name: "Poker Texas", subtitle: "All in", icon: "/games/poker.svg", color: "#3B82F6", glowColor: "rgba(59,130,246,0.3)", category: "cassino" },
  { id: "slots", name: "Slots", subtitle: "Gire os reels", icon: "/games/slots.svg", color: "#A855F7", glowColor: "rgba(168,85,247,0.3)", category: "cassino" },
  { id: "mines", name: "Mines", subtitle: "Evite as bombas", icon: "/games/mines.svg", color: "#06B6D4", glowColor: "rgba(6,182,212,0.3)", category: "cassino" },
  { id: "plinko", name: "Plinko", subtitle: "Solte a bola", icon: "/games/plinko.svg", color: "#F59E0B", glowColor: "rgba(245,158,11,0.3)", category: "cassino" },
  { id: "dados", name: "Dice", subtitle: "Acerte o numero", icon: "/games/dados.svg", color: "#EC4899", glowColor: "rgba(236,72,153,0.3)", category: "cassino" },
  { id: "tower", name: "Tower", subtitle: "Suba a torre", icon: "/games/tower.svg", color: "#14B8A6", glowColor: "rgba(20,184,166,0.3)", category: "cassino" },
  { id: "wheel", name: "Wheel", subtitle: "Roda da fortuna", icon: "/games/wheel.svg", color: "#F97316", glowColor: "rgba(249,115,22,0.3)", category: "cassino" },
  { id: "limbo", name: "Limbo", subtitle: "Escolha o multi", icon: "/games/limbo.svg", color: "#8B5CF6", glowColor: "rgba(139,92,246,0.3)", category: "cassino" },
  // Page 2
  { id: "video-slots", name: "Video Slots", subtitle: "Slots premium", icon: "/games/video-slots.svg", color: "#D946EF", glowColor: "rgba(217,70,239,0.3)", category: "cassino" },
  { id: "baccarat", name: "Baccarat", subtitle: "Jogador ou banca", icon: "/games/baccarat.svg", color: "#059669", glowColor: "rgba(5,150,105,0.3)", category: "cassino" },
  { id: "video-poker", name: "Video Poker", subtitle: "Poker eletronico", icon: "/games/video-poker.svg", color: "#2563EB", glowColor: "rgba(37,99,235,0.3)", category: "cassino" },
  { id: "hilo", name: "Hi-Lo", subtitle: "Maior ou menor", icon: "/games/hilo.svg", color: "#DC2626", glowColor: "rgba(220,38,38,0.3)", category: "cassino" },
  { id: "keno", name: "Keno", subtitle: "Escolha os numeros", icon: "/games/keno.svg", color: "#0891B2", glowColor: "rgba(8,145,178,0.3)", category: "cassino" },
  { id: "bingo", name: "Bingo", subtitle: "Preencha a cartela", icon: "/games/bingo.svg", color: "#65A30D", glowColor: "rgba(101,163,13,0.3)", category: "cassino" },
  { id: "roleta-br", name: "Roleta BR", subtitle: "Versao brasileira", icon: "/games/roleta-br.svg", color: "#009739", glowColor: "rgba(0,151,57,0.3)", badge: "BR", category: "cassino" },

  // --- PVP (5 jogos) ---
  { id: "poker-pvp", name: "Poker PVP", subtitle: "Contra jogadores", icon: "/games/poker-pvp.svg", color: "#EF4444", glowColor: "rgba(239,68,68,0.3)", featured: true, category: "pvp" },
  { id: "blackjack-pvp", name: "Blackjack PVP", subtitle: "Mesa ao vivo", icon: "/games/bj-pvp.svg", color: "#10B981", glowColor: "rgba(16,185,129,0.3)", category: "pvp" },
  { id: "coinflip", name: "Coinflip", subtitle: "Cara ou coroa", icon: "/games/coinflip.svg", color: "#FFD700", glowColor: "rgba(255,215,0,0.3)", category: "pvp" },
  { id: "battles", name: "Battles", subtitle: "Duelo de caixas", icon: "/games/battles.svg", color: "#F97316", glowColor: "rgba(249,115,22,0.3)", category: "pvp" },
  { id: "jackpot-pvp", name: "Jackpot", subtitle: "Tudo ou nada", icon: "/games/jackpot.svg", color: "#A855F7", glowColor: "rgba(168,85,247,0.3)", featured: true, badge: "NEW", category: "pvp" },

  // --- EVENTOS (3 jogos) ---
  { id: "loteria", name: "Loteria", subtitle: "Sorteio semanal", icon: "/games/loteria.svg", color: "#FFD700", glowColor: "rgba(255,215,0,0.3)", featured: true, category: "eventos" },
  { id: "daily-free", name: "Gratis Diario", subtitle: "Gire gratis", icon: "/games/daily.svg", color: "#10B981", glowColor: "rgba(16,185,129,0.3)", badge: "FREE", category: "eventos" },
  { id: "sorteios", name: "Sorteios", subtitle: "Premios especiais", icon: "/games/sorteios.svg", color: "#F59E0B", glowColor: "rgba(245,158,11,0.3)", category: "eventos" },
]

export const DOCK_TABS = [
  { id: "cassino" as GameCategory, label: "CASSINO", icon: "Dice" },
  { id: "pvp" as GameCategory, label: "PVP", icon: "Swords" },
  { id: "loja" as GameCategory, label: "LOJA", icon: "ShoppingBag" },
  { id: "eventos" as GameCategory, label: "EVENTOS", icon: "Gift" },
  { id: "config" as GameCategory, label: "CONFIG", icon: "Settings" },
] as const

export function getGamesByCategory(category: GameCategory): CasinoGame[] {
  return CASINO_GAMES.filter(g => g.category === category)
}

export function getFeaturedGames(category: GameCategory): CasinoGame[] {
  return CASINO_GAMES.filter(g => g.category === category && g.featured)
}

export function paginateGames(games: CasinoGame[], perPage: number): CasinoGame[][] {
  const pages: CasinoGame[][] = []
  for (let i = 0; i < games.length; i += perPage) {
    pages.push(games.slice(i, i + perPage))
  }
  return pages
}
