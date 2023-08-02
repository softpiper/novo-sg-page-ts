import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/globals.css";
import "../public/assets/css/style.css";
// import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/linea.css";
import "../public/assets/css/perch.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../public/assets/css/fontawesome.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
