import React, { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { optionsYears, presupuestForYear, presupuestForBrand, getPlan } from '../helpers'


/**
 *  Styled Components *************************************
 */
const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`

const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838f;
    text-align: center;
    padding: 1rem;
    width: 100%;
    border: none;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    margin-top: 2rem;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }

    &:focus {
        border: none;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`

/* ***************************************************** */


const Form = ( { setSummary, setLoadingResult } ) => {

     /**
     *  useState 
     */
    const [ datesCar, setDatesCar ] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [ error, setError ] = useState( false )

    /* ************************************************* */


    // Read Dates of Cotitation
    const { brand, year, plan } = datesCar

    const readDatesCar = e => {
        setDatesCar({
            ...datesCar,
            [ e.target.name ]: e.target.value
        })
    }

    // Write dataCar in the State
    const handleSubmit = e => {
        e.preventDefault()

        if( brand === '' || year === '' || plan === '' ) {
            setError( true )
            return
        }
        setError( false )

        // Presupuest for Year
        let result = 2000

        const yearSubs = presupuestForYear( year )

        result -= ( ( yearSubs * 3 ) * result ) / 100
        
        // Europeo + 30%, Americano + 15%, Aciatico + 5 %
        result *= presupuestForBrand( brand )
               
        result = parseFloat( getPlan( plan ) * result ).toFixed( 2 )
        
        // Send Dates of App
        setLoadingResult( true )

        setTimeout(() => {
            setSummary({
                insuranceQuote: Number( result ),
                datesCar
            })
            setLoadingResult( false )
        }, 3000);

    }

    return ( 
        <form
            onSubmit={ handleSubmit }
        >
            {
                error
                ?
                <Error>Todos los campos son Obligatorios</Error>
                : null
            }
            <Field>
                <Label>Marca</Label> 
                <Select
                    name="brand"
                    value={ brand }
                    onChange={ readDatesCar }
                >
                    <option value="">-- Slecciona --</option>
                    <option value="americano">Americano</option>
                    <option value="asiatico">Asiatico</option>
                    <option value="europeo">Europeo</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label> 
                <Select
                    name="year"
                    value={ year }
                    onChange={ readDatesCar }
                >
                    <option value="">-- Selecciona --</option>
                    {
                        optionsYears()
                    }
                    
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>

                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={ plan === 'basico' }
                    onChange={ readDatesCar }
                /> Básico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={ plan === 'completo' }
                    onChange={ readDatesCar }
                /> Completo
                
            </Field>
            <Button type="submit"> Cotizar </Button>
        </form>
     )
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoadingResult: PropTypes.func.isRequired
}
 
export default Form