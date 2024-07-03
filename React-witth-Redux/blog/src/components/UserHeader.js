// src/components/UserHeader.js
import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions"; // Asegúrate de importar fetchUser

class UserHeader extends React.Component {
  componentDidMount() {
    console.log(this.props.id);
    this.props.fetchUser(this.props.id);
    console.log(this.props.id);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.id) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
