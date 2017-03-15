
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import OfficialSiteBanner from '../../lib/components/OfficialSiteBanner';
import styles from './styles.scss';

function App({ children }) {
  return (
    <div>
      <OfficialSiteBanner />
      <FlexContainer>
        <FlexRow>
          {/* <FlexCol md="2">
            <div>
              <Link className={styles.link} to="/">Home</Link>
            </div>
            <div>
              <Link className={styles.link} to="/tools">Tools</Link>
            </div>
          </FlexCol> */}
          <FlexCol md="12">
            {children}
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
