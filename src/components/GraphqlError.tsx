import React from "react";
import Alert from "@material-ui/lab/Alert";
import { ApolloError } from "@apollo/client";

const GraphqlError = ({ error }: { error?: ApolloError | undefined }) => {
  if (!error) {
    return null;
  }
  return (
    <Alert severity="error">
      Error:{" "}
      {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
    </Alert>
  );
};

export default GraphqlError;
