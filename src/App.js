import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Product';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
</Switch>
</Router>

        <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />

      </Switch>
      </Router>
    </>
    </>
  );
}
export default App;
