
import React from 'react';
import PaymentOptions from '../../components/PaymentOptions';
import Alert from '../../lib/components/Alert';
import Label from '../../lib/components/Label';
import Panel from '../../lib/components/Panel';
import PrimaryButton from '../../lib/components/PrimaryButton';
import SecondaryButton from '../../lib/components/SecondaryButton';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import styles from './styles.scss';

function Account() {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol>
          <Alert
            type="warning"
            title="Your account is in jeopardy of lien or levy."
            body={'Please pay immediately by bank account, by card, or set up a payment plan, if applicable. Resolve your balance, or we may file a Notice of Federal Tax Lien (if we haven\'t already) and levy your assets.'}
          />
        </FlexCol>
      </FlexRow>
      <FlexRow>
        <FlexCol md="8">
          <Panel padded title="Balance due">
            Big panel goes here
          </Panel>
        </FlexCol>
        <FlexCol md="4">
          <PaymentOptions />
        </FlexCol>
      </FlexRow>
    </FlexContainer>


  );
}

export default Account;
