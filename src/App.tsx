import './App.css';
import { Theme } from './providers/theme/schema';
import { useTheme } from './providers/theme/useTheme';
import DefaultTheme from './themes/default';
import SurfTheme from './themes/surfer';

function App() {
	const { theme } = useTheme();

	return (
		<>
			{theme === Theme.Default && <DefaultTheme />}
			{theme === Theme.Surfer && <SurfTheme />}
		</>
	);
}

export default App;
