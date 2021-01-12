import React, { ReactElement } from 'react';
import {
    Link,
    Switch,
    Route,
    useHistory,
    useLocation
  } from "react-router-dom";
import About from './about';
import './header.css';
import Home from './home';
import Users from './users';


interface HeaderPropsI {
    title: string;
    description: string;
}

const Header =  ({title} : Partial<HeaderPropsI>):ReactElement => {
    let {useEffect} = React;
    let history = useHistory();
    let location = useLocation();
    let goHome = () => {
        history.push('/');
    }

    useEffect(() => {
        console.log(location);
    }, [location])
    return (
        <div className="header">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/Topics">Topics</Link>
                    </li>
                </ul>
            </nav>
         <button onClick={() => goHome()}>Go to home</button>
        </div>
    )
}

export default Header
