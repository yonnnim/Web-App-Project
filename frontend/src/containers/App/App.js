import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "Components/Header";
import UserDetails from "Components/userDetails";
import { connect } from "react-redux";
import { connectToNotifications } from "../../actions/index";

// const cookies = require('js-cookie');

// let currentPage = 'login';
// let token = cookies.get('token') || '';
// let user = cookies.get('user') || {};

// try {
//   user = JSON.parse(user)
//   if (user.disabled) {
//     currentPage = 'emailVerification'
//   }
//   if (user.phone)
//     currentPage = 'dashboard'
//   else
//     currentPage = 'userDetails'
// } catch (e) {
//   user = ''
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    connectToNotifications(props.dispatch);
  }
  render() {
    let { dispatch, notifications } = this.props;

    return (
      <MuiThemeProvider>
        <div className="ldc-app">
          <Header notifications={notifications} dispatch={dispatch} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps)(App);
