import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toggle/style.css';
import 'styles/index.scss';
import 'styles/navbar.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

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
  faBars,
  faXmark,
  faFileSignature,
  faHouse,
  faHandHoldingDollar,
  faCircleInfo,
  faHandshake,
  faBlog,
  faAddressCard,
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
  faMoon,
  faBars,
  faXmark,
  faFileSignature,
  faHouse,
  faHandHoldingDollar,
  faCircleInfo,
  faHandshake,
  faBlog,
  faAddressCard
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            animateState: {
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            exitState: {
              clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            },
          }}
          className="base-page-size"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
