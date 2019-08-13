import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as retargetEvents from 'react-shadow-dom-retarget-events'
import CartViewReact from './cart-view-react.jsx'

class CartView extends HTMLElement {

  createCartView() {
    return React.createElement(CartViewReact, [], React.createElement('slot'));
  }

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(this.mountPoint);

    ReactDOM.render(this.createCartView(), this.mountPoint);
    retargetEvents(shadowRoot);
  }
}

window.customElements.define('cart-view', CartView);
