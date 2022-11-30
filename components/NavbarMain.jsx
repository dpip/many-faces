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


const NavbarMain = () => {
    const { theme, toggleTheme } = useTheme();
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
      if (window.pageYOffset > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
      } else {
        setSticky({ isSticky: false, offset: 0 });      }
    };

    // add/remove scroll event listener
    useEffect(() => {
      var header = headerRef.current.getBoundingClientRect();
      const handleScrollEvent = () => {
        handleScroll(header.top, header.height)
      }

      window.addEventListener('scroll', handleScrollEvent);

      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, []);

    return (
      <Container style={{height: '100px'}}>
        <div 
          className={`${sticky.isSticky ? 'sticky' : ''} d-flex justify-content-center`} 
          style={{
            padding: sticky.isSticky ? '0px 100px 0px 100px' : '0px 15px 0px 15px', 
            boxShadow: sticky.isSticky ? '0px 1px 10px #999' : '', 
            borderRadius: '2px'
          }}>
          <Navbar
            id={'navbar'}
            className={`fj-navbar fj-nav-base`}
            bg="transparent"
            expand="lg"
            ref={headerRef}
            style={{maxWidth: '1140px', padding: sticky.isSticky ? '0px 30px' : '20px 0px'}}
          >
            <Navbar.Brand className="fj-navbar-brand">
              <Link href="/">
                <a>Many Faces</a>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
              <Nav className="text-capitalize">
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
              </Nav>
          </Navbar.Collapse>
            <div className={'d-flex justify-content-center align-items-center'} style={{ textAlign: 'center', marginTop: '14px' }}>
                <ThemeToggle onChange={toggleTheme}/>
                {/* <button className="btn btn-success" onClick={toggleTheme}>
                  {theme.type}
                </button> */}
              {/* <Button
                // onClick={}
                size="lg"
                variant="outline-primary"
              >
                Donate
              </Button> */}
            </div>
          </Navbar>
        </div>
      </Container>
    )
}

export default NavbarMain;