import React from "react";

export const ApprovalCard = (props) => {
  console.log(props.children);
  return (
    <div className="ui card">
      <div className="content">Are you sure?</div>
      <div className="extra content">
        {" "}
        {props.children}
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};
