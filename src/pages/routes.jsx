import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pokemons } from './pokemons';
import { Pokemon } from './pokemon';
import { ThemeProvider } from '../contexts/theme-context';
import { ThemeTogglerButton } from '../components/theme-toggler-button/theme-toggler-button';
import { GlobalStyles } from '../styles/GlobalStyle';

const AppRoutes = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ThemeTogglerButton />
      <Router>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRoutes;
