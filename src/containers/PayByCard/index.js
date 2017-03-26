
import React from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import ExternalLink from '../../lib/components/ExternalLink';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import { CheckList, CheckListItem } from '../../lib/components/CheckList';
import styles from './styles.scss';

export default function PayByCard() {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol className={styles.infoPage}>
          <Breadcrumbs>
            <Breadcrumb>
              <Link to="/account">Your Account</Link>
            </Breadcrumb>
            <Breadcrumb>
              Pay by Credit or Debit Card
            </Breadcrumb>
          </Breadcrumbs>

          <h1>Pay by Credit or Debit Card</h1>

          <Panel padding="extra">
            <section>
              <p>
                 You will be given the opportunity to select a payment processor of your choice from a list of providers.
              </p>
              <p>
                 To make a payment by card, you will need to have the following information available:
              </p>
              <CheckList>
                <CheckListItem>
                  <strong>Reason for payment</strong> (e.g. Tax Return or Notice, Estimated Tax)
                </CheckListItem>
                <CheckListItem>
                  <strong>Payment type</strong> (e.g. 1040)
                </CheckListItem>
                <CheckListItem>
                  <strong>Tax year associated with the payment</strong> (Note: if you are paying towards multiple tax years you should enter them as separate payments)
                </CheckListItem>
                <CheckListItem>
                  <strong>Balance you owe or amount you want to pay</strong> (e.g. $500)
                </CheckListItem>
                <CheckListItem>
                  <strong>Personal information of the Primary Taxpayer</strong> (Name, Address, and Taxpayer Identification Number) <strong>for the payment you want to make</strong>
                </CheckListItem>
              </CheckList>
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
