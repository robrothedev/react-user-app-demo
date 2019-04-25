/**
 * RenderUser.js
 *
 * HOC for viewing a user that includes the user card and a form to edit the user
 */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UsersContext } from "../state/UsersListProvider";
import { UserProvider } from "../state/UserProvider";
import UserHandler from "../handlers/UserHandler";
import UserCard from "./UserCard";
import UserFormHandler from "../handlers/UserFormHandler";
import RenderEditUser from "./RenderEditUser";

const RenderUser = ({ match }) => {
  // grab the top level provider state
  // we want to update the user in the list when they edit their information
  // using the users.updateUser function in the UsersContext state
  let users = useContext(UsersContext);

  // render the user layout
  return (
    <div className="animated fadeIn">
      {/* render a link back to the user list */}
      <Link to="/" className="users-link">
        &larr;
      </Link>

      {/* render the user card */}
      <UserProvider userId={match.params.userId}>
        <UserHandler>
          <UserCard />
        </UserHandler>

        {/* render the edit user form */}
        <UserFormHandler updateUser={users.updateUser}>
          <RenderEditUser />
        </UserFormHandler>
      </UserProvider>
    </div>
  );
};

RenderUser.propTypes = {
  // router params object
  match: PropTypes.object
};

export default RenderUser;
