// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewNo: 0}

  leftClick = () => {
    this.setState(prev => ({
      reviewNo: prev.reviewNo - 1 >= 0 ? prev.reviewNo - 1 : 0,
    }))
  }

  rightClick = () => {
    const {reviewsList} = this.props
    const reviewsLength = reviewsList.length
    this.setState(prev => ({
      reviewNo:
        prev.reviewNo + 1 < reviewsLength ? prev.reviewNo + 1 : prev.reviewNo,
    }))
  }

  render() {
    const {reviewNo} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[reviewNo]

    return (
      <div className="reviews-bg">
        <h1 className="reviews-title">Reviews</h1>
        <img src={imgUrl} alt={username} className="user-image" />
        <div className="reviews-container">
          <button
            type="button"
            onClick={this.leftClick}
            data-testid="leftArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <p className="userName">{username}</p>
          <button
            type="button"
            onClick={this.rightClick}
            data-testid="rightArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
