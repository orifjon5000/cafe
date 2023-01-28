import React, { ReactNode } from 'react'
import './logo.css'
export default function Coffee() {
 
  return (
<>
t<html>
<head>
	<title>Coffee Anim Test</title>
</head>
<body  style={{"background":"#f89627","overflow":"hidden", 'textAlign':"center", width:"100%", 'height':"100%", display:"block"}}>
	<div style={{width:"100%", position: "fixed", bottom:"0", height: "50%", background: "#f89627", zIndex: "6"}}></div>
	<div style={{width: "150px", height: "180px", position: "absolute", left:"50%", marginLeft:"-75px", top:"50%", marginTop:"-90px"}}>
		<img style={{position:"absolute", top:"0px" ,left:"0px", zIndex: "6"}} src="http://farm9.staticflickr.com/8280/8844715142_03200d8098_o.png"/>
		<img id="falling-coffee" style={{position:"absolute", top:"50px", left:"0px", zIndex: "5"}} src="http://farm9.staticflickr.com/8408/8844093815_f2123ee283_o.png"/>
		<img style={{position:'absolute', top:'0px', left:'0px', zIndex: "4"}} src="http://farm8.staticflickr.com/7454/8844093599_13397a842f_o.png"/>
		<img id="rising-coffee" style={{position:'absolute', top:'0px', left:'0px', zIndex: "3"}} src="http://farm8.staticflickr.com/7437/8844093589_8dd248fd42_o.png"/>
		<img style={{position:'absolute', top:'0px', left:'0px', zIndex: "2"}} src="http://farm8.staticflickr.com/7308/8844093579_5fb70bc4ec_o.png"/>
		<img style={{position:'absolute', top:'0px', left:'0px', zIndex: "1"}} src="http://farm4.staticflickr.com/3809/8844093577_a992a54c6a_o.png"/>
	</div>
  <div  id="pour-it" 
  style={{position:'absolute', bottom: '20px', left: '50%', width: '150px', height: '40px', marginLeft: '-75px', background: 'brown', lineHeight: '40px', fontSize: '24px', fontFamily: 'serif', zIndex: '20', borderRadius: '20px', color: '#FFF', textShadow: '3px 3px 0px maroon', cursor:'pointer'}}>One More</div>
</body>
</html>

</>
  
  

  )
}
