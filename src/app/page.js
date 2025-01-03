import React from "react";

import MaxWidthWrapper from "../components/MaxWidthWrapper";
import DrumMachine from "../components/DrumMachine";
import styles from "./page.module.css";

function Home() {
  return (
    <MaxWidthWrapper as="main" className={styles.wrapper}>
      <h1>Bienvenidos al rincón más ruidoso de internet</h1>
      <p>
        hola, soy Emma. Soy una desarrolladora de software y me encanta la
        música. Me encanta tanto que he creado esta página web para que puedas
        crear música con una batería. ¡Espero que te guste!
      </p>
      <p>Puedes tocar la bartería presionando los botones</p>
      <DrumMachine />
    </MaxWidthWrapper>
  );
}

export default Home;
