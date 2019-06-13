import React, { Component } from "react";
import { AccountConsumer } from "../providers/AccountProvider";

export class AccountUpdate extends Component {
  state = {
    username: this.props.username,
    membershipLevel: this.props.membershipLevel
  };

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { membershipLevel, username } = this.state;
    const usernameValue = username === this.props.username ? "" : username;

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="username">New username</label>
          <div>
            <input
              type="text"
              name="username"
              value={usernameValue}
              onChange={this.handleOnChange}
            />
          </div>
          <label htmlFor="membershipLevel">Membership Level</label>
          <div>
            <select
              value={membershipLevel}
              name="membershipLevel"
              onChange={this.handleOnChange}
            >
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </select>
          </div>
          <button>Save</button>
        </form>
      </div>
    );
  }

  handleOnSubmit = e => {
    e.preventDefault();

    const updatedAccount = { ...this.state };
    this.props.updateAccount(updatedAccount);
  };

  // To handle resetting form on submitting success
  componentWillReceiveProps(nextProps, prevProps) {
    if (prevProps !== nextProps) {
      this.setState({
        username: nextProps.username,
        membershipLevel: nextProps.membershipLevel
      });
    }
  }
}

// added to connect AccountConsumer To pass props to AccountUpdate Before component initialization
// As the AccountUpdate.state requires The new props
const ConnectedAccountUpdate = props => (
  <AccountConsumer>
    {({ username, membershipLevel, updateAccount }) => (
      <AccountUpdate
        {...props}
        username={username}
        membershipLevel={membershipLevel}
        updateAccount={updateAccount}
      />
    )}
  </AccountConsumer>
);

export default ConnectedAccountUpdate;
