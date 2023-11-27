// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {result, playAgain, score} = props
  const playAgainButtonClicked = () => {
    playAgain()
  }
  let headingText = ''
  let imageUrl = ''

  if (result === 'Won') {
    headingText = 'You Won'

    imageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    headingText = 'You Lose'

    imageUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  return (
    <div className="win-or-lose-card">
      <div>
        <h1>{headingText}</h1>
        <p>Best Score</p>
        <p>{score}/12</p>
        <button onClick={playAgainButtonClicked} type="button">
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
