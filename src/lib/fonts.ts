import { Manrope, Noto_Serif_SC } from 'next/font/google'

const serifFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Noto Serif SC'],
})

const sansFont = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export { sansFont, serifFont }
