import * as React from 'react';
import axios from 'axios';

export default class CartIconReact extends React.Component {
  componentDidMount = () => {

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
    const badgecss = `
    .fa-stack[data-count]:after{
      position:absolute;
      right:0%;
      top:1%;
      content: attr(data-count);
      font-size:30%;
      padding:.6em;
      border-radius:999px;
      line-height:.75em;
      color: white;
      background:rgba(255,0,0,.85);
      text-align:center;
      min-width:2em;
      font-weight:bold;
    }
  `;
    return (
        <div>
          <style>
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free.min.css";
            {badgecss}
            }
          </style>
          <a className="fa-stack fa-2x has-badge"
             href="/shoppingcart"
             data-count={this.state.shoppingCarts.length}>
            <i className="fa fa-shopping-cart fa-stack-1x"></i>
          </a>
        </div>
    );
  }
}
