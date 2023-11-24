import React from 'react';
const Button = ({ buttonClickHandler }) => {
  return (
    <button onClick={buttonClickHandler}>Add To Customer</button>
  )
}
export default Button;