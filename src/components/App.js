import '../assets/css/bootstrap.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/nice-select.css';
import '../assets/css/flaticon.css';
import '../assets/css/gijgo.css';
import '../assets/css/animate.css';
import '../assets/css/aos.css';
import '../assets/css/slick.css';
import '../assets/css/slicknav.css';
import '../assets/css/style.css';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import {
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';
import aos from 'aos';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PreviewElements from './pages/PreviewElements';
import Header from './layouts/header';
import ManageSkills from './admin/pages/skills/ManageSkills';
import NewSkill from './admin/pages/skills/NewSkill';
import EditSkill from './admin/pages/skills/EditSkill';

const App = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/preview" component={PreviewElements} />
        {/* Skills actios */}
        <Route exact path="/admin/skills" component={ManageSkills} />
        <Route exact path="/admin/skills/new" component={NewSkill} />
        <Route exact path="/admin/skills/edit" component={EditSkill} />
        {/* xn@nopdol055 */}
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
