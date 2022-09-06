import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://bscscan.com/token/0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d"
      >
        Contract
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/jagoanpilot">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/jagoanpilot">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/jagoanpilot">
        Telegram
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[100]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  &:hover {
    color: ${(props) => props.theme.color.primary.main};
  }
`

export default Nav
