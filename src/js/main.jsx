import React from "react";
import { createRoot } from "react-dom/client";

// Importar CSS
import '../css/main.css';

// Importar componente de navegación
import Navigation from "../components/NavBar";

// Inicializar cuando DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  console.log("MikaDesign React Navigation cargado");

  // Montar el componente de navegación
  const navElement = document.getElementById("nav-bar");
  if (navElement) {
    const root = createRoot(navElement);
    root.render(<Navigation />);
    console.log("Navegación React montada exitosamente");
  } else {
    console.warn("Elemento #nav-bar no encontrado");
  }
});
