import React from 'react'
import styled from 'styled-components'
import * as palette from '../../styles/palette'
import * as layersConfig from '../../styles/layersConfig'
import { Button, IconButton } from '@material-ui/core'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  top: 0;
  background-color: ${palette.primaryBackground};
  z-index: ${layersConfig.levelOne};
  position: sticky;
  top: 0;
  width: 99%;
  padding: 9px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const LeftHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonIcon = styled(props => <IconButton {...props} />)`
  &&& {
    margin: 0px 1.4rem 0px 0rem;
    svg {
      font-size: 2.5rem !important;
    }
  }
`

export const LogoImg = styled.img`
  width: 165px;
  height: 40px;
`

export const HeaderBtn = styled(props => <Button {...props} />)`
  background: ${palette.white} !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: ${palette.primaryDarkGreen} !important;
  }
  &:hover,
  &:active {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  }
  height: 35px;
  width: 150px;
  margin: 8px 40px !important;
  text-transform: none !important;
  padding: 0 !important;
`

export const HeaderLink = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: ${palette.primaryLightGrey};
  cursor: pointer;
  line-height: 32px;
  margin: 4px 15px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

export const HeaderLabel = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: ${palette.primaryLightGrey};
  line-height: 32px;
  margin: 4px 15px;
`
