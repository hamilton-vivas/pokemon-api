import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/theme-context';
import styled from 'styled-components';

const ThemeButton = styled.button`
  
  justify-content: center;
  top: 20px;
  right: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.moveBackground};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Toggler Theme</ThemeButton>
        </div>
    )
}
