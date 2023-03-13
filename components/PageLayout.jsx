import { Container } from 'react-bootstrap'
import Head from 'next/Head'
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
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={variants}
                transition={{ type: 'linear' }}
                className="
                        flex flex-col items-start w-full pt-10
                        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                        pt-24 h-full
                    "
                >
                 <div className={`page-wrapper ${className}`}>{children}</div>
            </motion.main>
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