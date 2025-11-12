import React, { useState } from 'react'

function Home() {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);
    const [isButtonRotated, setIsButtonRotated] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarClosed(!isSidebarClosed);
      setIsButtonRotated(!isButtonRotated);
    };

    return (
        <div className="body">
            <header className="header">
                <div className={`header__btn ${isButtonRotated ? 'rotate' : ''}`}>
                    <button onClick={toggleSidebar}>
                        <i className={`${isButtonRotated ? "fa-solid fa-indent" : "fa-solid fa-outdent"}`}></i>
                    </button>
                </div> 
                <div className="header__logo">
                    <img className="logo__img" src="logo.png" alt="" />
                    <span className="logo__text">FIDECOLAB</span>                
                </div>
                <div className="header__profile">
                    <i className="fa-solid fa-circle-user"></i>
                    <a className="profile__text">USUARIO</a>
                </div>
            </header>
            <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>       
                <ul className="sidebar__list">
                    <li className="list__item list__item--active">
                        <a className="item__area" href="index.html">
                            <i className="fa-solid fa-house"></i>
                            <span className="area__text area__text--active">INICIO</span>
                        </a>
                    </li>
                </ul>
                <div className="sidebar__bottom">
                    <button className="bottom__btn">
                        <i className="fa-solid fa-square-caret-left"></i>
                        <span className="btn__text">VOLVER</span>
                    </button>
                </div>        
            </nav>
            <main className="main">
                <section className="main__container">
                    <div className="container__content">
                    </div>            
                </section>
            </main>          
        </div> 
    )
}

export default Home