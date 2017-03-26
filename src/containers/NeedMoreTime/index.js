
import React from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import styles from './styles.scss';

export default function NeedMoreTime() {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol className={styles.infoPage}>
          <Breadcrumbs>
            <Breadcrumb>
              <Link to="/account">Your Account</Link>
            </Breadcrumb>
            <Breadcrumb>
              Need More Time to Pay?
            </Breadcrumb>
          </Breadcrumbs>

          <h1>Need More Time to Pay?</h1>

          <Panel padding="extra">
            <section>
              <h2>Payment Plans</h2>
              <p>
                {'If you need more time to pay you may apply for one of the following Payment Plans that best fits your needs:'}
              </p>
            </section>
          </Panel>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}
