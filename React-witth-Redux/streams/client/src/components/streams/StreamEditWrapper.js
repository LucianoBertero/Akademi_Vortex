import React from "react";
import { useParams } from "react-router-dom";
import StreamEdit from "./StreamEdit";

const StreamEditWrapper = (props) => {
  const { id } = useParams();
  return <StreamEdit {...props} id={id} />;
};

export default StreamEditWrapper;
