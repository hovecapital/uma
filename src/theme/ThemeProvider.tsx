import React, { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Theme, DeepPartial } from '@/types/theme.types';
import { defaultTheme } from './defaultTheme';
import { mergeTheme } from '@/utils/mergeTheme';

type ThemeContextType = {
  theme: Theme;
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export type ThemeProviderProps = {
  children: ReactNode;
  theme?: DeepPartial<Theme>;
  mode?: 'light' | 'dark';
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: customTheme,
  mode: initialMode = 'light',
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode);

  const theme = useMemo(() => {
    const baseTheme = mode === 'dark' ? defaultTheme : defaultTheme; // TODO: Add dark theme
    return customTheme ? mergeTheme(baseTheme, customTheme) : baseTheme;
  }, [customTheme, mode]);

  const value = useMemo(
    () => ({
      theme,
      mode,
      setMode,
    }),
    [theme, mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
