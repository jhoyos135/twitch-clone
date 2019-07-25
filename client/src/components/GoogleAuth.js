import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    console.log(this.props);
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '51671686483-9sp34hdce8pbncakkd27re3ch70srscb.apps.googleusercontent.com',
          scope: 'profile email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(
        this.auth.currentUser.get().getId(),
        this.auth.currentUser.get().w3.ig
      );
    } else {
      this.props.signOut();
    }
  };

  onSingInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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

const mapStateToProps = state => {
  console.log(state);
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
