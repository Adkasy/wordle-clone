import React from "react"
import "./Topbar.css"

function RestartIcon() {
	return (
		<svg viewBox="0 0 24 24" width="16" height="16" fill="none">
			<path
				d="M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

const Topbar = ({ onPlayAgain }) => {
	return (
		<div className="topbar-container">
			<div className="topbar-brand">
				<span className="wordle-logo-badge">
					<img src="/wordle-logo.png" alt="logo-wordle" className="wordle-logo" />
				</span>
				<p className="topbar">WORDLE</p>
			</div>

			<button
				type="button"
				className="topbar-restart"
				onClick={onPlayAgain}
				title="New game"
				aria-label="New game"
			>
				<RestartIcon />
			</button>
		</div>
	)
}

export default Topbar
