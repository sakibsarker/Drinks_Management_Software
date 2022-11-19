const Order = [];
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();



let ID = 1;
const resolvers = {
    Query: {
        print: () => ("hello"),
        getAllOrders: () => Order
    },

    Mutation: {
        createOrder(parent, { input }, context) {
            const order = {
                id: ID,
                userId: input.userId,
                drinkName: input.drinkName,
                drinkType: input.drinkType,
                quantity: input.quantity
            }
            pubsub.publish('ORDER_CREATED', { orderAdded: order });
            console.log(order)
            Order.push(order);
            ID += 1;
            return order;
        }

    },
    Subscription: {
        orderAdded: {
            subscribe: () => pubsub.asyncIterator(['ORDER_CREATED']),
        },
    }

};


export default resolvers;