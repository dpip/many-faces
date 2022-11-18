import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toggle/style.css';
import 'styles/index.scss';

import ThemeProvider from 'providers/ThemeProvider';

const {
  library,
  config,
} = require('@fortawesome/fontawesome-svg-core');
import {
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
  faUser,
  faGift,
  faGraduationCap,
  faPhone,
  faEnvelope,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp,
  faUser,
  faGift,
  faGraduationCap,
  faPhone,
  faEnvelope,
  faSun,
  faMoon
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
