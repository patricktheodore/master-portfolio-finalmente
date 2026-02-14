import { useState } from 'react';
import './index.css';
import { useTheme } from '../../providers/theme/useTheme';

const slides = [
	{
		image: 'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?w=1600&q=85&fit=crop',
		headline: 'Building Seamless Digital Experiences Through Thoughtful Code',
	},
	{
		image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&q=85&fit=crop',
		headline: 'Design-Driven Development Where Every Detail Matters',
	},
	{
		image: 'https://images.unsplash.com/photo-1455264745730-cb3b76250f89?w=1600&q=85&fit=crop',
		headline: "Five Years Crafting Interfaces That Users Don't Have to Think About",
	},
];

export default function SurfTheme() {
	const [active, setActive] = useState(0);
	const { randomizeTheme } = useTheme();

	return (
		<>
			<nav className="sticky top-0 left-0 right-0 z-10 bg-[#F5F5F3]/90 backdrop-blur-md border-b border-[#E0E0E0]/60">
				<div className="flex justify-between items-center px-12 py-4 border-b border-[#E0E0E0]/60">
					<span className="font-barlow flex items-center gap-2 text-[11px] font-bold uppercase text-[#6B6B6B]">
						Get in touch
					</span>

					<a
						href="#"
						className="font-logo text-7xl text-[#111111] no-underline">
						Patrick
					</a>

					<button
						onClick={randomizeTheme}
						title="Randomize theme"
						className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E0E0E0] bg-transparent cursor-pointer text-[#6B6B6B] hover:text-[#0077B6] hover:border-[#0077B6] transition-all duration-200">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<rect
								x="2"
								y="2"
								width="20"
								height="20"
								rx="3"
							/>
							<circle
								cx="8"
								cy="8"
								r="1.5"
								fill="currentColor"
								stroke="none"
							/>
							<circle
								cx="16"
								cy="8"
								r="1.5"
								fill="currentColor"
								stroke="none"
							/>
							<circle
								cx="8"
								cy="16"
								r="1.5"
								fill="currentColor"
								stroke="none"
							/>
							<circle
								cx="16"
								cy="16"
								r="1.5"
								fill="currentColor"
								stroke="none"
							/>
							<circle
								cx="12"
								cy="12"
								r="1.5"
								fill="currentColor"
								stroke="none"
							/>
						</svg>
					</button>
				</div>

				{/* Nav links */}
				<div className="flex justify-center gap-11 py-3.5">
					{['Work', 'About', 'Skills', 'Experience', 'Contact'].map((link) => (
						<a
							key={link}
							href={`#${link.toLowerCase()}`}
							className="font-barlow relative text-[11px] font-bold uppercase text-[#111111] no-underline hover:text-[#0077B6] transition-colors duration-200
                after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#0077B6] after:transition-all after:duration-300 hover:after:w-full">
							{link}
						</a>
					))}
				</div>
			</nav>

			{/* ── HERO ── */}
			<section className="relative w-full h-screen min-h-150 overflow-hidden group">
				<img
					key={active}
					src={slides[active].image}
					alt="Hero"
					className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/80" />
				<div className="font-logo absolute top-0 left-1/2 -translate-x-1/2 translate-y-[10%] text-[clamp(120px,20vw,280px)] text-white/66 whitespace-nowrap pointer-events-none select-none leading-none">
					Patrick
				</div>
				<div className="absolute bottom-0 left-0 right-0 px-12 pb-14 flex flex-col items-center text-center gap-[18px]">
					<p className="font-barlow animate-fade-in-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
						Senior Frontend Engineer — Portfolio 2026
					</p>
					<h1 className="font-barlow animate-fade-in-2 font-semibold text-white leading-snug max-w-[660px] text-[clamp(20px,2.8vw,32px)]">
						{slides[active].headline}
					</h1>
					<div className="animate-fade-in-3 flex items-center gap-2.5">
						{slides.map((_, i) => (
							<button
								key={i}
								onClick={() => setActive(i)}
								className={`w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-200
                  ${i === active ? 'bg-white scale-125' : 'bg-white/35 hover:bg-white/60'}`}
							/>
						))}
					</div>
					<a
						href="#work"
						className="font-barlow animate-fade-in-4 mt-1 flex items-center gap-2.5
              bg-black/50 border border-white/30 text-white backdrop-blur-md
              text-[11px] font-semibold tracking-[0.16em] uppercase
              px-6 py-3 rounded-full no-underline
              hover:bg-[#0077B6] hover:border-[#0077B6] transition-all duration-200
              [&>svg]:transition-transform [&:hover>svg]:translate-y-1">
						Explore More
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none">
							<path
								d="M6 1v10M1 6l5 5 5-5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</div>
			</section>
		</>
	);
}
