import React from 'react';
import Panel from '../../lib/components/Panel';
import { Table, TableRow, TableCell } from '../../lib/components/Tables';
import styles from './styles.scss';

export default function RecentPayments() {
  return (
    <Panel title="Recent Payments">
      <p className={styles.bitty}>
        Payments may take 2 days (electronic) to 3 weeks (mail) to be listed.
      </p>
      <Table
        borderless
        className={styles.payments}
        srCaption="What you owe by tax year"
        columns={['Tax Year/Type', 'Amount/Date']}
      >
        <TableRow>
          <TableCell>
            2015
          </TableCell>
          <TableCell>$1,054.74</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2014</TableCell>
          <TableCell>$210.59</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2013</TableCell>
          <TableCell>$172.67</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2013</TableCell>
          <TableCell>$172.67</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2012</TableCell>
          <TableCell>$0</TableCell>
        </TableRow>
      </Table>
    </Panel>
  );
}
