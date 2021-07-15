import { render, fireEvent, screen } from "../utils/test-utils";

import FreeObjectPage from "./FreeObject";
import { FREE_OBJECT } from "../graphql/mutations";
import { GraphQLError } from "graphql";

describe("GetObjectPage", () => {
  it("should render the title", () => {
    render(<FreeObjectPage />);
    expect(screen.getByText("Free Object")).toBeInTheDocument();
  });
  it("should show the object that was freed", async () => {
    const mocks = [
      {
        request: {
          query: FREE_OBJECT,
          variables: {
            input: {
              value: 1,
            },
          },
        },
        result: {
          data: {
            freeObject: {
              value: 1,
              free: true,
            },
          },
        },
      },
    ];
    render(<FreeObjectPage />, { mocks });
    fireEvent.change(screen.getByTestId("free-text-value"), {
      target: { value: 1 },
    });
    fireEvent.click(screen.getByTestId("free-object"));
    expect(
      await screen.findByText("You successfully free the object:")
    ).toBeInTheDocument();
  });
  it("should show the GraphqlError component when there is an error freeing the object", async () => {
    const mocks = [
      {
        request: {
          query: FREE_OBJECT,
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
    render(<FreeObjectPage />, { mocks });
    fireEvent.change(screen.getByTestId("free-text-value"), {
      target: { value: 1 },
    });
    fireEvent.click(screen.getByTestId("free-object"));
    expect(await screen.findByText("here is an error")).toBeInTheDocument();
  });
});
