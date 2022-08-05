import { gql } from "apollo-server";

export const typeDefs = gql`
    scalar Date

    """
    A unique user of the application
    """
    type User {
        id: ID!
        username: String!
        "Date the user was created at"
        createdAt: Date!
    }

    enum PostType {
        INFO
        "Learning"
        TUTORIAL
        "Anything else"
        RANDOM
    }

    """
    A post created by a user
    """
    type Post {
        byUser: User!
        createdAt: Date!
        type: PostType!
        title: String!
        "Post content as markdown"
        content: String!
    }

    type Query {
        totalDays: Int!
    }

    input InputCreatePost {
        type: PostType!
        title: String!
        content: String!
    }

    type ResponsePostDelete {
        removed: Boolean
    }

    type Mutation {
        createPost(input: InputCreatePost): Post!
        deletePost(id: ID!): ResponsePostDelete!

        likePost(id: ID!): Post!
    }

    type Subscription {
        """
        Get notified of new posts
        """
        newPost: Post!
    }
`;
