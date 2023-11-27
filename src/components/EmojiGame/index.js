/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, totalScore: 0, confirmClicked: [], won: false, lost: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const shuffledList = [...emojisList]
    return shuffledList.sort(() => Math.random() - 0.5)
  }

  clickedEmoji = id => {
    const {emojisList} = this.props
    const {confirmClicked, score} = this.state

    const isEmojisPresent = confirmClicked.includes(id)
    const clickedEmojisLength = confirmClicked.length

    if (isEmojisPresent) {
      this.finishGameAndSetTopScore(emojisList.length, clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length, emojisList.length)
      }
      this.setState(
        prevState => ({
          confirmClicked: [...prevState.confirmClicked, id],
          score: prevState.score + 1,
        }),
        () => {
          if (score === emojisList.length) {
            this.setState({won: true})
          }
        },
      )
    }
  }

  playAgain = () => {
    this.setState({score: 0, won: false, lost: false})
  }

  finishGameAndSetTopScore = (totalEmojis, clickedEmojisLength) => {
    const {score, totalScore} = this.state

    if (score > totalScore) {
      this.setState({totalScore: score})
    }
    this.setState(prevState => ({
      confirmClicked: [],
      score: prevState.score,
      won: false,
      lost: clickedEmojisLength < totalEmojis,
    }))
  }

  render() {
    const {score, totalScore, won, lost} = this.state
    return (
      <div>
        <NavBar score={score} totalScore={totalScore} won={won} lost={lost} />
        <div className="win-container">
          <ul className={`emojisList-container ${won || lost ? 'hidden' : ''}`}>
            {this.shuffledEmojisList().map(eachItem => (
              <EmojiCard
                cardDetails={eachItem}
                key={eachItem.id}
                clickedEmoji={this.clickedEmoji}
              />
            ))}
          </ul>

          {won && (
            <WinOrLoseCard
              result="Won"
              playAgain={this.playAgain}
              score={score}
              totalScore={totalScore}
            />
          )}
          {lost && (
            <WinOrLoseCard
              result="Lost"
              playAgain={this.playAgain}
              score={score}
              totalScore={totalScore}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
