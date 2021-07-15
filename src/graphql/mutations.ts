import { gql } from "@apollo/client";

export const GET_OBJECT = gql`
  mutation {
    getObject {
      value
    }
  }
`;

export const CREATE_OBJECT = gql`
  mutation CREATE_OBJECT($input: ObjectInput!) {
    createObject(input: $input) {
      value
      free
    }
  }
`;

export const FREE_OBJECT = gql`
  mutation FREE_OBJECT($input: ObjectInput!) {
    freeObject(input: $input) {
      value
      free
    }
  }
`;
