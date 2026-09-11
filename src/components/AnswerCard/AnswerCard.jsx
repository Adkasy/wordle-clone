import React, { useState } from "react"
import "./AnswerCard.css"

function EyeIcon() {
	return (
		<svg viewBox="0 0 24 24" width="14" height="14" fill="none">
			<path
				d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
		</svg>
	)
}

function EyeOffIcon() {
	return (
		<svg viewBox="0 0 24 24" width="14" height="14" fill="none">
			<path
				d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.24 4.24M9.4 5.6A11.7 11.7 0 0 1 12 5c7 0 11 7 11 7a13.6 13.6 0 0 1-3.1 3.9M6.1 6.6C3.6 8.2 2 10.5 1 12c0 0 4 7 11 7 1.4 0 2.7-.2 3.9-.6"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

const AnswerCard = ({ answer }) => {
	const [revealed, setRevealed] = useState(false)

	return (
		<button
			type="button"
			className="answer-reveal"
			onClick={() => setRevealed((prev) => !prev)}
		>
			{revealed ? <EyeOffIcon /> : <EyeIcon />}
			{revealed ? (
				<span>
					Answer: <span className="answer-reveal-word">{answer}</span>
				</span>
			) : (
				<span>Reveal answer</span>
			)}
		</button>
	)
}

export default AnswerCard
