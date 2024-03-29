// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

// function App() {
//   return <div></div>;
// }

// export default App;

import { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { ThemeProvider } from "./ThemeContext";
// import "@/styles/globals.css";

function App({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <App Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
