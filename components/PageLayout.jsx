import { Container } from 'react-bootstrap'
import Head from 'next/Head'
import NavbarMain from './NavbarMain'
import FooterMain from './FooterMain'

import { useTheme } from 'providers/ThemeProvider';

const PageLayout = ({children, className}) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={theme.type}>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Container>
            <NavbarMain
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <div className={`page-wrapper ${className}`}>{children}</div>
            <FooterMain />
        </Container>
              <style jsx global>{`
        html, body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
        }
      `}
      </style>
    </div>
    )
}

export default PageLayout;