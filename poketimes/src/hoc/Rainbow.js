import React from 'react'
const Rainbow = (WrappedComponent) => {
	const colors = ['red','pink','orange','blue','green']
	const randomColor = colors[Math.floor(Math.random() * 5)]
	const className = randomColor + '-text'
	const props = {a:1,b:2}
  return (preProps) => {
		return (
			<div className={className}>
				<WrappedComponent {...props} {...preProps}/>
			</div>
		)
	}
 
}
export default Rainbow