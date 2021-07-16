import React from "react";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { useMutation } from "@apollo/client";

import GraphqlError from "../components/GraphqlError";
import { FREE_OBJECT } from "../graphql/mutations";

/**
 * This page allows the user to free objects.
 * * In case the object does not exist it will display an error.
 */
const FreeObjectPage = () => {
  const [freeObject, { data, error }] = useMutation(FREE_OBJECT);
  const validationSchema = yup.object({
    value: yup.number().integer().required("A value is required."),
  });
  const formik = useFormik({
    initialValues: {
      value: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      freeObject({ variables: { input: { value: parseInt(values.value) } } });
    },
  });

  return (
    <>
      <Typography variant="h4">Free Object</Typography>
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
            inputProps={{ "data-testid": "free-text-value" }}
          />
        </div>
        <br />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          data-testid="free-object"
        >
          Submit
        </Button>
      </form>
      <br />
      {data?.freeObject?.value && (
        <Alert severity="success">
          You successfully freed the object:{" "}
          <strong>{data.freeObject.value}</strong>
        </Alert>
      )}
      <GraphqlError error={error} />
    </>
  );
};

export default FreeObjectPage;
