import type { ReactNode } from "react"
import { IconCrash } from "./icon-crash"
import { IconBicho } from "./icon-bicho"
import { IconRoleta } from "./icon-roleta"
import { IconBlackjack } from "./icon-blackjack"
import { IconPoker } from "./icon-poker"
import { IconSlots } from "./icon-slots"
import { IconMines } from "./icon-mines"
import { IconPlinko } from "./icon-plinko"
import { IconDados } from "./icon-dados"
import { IconCoinflip } from "./icon-coinflip"
import { IconGeneric } from "./icon-generic"

export const ICON_MAP: Record<string, (size: number) => ReactNode> = {
  crash: (s) => <IconCrash size={s} />,
  bicho: (s) => <IconBicho size={s} />,
  roleta: (s) => <IconRoleta size={s} />,
  blackjack: (s) => <IconBlackjack size={s} />,
  poker: (s) => <IconPoker size={s} />,
  slots: (s) => <IconSlots size={s} />,
  mines: (s) => <IconMines size={s} />,
  plinko: (s) => <IconPlinko size={s} />,
  dados: (s) => <IconDados size={s} />,
  coinflip: (s) => <IconCoinflip size={s} />,
  tower: (s) => <IconGeneric size={s} emoji="\uD83C\uDFD7\uFE0F" color1="#00D4FF" color2="#00E676" />,
  limbo: (s) => <IconGeneric size={s} emoji="\u267E\uFE0F" color1="#7B2FBE" color2="#FF2D78" />,
  wheel: (s) => <IconGeneric size={s} emoji="\uD83C\uDFAF" color1="#FF8C00" color2="#FF2D78" />,
  hilo: (s) => <IconGeneric size={s} emoji="\uD83D\uDCCA" color1="#00E676" color2="#FF2D55" />,
  baccarat: (s) => <IconGeneric size={s} emoji="\uD83D\uDC51" color1="#FFD700" color2="#FF2D55" />,
  keno: (s) => <IconGeneric size={s} emoji="\uD83D\uDD22" color1="#0066FF" color2="#FFD700" />,
  videopoker: (s) => <IconGeneric size={s} emoji="\uD83C\uDCCF" color1="#00D4FF" color2="#0066FF" />,
  roletabr: (s) => <IconGeneric size={s} emoji="\uD83C\uDDE7\uD83C\uDDF7" color1="#00E676" color2="#FFD700" />,
  jackpot: (s) => <IconGeneric size={s} emoji="\uD83D\uDCB0" color1="#FFD700" color2="#FF8C00" />,
  battles: (s) => <IconGeneric size={s} emoji="\u2694\uFE0F" color1="#FF2D78" color2="#00D4FF" />,
  pokerpvp: (s) => <IconGeneric size={s} emoji="\u2660\uFE0F" color1="#7B2FBE" color2="#FFD700" />,
  bjpvp: (s) => <IconGeneric size={s} emoji="\uD83C\uDCCF" color1="#FF2D55" color2="#00E676" />,
  loteria: (s) => <IconGeneric size={s} emoji="\uD83C\uDFAB" color1="#FFD700" color2="#00E676" />,
  daily: (s) => <IconGeneric size={s} emoji="\uD83C\uDF81" color1="#FF2D78" color2="#FFD700" />,
  sorteios: (s) => <IconGeneric size={s} emoji="\uD83C\uDFC6" color1="#FFD700" color2="#7B2FBE" />,
  caixas: (s) => <IconGeneric size={s} emoji="\uD83D\uDCE6" color1="#7B2FBE" color2="#FFD700" />,
  upgrade: (s) => <IconGeneric size={s} emoji="\u26A1" color1="#FFD700" color2="#FF8C00" />,
  marketplace: (s) => <IconGeneric size={s} emoji="\uD83C\uDFEA" color1="#00D4FF" color2="#00E676" />,
}
