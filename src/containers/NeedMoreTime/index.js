
import React from 'react';
import { browserHistory } from 'react-router';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import PrimaryButton from '../../lib/components/PrimaryButton';
import SecondaryButton from '../../lib/components/SecondaryButton';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import styles from './styles.scss';

export default function NeedMoreTime() {
  function returnHome() {
    browserHistory.push('/account');
  }

  function testExternal() {
    window.location.href = 'http://www.apple.com/';
  }

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
              <ul>
                <li>
                  <strong>Short Term Payment Plan</strong> gives you extra time to pay your balance in full with low interest and penalties
                </li>
                <li>
                  <strong>Monthly Payment Plan</strong> allows you to make monthly payments to pay off your balance
                </li>
              </ul>

              <h3>Do You Qualify?</h3>
              <p>You may qualify if you owe $50,000 or less in combined tax, penalties and interests, and filed all required returns. You may also qualify for a Short Term agreement if your balance is under $100,000.</p>

              <h3>Already Have an Existing Payment Plan?</h3>
              <p>Make a revision to your current Payment Plan.</p>

              <PrimaryButton
                padded
                externalLink
                onClick={testExternal}
                title="This button will open an IRS application to make or adjust a payment plan in a new window"
              >
                Go to payment plan
              </PrimaryButton>
              <SecondaryButton
                padded
                onClick={returnHome}
              >
                Back to account
              </SecondaryButton>
            </section>
          </Panel>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}
