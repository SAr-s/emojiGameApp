// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore, won, lost} = props
  return (
    <div className="navbar-container">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navbar-logo"
        />
        <h1>Emoji Game</h1>
      </div>

      <div className={`score-container ${won || lost ? 'hide' : ''}`}>
        <p>Score: {score}</p>
        <p>Top Score: {totalScore}</p>
      </div>
    </div>
  )
}

export default NavBar
