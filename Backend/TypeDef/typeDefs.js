

const typeDefs = `#graphql

  type Order{
    orderId: Int!
    drinkName: String!
    quantity: Int!
    userId: String!
    drinkType: String!
  }

type Query{
  print: String!
  getAllOrders: [Order]
}
type Mutation  {
    createOrder(input: createOrderInput!): Order
}

type Subscription {
   orderAdded: Order!
}

  input createOrderInput{
    userId: String!
    drinkName: String!
    drinkType: String!
    quantity: Int!
  }
`;


export default typeDefs;