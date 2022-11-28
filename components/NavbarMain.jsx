import {useEffect} from 'react'
import {
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';
import Link from 'next/link'
import ThemeToggle from 'components/ThemeToggle';
import { useTheme } from 'providers/ThemeProvider';



const NavbarMain = () => {
    const { theme, toggleTheme } = useTheme();
    let timeout
    let scroll = 0
      useEffect(() => {
        window.onscroll = () => {
          if (timeout) {
            clearTimeout(timeout)
          }

          timeout = setTimeout(() => {
            if (scroll >= window.scrollY && window.scrollY > 10) {
              document.getElementById('navbar').classList.add('sticky')
              alert('if test')
            } else {
              document.getElementById('navbar').classList.remove('sticky')
              alert('else test')
            }

            scroll = window.scrollY
          }, 10)
        }
      }, [])
    return (
        <Navbar
        id={'navbar'}
        className="fj-navbar fj-nav-base"
        bg="transparent"
        expand="lg"
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
        <div style={{ textAlign: 'center' }}>
          <ThemeToggle onChange={toggleTheme} />
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
    )
}

export default NavbarMain;