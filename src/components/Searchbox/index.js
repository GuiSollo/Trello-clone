import styled from "styled-components";


const Searchbox = styled.input`
padding: 0.4rem;
width: 12rem;
background-color:rgba(211,211,211, 0.5);
padding-left:1rem;
padding-right:1rem;
margin-left:1rem;
margin-right:0.5rem;
border: none;
border-radius: 0.5rem;
&:hover {
  background-color:rgba(211,211,211, 0.6);
  border-radius: 0.5rem;}
  
::placeholder {
  color: white;}

`
export default Searchbox;