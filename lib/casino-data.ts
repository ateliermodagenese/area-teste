export interface Game {
  id: string
  name: string
  sub: string
  featured?: boolean
  badge?: string
  badgeColor?: string
  colors: [string, string]
  players?: number
  desc?: string
  stat?: string
}

export interface DockItem {
  id: string
  label: string
  icon: string
  color: string
}

export interface LiveFeedItem {
  user: string
  game: string
  amount: string
  color: string
}

export const GAMES: Record<string, Game[]> = {
  cassino: [
    { id: "crash", name: "CRASH", sub: "Cash out a tempo", featured: true, badge: "HOT", badgeColor: "#FF2D78", colors: ["#FF6B00", "#00E676"], players: 2847 },
    { id: "bicho", name: "JOGO DO BICHO", sub: "Aposte no animal", featured: true, badge: "EXCL", badgeColor: "#FFD700", colors: ["#FFD700", "#00E676"], players: 1523 },
    { id: "roleta", name: "ROLETA", sub: "Gire a roda", colors: ["#FF2D55", "#FFD700"], players: 980 },
    { id: "blackjack", name: "BLACKJACK", sub: "Fa\u00E7a 21", colors: ["#1DE9B6", "#FFD700"], players: 743 },
    { id: "poker", name: "POKER", sub: "All in", colors: ["#0066FF", "#FFD700"], players: 612 },
    { id: "slots", name: "SLOTS", sub: "Gire os rolos", colors: ["#FF2D78", "#7B2FBE"], players: 1102 },
    { id: "mines", name: "MINES", sub: "Evite as bombas", colors: ["#00D4FF", "#FF2D78"], players: 1876 },
    { id: "plinko", name: "PLINKO", sub: "Solte a bola", colors: ["#00E676", "#7B2FBE"], players: 654 },
    { id: "dados", name: "DADOS", sub: "Acerte o n\u00FAmero", colors: ["#FFD700", "#FF8C00"], players: 432 },
    { id: "tower", name: "TOWER", sub: "Suba a torre", colors: ["#00D4FF", "#00E676"] },
    { id: "limbo", name: "LIMBO", sub: "Multiplicador alvo", colors: ["#7B2FBE", "#FF2D78"] },
    { id: "wheel", name: "WHEEL", sub: "Roda da fortuna", colors: ["#FF8C00", "#FF2D78"] },
    { id: "hilo", name: "HI-LO", sub: "Maior ou menor", colors: ["#00E676", "#FF2D55"] },
    { id: "baccarat", name: "BACCARAT", sub: "Mesa elegante", colors: ["#FFD700", "#FF2D55"] },
    { id: "keno", name: "KENO", sub: "Escolha n\u00FAmeros", colors: ["#0066FF", "#FFD700"] },
    { id: "videopoker", name: "VIDEO POKER", sub: "M\u00E1quina de poker", colors: ["#00D4FF", "#0066FF"] },
    { id: "roletabr", name: "ROLETA BR", sub: "Estilo brasileiro", colors: ["#00E676", "#FFD700"] },
  ],
  pvp: [
    { id: "coinflip", name: "COINFLIP", sub: "50/50 PVP", featured: true, badge: "PVP", badgeColor: "#FF2D78", colors: ["#FFD700", "#00D4FF"], players: 892 },
    { id: "jackpot", name: "JACKPOT", sub: "Pote acumulado", colors: ["#FFD700", "#FF8C00"], players: 345 },
    { id: "battles", name: "BATTLES", sub: "Caixas PVP", colors: ["#FF2D78", "#00D4FF"], players: 567 },
    { id: "pokerpvp", name: "POKER PVP", sub: "Mesa PVP", colors: ["#7B2FBE", "#FFD700"] },
    { id: "bjpvp", name: "BJ PVP", sub: "21 PVP", colors: ["#FF2D55", "#00E676"] },
  ],
  eventos: [
    { id: "loteria", name: "LOTERIA", sub: "Bilhetes semanais", featured: true, badge: "ATIVO", badgeColor: "#00E676", colors: ["#FFD700", "#00E676"], players: 4210 },
    { id: "daily", name: "GR\u00C1TIS DI\u00C1RIO", sub: "Caixa todo dia", colors: ["#FF2D78", "#FFD700"], badge: "NOVO", badgeColor: "#00D4FF" },
    { id: "sorteios", name: "SORTEIOS", sub: "Eventos especiais", colors: ["#FFD700", "#7B2FBE"] },
  ],
  loja: [
    { id: "caixas", name: "CAIXAS", sub: "Lootbox", colors: ["#7B2FBE", "#FFD700"] },
    { id: "upgrade", name: "UPGRADE", sub: "Combine itens", colors: ["#FFD700", "#FF8C00"] },
    { id: "marketplace", name: "MARKET", sub: "Compre e venda", colors: ["#00D4FF", "#00E676"] },
  ],
}

export const HERO_SLIDES: (Game & { desc: string; stat: string })[] = [
  { ...GAMES.cassino[0], desc: "O multiplicador sobe sem parar \u2014 retire antes do crash!", stat: "2.847 jogando agora" },
  { ...GAMES.cassino[1], desc: "O cl\u00E1ssico brasileiro com 25 animais. Exclusivo no FiveM!", stat: "1.523 apostas hoje" },
  { ...GAMES.eventos[0], desc: "Sorteio semanal com premia\u00E7\u00E3o gigante!", stat: "4.210 bilhetes vendidos" },
]

export const DOCK_ITEMS: DockItem[] = [
  { id: "cassino", label: "CASSINO", icon: "\uD83C\uDFB0", color: "#00E676" },
  { id: "pvp", label: "PVP", icon: "\u2694\uFE0F", color: "#FF2D78" },
  { id: "loja", label: "LOJA", icon: "\uD83C\uDFEA", color: "#00D4FF" },
  { id: "eventos", label: "EVENTOS", icon: "\uD83C\uDF81", color: "#FFD700" },
  { id: "perfil", label: "PERFIL", icon: "\uD83D\uDC64", color: "#E2E2EA" },
  { id: "config", label: "CONFIG", icon: "\u2699\uFE0F", color: "#8A8A9A" },
]

export const LIVE_FEED: LiveFeedItem[] = [
  { user: "DarkWolf", game: "Crash", amount: "+R$12.450", color: "#00E676" },
  { user: "NightKing", game: "Mines", amount: "+R$3.200", color: "#00D4FF" },
  { user: "PixelGod", game: "Bicho", amount: "+R$8.900", color: "#FFD700" },
  { user: "ShadowX", game: "Coinflip", amount: "+R$5.100", color: "#FF2D78" },
  { user: "CyberAce", game: "Crash", amount: "+R$22.000", color: "#00E676" },
  { user: "NovaFlux", game: "Plinko", amount: "+R$4.560", color: "#7B2FBE" },
]
