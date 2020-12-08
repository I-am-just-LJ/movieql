const lj = {
  name: "LJ",
  age: 18,
  gender: "male",
};
const resolvers = {
  Query: {
    person: ()=> lj
    },
  },
};

export default resolvers;
