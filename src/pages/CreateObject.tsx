import React from "react";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useMutation } from "@apollo/client";

import GraphqlError from "../components/GraphqlError";
import { CREATE_OBJECT } from "../graphql/mutations";

/**
 * This page allows the user to create objects.
 * In case the object already exists it will display an error.
 */
const CreateObjectPage = () => {
  const [createObject, { data, error, loading }] = useMutation(CREATE_OBJECT);
  const validationSchema = yup.object({
    value: yup.number().integer().required("A value is required."),
  });
  const formik = useFormik({
    initialValues: {
      value: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createObject({ variables: { input: { value: parseInt(values.value) } } });
    },
  });

  return (
    <>
      <Typography variant="h4">Create Object</Typography>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            fullWidth
            id="value"
            name="value"
            label="Value"
            value={formik.values.value}
            onChange={formik.handleChange}
            error={formik.touched.value && Boolean(formik.errors.value)}
            helperText={formik.touched.value && formik.errors.value}
            inputProps={{ "data-testid": "create-text-value" }}
          />
        </div>
        <br />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          data-testid="create-object"
        >
          Submit
        </Button>
      </form>
      <br />
      {loading && <LinearProgress />}
      {data?.createObject?.value && (
        <Alert severity="success">
          You created the object successfully with:{" "}
          <strong>{data.createObject.value}</strong>
        </Alert>
      )}
      <GraphqlError error={error} />
    </>
  );
};

export default CreateObjectPage;
