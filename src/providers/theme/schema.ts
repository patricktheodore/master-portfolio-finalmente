export const Theme = {
	Default: 'default',
	Surfer: 'surfer',
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

export const THEMES = Object.values(Theme);

export interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	randomizeTheme: () => void;
}
