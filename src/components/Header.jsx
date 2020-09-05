import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'


/**
 *  Styled Components *************************************
 */
const HeaderContainer = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`
const H1 = styled.h1`
    font-family: 'Slabo 27px', serif;
    margin: 0;
    font-size: 2rem;
    text-align: center;
`
/* ***************************************************** */


const Header = ( { title }) => {
    return ( 
        <HeaderContainer>
            <H1>{ title }</H1>
        </HeaderContainer>
     )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header