import React from 'react';

import { SearchModalContextProvider } from '../context/searchModalContext';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import Search from './search/SearchModal';

const Layout = ({ children }) => (
  <SearchModalContextProvider>
    <GlobalStyles />
    <Search />
    <Header />
    {children}
    <Footer />
  </SearchModalContextProvider>
);

export default Layout;
