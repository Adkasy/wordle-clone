import React, { useEffect, useState } from "react"
import "./NotificationModal.css"

function StatusIcon({ isWin }) {
	return (
		<div
			className={`notification-icon ${isWin ? "notification-icon-win" : "notification-icon-lose"}`}
		>
			{isWin ? (
				<svg viewBox="0 0 24 24" width="32" height="32" fill="none">
					<path
						d="M5 13l4 4L19 7"
						stroke="white"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			) : (
				<svg viewBox="0 0 24 24" width="30" height="30" fill="none">
					<path
						d="M6 6l12 12M18 6L6 18"
						stroke="white"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</div>
	)
}

export default function BasicModal({
	openModal,
	wordleAnswer,
	numberOfGuess,
	isWin,
	onPlayAgain,
}) {
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)

	useEffect(() => {
		setOpen(openModal)
	}, [openModal])

	function handlePlayAgain() {
		setOpen(false)
		onPlayAgain()
	}

	if (!open) return null

	return (
		<div className="notification-overlay">
			<div
				className={`notification-modal ${isWin ? "is-win" : "is-lose"}`}
				role="dialog"
				aria-modal="true"
			>
				<StatusIcon isWin={isWin} />

				<h2 className="notification-title">
					{isWin ? "Congratulations!" : "Out of Guesses"}
				</h2>

				<p className="notification-description">
					{isWin ? (
						`You guessed it in ${numberOfGuess} ${numberOfGuess === 1 ? "attempt" : "attempts"}.`
					) : (
						<>
							The correct answer was{" "}
							<span className="notification-answer-highlight">
								{wordleAnswer}
							</span>
						</>
					)}
				</p>

				<div className="notification-actions">
					<button
						type="button"
						onClick={handlePlayAgain}
						className="notification-button notification-button-primary"
					>
						Play Again
					</button>

					<button
						type="button"
						onClick={handleClose}
						className="notification-button notification-button-secondary"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}
