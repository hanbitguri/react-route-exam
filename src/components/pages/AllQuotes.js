import React from 'react'
import QuoteList from '../quotes/QuoteList'
const DUMMY = [
  {
    id: 'q1' , author : 'MAX' , text : 'keep going and run'
  },
  {
    id: 'q2' , author : 'MuX' , text : 'going and run'
  },
]

function AllQuotes() {
  return (
   <QuoteList quotes={DUMMY}>

   </QuoteList>
  )
}

export default AllQuotes