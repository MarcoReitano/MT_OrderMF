import * as React from 'react';
import axios from 'axios';

export default class OrderViewReact extends React.Component {

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  };
  componentDidMount = () => {
    axios.get("https://api.marcoreitano.dev/ticketorders")
    .then(response => {

      const newTicketOrders = response.data._embedded.ticketOrders;

      const newState = Object.assign({}, this.state,
          {ticketOrders: newTicketOrders});

      this.setState(newState);
    }).catch(error => console.log(error));
  };

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      ticketOrders: []
    };
  }

  render() {
    const {isCollapsed} = this.state;
    // const {title, children} = this.props;

    return (
        <div style={{border: 'black dashed 1px'}}>
          <header onClick={this.toggle}
                  style={{backgroundColor: 'blue', color: 'white'}}>
            Collapsible
          </header>
          <section hidden={isCollapsed}>
            {this.state.ticketOrders.map(function (ticketOrder) {
              return <div>{ticketOrder.id}</div>
            })}
          </section>
        </div>
    );
  }
}
