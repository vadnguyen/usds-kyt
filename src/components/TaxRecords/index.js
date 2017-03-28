import React from 'react';
import Panel from '../../lib/components/Panel';
import PrimaryButton from '../../lib/components/PrimaryButton';
import { Table, TableRow, TableCell } from '../../lib/components/Tables';
import styles from './styles.scss';

export default function TaxRecords() {
  return (
    <Panel title="Tax Records">
      <div className={styles.padded}>
        <p className={styles.bitty}>
          Key information from your current tax return as originally filed.
        </p>
      </div>

      {/* <h3 className={styles.year}>2016</h3> */}
      <Table
        borderless
        className={styles.records}
        srCaption="Summary of tax record information for 2016"
        columns={['Info', '2016']}
      >
        <TableRow>
          <TableCell>Form filed</TableCell>
          <TableCell><strong>1040 EZ</strong></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Filing status</TableCell>
          <TableCell><strong>Single</strong></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total exemptions claimed</TableCell>
          <TableCell><strong>1</strong></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Adjusted gross income</TableCell>
          <TableCell><strong>$38,302.07</strong></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Balance owed</TableCell>
          <TableCell><strong>$1,054.74</strong></TableCell>
        </TableRow>
      </Table>

      <div className={styles.padded}>
        <p className={styles.bitty}>
          View, print or download your tax records using the button below
        </p>
        <PrimaryButton block externalLink>Get tax records online</PrimaryButton>
      </div>
    </Panel>
  );
}
