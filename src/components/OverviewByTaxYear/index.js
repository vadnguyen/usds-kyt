import React from 'react';
import Panel from '../../lib/components/Panel';
import { Table, TableRow, TableCell } from '../../lib/components/Tables';
import styles from './styles.scss';

export default function OverviewByTaxYear() {
  return (
    <Panel title="Overview by Tax Year">
      <Table
        borderless
        className={styles.overview}
        srCaption="What you owe by tax year"
        columns={['Tax Year', 'You Owe']}
      >
        <TableRow>
          <TableCell>2015</TableCell>
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
