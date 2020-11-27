import React from "react";
import { NavLink }  from 'react-router-dom';
import './Menu.css';


class Menu extends React.Component {
    render() {
        return (<nav>
            <div className="menu">
                <div className="menu-bar">
                    <div className="menu-item">
                    </div>
                    <div className="menu-item">
                        <NavLink className="menu-item-link" activeClassName="active"  to="/">Notes</NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink className="menu-item-link" activeClassName="active"  to="/archive">Archive</NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink className="menu-item-link" activeClassName="active"  to="/deletes">Deletes</NavLink>
                    </div>
                </div>
            </div>
        </nav>)
    }
}

export default Menu;