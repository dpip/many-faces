import { useState, useRef, useEffect, forwardRef } from 'react';
import {
  Navbar,
  Nav,
  Button,
  Container
} from 'react-bootstrap';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import MobileNav from 'components/MobileNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDonate, urlFor } from 'lib/api';

import navImg from './../assets/images/horizontal-nav.png';

const NavbarMain = () => {
    // TODO - using donate data from static props returns theme props instead of fetched data from donate schema.
    // Look into parent props
    // const [data] = donate;
    const router = useRouter()
    const currentRoute = router.pathname
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const [mobileNav, setMobileNav] = useState({active: false, display: false})
    const headerRef = useRef(null);

    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
      if (window.pageYOffset > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
      } else {
        setSticky({ isSticky: false, offset: 0 });      }
    };

    const handleMobileNav = () => {
      setMobileNav({active: !mobileNav.active, display: true})
    }

    // add/remove scroll event listener
    useEffect(() => {
      let header = headerRef.current.getBoundingClientRect();
      const handleScrollEvent = () => {
        handleScroll(header.top, header.height)
      }

      window.addEventListener('scroll', handleScrollEvent);

      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, []);

    return (
      <Container className={'nav-wrapper'} >
        <div 
          className={`navbar-main ${sticky.isSticky ? 'sticky' : ''} p-o d-flex justify-content-center`} 
          style={{
            borderRadius: '2px'
          }}>
          <Navbar
            id={'navbar'}
            className={`fj-navbar fj-nav-base`}
            bg="transparent"
            expand="lg"
            ref={headerRef}
            style={{maxWidth: '1140px', padding: sticky.isSticky ? '5px 0px' : '20px 0px'}}
          >
            <Navbar.Brand className="fj-navbar-brand d-flex align-items-center" style={{cursor: 'pointer'}}>
              <Link href="/">
                <a style={{display: 'flex', justifyContent: 'center'}}>
                  <h3 className={'m-0'}>Logo</h3>
                </a>   
              </Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className="d-sm-none d-lg-flex justify-content-end">
              <Nav className="text-capitalize">
                  <Nav.Link
                  className={`fj-navbar-item fj-navbar-link`}
                  as={() =>
                    <Link href='/apply'>
                      <a className={`fj-navbar-item fj-navbar-link text-capitalize ${currentRoute === '/apply' ? 'activeRoute' : ''}`}>Gallery</a>
                    </Link>
                  }
                  />
                  <Nav.Link
                  className="fj-navbar-item fj-navbar-link"
                  as={() =>
                    <Link href='/about'>
                      <a className={`fj-navbar-item fj-navbar-link text-capitalize ${currentRoute === '/about' ? 'activeRoute' : ''}`}>About</a>
                    </Link>
                  }
                  />
                  <Nav.Link
                  className="fj-navbar-item fj-navbar-link"
                  as={() =>
                    <Link href='/blog'>
                      <a className={`fj-navbar-item fj-navbar-link text-capitalize ${currentRoute === '/blog' ? 'activeRoute' : ''}`}>Blog</a>
                    </Link>
                  }
                  />
                  <Nav.Link
                  className="fj-navbar-item fj-navbar-link"
                  as={() =>
                    <Link href='/contact'>
                      <a className={`fj-navbar-item fj-navbar-link text-capitalize ${currentRoute === '/contact' ? 'activeRoute' : ''}`}>Contact</a>
                    </Link>
                  }
                  />
              </Nav>
            </Navbar.Collapse>
            <div className={'d-flex justify-content-center align-items-center'}>
              {/* <span className={'d-none d-lg-flex'} style={{ textAlign: 'center' }}>
                <div
                  style={{ textAlign: 'center'}}
                >
                  <a
                    href={'https://donate.stripe.com/8wMeWJ2rK7Z37QcdQQ'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline-primary">
                      Donate
                    </Button>
                  </a>
                </div>
              </span> */}
              <span className={'d-flex d-lg-none'}>
                <Button
                  className={'mobile-nav-menu-toggle'}
                  onClick={handleMobileNav}
                  size="sm"
                >
                  <FontAwesomeIcon
                  size="2x"
                  icon={'bars'}
                />
                </Button>
              </span>
            </div>
          </Navbar>
        </div>

        <MobileNav active={mobileNav.active} action={handleMobileNav} display={mobileNav.display}/>
      </Container>
    )
}

export default NavbarMain;

export async function getStaticProps() {
  const donate = await getDonate();
  return {
    props: {
      donate,
    },
  };
}