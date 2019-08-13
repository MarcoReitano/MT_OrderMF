import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as retargetEvents from 'react-shadow-dom-retarget-events'
import OrderViewReact from './order-view-react.jsx';

class OrderView extends HTMLElement {
  // mountPoint: HTMLSpanElement;
  // title: string;

  // static get observedAttributes() {
  //   return ['title'];
  // }

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

  // attributeChangedCallback(name: string, oldValue: any, newValue: any) {
  //   if (name === 'title') {
  //     ReactDOM.render(this.createCollapsed(newValue), this.mountPoint);
  //   }
  // }
}

window.customElements.define('order-view', OrderView);
