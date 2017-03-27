
import React from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import Alert from '../../lib/components/Alert';
import { CheckList, CheckListItem } from '../../lib/components/CheckList';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import PrimaryButton from '../../lib/components/PrimaryButton';
import SecondaryButton from '../../lib/components/SecondaryButton';
import { browserHistory } from 'react-router';
import styles from './styles.scss';

export default function PayByBank() {
  function returnHome() {
    browserHistory.push('/');
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
              Not Sure You Owe This Amount ?
            </Breadcrumb>
          </Breadcrumbs>

          <h1>Pay by Bank Account</h1>

          <Panel padding="extra">
            <section>
              <h2>Information you will need to have available</h2>
              <p>For verification purposes, the following information from a tax return within the last six years:</p>
              <CheckList>
                <CheckListItem>
                  Personal information of the Primary Taxpayer for the payment you want to make <span className={styles.eg}>( e.g. Name, Address, and Taxpayer Identification Number)</span>
                </CheckListItem>
                <CheckListItem>
                  Tax return details <span className={styles.eg}>(tax year, filing status; the tax year you use for verification does not have to match the tax year(s) for which you are making a payment)</span>
                </CheckListItem>
              </CheckList>

              <p>For the payment</p>
              <CheckList>
                <CheckListItem>
                  Bank account number and routing number
                </CheckListItem>
                <CheckListItem>
                  Payment type                                                                                                                                                                                                                                                  <span className={styles.eg}>(e.g., estimated tax)</span>
                </CheckListItem>
                <CheckListItem>
                  Details on what you owe <span className={styles.eg}>(tax year, amount owed). If you owe, the amount(s) will appear in the table below</span>
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

              <Alert className={styles.spaced} type="info" body="IRS Direct Pay is a separate and secure online IRS system. You will need to provide IRS Direct Pay credentials to access and make a payment with this system." />

              <PrimaryButton externalLink padded>Go to IRS Direct Pay</PrimaryButton>
              <SecondaryButton padded onClick={returnHome}>Back to account</SecondaryButton>
            </section>


          </Panel>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}
