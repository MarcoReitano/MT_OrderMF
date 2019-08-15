import * as React from 'react';
import axios from 'axios';
import ReactWebComponent from "react-web-component";

export default class CartViewReact extends React.Component {
  componentDidMount = () => {
    console.log("Cart view auth: " + keycloak.authenticated);

    if (keycloak.authenticated) {
      this.fetchShoppingCart();
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  fetchShoppingCart() {
    axios.get("https://api.marcoreitano.dev/shoppingcart",
        {headers: {'Authorization': "bearer " + keycloak.token}})
    .then(response => {
      this.setState({cartItems: response.data.cartItems});
      console.log(this.state.cartItems);
    }).catch(error => console.log(error));
  }

  render() {
    return (
        <div>
          ShoppingcartView
          {this.state.cartItems.map(function (item) {
            return <div>HALLO</div>
          })}
        </div>
    );
  }
}
ReactWebComponent.create(<CartViewReact/>, 'cart-view');
