
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/FlexGrid';
import styles from './styles.scss';

function App({ children }) {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol>
          <Link className={styles.link} to="/">Home</Link>
        </FlexCol>
        <FlexCol>
          <Link className={styles.link} to="/tools">Tools</Link>
        </FlexCol>
      </FlexRow>
      <FlexRow>
        <FlexCol md="12">
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
