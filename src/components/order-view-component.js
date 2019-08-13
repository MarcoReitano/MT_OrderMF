import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as retargetEvents from 'react-shadow-dom-retarget-events'
import OrderViewReact from './order-view-react.jsx';

class OrderView extends HTMLElement {

  createOrderView() {
    return React.createElement(OrderViewReact, [], React.createElement('slot'));
  }

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(this.mountPoint);

    ReactDOM.render(this.createOrderView(), this.mountPoint);
    retargetEvents(shadowRoot);
  }
}

window.customElements.define('order-view', OrderView);
