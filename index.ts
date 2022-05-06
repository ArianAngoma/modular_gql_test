import {ApolloServer} from 'apollo-server'
import {typeDefs, resolvers} from './schema'

const startApolloServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    const {url} = await server.listen();
    console.log('Server is running on ', url);
}


startApolloServer()
