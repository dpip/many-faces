import React from 'react';

import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
