import React from 'react';
import Panel from '../../lib/components/Panel';
import PrimaryButton from '../../lib/components/PrimaryButton';
import SecondaryButton from '../../lib/components/SecondaryButton';
import styles from './styles.scss';

export default function PaymentOptions() {
  return (
    <Panel padded title="Payment Options" className={styles.paymentOptions}>
      <p className={styles.bitty}>Fees may apply when paying by card</p>
      <PrimaryButton block>Pay by bank account</PrimaryButton>
      <PrimaryButton block>Pay by card</PrimaryButton>
      <SecondaryButton block>Need more time to pay?</SecondaryButton>
    </Panel>
  );
}
