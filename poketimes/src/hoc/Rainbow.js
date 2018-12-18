import React from 'react'
const Rainbow = (wrappedComponent) => {
	const colors = ['red','pink','orange','blue','green']
	const randomColor = colors[Math.floor(Math.random() * 5)]
	const className = randomColor + '-text'
  return (
  	<div className={className}>
      {wrappedComponent}
    </div>
  )
}
export default Rainbow