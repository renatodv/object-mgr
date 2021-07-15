import { render, fireEvent, screen } from "../utils/test-utils";

import GetObjectPage from "./GetObject";
import { GET_OBJECT } from "../graphql/mutations";
import { GraphQLError } from "graphql";

describe("GetObjectPage", () => {
  it("should render the title and button", () => {
    render(<GetObjectPage />);
    expect(screen.getAllByText("Get Object")).toHaveLength(2);
  });
  it("should show the object when clikcing Get Object", async () => {
    const mocks = [
      {
        request: {
          query: GET_OBJECT,
        },
        result: {
          data: {
            getObject: {
              value: 1,
            },
          },
        },
      },
    ];
    render(<GetObjectPage />, { mocks });
    fireEvent.click(screen.getByTestId("get-object"));
    expect(await screen.findByText("Here is your object:")).toBeInTheDocument();
  });
  it("should show the GraphqlError component when there is an error", async () => {
    const mocks = [
      {
        request: {
          query: GET_OBJECT,
        },
        result: {
          errors: [new GraphQLError("here is an error")],
        },
        data: {},
      },
    ];
    render(<GetObjectPage />, { mocks });
    fireEvent.click(screen.getByTestId("get-object"));
    expect(await screen.findByText("here is an error")).toBeInTheDocument();
  });
});
