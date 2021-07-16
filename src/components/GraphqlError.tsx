import React from "react";
import Alert from "@material-ui/lab/Alert";
import { ApolloError } from "@apollo/client";

/**
 * This component displays the errors from the apollo client inside an material-ui alert.
 * @param {object} props
 * @param {ApolloError | undefined} props.error the apollo client error object.
 */
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
