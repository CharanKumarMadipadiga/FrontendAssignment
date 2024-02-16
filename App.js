import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProfilePage from './components/ProfilePage'
import Posts from './components/ProfilePage/Posts'
import Bookmarks from './components/ProfilePage/Bookmarks'
import Settings from './components/ProfilePage/Settings'
import NotFound from './components/ProfilePage/NotFound';


import './App.css'
  

const App=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ProfilePage} />
            <Route exact path="/profile/posts" component={Posts}/>
            <Route exact path="/profile/bookmarks" component={Bookmarks}/>
            <Route exact path="/settings" component={Settings} />
            <Route  component={NotFound} />


        </Switch>
    </BrowserRouter>
)

export default App
