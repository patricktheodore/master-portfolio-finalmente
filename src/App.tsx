import './App.css';
import { Theme } from './providers/theme/schema';
import { useTheme } from './providers/theme/useTheme';
import DefaultTheme from './themes/default';
import SurfTheme from './themes/surfer';

function App() {
	const { theme, setTheme, randomizeTheme } = useTheme();

	return (
		<>
			<div className="flex justify-center items-center">
				<button
					className="btn"
					onClick={() => setTheme(Theme.Default)}>
					Toggle to Default Theme
				</button>
				<button
					className="btn"
					onClick={() => setTheme(Theme.Surfer)}>
					Toggle to Surf Theme
				</button>
				<button
					className="btn"
					onClick={() => randomizeTheme()}>
					Random Theme
				</button>
			</div>

			{theme === Theme.Default && <DefaultTheme />}
			{theme === Theme.Surfer && <SurfTheme />}
		</>
	);
}

export default App;
