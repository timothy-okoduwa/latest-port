import React from "react";
import styled from 'styled-components'
const Slider = ({open,toggle}) => {
// const text =()=>{
//   const we = document.getElementById('hello')
//   if(we.styled.display === 'none') {
//     we.styled.display ='block'
//   } else{
//     we.styled.display ='none'
//   }
// }
  return <Div open={open }>

<Navholders  >

<span>Home</span>
<span>Services</span>
<span>About</span>
<span>Portfolio</span>
<span>Contact</span>
</Navholders>
  </Div>;
};

export default Slider;
const Div = styled.div`
background-color: #325288;
height: 400px;
width: 100vw;
position: fixed;
z-index: 1;
border-radius: 0 0 5px 5px ;
@media screen and (min-width:768px) {
  display: none;
}
transition: 400ms;
/* transition-duration: 400ms; */
opacity: ${({open})=>(open?'100':'0')};
display: ${({open})=>(open?'block':'none')} ;
/* transition: ${({open})=>(open?'400ms':'400ms')} ; */


`
const Navholders = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
span{
  padding: 26px;
  color: whitesmoke;
  font-weight: bold;
  font-size: 16px;
  font-family: inter, sans-serif;
  text-decoration: none;
  cursor: pointer;
  :hover{
    // font-style: italic;
  }
}
`
const Cancel = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 30px;
margin-top: 20px;
cursor: pointer;
`