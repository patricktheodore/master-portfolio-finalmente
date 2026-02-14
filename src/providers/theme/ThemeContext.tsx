import { createContext } from 'react';
import type { ThemeContextValue } from './schema';

export const ThemeContext = createContext<ThemeContextValue | null>(null);
