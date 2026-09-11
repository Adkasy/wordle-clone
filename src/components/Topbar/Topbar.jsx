import React from "react"
import "./Topbar.css"

const Topbar = () => {
	return (
		<div className="topbar-container">
			<span className="wordle-logo-badge">
				<img src="/wordle-logo.png" alt="logo-wordle" className="wordle-logo" />
			</span>
			<p className="topbar">WORDLE</p>
		</div>
	)
}

export default Topbar
