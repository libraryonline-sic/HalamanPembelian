import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import Discuss from './xdiscuss';
import Book from './xbook';
import Home from './xhome';
import './nav-bar.css';
import petal from './clover.png';

function Navbar() {
    return (
        <Router>
        <div>
            <nav>
                <container className='brand'>
            <img src={petal} className="petal" />
              <h1>Petal</h1>
                </container>
                 <ul>
                     <li>
                        <Link to ='/xhome' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to ='./xdiscuss' className='link'>Discuss</Link>
                    </li>
                    <li>
                        <Link to ='./xbook' className='link'>Book</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <Switch>
            <Route exact path='./xdiscuss'>
            <Discuss />
            </Route>
            <Route exact path='./xbook'>
            <Book />
            </Route>
            <Route exact path='/xhome'>
            <Home />
            </Route>
            </Switch>
        </Router>
    )
    }
export default Navbar