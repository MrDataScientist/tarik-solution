import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const BuyBtn = styled(props => <Button {...props} />)`
  background: SlateBlue !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: auto;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #FFF !important;
    margin: 1rem;
  }
  &:hover,
  &:active {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  }
  height: 24px;
  margin: 8px 40px !important;
  text-transform: none !important;
  padding: 0 !important;
`

export const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`

