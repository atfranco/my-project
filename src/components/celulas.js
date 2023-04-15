import CELLS from '../../node_modules/vanta/src/vanta.cells'
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Celulas.module.css'

export default function Celulas() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x9717cf,
          color2: 0x8131cd,
          size: 3,
          speed: 2.50
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
      <div className={styles.containercells} ref={vantaRef}></div>
  );
}