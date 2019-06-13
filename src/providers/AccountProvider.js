// src/providers/AccountProvider
import React, { Component } from "react";

// Setup the Initial Context
const AccountContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// create the provider using the traditional React.Component class

export default class AccountProvider extends Component {
  state = {
    username: "Crunchy crunch",
    dateJoined: "9/1/18",
    membershipLevel: "Silver",
    updateAccount: updatedAccount => this.updateAccount(updatedAccount)
  };

  render() {
    return (
      // value prop is where we define what values that are accessible to consumer components
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }

  updateAccount = updatedAccount => {
    this.setState(prevState => ({ ...prevState, ...updatedAccount }));
  };
}
