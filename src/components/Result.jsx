import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

/**
 *  Styled Components *************************************
 */
const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const ResultContainer = styled.div`
    background-color: rgb(127, 224, 237);
    position: relative;
    margin-top: 1rem;
    padding: .5rem;
    border: 1px solid #26c6da;
    text-align: center;
`

const ResultMessage = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    margin: 0;
    font-weight: bold;
`

 /* **************************************************** */

const Result = ( { insuranceQuote } ) => {
    return ( 
        ( insuranceQuote === 0)
        ?
        <Message>Elige Marca, año y tipo de seguro</Message>
        : 
        (
            <ResultContainer>
                <ResultMessage>El total es: $ { insuranceQuote }</ResultMessage>
            </ResultContainer>
        )
     )
}

Result.propTypes = {
    insuranceQuote: PropTypes.number.isRequired
}
 
export default Result