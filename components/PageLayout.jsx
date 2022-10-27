import { Container } from 'react-bootstrap'
import Head from 'next/Head'
import NavbarMain from './NavbarMain'
import FooterMain from './FooterMain'

const PageLayout = ({children, className}) => {
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Container>
            <NavbarMain />
            <div className={`page-wrapper ${className}`}>{children}</div>
            <FooterMain />
        </Container>
        </>
    )
}

export default PageLayout;