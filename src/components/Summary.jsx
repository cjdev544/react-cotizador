import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { firstLetterUp } from '../helpers'

/**
 *  Styled Component **************************************
 */
const SummaryComponent = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`

 /* **************************************************** */

const Summary = ( { summary } ) => {

    const { brand, year, plan } = summary

    if( brand === '' || year === '' || plan === '' ) return null

    return ( 
        <SummaryComponent>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { firstLetterUp( brand ) }</li>
                <li>Plan: { firstLetterUp( plan ) }</li>
                <li>Año del Auto: { year }</li>
            </ul>
        </SummaryComponent>
     )
}

Summary.propTypes = {
    summary: PropTypes.object.isRequired
}
 
export default Summary