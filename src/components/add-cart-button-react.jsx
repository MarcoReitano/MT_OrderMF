import * as React from 'react';

export default class AddCartButtonReact extends React.Component {
  componentDidMount = () => {

    // // Rest Call
    // axios.get("https://api.marcoreitano.dev/shoppingcarts")
    // .then(response => {
    //
    //   const newShoppingCart = response.data._embedded.shoppingCarts;
    //
    //   const newState = Object.assign({}, this.state,
    //       {shoppingCarts: newShoppingCart});
    //
    //   this.setState(newState);
    // }).catch(error => console.log(error));
  };
  handleDropDown = () => {
    this.setState({dropdown: !this.state.dropdown});
  };

  handleAmountSelection = (foo) => {
    this.setState({selectedAmount: foo});
  };

  handleAddToCart = () => {
    console.log("Add to cart: " + this.state.selectedAmount)
  };

  constructor(props) {
    super(props);
    this.state = {
      shoppingCarts: [],
      selectedAmount: 1,
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      dropdown: false
    }
    ;
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
