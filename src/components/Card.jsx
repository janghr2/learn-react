import React from 'react'

const Card = ({imgUrl, itemName, onButtonClick}) => { 
  return (
    <div
    style={{"backgroundColor" : 'skyblue', "color" : "red"}}>
      
      <img src={imgUrl} alt={itemName}/>
      <p>{itemName}</p>
      <button type='button' onClick={() => onButtonClick()}>제품 페이지로 가기</button>
    
    {/* <p>해트트릭 엄지성</p> */}
    </div>
  )
}

export default Card



