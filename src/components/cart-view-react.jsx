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

  handleDelete() {
    console.log("Should delete");
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
          {this.state.cartItems.map((item) => (
                  <div>
                    <div>{item.quantity}</div>
                    <div>{item.ticket.uri}</div>
                    <button className="button" onClick={this.handleDelete}>
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
