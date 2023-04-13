import Fastify from 'fastify'
import userRoutes from './modules/user/user.route'

const server = Fastify()

server.get('/health', async () => ({ status: 'OK' }))

async function main() {
   server.register(userRoutes, { prefix: 'api/users' })

   try {
      await server.listen({ port: 5001, host: '0.0.0.0' })
      server.log.info(`Server listening on ${server.server.address()}`)
      console.log(`Server listening on ${JSON.stringify(server.server.address())}`)
   } catch (err) {
      server.log.error(err)
      process.exit(1)
   }
}

main()
