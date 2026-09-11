import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
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

	return (
		<Modal open={open}>
			<Box className={`notification-modal ${isWin ? "is-win" : "is-lose"}`}>
				<StatusIcon isWin={isWin} />

				<Typography variant="h6" className="notification-title">
					{isWin ? "Congratulations!" : "Out of guesses"}
				</Typography>

				<Typography
					id="modal-modal-description"
					className="notification-description"
				>
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
				</Typography>

				<div className="notification-actions">
					<Button
						onClick={handlePlayAgain}
						className="notification-button notification-button-primary"
					>
						Play Again
					</Button>

					<Button
						onClick={handleClose}
						className="notification-button notification-button-secondary"
					>
						Close
					</Button>
				</div>
			</Box>
		</Modal>
	)
}
