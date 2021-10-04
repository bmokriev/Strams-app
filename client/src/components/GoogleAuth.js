import React, { Component } from 'react';

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id:
          '424101099769-g4av8fb6gs23e8nethp56pnhs0u1da3s.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
