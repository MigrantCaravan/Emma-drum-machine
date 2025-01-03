import React from "react";

import Header from "../components/Header";
import { SoundProvider } from "../context/SoundContext";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Batería de Emma</title>
      </head>
      <body>
        <SoundProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.webp" width={100} />
            <span>Pagina creada por Mai Ospina</span>
          </footer>
        </SoundProvider>
      </body>
    </html>
  );
}

export default RootLayout;
