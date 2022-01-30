import React from 'react';
import Logo from '../../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import HamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import Dropdown from './dropdown.js';

class Navbar extends React.Component {
    state={
        open: false,
        active: '',
    }

    componentDidMount = () => {
        if (window.location.pathname === '/destination') {
            this.setState({
                active: '/destination'
            })
        }

        else if (window.location.pathname === '/crew') {
            this.setState({
                active: '/crew'
            })
        }

        else if (window.location.pathname === '/tech') {
            this.setState({
                active: '/tech'
            })
        }

        else {
            this.setState({
                active: '/'
            })
        }
    }

    openDropdown = (event) => {
        event.preventDefault();
        this.setState({
            open: !this.state.open
        })
    }

    closeDropdown = (event) => {
        event.preventDefault();
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return(
            <>
                {this.state.open ? 
                    <div>
                        <div className='nav-spacer' />
                        <Dropdown close={this.closeDropdown} />
                    </div> 
                :
                    <div className='navbar'>
                        <img src={Logo} className='header-logo' alt='Website Logo' />
                        <div className='navbar-rect' />
                        <div className='nav-outside-div'>
                            <nav className='header-nav'>
                                <NavLink to='/' className={this.state.active === '/' ? 'active-nav-text' : 'nav-text'}>
                                    <span className='nav-text-bold'>00</span> Home
                                </NavLink>
                                <NavLink to='/destination' className={this.state.active === '/destination' ? 'active-nav-text' : 'nav-text'}>
                                    <span className='nav-text-bold'>01</span> Destination
                                </NavLink>
                                <NavLink to='/crew' className={this.state.active === '/crew' ? 'active-nav-text' : 'nav-text'}>
                                    <span className='nav-text-bold'>02</span> Crew
                                </NavLink>
                                <NavLink to='/tech' className={this.state.active === '/tech' ? 'active-nav-text' : 'nav-text'}>
                                    <span className='nav-text-bold'>03</span> Technology
                                </NavLink>
                            </nav>
                        </div>
                        <img src={HamburgerIcon} className='hamburger' onClick={this.openDropdown} alt='Close Icon' />
                    </div>
                }
            </>
        )
    }
}

export default Navbar;