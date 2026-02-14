import { useState, useCallback, type ReactNode } from 'react';
import { Theme, THEMES } from './schema';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(Theme.Surfer);

	const randomizeTheme = useCallback(() => {
		const otherThemes = THEMES.filter((t) => t !== theme);
		const random = otherThemes[Math.floor(Math.random() * otherThemes.length)];
		setTheme(random);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, setTheme, randomizeTheme }}>{children}</ThemeContext.Provider>;
}
