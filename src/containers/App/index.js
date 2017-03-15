
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/FlexGrid';
import styles from './styles.scss';

function App({ children }) {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol md="2">
          <div>
            <Link className={styles.link} to="/">Home</Link>
          </div>
          <div>
            <Link className={styles.link} to="/tools">Tools</Link>
          </div>
        </FlexCol>
        <FlexCol md="10">
          {children}
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
