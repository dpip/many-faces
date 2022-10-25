import { Container } from 'react-bootstrap'
import NavbarMain from './NavbarMain'
import FooterMain from './FooterMain'

const PageLayout = ({children, className}) => {
    return (
        <Container>
            <NavbarMain />
            <div className={`page-wrapper ${className}`}>{children}</div>
            <FooterMain />
        </Container>
    )
}

export default PageLayout;