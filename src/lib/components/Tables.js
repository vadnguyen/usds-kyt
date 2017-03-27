import React, { PropTypes } from 'react';
import classnames from '../helpers/classnames';
import styles from '../styles/Tables.scss';

/**
 * Class representing a label and a input of type="text"
 *
 * Required props:
 * - n
 *
 * Optional props:
 * - borderless: bool, defaults to false -- if true, removes verticale cell borders
 * - caption: string -- if passed, adds a caption element
 * - columns: array -- the titles of the columns,
 * - data: array -- table boy's row and column data
 * - children: node -- If data is empty, then children will be the rows and cells
 */
export function Table(props) {
  /**
   * Generates the table header cells
   * @returns {node} <th> elements
   */
  function renderHeaders(columns) {
    // Loop over the props.columns array
    return columns.map((column, index) => {
      // if each item in the array is n object, then look for  <th>
      if (typeof column === 'object') {
        return (
          <TableHeaderCell
            scope="col"
            key={index}
          >
            {column.displayName || column.colId}
          </TableHeaderCell>
        );
      }
      // if each item in the array is a string, then use that inside the <th>
      return <TableHeaderCell scope="col" key={index}>{column}</TableHeaderCell>;
    });
  }

  /**
   * Renders the table rows if data is passed in
   * @param {array} data from props.data
   * @returns {node} rendered DOM node (<tr><td>...</tr>)
   */
  function renderRows(data) {
    // Loop over the data array
    return data.map((datum, rowKey) => {
      // Loop over columns array to get the colIds
      const cells = props.columns.map(({ colId }, key) => {
        // if it's the first cell in the row, make it a <th>
        if (key === 0) {
          return (
            <TableHeaderCell scope="row" key={key}>
              {datum[colId]}
            </TableHeaderCell>
          );
        // else make it a <td>
        }

        return (
          <TableCell key={key}>
            {datum[colId]}
          </TableCell>
        );
      });
      // return a row with all the cells for each item in columns array
      return <TableRow key={rowKey}>{cells}</TableRow>;
    });
  }

  const style = classnames({
    [styles.table]: true,
    [styles.borderless]: props.borderless,
  });

  return (
    <table className={classnames(style, props.className)}>
      {/* If a caption was provided, render it */}
      {props.caption
        ? <caption>{props.caption}</caption>
        : null}

      <thead>
        <tr>{renderHeaders(props.columns)}</tr>
      </thead>

      <tbody>
        {/* If data was passed, use it to render rows. Else use children */}
        {props.data
          ? renderRows(props.data)
          : props.children}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  className: PropTypes.string,
  borderless: PropTypes.bool,
  caption: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
};

Table.defaultProps = {
  borderless: false,
};

/**
 * A table row element
 *
 * @returns {node} the rendered DOM node
 * @param {object} props  The children
 */
export function TableRow(props) {
  const { children, ...otherProps } = props;
  return (
    <tr {...otherProps}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};


/**
 * A table header cell element
 *
 * @returns {node} the rendered DOM node
 * @param {object} children  The children
 */
export function TableHeaderCell({ children, ...otherProps }) {
  return (
    <th {...otherProps}>
      {children}
    </th>
  );
}

TableHeaderCell.propTypes = {
  scope: PropTypes.oneOf([
    'col',
    'row',
  ]).isRequired,
  children: PropTypes.node.isRequired,
};

TableHeaderCell.defaultProps = {
  scope: 'row',
};


/**
 * A table cell element
 *
 * @returns {node} the rendered DOM node
 * @param {object} props  The props
 */
export function TableCell(props) {
  const { children, ...otherProps } = props;
  return (
    <td {...otherProps}>
      {children}
    </td>
  );
}

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};
