
import React from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import { CheckList, CheckListItem } from '../../lib/components/CheckList';
import { Table, TableRow, TableCell } from '../../lib/components/Tables';
import PrimaryButton from '../../lib/components/PrimaryButton';
import SecondaryButton from '../../lib/components/SecondaryButton';
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
              <h2>Information you will need to have available:</h2>
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
              <h2>What you owe <span className={styles.basedOn}>(Based on our current data)</span></h2>

              <Table borderless columns={['Tax Year', 'Reason for Payment', 'Payment Type', 'Amount Owed']}>
                <TableRow>
                  <TableCell>2015</TableCell>
                  <TableCell>Tax Return or Notice</TableCell>
                  <TableCell>1040</TableCell>
                  <TableCell>$1,054.74</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2014</TableCell>
                  <TableCell>Tax Return or Notice</TableCell>
                  <TableCell>Shared Responsibility Payment (Healthcare)</TableCell>
                  <TableCell>$233.89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2013</TableCell>
                  <TableCell>Tax Return or Notice</TableCell>
                  <TableCell>1040</TableCell>
                  <TableCell>$149.37</TableCell>
                </TableRow>
              </Table>


            </section>
            <section>
              <h2>Make a payment</h2>
              <p>If you are paying towards multiple tax years you should enter them as separate payments.</p>
              <PrimaryButton>Go to payment options</PrimaryButton>
              <SecondaryButton>Back to account</SecondaryButton>


            </section>


          </Panel>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}
