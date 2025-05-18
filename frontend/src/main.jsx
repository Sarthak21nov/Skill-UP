import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from './context/ThemeContext';

function Root() {
  const [themeAppearance, setThemeAppearance] = useState('light');
  useEffect(() => {
  const storedTheme = localStorage.getItem("Theme");
  if (storedTheme) {
    setThemeAppearance(storedTheme);
  }
}, []);
  return (
    <StrictMode>
      <ThemeProvider>
          <Theme
          accentColor="mint"
          grayColor="sand"
          radius="large"
          scaling="95%"
          appearance={themeAppearance}
        >
          <App setThemeAppearance={setThemeAppearance} themeAppearance={themeAppearance} />
        </Theme>
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);