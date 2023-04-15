import '@/styles/globals.css'
import '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  //edit
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  //editfinal
  return <Layout>
         <Component {...pageProps} />
         </Layout>
}
