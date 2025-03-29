import React from "react"
import "./AnswerCard.css"

const AnswerCard = ({ answer }) => {
	return (
		<>
			<div class="answer-card-container">
				<div class="card-inner">
					<div class="card-front">
						<div
							style={{
								fontWeight: "bolder",
								fontSize: "17px",
								marginBottom: "3px",
							}}
						>
							Feeling Stuck?
						</div>
						<div style={{ fontSize: "12px" }}>
							Hover this Card to Reveal the Answer
						</div>
					</div>
					<div className="card-back">
						This is the answer:&nbsp;
						<span style={{ fontWeight: "900" }}>{answer}</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default AnswerCard
