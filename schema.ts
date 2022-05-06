import {gql} from 'apollo-server'
import {typeDefs as Author, resolvers as AuthorResolvers} from './author'
import {typeDefs as Book, resolvers as BookResolvers} from './book'

const rootTypeDefs = gql`
    type Query {
        _: String
    }
`

export const resolvers = [AuthorResolvers, BookResolvers]

export const typeDefs = [rootTypeDefs, Author, Book]
