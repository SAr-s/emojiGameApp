// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {cardDetails, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = cardDetails

  const emojiClicked = () => {
    clickedEmoji(id)
  }
  return (
    <li className="card-container">
      <button className="button" type="button" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
