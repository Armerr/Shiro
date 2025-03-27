import { Noto_Serif_SC } from 'next/font/google'
import localFont from 'next/font/local'
// const sansFont = Manrope({
//   subsets: ['latin'],
//   weight: ['300', '400', '500'],
//   variable: '--font-sans',
//   display: 'swap',
// })

const serifFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Noto Serif SC'],
})

const sansFont = localFont({
  src: [
    {
      path: './font/MapleMonoNF-CN.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export { sansFont, serifFont }
