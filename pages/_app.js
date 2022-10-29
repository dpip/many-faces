import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';

const {
  library,
  config,
} = require('@fortawesome/fontawesome-svg-core');
import {
  faBorderAll,
  faList,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faList, faBorderAll);

import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
