
import { Redirect, Route,Switch } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetail from './components/pages/QuoteDetail';
import NewQuote from './components/pages/NewQuote';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';
function App() {
  return (
    <Layout>

      <Switch>
        
      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
      </Route>
        
      <Route path='/quotes' exact>
        <AllQuotes></AllQuotes>
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail></QuoteDetail>
      </Route>
      <Route path='/quotes/:quoteId/comment'>
        <QuoteDetail></QuoteDetail>
        <Comments></Comments>
      </Route>
        
      <Route path='/new-quote'>
        <NewQuote></NewQuote>
      </Route>

      <Route path='*'>
        <NotFound></NotFound>
      </Route>
      </Switch>

    </Layout>
     );
}

export default App;
