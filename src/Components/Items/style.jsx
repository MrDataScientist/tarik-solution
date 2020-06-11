import styled from 'styled-components'
import * as palette from '../../styles/palette'

export const Wrap = styled.div `
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const BuyBtn = styled.button`
width: 140px;
height: 45px;
font-family: 'Roboto', sans-serif;
font-size: 11px;
text-transform: uppercase;
letter-spacing: 2.5px;
font-weight: 500;
color: ${palette.white};
background-color: ${palette.primaryLightRed};
border: none;

box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;

&:hover {
  background-color: ${palette.white};
  box-shadow: 0px 15px 20px ${palette.coldBlue};
  color: ${palette.black};
  transform: translateY(-7px);
}
`

export const ItemTable = styled.table`
  font-family: arial, sans-serif;
  
  background-color: black !important;
  color: white;


  width: 100%;  
  border-collapse: collapse;
  border: 1px solid black;

  th, td
{
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid ${palette.black}; // TODO: border-bottom: 1px solid #ddd;
}


`
export const Price = styled.p`
  font-family: arial, sans-serif;
  background-color: black !important;
  color: white;
  margin: inherit;
  padding: 2rem;
`

export const Image = styled.div`
  border: 1px solid  ${palette.black};
  border-radius: 4px;
  padding: 5px;
  width: 330px;
  height: 205px;
`

export const Description = styled.tr`
  font-size: 12px;
  height: 48px;
  text-align: left;
`
