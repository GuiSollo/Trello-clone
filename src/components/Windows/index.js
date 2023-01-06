import styled from 'styled-components';

const Windows = styled.div`
display: grid;
background-color: transparent;
margin-top: 0.2rem;
margin-left: 0.2rem;

grid-gap: 1rem;
grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr) ) ;  grid-template-rows: 30px 30px 30px 30px;
min-height: 100%;
max-height: 100%;

`;

export default Windows;
