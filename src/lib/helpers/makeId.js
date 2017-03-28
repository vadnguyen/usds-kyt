import ReactDOM from 'react-dom';

let index = 0;

/**
 * Returns a unique identifier for the supplied component instance.
 *
 * This method should only be called from `componentDidMount`.
 *
 * This method attempts to re-use an existing unique ID (e.g. `data-reactid`)
 * as much as possible.  If no such unique ID exists, it will generate a
 * UUID to use for the component instance.
 *
 * @param {React.Component} component The React component to compute a unique
 *                                    identifier for.
 * @returns {String} A unique identifier for the supplied component.
 */
export default function makeId(component) {
  const node = ReactDOM.findDOMNode(component); // eslint-disable-line react/no-find-dom-node

  if (node) {
    if (node.hasAttribute('data-reactid')) {
      const attr = node.getAttribute('data-reactid');
      return `data-reactid-${attr}`;
    }
  }
  index += 1;

  return `component-unique-id-${index}`;
}
