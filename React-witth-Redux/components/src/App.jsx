import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";
import { CommentDetail } from "./components/CommentDetail";
import { ApprovalCard } from "./components/ApprovalCard";

function App() {
  return (
    <>
      <div className="ui container comments">
        <ApprovalCard>
          {" "}
          <div className="">
            {" "}
            <h4>Warning!!!</h4>Are you sure want to do this??
          </div>{" "}
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            content="I like is this"
            timeAgo="Today at 13:54 PM"
            avatar={faker.image.avatar()}
            author="Sam"
          ></CommentDetail>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            content="I like is this"
            timeAgo="Today at 13:54 PM"
            avatar={faker.image.avatar()}
            author="Alex"
          ></CommentDetail>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            content="I like is this"
            timeAgo="Today at 13:54 PM"
            avatar={faker.image.avatar()}
            author="Simon"
          ></CommentDetail>
          <ApprovalCard></ApprovalCard>
          <CommentDetail
            content="I like is this"
            timeAgo="Today at 13:54 PM"
            avatar={faker.image.avatar()}
            author="Max"
          ></CommentDetail>
        </ApprovalCard>
      </div>
    </>
  );
}

export default App;
