import "../assets/css/bootstrap.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/themify-icons.css";
import "../assets/css/nice-select.css";
import "../assets/css/flaticon.css";
import "../assets/css/gijgo.css";
import "../assets/css/animate.css";
import "../assets/css/aos.css";
import "../assets/css/slick.css";
import "../assets/css/slicknav.css";
import "../assets/css/style.css";
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PreviewElements from './pages/PreviewElements';
import Header from './layouts/header';

const App = () => {
  return(
   <BrowserRouter>
     <Header />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/preview" component={PreviewElements} />
       <Route exact path="*" component={NotFound} />
     </Switch>
   </BrowserRouter>
  )
}

export default App;
