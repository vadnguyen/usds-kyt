
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
// import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import OfficialSiteBanner from '../../lib/components/OfficialSiteBanner';
import IrsHeader from '../../lib/components/IrsHeader';
import Footer from '../../lib/components/Footer';
import '../../lib/styles/irs-core.scss';
import styles from './styles.scss';

function App({ children }) {
  return (
    <div>

      <div className={styles.links}>
        <Link to="/">Sticker sheet</Link>
        <Link to="/account">Account</Link>
      </div>

      <OfficialSiteBanner />
      <IrsHeader />
      {children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
