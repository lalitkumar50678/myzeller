import {gql} from '@apollo/client';

const GET_ZELLER = gql`
query ListZellerCustomers {
    listZellerCustomers {
      items {
        id
        name
        role
      }
    }
  }
`;
export default GET_ZELLER;
