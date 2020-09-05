import React from 'react'

export function optionsYears() {

    const maxYear = new Date().getFullYear() + 1,
          minYear = maxYear - 20

    let years = []

    for( let i = maxYear; i > minYear; i-- ) {
        years.push(i)
    }

    return (
        
        years.map( option => (
            <option
                key={ option }
                value={ option }
            >
            { option }
            </option>
        ))
    )
}

export function presupuestForBrand( brand ) {
    let increment

    switch ( brand ) {
        case 'asiatico':
            increment = 1.05
            break;
        case 'americano':
            increment = 1.15
            break;
        case 'europeo':
            increment = 1.3
            break;            
        default:
            break;
    }

    return increment
}

export function presupuestForYear( year ) {
    return new Date().getFullYear() + 1  -year
}

export function getPlan( plan ) {
    let increment
    plan === 'basico' ? increment = 1.3 : increment = 1.5
    return increment
}

export function firstLetterUp( text ) {
    return text.charAt( 0 ).toUpperCase() + text.slice( 1 )
}