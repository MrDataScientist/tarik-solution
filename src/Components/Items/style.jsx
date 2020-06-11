import React from 'react'
import styled from 'styled-components'
import * as palette from '../../styles/palette'
import * as layersConfig from '../../styles/layersConfig'
import { Button, IconButton } from '@material-ui/core'

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
color: ${palette.white}; // TODO: change here
background-color: ${palette.primaryLightRed}; // TODO: change here
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
  border-collapse: collapse;
  width: 100%;
  background-color: black !important;
  color: white;
`
export const Price = styled.p`
  font-family: arial, sans-serif;
  background-color: black !important;
  color: white;
  margin: inherit;
  padding: 2rem;
`
