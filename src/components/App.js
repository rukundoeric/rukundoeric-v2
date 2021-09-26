import '../App.css';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return(
   <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="*" component={NotFound} />
     </Switch>
   </BrowserRouter>
  )
}

export default App;
