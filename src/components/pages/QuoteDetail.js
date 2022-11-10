import React from 'react'
import { Link, Route, useParams } from 'react-router-dom'
import Comments from '../comments/Comments'
import HighlightedQuote from '../quotes/HighlightedQuote'
const DUMMY = [
  {
    id: 'q1' , author : 'MAX' , text : 'keep going and run'
  },
  {
    id: 'q2' , author : 'MuX' , text : 'going and run'
  },
]

function QuoteDetail() {
    const params = useParams();
    const quote = DUMMY.find(quote=>quote.id === params.quoteId)
    if(!quote){
      return <p>올바르지 않은 경로 입니다.</p>
    }//
  return (
    <>
   <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
   <Route path={`/quotes/${params.quoteId}`} exact>
   <div className="centered">
      <Link className="btn--flat" to={`/quotes/${params.quoteId}/comment`}>Load Comments</Link>
    </div>
   </Route>
    <Route path={`/quotes/${params.quoteId}/comment`}>
        <Comments></Comments>
    </Route>


    
    </>
  )
}

export default QuoteDetail