import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as retargetEvents from 'react-shadow-dom-retarget-events'
import CartIconReact from './cart-icon-react.jsx'

class CartIcon extends HTMLElement {

  createCartIcon() {
    return React.createElement(CartIconReact, [], React.createElement('slot'));
  }

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(this.mountPoint);

    ReactDOM.render(this.createCartIcon(), this.mountPoint);
    retargetEvents(shadowRoot);
  }
}

window.customElements.define('order-shoppingcart-icon', CartIcon);
