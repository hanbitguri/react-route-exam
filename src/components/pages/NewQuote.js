import React from 'react'
import { useHistory } from 'react-router-dom';
import QuoteForm from '../quotes/QuoteForm'

function NewQuote() {
  const history = useHistory(); // 히스토리 객체 반환
  function addQuoteHandler(data){
    console.log(data);
    history.replace('/quotes')
  }
  return (
    <QuoteForm onAddQuote={addQuoteHandler}>

    </QuoteForm>
    
  )
}

export default NewQuote