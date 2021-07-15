import React from "react";
import { render, screen } from "@testing-library/react";
import { GraphQLError } from "graphql";

import GraphqlError from "./GraphqlError";
import { ApolloError } from "@apollo/client";

describe("<GraphqlError />", () => {
  it("should not show anything if the error is undefined", () => {
    render(<GraphqlError />);
    expect(screen.queryByText(/Error: /)).not.toBeInTheDocument();
  });
  it("should show the error when error is set", () => {
    const graphError = new GraphQLError("this is an error");
    const error = new ApolloError({
      graphQLErrors: [graphError],
    });
    render(<GraphqlError error={error} />);
    expect(screen.getByText(/this is an error/)).toBeInTheDocument();
  });
});
