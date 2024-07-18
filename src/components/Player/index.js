import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import EachCard from '../EachCard'

import './index.css'

class Player extends Component {
  constructor(props) {
    super(props)
    const {initialTracksList} = this.props
    this.state = {items: initialTracksList, searchQ: ''}
  }

  onSearchChange = event => {
    this.setState({searchQ: event.target.value.toLowerCase()})
  }

  onDeleteItem = id => {
    const {items} = this.state
    const updated = items.filter(removeEach => removeEach.id !== id)
    this.setState({items: updated})
  }

  render() {
    const {items, searchQ} = this.state
    const updated = items.filter(eachSet =>
      eachSet.name.toLowerCase().includes(searchQ),
    )
    console.log(updated.length)
    return (
      <div className="main-container">
        <div className="image-container">
          <h1 className="top-image-title">Ed Sheeran</h1>
          <p className="top-image-para">Singer</p>
        </div>
        <div className="heading-search-container">
          <h1 className="bottom-title-name">Songs Playlist</h1>
          <div className="input-search-container">
            <input
              type="search"
              value={searchQ}
              onChange={this.onSearchChange}
              className="input-style"
              placeholder="Search"
            />
            <BiSearch className="search-icon" />
          </div>
        </div>
        {updated.length > 0 ? (
          <ul className="unordered-list-container">
            {updated.map(eachItem => (
              <EachCard
                key={eachItem.id}
                eachItem={eachItem}
                onDeleteItem={this.onDeleteItem}
              />
            ))}
          </ul>
        ) : (
          <p className="top-image-title not-found">No Songs Found</p>
        )}
      </div>
    )
  }
}

export default Player
