import React from 'react';
import { browserHistory } from 'react-router';
import Panel from '../../lib/components/Panel';
import PrimaryButton from '../../lib/components/PrimaryButton';
import SecondaryButton from '../../lib/components/SecondaryButton';
import styles from './styles.scss';

export default function PaymentOptions() {
  function payByBankClick() {
    browserHistory.push('/paybybank');
  }
  function payByCardClick() {
    browserHistory.push('/paybycard');
  }
  function needMoreTimeClick() {
    browserHistory.push('/needmoretime');
  }
  return (
    <Panel padding="normal" title="Payment Options" className={styles.paymentOptions}>
      <p className={styles.bitty}>Fees may apply when paying by card</p>
      <PrimaryButton block onClick={payByBankClick}>Pay by bank account</PrimaryButton>
      <PrimaryButton block onClick={payByCardClick}>Pay by card</PrimaryButton>
      <SecondaryButton block onClick={needMoreTimeClick}>Need more time to pay?</SecondaryButton>
    </Panel>
  );
}
