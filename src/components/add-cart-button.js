import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as retargetEvents from 'react-shadow-dom-retarget-events'
import AddCartButtonReact from "./add-cart-button-react.jsx";

class AddCartButton extends HTMLElement {

  createAddCartButton() {
    return React.createElement(AddCartButtonReact, [],
        React.createElement('slot'));
  }

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(this.mountPoint);

    ReactDOM.render(this.createAddCartButton(), this.mountPoint);
    retargetEvents(shadowRoot);
  }
}

window.customElements.define('order-add-cart-button', AddCartButton);
