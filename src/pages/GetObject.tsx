import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useMutation } from "@apollo/client";

import GraphqlError from "../components/GraphqlError";
import { GET_OBJECT } from "../graphql/mutations";

/**
 * This page allows the user to get freed objects.
 * In case there are no freed objects it will display an error.
 */
const GetObjectPage = () => {
  const [getObject, { data, error, loading }] = useMutation(GET_OBJECT);

  return (
    <>
      <Typography variant="h4">Get Object</Typography>
      <br />
      <Typography variant="subtitle1">
        To create or free objects, please select the menu on the left top
        corner.
      </Typography>
      <br />
      <div>
        <Button
          onClick={() => getObject()}
          variant="contained"
          color="primary"
          data-testid="get-object"
        >
          Get Object
        </Button>
      </div>
      <br />
      {loading && <LinearProgress />}
      {data?.getObject?.value && (
        <Alert severity="success">
          Here is your object: <strong>{data.getObject.value}</strong>
        </Alert>
      )}
      <GraphqlError error={error} />
    </>
  );
};

export default GetObjectPage;
