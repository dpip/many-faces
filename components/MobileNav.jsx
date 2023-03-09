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
            <div className={'w-100 d-flex justify-content-end'}>
                {/* <div className={'d-flex justify-content-center align-items-center mt-3 mr-3'}>
                    <ThemeToggle onChange={toggleTheme}/>
                </div> */}
                <Button
                    className={'mobile-nav-close mt-3'}
                    onClick={action}
                    size="sm"
                >
                    <FontAwesomeIcon
                        size="3x"
                        icon={'xmark'}
                    />
                </Button>
            </div>
            <div 
            className={`d-flex justify-content-center`} 
            >
            <Navbar
                id={'navbar'}
                className={`fj-navbar fj-nav-base mt-3`}
                bg="transparent"
                expand="lg"
            >
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center flex-column">
                <Nav className="d-flex justify-content-start flex-column text-capitalize w-100">
                                        
                        <Nav.Link
                            className="fj-navbar-item fj-navbar-link"
                            as={() =>
                                <Link href='/'>
                                <a className="fj-navbar-item fj-navbar-link text-capitalize mt-2 ml-0 pt-2">
                                    <div className={'pr-2'}>
                                        <FontAwesomeIcon
                                            size="1x"
                                            icon={'house'}
                                        /> 
                                        &nbsp;&nbsp;Home
                                    </div>
                                </a>
                                </Link>
                            }
                        />
                    <span style={{border: '0', borderTop: '1px solid rgba(0,0,0,.1)'}} />
                    
                        <Nav.Link
                            className="fj-navbar-item fj-navbar-link"
                            as={() =>
                                <Link href='/apply'>
                                <a className="fj-navbar-item fj-navbar-link text-capitalize mt-2 ml-0 pt-2">
                                    <div className={'pr-2'}>
                                        <FontAwesomeIcon
                                            size="1x"
                                            icon={'file-signature'}
                                        /> 
                                        &nbsp;&nbsp;Apply
                                    </div>
                                </a>
                                </Link>
                            }
                        />
                    <span style={{border: '0', borderTop: '1px solid rgba(0,0,0,.1)'}} />

                        <Nav.Link
                            className="fj-navbar-item fj-navbar-link"
                            as={() =>
                                <Link href='/about'>
                                <a className="fj-navbar-item fj-navbar-link text-capitalize mt-2 ml-0 d-flex align-items-center pt-2">
                                    <div className={'pr-1'}>
                                        <FontAwesomeIcon
                                            size="1x"
                                            icon={'circle-info'}
                                        />
                                    </div>
                                    &nbsp;&nbsp;About
                                </a>
                                </Link>
                            }
                        />
                    <span style={{border: '0', borderTop: '1px solid rgba(0,0,0,.1)'}} />
                    
                        <Nav.Link
                            className="fj-navbar-item fj-navbar-link"
                            as={() =>
                                <Link href='/blog'>
                                <a className="fj-navbar-item fj-navbar-link text-capitalize mt-2 ml-0 d-flex align-items-center pt-2">
                                    <div className={'pr-1'}>
                                        <FontAwesomeIcon
                                            size="1x"
                                            icon={'blog'}
                                        />
                                    </div>
                                    &nbsp;&nbsp;Blog
                                </a>
                                </Link>
                            }
                        />
                    <span style={{border: '0', borderTop: '1px solid rgba(0,0,0,.1)'}} />
                        <Nav.Link
                            className="fj-navbar-item fj-navbar-link"
                            as={() =>
                                <Link href='/contact'>
                                <a className="fj-navbar-item fj-navbar-link text-capitalize mt-2 ml-0 d-flex align-items-center pt-2">
                                    <div className={'pr-0'}>
                                        <FontAwesomeIcon
                                            size="1x"
                                            icon={'address-card'}
                                        />
                                    </div>
                                    &nbsp;&nbsp;Contact
                                </a>
                                </Link>
                            }
                        />
                    <span style={{border: '0', borderTop: '1px solid rgba(0,0,0,.1)'}} />

                    <div className={'mt-5'} style={{ textAlign: 'center'}} >
                        <a
                        href={'https://buy.stripe.com/test_bIYcOh3IjdIu2KQcMM'}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <Button size="lg" variant="outline-primary">
                                Donate
                            </Button>
                        </a>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </Container>
      
    )
}

export default MobileNav;