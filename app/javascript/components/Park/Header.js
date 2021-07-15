import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
  font-size: 30px;
  background: #fff;
  margin: 12px auto;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.3);

  h1 {
    color: #65776a;
    font-family: 'Lora', serif;
    font-size: 64px;
    font-weight: bold;
  }
`

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = (props) => {
  const { name, avg_rating } = props.attributes
  const total = props.reviews.length
  
  return (
    <Wrapper>
      <h1>{name}</h1>
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className="starRating"></div>
        <TotalOutOf>{avg_rating} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header
