import {gql} from 'apollo-server'

export const typeDefs = gql`
    extend type Query {
        book(id: ID!): Book
    }
    
    type Book {
        id: ID!
        title: String
        author: Author
    }
`


export const resolvers = {
    Query: {
        book: () => {}
    }
}

