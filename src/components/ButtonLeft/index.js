import styled from "styled-components";


const ButtonLeft = styled.div`

display:flex;
align-items:center;
justify-content:center;
color: white;
width: auto;
padding-left:1rem;
padding-right:1rem;

background-color: transparent;
user-select: none;
cursor: pointer;
height: 2rem;
margin-right:1rem;

&:hover {
  background-color:rgba(211,211,211, 0.5);
  border-radius: 0.2rem;


}


`
export default ButtonLeft;

//type="button" value="OK" style="width: 200px; height: 200px"