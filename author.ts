import {gql} from 'apollo-server'

export const typeDefs = gql`
    extend type Query {
        author(id: ID!): Author
    }
    
    type Author {
        id: ID!
        firstName: String
        lastname: String
        books: [Book]
    }
`


export const resolvers = {
    Query: {
        author: () => {}
    }
}
