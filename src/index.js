import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';

const myTheme = {
  colors: {
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    secondaryColorShadeLight: "#eee",
    secondaryColorShadeDark: "grey",
    accentColorPink: "#fbda61",
    accentColorYellow: "#ff5acd",
    isOnline: "green",
    notOnline: "red"
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);