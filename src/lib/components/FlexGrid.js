import React, { PropTypes } from 'react';
import classnames from '../helpers/classnames';
import styles from '../styles/FlexGrid.scss';

export function FlexContainer({ children, fluid }) {
  const style = classnames({
    [styles.container]: !fluid,
    [styles['container-fluid']]: fluid,
  });

  return (
    <div className={classnames(style)}>
      {children}
    </div>
  );
}

FlexContainer.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
};

export function FlexRow(props) {
  const alignmentClassName = classnames({
    [styles.row]: true,
    [styles[`align-items-${props.align}`]]: props.align,
    [styles[`align-self-${props.alignSelf}`]]: props.alignSelf,
    [styles[`justify-content-${props.justify}`]]: props.justify,
  });

  return (
    <div className={classnames(alignmentClassName, props.className)}>
      {props.children}
    </div>
  );
}

FlexRow.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
  alignSelf: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
  justify: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'around',
    'between',
  ]),
  className: PropTypes.string,
};

export function FlexCol(props) {
  let sizeClassName = classnames({
    [styles[`col-${props.xs}`]]: props.xs,
    [styles[`col-sm-${props.sm}`]]: props.sm,
    [styles[`col-md-${props.md}`]]: props.md,
    [styles[`col-lg-${props.lg}`]]: props.lg,
    [styles[`col-xl-${props.xl}`]]: props.xl,
  });

  if (!props.sm && !props.md && !props.lg && !props.xl) {
    sizeClassName = styles.col;
  }

  const offsetClassName = classnames({
    [styles[`offset-${props.xsOffset}`]]: props.xsOffset,
    [styles[`offset-sm-${props.smOffset}`]]: props.smOffset,
    [styles[`offset-md-${props.mdOffset}`]]: props.mdOffset,
    [styles[`offset-lg-${props.lgOffset}`]]: props.lgOffset,
    [styles[`offset-xl-${props.xlOffset}`]]: props.xlOffset,
  });

  const pullClassName = classnames({
    [styles[`pull-${props.xsPull}`]]: props.xsPull,
    [styles[`pull-sm-${props.smPull}`]]: props.smPull,
    [styles[`pull-md-${props.mdPull}`]]: props.mdPull,
    [styles[`pull-lg-${props.lgPull}`]]: props.lgPull,
    [styles[`pull-xl-${props.xlPull}`]]: props.xlPull,
  });

  const pushClassName = classnames({
    [styles[`push-${props.xsPush}`]]: props.xsPush,
    [styles[`push-sm-${props.smPush}`]]: props.smPush,
    [styles[`push-md-${props.mdPush}`]]: props.mdPush,
    [styles[`push-lg-${props.lgPush}`]]: props.lgPush,
    [styles[`push-xl-${props.xlPush}`]]: props.xlPush,
  });

  return (
    <div
      className={classnames(
        sizeClassName, offsetClassName, pullClassName,
        pushClassName, props.className
      )}
    >
      {props.children}
    </div>
  );
}

FlexCol.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  xsOffset: PropTypes.string,
  smOffset: PropTypes.string,
  mdOffset: PropTypes.string,
  lgOffset: PropTypes.string,
  xlOffset: PropTypes.string,
  xsPull: PropTypes.string,
  smPull: PropTypes.string,
  mdPull: PropTypes.string,
  lgPull: PropTypes.string,
  xlPull: PropTypes.string,
  xsPush: PropTypes.string,
  smPush: PropTypes.string,
  mdPush: PropTypes.string,
  lgPush: PropTypes.string,
  xlPush: PropTypes.string,
};
