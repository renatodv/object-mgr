import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

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
