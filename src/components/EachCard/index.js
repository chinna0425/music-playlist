import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const EachCard = props => {
  const {eachItem, onDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = eachItem

  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li className="each-card-item">
      <div className="image-text-container">
        <img src={imageUrl} alt="track" className="song-card-image" />
        <div>
          <p className="song-card-title">{name}</p>
          <p className="song-card-para">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="song-card-duration-para">{duration}</p>
        <button type="button" onClick={deleteItem} data-testid="delete">
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}
export default EachCard
