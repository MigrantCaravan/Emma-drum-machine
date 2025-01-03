"use client";
import React from "react";
import useSound from "use-sound";

import styles from "./DrumMachine.module.css";
import { SoundContext } from "../../context/SoundContext";
const SOUND_SRC = "/909-drums.mp3";
const SOUND_ALT = "/170-pikachu.mp3";

function DrumMachine() {
  const { soundEnabled } = React.useContext(SoundContext);
  const [play] = useSound(SOUND_SRC, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
    soundEnabled,
    interrupt: true,
  });

  const [FX] = useSound(SOUND_ALT, {
    sprite: {
      pikachu: [0, 2000],
    },
    volume: 0.3,
    interrupt: true,
    soundEnabled: soundEnabled,
  });

  const handlePlay = (id) => {
    play({ id });
  };

  const handleFX = (id) => {
    FX({ id });
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => handlePlay("kick")}
        onTouchStart={() => handlePlay("kick")}
      >
        Kick
      </button>
      <button
        onClick={() => handlePlay("hihat")}
        onTouchStart={() => handlePlay("hihat")}
      >
        Hat
      </button>
      <button
        onClick={() => handlePlay("snare")}
        onTouchStart={() => handlePlay("snare")}
      >
        Snare
      </button>
      <button
        onClick={() => handlePlay("cowbell")}
        onTouchStart={() => handlePlay("cowbell")}
      >
        Cowbell
      </button>
      <button
        onClick={() => handleFX("pikachu")}
        onTouchStart={() => handleFX("pikachu")}
      >
        Pikachu
      </button>
    </div>
  );
}

export default DrumMachine;
