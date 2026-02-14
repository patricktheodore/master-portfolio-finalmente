export function Randomizer() {
	return (
		<div
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: 200,
				background: '#111111',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '20px',
			}}>
			{/* Dice animation placeholder — swap this out later */}
			<div
				style={{
					width: '40px',
					height: '40px',
					borderRadius: '8px',
					border: '2px solid rgba(255,255,255,0.3)',
					animation: 'diceRoll 600ms ease-in-out infinite',
				}}
			/>

			<span
				style={{
					fontFamily: 'sans-serif',
					fontSize: '13px',
					fontWeight: 600,
					letterSpacing: '0.15em',
					textTransform: 'uppercase',
					color: 'rgba(255,255,255,0.6)',
				}}>
				Randomizing…
			</span>

			<style>{`
				@keyframes diceRoll {
					0% { transform: rotate(0deg) scale(1); }
					25% { transform: rotate(90deg) scale(0.9); }
					50% { transform: rotate(180deg) scale(1); }
					75% { transform: rotate(270deg) scale(0.9); }
					100% { transform: rotate(360deg) scale(1); }
				}
			`}</style>
		</div>
	);
}
