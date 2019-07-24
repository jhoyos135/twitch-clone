import React, { Component, Fragment } from 'react';

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '51671686483-9sp34hdce8pbncakkd27re3ch70srscb.apps.googleusercontent.com',
          scope: 'profile email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  };

  onSingInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon">Sign out</i>
        </button>
      );
    } else {
      return (
        <button onClick={this.onSingInClick} className="ui red google button">
          <i className="google icon">Sign in with Google</i>
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
