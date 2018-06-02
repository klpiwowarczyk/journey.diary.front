import React from 'react';
import StickyHeader from 'react-sticky-header';
import './../../App.css';

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
                        <div className='row'>
                            <h1 className="Header_title col-md-10">Journey Diary</h1>

                            <button type="button" className="btn btn-primary col-md-1 buttonAdd" data-toggle="modal" data-target="#myModal">
                                Dodaj
                            </button>
                        </div>

                    </div>
                }
            >
                <section>
                    <p>
                       <img style={imgStyle} src={`${window.location.origin}/img/tlo2.jpg`} alt='Brak zdjęcia' />
                    </p>
                </section>
            </StickyHeader>
            </div>
        );
    }
}

export default Header;