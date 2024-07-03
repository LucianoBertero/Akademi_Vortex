import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    const initClient = () => {
      window.gapi.client
        .init({
          clientId:
            "745469353130-v3abmo39jvnlmrj5thtl6lsh4i9h0evf.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    };

    const loadGapi = () => {
      window.gapi.load("client:auth2", initClient);
    };

    if (window.gapi) {
      loadGapi();
    } else {
      // Retry loading gapi after a short delay if it is not ready yet
      const retryLoadGapi = setInterval(() => {
        if (window.gapi) {
          clearInterval(retryLoadGapi);
          loadGapi();
        }
      }, 100);
    }
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null; // or a loading indicator
    } else if (this.state.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signOut()}
        >
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signIn()}
        >
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
