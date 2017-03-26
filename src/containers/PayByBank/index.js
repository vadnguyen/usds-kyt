
import React from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import ExternalLink from '../../lib/components/ExternalLink';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import styles from './styles.scss';

export default function PayByBank() {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol className={styles.infoPage}>
          <Breadcrumbs>
            <Breadcrumb>
              <Link to="/account">Your Account</Link>
            </Breadcrumb>
            <Breadcrumb>
              Not Sure You Owe This Amount ?
            </Breadcrumb>
          </Breadcrumbs>

          <h1>Pay by Bank Account</h1>

          <Panel padding="extra">
            <section>
              <h2>Information you will need to have</h2>

            </section>

            <section>
              <h2>What you owe</h2>


            </section>
            <section>
              <h2>Make a payment</h2>


            </section>


          </Panel>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}
