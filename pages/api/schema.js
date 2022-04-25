const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLNonNull,
} = require('graphql');

//  launch type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  description: 'All SpaceX launches',
  fields: () => ({
    links: {
      type: new GraphQLObjectType({
        name: 'Links',
        description: 'Links to badges & articles',
        fields: () => ({
          patch: {
            type: new GraphQLObjectType({
              name: 'Badges',
              fields: () => ({
                small: { type: GraphQLString },
              }),
            }),
          },
        }),
      }),
    },
    failures: { type: new GraphQLList(FailuresType) },
    rocket: {
      type: RocketType,
      resolve: async (parent) => {
        return await axios
          .get(`https://api.spacexdata.com/v4/rockets/${parent.rocket}`)
          .then((res) => res.data)
          .catch((error) => console.error(error));
      },
    },
    success: { type: GraphQLBoolean, description: 'Was it success' },
    name: { type: GraphQLString, description: 'Mission name' },
    details: { type: GraphQLString, description: 'Details a bout the flight' },
    flight_number: { type: GraphQLInt },
    date_local: { type: GraphQLString, description: 'Local start time' },
    id: { type: GraphQLString, description: 'Launch id' },
  }),
});

//  failures type for LaunchType
const FailuresType = new GraphQLObjectType({
  name: 'Failures',
  fields: () => ({
    time: { type: GraphQLInt },
    altitude: { type: GraphQLInt },
    reason: { type: GraphQLString },
  }),
});

//  rocket type
const RocketType = new GraphQLObjectType({
  name: 'Rockets',
  description: 'All SpaceX rockets',
  fields: () => ({
    height: {
      type: new GraphQLObjectType({
        name: 'Height',
        description: 'Height in meters & feet',
        fields: () => ({
          meters: { type: GraphQLFloat },
          feet: { type: GraphQLFloat },
        }),
      }),
    },
    mass: {
      type: new GraphQLObjectType({
        name: 'Mass',
        description: 'Mass in meters & feet',
        fields: () => ({
          kg: { type: GraphQLInt },
          lb: { type: GraphQLInt },
        }),
      }),
    },
    name: { type: GraphQLString, description: 'Rocket name' },
    active: { type: GraphQLBoolean, description: 'Is still active' },
    first_flight: { type: GraphQLString, description: 'Date of first flight' },
    description: { type: GraphQLString, description: 'Flight description' },
    id: { type: GraphQLString, description: 'Rocket id' },
  }),
});

//  root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'SpaceX launches & rockets',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve: async (parent, args) => {
        return await axios
          .get('https://api.spacexdata.com/v4/launches')
          .then((res) => res.data)
          .catch((error) => console.error(error));
      },
    },
    launch: {
      type: LaunchType,
      description: 'A specific launch searched by its id',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (parent, args) => {
        return await axios
          .get(`https://api.spacexdata.com/v4/launches/${args.id}`)
          .then((res) => res.data)
          .catch((error) => console.error(error));
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve: async (parent, args) => {
        return await axios
          .get('https://api.spacexdata.com/v4/rockets')
          .then((res) => res.data)
          .catch((error) => console.error(error));
      },
    },
    rocket: {
      type: RocketType,
      description: 'A specific rocket searched by its id',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (parent, args) => {
        return await axios
          .get(`https://api.spacexdata.com/v4/rockets/${args.id}`)
          .then((res) => res.data)
          .catch((error) => console.error(error));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
