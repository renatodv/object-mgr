import { render, fireEvent, screen } from "../utils/test-utils";

import CreateObjectPage from "./CreateObject";
import { CREATE_OBJECT } from "../graphql/mutations";
import { GraphQLError } from "graphql";

describe("GetObjectPage", () => {
  it("should render the title", () => {
    render(<CreateObjectPage />);
    expect(screen.getByText("Create Object")).toBeInTheDocument();
  });
  it("should show the object that was created", async () => {
    const mocks = [
      {
        request: {
          query: CREATE_OBJECT,
          variables: {
            input: {
              value: 1,
            },
          },
        },
        result: {
          data: {
            createObject: {
              value: 1,
              free: true,
            },
          },
        },
      },
    ];
    render(<CreateObjectPage />, { mocks });
    fireEvent.change(screen.getByTestId("create-text-value"), {
      target: { value: 1 },
    });
    fireEvent.click(screen.getByTestId("create-object"));
    expect(
      await screen.findByText("You created the object successfully with:")
    ).toBeInTheDocument();
  });
  it("should show the GraphqlError component when there is an error creating the object", async () => {
    const mocks = [
      {
        request: {
          query: CREATE_OBJECT,
          variables: {
            input: {
              value: 1,
            },
          },
        },
        result: {
          errors: [new GraphQLError("here is an error")],
        },
        data: {},
      },
    ];
    render(<CreateObjectPage />, { mocks });
    fireEvent.change(screen.getByTestId("create-text-value"), {
      target: { value: 1 },
    });
    fireEvent.click(screen.getByTestId("create-object"));
    expect(await screen.findByText("here is an error")).toBeInTheDocument();
  });
});
