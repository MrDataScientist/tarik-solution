import React, { Component } from 'react'
import {
  HeaderContainer,
  RightHeaderContainer,
 // LogoImg,
  HeaderBtn,
  HeaderLabel,
  HeaderLink,
  //ButtonIcon
} from './style'

//import MenuIcon from '@material-ui/icons/Menu'
//import logo from '../../assets/Header/Title Image.png'
// import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import * as palette from '../../styles/palette'

class Header extends Component {
  static propTypes = {
    isPro: PropTypes.bool,
    onHowItWorksClick: PropTypes.func,
    handleDrawer: PropTypes.func,
    includeNavSideBar: PropTypes.bool,
    keepSidebarOpen: PropTypes.bool,
    isLoginPage: PropTypes.bool
  }

  state = {
    sidebarOpen: true,
    drawerOpen: false,
    showTutorialModal: false
  }

  componentDidMount () {
    // TODO: test
  }

  render () {
    const {
      scrolling,
      isPlus,
      isLoginPage
    } = this.props

    return (
      <div>
        <HeaderContainer scrolling={scrolling}>
          <RightHeaderContainer>
            <HeaderLabel>MY PRIDE</HeaderLabel>
            <HeaderLink
              href
              onClick={this.handleHowItWorksModal}
              target='_blank'
            >
             TUTORIAL
            </HeaderLink>

              <HeaderBtn onClick={this.handleProTestClick}>
                TEST PRO
              </HeaderBtn>

          </RightHeaderContainer>
        </HeaderContainer>
      </div>
    )
  }
}

export default Header

// export default withTranslation()(Header)
