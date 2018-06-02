import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const imgStyle = {
    width: '100%'
};


class Header extends React.Component{
    render() {
        return (
            <div className='row'>
            <StickyHeader
                header={
                    <div className="Header_root">
                        <h1 className="Header_title">Journey Diary</h1>

                       {/* <ul className="Header_links">
                            <li className="Header_link">When</li>
                            <li className="Header_link">Why</li>
                            <li className="Header_link">About</li>
                        </ul>*/}
                    </div>
                }
            >
                <section>
                    <p>
                       <img style={imgStyle} src={window.location.origin + '/img/tlo2.jpg'} alt='Brak zdjęcia' />

                    </p>
                </section>
            </StickyHeader>
            </div>
        );
    }
}

export default Header;