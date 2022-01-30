import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/shared/logo.svg';
import CloseIcon from '../../assets/shared/icon-close.svg';

class Dropdown extends React.Component {
    render() {
        return(
            <div className='dropdown'>
                <div className='navbar'>
                    <img src={Logo} className='header-logo' alt='Website Logo' />
                    <img src={CloseIcon} className='close' onClick={this.props.close} alt='Close Icon' />
                </div>

                <div className='dropdown-links-container'>
                    <NavLink to='/'>
                        <h4 className='dropdown-link'>Home</h4>
                    </NavLink>
                    <NavLink to='/destination'>
                        <h4 className='dropdown-link'>Destination</h4>
                    </NavLink>
                    <NavLink to='/crew'>
                        <h4 className='dropdown-link'>Crew</h4>
                    </NavLink>
                    <NavLink to='/tech'>
                        <h4 className='dropdown-link'>Technology</h4>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Dropdown;