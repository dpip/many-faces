import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'

import NavbarMain from './NavbarMain'
import FooterMain from './FooterMain'

import { useTheme } from 'providers/ThemeProvider';

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const PageLayout = ({children, className}) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={theme.type}>
        <Container>
            <NavbarMain
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                duration: 0.75,
                }}
                className="nav-bar"
            >
                <div className={`page-wrapper ${className}`}>{children}</div>
            </motion.div>
            <hr />
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