import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toggle/style.css';
import 'styles/index.scss';
import { AnimatePresence } from 'framer-motion';

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
    <ThemeProvider
      breakPoints={[
        'xxxl',
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs',
        'xxs',
      ]}
      minBreakpoint="xxs"
    >
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
