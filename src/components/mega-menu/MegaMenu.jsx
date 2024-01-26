import './mega-menu.scss';
import menus from '../../data/menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MegaMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (menuId) => {
        setSelectedMenu(menuId);
    };

    const handleCardClick = (path) => {
        // Redirect to the path of the clicked item
        window.location.href = path;
    };

    return (
        <nav className="mega-menu">
            <ul>
                {console.log(menus)}
                {menus.map((menu, i) => (
                    <li key={i}>
                        <Link to={menu.link} onClick={() => handleMenuClick(menu.id)} className={selectedMenu === menu.id ? 'active' : ''}>
                            {menu.name}
                        </Link>
                        <div className={`mega-menu-content ${selectedMenu === menu.id ? 'show' : ''}`}>
                            <ul>
                                {menu.submenus.map((submenu, j) => (
                                    <li key={j}>
                                        <div className="card" onClick={() => handleCardClick(submenu.link)}>
                                            <img src={submenu.image} alt={submenu.name} />
                                            {submenu.icon}
                                            {console.log(submenu.image)}
                                            <h3>{submenu.name}</h3>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
            <img src="./data/images/menu-sport/sportsbook.png" alt="submenu1-icon" />
            <img src="../../data/images/menu-sport/sportsbook.png" alt="submenu1-icon" />

        </nav>
    );
};

export default MegaMenu;