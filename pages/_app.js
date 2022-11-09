import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'styles/index.scss';

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
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp,
  faUser,
  faGift,
  faGraduationCap
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
