import * as React from 'react';
import ReactWebComponent from 'react-web-component';
import axios from 'axios';

export default class AddCartButtonReact extends React.Component {
  handleDropDown = () => {
    this.setState({dropdown: !this.state.dropdown});
  };
  handleAmountSelection = (foo) => {
    this.setState({selectedAmount: foo});
  };
  handleAddToCart = () => {
    console.log("Add to cart: " + this.state.selectedAmount)
    // Rest Call
    axios.post("https://api.marcoreitano.dev/shoppingcarts",
        {
          ticket: {
            uri: this.props.ticketuri
          },
          quantity: this.state.selectedAmount
        },
        {headers: {'Authorization': "bearer " + keycloak.token}}
    )
    .then(response => {
    })
    .catch(error => {
      console.log("Axios Error");
      console.log("Status: " + error.response.status);
      console.log("Data: " + error.response.data);
      console.log("Headers: " + error.response.headers)
    });
  };
  componentDidMount = () => {
    console.log(this.props.ticketuri);
    console.log(this.props.available);
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedAmount: 1,
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      dropdown: false
    };
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
          <div
              className={"dropdown" + (this.state.dropdown ? ' is-active'
                  : '')}
              onClick={this.handleDropDown}>
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true"
                      aria-controls="dropdown-menu">
                <span>{this.state.selectedAmount}</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"/>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {
                  this.state.amounts.map((value, index) => (
                          <a className="dropdown-item"
                             onClick={(e) => this.handleAmountSelection(value, e)}
                             key={index}>
                            {value}
                          </a>
                      )
                  )
                }
              </div>
            </div>
          </div>
          <button className="button is-primary"
                  onClick={this.handleAddToCart}>
            <span className="icon">
              <i className="fa fa-cart-plus"></i>
            </span>
            <span>
             Add to cart
            </span>
          </button>
        </div>
    );
  }
}

ReactWebComponent.create(<AddCartButtonReact/>, 'order-add-cart-button');
