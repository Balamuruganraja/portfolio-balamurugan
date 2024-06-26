import React from 'react'

const Progressbar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 40,
			}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius: 10,
		textAlign: 'center'
	}
	
	const progresstext = {
		textAlign :'center',
		color: 'white',
		fontWeight: 500
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
	
	</div>
	</div>
	)
}

export default Progressbar;
