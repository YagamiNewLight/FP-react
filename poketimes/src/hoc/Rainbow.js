import React from 'react'
const Rainbow = (WrappedComponent) => {
	const colors = ['red','pink','orange','blue','green']
	const randomColor = colors[Math.floor(Math.random() * 5)]
	const className = randomColor + '-text'
	// props here give all the component the same object to use.
	const props = {a:1,b:2}
	// preProps here maintain the ability to take in props and use it.
  return (preProps) => { 
		return (
			<div className={className}>
				<WrappedComponent {...props} {...preProps}/>
			</div>
		)
	}
 
}
export default Rainbow