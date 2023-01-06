import styled from "styled-components";


const ButtonGalery = styled.div`

display:flex;
align-items:center;
justify-content:center;
width: 2.2rem;
background-color: transparent;
user-select: none;
cursor: pointer;
margin-right:1rem;

padding-left:0.4rem;
padding-right:0.4rem;
&:hover {
  background-color:rgba(211,211,211, 0.5);
  border-radius: 0.2rem;

}
`
export default ButtonGalery;

