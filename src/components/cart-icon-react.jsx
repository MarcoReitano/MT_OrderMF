import * as React from 'react';
import axios from 'axios';

export default class CartIconReact extends React.Component {
  componentDidMount = () => {

    // Load Fonnawesome and append to webcomponent shadowdom
    const s = document.createElement('script');
    s.src = "https://kit.fontawesome.com/234e3f962f.js";
    s.type = 'text/javascript';
    s.async = true;
    this.instance.appendChild(s);

    // Rest Call
    axios.get("https://api.marcoreitano.dev/shoppingcarts")
    .then(response => {

      const newShoppingCart = response.data._embedded.shoppingCarts;

      const newState = Object.assign({}, this.state,
          {shoppingCarts: newShoppingCart});

      this.setState(newState);
    }).catch(error => console.log(error));
  };

  constructor(props) {
    super(props);
    this.state = {
      shoppingCarts: []
    };
  }

  render() {
    return (
        <div ref={el => (this.instance = el)}>
          <a class="fas fa-shopping-cart" href="/shoppingcart"/>
          ICON {this.state.shoppingCarts.length}
        </div>
    );
  }
}
