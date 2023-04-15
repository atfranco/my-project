import BIRDS from '../../node_modules/vanta/src/vanta.birds'
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Passaros.module.css'

export default function Passaros() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.00,
          scaleMobile: 1.00,
          birdSize: 5.00,
          wingSpan: 40.00,
          speedLimit: 4.00,
          separation: 49.00,
          alignment: 48.00,
          cohesion: 53.00,
          quantity: 2.00,
          backgroundAlpha: 0.00,
          color1: 0x1DAEF3,
          color2: 0x1DAEF3,
          colorMode: "lerp"
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
      <div className={styles.containerbird} ref={vantaRef}></div>
  );
}