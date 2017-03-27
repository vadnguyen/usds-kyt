
import React from 'react';
import { browserHistory } from 'react-router';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import { CheckList, CheckListItem } from '../../lib/components/CheckList';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import PrimaryButton from '../../lib/components/PrimaryButton';
import SecondaryButton from '../../lib/components/SecondaryButton';
import styles from './styles.scss';

export default function PayByCard() {
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
              Pay by Credit or Debit Card
            </Breadcrumb>
          </Breadcrumbs>

          <h1>Pay by Credit or Debit Card</h1>

          <Panel padding="extra">
            <section>
              <h2>Information you will need to have available:</h2>
              <p>
                 You will be given the opportunity to select a payment processor of your choice from a list of providers.
              </p>
              <p>
                 To make a payment by card, you will need to have the following information available:
              </p>
              <CheckList>
                <CheckListItem>
                  Reason for payment <span className={styles.eg}>(e.g. Tax Return or Notice, Estimated Tax)</span>
                </CheckListItem>
                <CheckListItem>
                  Payment type <span className={styles.eg}>(e.g. 1040)</span>
                </CheckListItem>
                <CheckListItem>
                  Tax year associated with the payment <span className={styles.eg}>(Note: if you are paying towards multiple tax years you should enter them as separate payments)</span>
                </CheckListItem>
                <CheckListItem>
                  Balance you owe or amount you want to pay <span className={styles.eg}>(e.g. $500)</span>
                </CheckListItem>
                <CheckListItem>
                  Personal information of the Primary Taxpayer for the payment you want to make <span className={styles.eg}>( e.g. Name, Address, and Taxpayer Identification Number)</span>
                </CheckListItem>
              </CheckList>
            </section>

            <section>
              <h2>What you owe <span className={styles.basedOn}>(Based on our current data)</span></h2>

              <Table
                caption="What you owe by year"
                className={styles.oweTable}
                borderless
                columns={['Tax Year', 'Reason for Payment', 'Payment Type', 'Amount Owed']}
              >
                <TableRow>
                  <TableHeaderCell>2015</TableHeaderCell>
                  <TableCell>Tax Return or Notice</TableCell>
                  <TableCell>1040</TableCell>
                  <TableCell>$1,054.74</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>2014</TableHeaderCell>
                  <TableCell>Tax Return or Notice</TableCell>
                  <TableCell>Shared Responsibility Payment (Healthcare)</TableCell>
                  <TableCell>$233.89</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>2013</TableHeaderCell>
                  <TableCell>Tax Return or Notice</TableCell>
                  <TableCell>1040</TableCell>
                  <TableCell>$149.37</TableCell>
                </TableRow>
              </Table>


            </section>
            <section>
              <h2>Make a payment</h2>
              <p>If you are paying towards multiple tax years you should enter them as separate payments.</p>
              <PrimaryButton
                externalLink
                padded
                onClick={testExternal}
                title="This button will open an IRS page showing payment options in a new window"
              >
                Go to payment options
              </PrimaryButton>
              <SecondaryButton padded onClick={returnHome}>Back to account</SecondaryButton>
            </section>


          </Panel>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}
