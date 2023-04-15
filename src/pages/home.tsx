import styles from '../styles/Home.module.css'
import AnimatedText from 'react-animated-text-content';
import Passaros from '@/components/passaros';

export default function Home() {
    return (      
      <div>
        <Passaros />
        <AnimatedText
          type="chars" // animate words or chars
          animation={{
            ease: 'ease-in-out',
          }}
          animationType="throw"
          interval={0.1}
          duration={1.5}
          tag="p"
          className="animado-titulo"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="50%">
          Arthur Franco
        </AnimatedText>
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            ease: 'ease-in-out',
          }}
          animationType="bounce"
          interval={0.2}
          duration={2}
          tag="p"
          className="animado-subtitulo"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="50%">
          Desenvolvedor Front End / Especialista em Wordpress / Designer Gráfico
        </AnimatedText>
      </div>
      
    )
  }