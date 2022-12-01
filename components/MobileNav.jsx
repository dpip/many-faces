import { useState, useRef, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Button,
  Container
} from 'react-bootstrap';
import Link from 'next/link'
import ThemeToggle from 'components/ThemeToggle';
import { useTheme } from 'providers/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MobileNav = ({active, action, display}) => {
    const { theme, toggleTheme } = useTheme();

    return (

        <Container className={`mobile-nav ${active ? 'mobile-nav-active' : 'mobile-nav-nonactive'}`} style={{display: `${display ? 'block' : 'none'}`}}>
            <Button
                onClick={action}
                size="sm"
                // variant="outline-primary"
            >
                <FontAwesomeIcon
                    size="2x"
                    icon={'xmark'}
                />
            </Button>
            <div 
            className={`d-flex justify-content-center`} 
            >
            <Navbar
                id={'navbar'}
                className={`fj-navbar fj-nav-base`}
                bg="transparent"
                expand="lg"
            >
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center flex-column">
                <Nav className="d-flex justify-content-center flex-column text-capitalize">
                    <Nav.Link
                    className="fj-navbar-item fj-navbar-link"
                    as={() =>
                        <Link href='/apply'>
                        <a className="fj-navbar-item fj-navbar-link text-capitalize">Apply</a>
                        </Link>
                    }
                    />
                    <Nav.Link
                    className="fj-navbar-item fj-navbar-link"
                    as={() =>
                        <Link href='/donate'>
                        <a className="fj-navbar-item fj-navbar-link text-capitalize">Donate</a>
                        </Link>
                    }
                    />
                    <Nav.Link
                    className="fj-navbar-item fj-navbar-link"
                    as={() =>
                        <Link href='/about'>
                        <a className="fj-navbar-item fj-navbar-link text-capitalize">About</a>
                        </Link>
                    }
                    />
                    <Nav.Link
                    className="fj-navbar-item fj-navbar-link"
                    as={() =>
                        <Link href='/join'>
                        <a className="fj-navbar-item fj-navbar-link text-capitalize">Join</a>
                        </Link>
                    }
                    />
                    <Nav.Link
                    className="fj-navbar-item fj-navbar-link"
                    as={() =>
                        <Link href='/blog'>
                        <a className="fj-navbar-item fj-navbar-link text-capitalize">Blog</a>
                        </Link>
                    }
                    />
                    <Nav.Link
                    className="fj-navbar-item fj-navbar-link"
                    as={() =>
                        <Link href='/contact'>
                        <a className="fj-navbar-item fj-navbar-link text-capitalize">Contact</a>
                        </Link>
                    }
                    />
                    <div className={'d-flex justify-content-center align-items-center'} style={{ textAlign: 'center', marginTop: '14px' }}>
                        <ThemeToggle onChange={toggleTheme}/>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </Container>
      
    )
}

export default MobileNav;