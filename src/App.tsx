import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './screens/homePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from './screens/contactPage';
import MenuPage from './screens/menuPage';
import SpecialMenu from './screens/special';

function App() {
  return (
   <Router>
   <Header/>
<Switch>

  <Route path={"/contact"}><ContactPage/></Route>
  <Route path={"/menu"}><MenuPage/></Route>
  <Route path={"/special"}><SpecialMenu/></Route>
  <Route path={"/"}><HomePage/></Route>
</Switch>
   
   {/*  */}
   <Footer/>
   </Router>
  );
}

export default App;
