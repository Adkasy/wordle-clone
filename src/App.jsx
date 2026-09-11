import React, { useEffect, useRef, useState } from "react"
import "./App.css"
import GuessInput from "./components/GuessInput/GuessInput"
import GuessWordDisplay from "./components/GuessWordDisplay/GuessWordDisplay"
import Topbar from "./components/Topbar/Topbar"
import Footer from "./components/Footer/Footer"
import BasicModal from "./components/NotificationModal/NotificationModal"
import Keyboard from "./components/Keyboard/Keyboard"
import AnswerCard from "./components/AnswerCard/AnswerCard"
import WORD_LIST from "./utils/wordList"

function App() {
	const [arrOfGuess, setArrOfGuess] = useState([])
	const [wordleAnswer, setWordleAnswer] = useState("")
	const [showModal, setShowModal] = useState(false)
	const [disabledInput, setDisabledInput] = useState(false)
	const [letterStatus, setLetterStatus] = useState({})
	const [numberOfGuess, setNumberOfGuess] = useState(0)
	const [currentGuess, setCurrentGuess] = useState("")
	const currentGuessRef = useRef("")

	// keeps a ref in sync so key handlers always read the latest guess
	function updateGuess(updater) {
		setCurrentGuess((prev) => {
			const next = typeof updater === "function" ? updater(prev) : updater
			currentGuessRef.current = next
			return next
		})
	}

	useEffect(() => {
		getRandomWord()
	}, [])

	useEffect(() => {
		function handlePhysicalKeyDown(e) {
			const key = e.key.toUpperCase()

			if (key === "ENTER") {
				handleKeyPress("ENTER")
			} else if (key === "BACKSPACE") {
				handleKeyPress("DEL")
			} else if (/^[A-Z]$/.test(key)) {
				handleKeyPress(key)
			}
		}

		window.addEventListener("keydown", handlePhysicalKeyDown)
		return () => window.removeEventListener("keydown", handlePhysicalKeyDown)
	})

	function inputGetter(inputFromUser) {
		const newNumberOfGuess = numberOfGuess + 1
		setNumberOfGuess(newNumberOfGuess)

		setArrOfGuess([...arrOfGuess, inputFromUser])

		updateLetterStatus(inputFromUser)

		if (inputFromUser === wordleAnswer) {
			setShowModal(true)
			setDisabledInput(true)
		} else if (newNumberOfGuess >= 6) {
			setShowModal(true)
			setDisabledInput(true)
		}
	}

	function handleSubmitGuess() {
		const guess = currentGuessRef.current

		if (guess.length === 5) {
			inputGetter(guess)
			updateGuess("")
		}
	}

	function getRandomWord() {
		const randomIndex = Math.floor(Math.random() * WORD_LIST.length)
		setWordleAnswer(WORD_LIST[randomIndex])
	}

	function handlePlayAgain() {
		setArrOfGuess([])
		setLetterStatus({})
		setNumberOfGuess(0)
		setDisabledInput(false)
		setShowModal(false)
		updateGuess("")
		getRandomWord()
	}

	function updateLetterStatus(guess) {
		const newStatus = { ...letterStatus }

		for (let i = 0; i < guess.length; i++) {
			const letter = guess[i]

			if (letter === wordleAnswer[i]) {
				newStatus[letter] = "correct"
			} else if (
				wordleAnswer.includes(letter) &&
				newStatus[letter] !== "correct"
			) {
				newStatus[letter] = "misplaced"
			} else if (!wordleAnswer.includes(letter)) {
				newStatus[letter] = "incorrect"
			}
		}

		setLetterStatus(newStatus)
	}

	function handleKeyPress(key) {
		if (disabledInput) return

		if (key === "ENTER") {
			handleSubmitGuess()
		} else if (key === "DEL") {
			updateGuess((prev) => prev.slice(0, -1))
		} else {
			updateGuess((prev) => (prev.length < 5 ? prev + key : prev))
		}
	}

	return (
		<div className="outermost-container">
			<Topbar />

			<div className="game-layout">
				<div className="game-board">
					<GuessWordDisplay
						arrOfGuess={arrOfGuess}
						wordleAnswer={wordleAnswer}
					/>
				</div>

				<div className="game-controls">
					<GuessInput
						value={currentGuess}
						onSubmit={handleSubmitGuess}
						disabled={disabledInput}
					/>

					<Keyboard letterStatus={letterStatus} onKeyPress={handleKeyPress} />

					<AnswerCard answer={wordleAnswer} />
				</div>
			</div>

			<BasicModal
				openModal={showModal}
				wordleAnswer={wordleAnswer}
				numberOfGuess={numberOfGuess}
				isWin={
					arrOfGuess.length > 0 &&
					arrOfGuess[arrOfGuess.length - 1] === wordleAnswer
				}
				onPlayAgain={handlePlayAgain}
			/>

			<Footer />
		</div>
	)
}

export default App
