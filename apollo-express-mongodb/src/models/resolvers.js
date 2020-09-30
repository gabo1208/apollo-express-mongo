import { Cat } from './model';

export const resolvers = {
  Query: {
    hello: () => 'hello',
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      console.log(kitty);
      return kitty;
    }
  }
};
