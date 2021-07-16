import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

/**
 * This function allows to wrapp around the render from testing library
 * so we can easily test components that require some providers.
 * @param {React.ReactElement} ui - the element that we want to render.
 * @param {object} props.mocks the mocks to be provided for apollo client on tests.
 */
function render(ui: React.ReactElement, { mocks }: { mocks?: any } = {}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <BrowserRouter>
        <MockedProvider
          mocks={mocks}
          addTypename={false}
          defaultOptions={{ mutate: { errorPolicy: "all" } }}
        >
          {children}
        </MockedProvider>
      </BrowserRouter>
    );
  };
  return rtlRender(ui, {
    wrapper: Wrapper as React.FunctionComponent,
  });
}

// We export everything from reac testing so we can use utilities like screen, fireEvent, etc.
export * from "@testing-library/react";

export { render };
