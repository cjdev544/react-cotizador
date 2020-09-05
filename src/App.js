import React, { useState } from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'
import Spinner from './components/Spinner'


/**
 *  Styled Components *************************************
 */
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`

 /* **************************************************** */


function App() {

  /**
   *  useState ********************************************
   */
  const [ summary, setSummary ] = useState({
    insuranceQuote: 0,
    datesCar: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  const [ loadingResult, setLoadingResult ] = useState( false )

  /* *************************************************** */


  const { insuranceQuote, datesCar } = summary


  return (
    <Container>
      <Header 
        title="Cotizador de Seguro" 
      />
      <FormContainer>
        <Form 
          setSummary={ setSummary }
          setLoadingResult={ setLoadingResult }
        />
        {
          loadingResult
          ?
          <Spinner />
          :
          null
        }
        <Summary
          summary={ datesCar }
        />
        {
          !loadingResult
          ?
          <Result
            insuranceQuote={ insuranceQuote }
          />
          :
          null
        }
      </FormContainer>
    </Container>
  );
}
 
export default App;
