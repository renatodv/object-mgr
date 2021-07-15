import React from "react";
import ApolloProviderWrapper from "./ApolloProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProviderWrapper>{children}</ApolloProviderWrapper>;
};

export default Providers;
