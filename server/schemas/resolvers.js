const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // profiles: async () => {
    //   return Profile.find();
    // },

    // profile: async (parent, { profileId }) => {
    //   return Profile.findOne({ _id: profileId });
    // },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    // addProfile: async (parent,args) => {
      // const profile = await Profile.create(args);
    addProfile: async (parent, { name, email, password, contacts }) => {
      const profile = await Profile.create({ name, email, password, contacts: [{ ...contacts }] });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addContact: async (parent, { contactData }, context) => {
      //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { contacts: {contactData} },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },
    updateProfile: async (parent, { name, password, email }, context) => {
      //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { contacts: contactData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },


    deleteContact: async (parent, { contactId }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              contacts: {
                contactId
              }
            }
          },
          {new: true}
        );
      };
      throw new AuthenticationError('You need to be logged in!');
    },

    updateContact: async (parent, { contactData }, context) => {
      //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { contacts: {contactData} },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },
  },
  // Make it so a logged in user can only remove a skill from their own profile


};

module.exports = resolvers;
