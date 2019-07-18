import React from 'react';


class Header extends React.Component{

    render () {
        return (
            <div style={{color: 'red'}}> soy un div {this.props.text}</div>
        );
    }
}

export default Header;