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
      shoppingCart: {}
    };
  }

  fetchShoppingCart() {
    axios.get("https://api.marcoreitano.dev/shoppingcart",
        {headers: {'Authorization': "bearer " + keycloak.token}})
    .then(response => {
      this.setState({shoppingCart: response.data});
      console.log(this.state.shoppingCart);
    }).catch(error => console.log(error));
  }

  handleDelete() {
    console.log("Should delete");
  }

  handleOrder() {
    console.log("Order now");
  }

  render() {
    return (
        <div>
          <style>
            @import
            "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free.min.css";
          </style>
          ShoppingcartView
          <button className="button" onClick={this.handleOrder}>
            Order now!
          </button>
          {this.state.shoppingCart.cartItems.map((item) => (
                  <div className="box">
                    <div>{item.quantity}</div>
                    <div>{item.ticket.uri}</div>
                    <button className="button is-small" onClick={this.handleDelete}>
                      <i className="fas fa-times"/>
                    </button>
                  </div>
              )
          )}
        </div>
    );
  }
}
ReactWebComponent.create(<CartViewReact/>, 'cart-view');
