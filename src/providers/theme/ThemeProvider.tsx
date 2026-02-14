import { useState, useCallback, useRef, type ReactNode } from 'react';
import { Theme, THEMES } from './schema';
import { ThemeContext } from './ThemeContext';
import { Randomizer } from '../../components/Randomizer';

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(Theme.Default);
	const [isRandomizing, setIsRandomizing] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

	const randomizeTheme = useCallback(() => {
		if (isRandomizing) return;

		const otherThemes = THEMES.filter((t) => t !== theme);
		const next = otherThemes[Math.floor(Math.random() * otherThemes.length)];

		setIsRandomizing(true);

		timeoutRef.current = setTimeout(() => {
			setTheme(next);
			setIsRandomizing(false);
		}, 1500);
	}, [theme, isRandomizing]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, randomizeTheme, isRandomizing }}>
			{isRandomizing && <Randomizer />}
			{children}
		</ThemeContext.Provider>
	);
}
