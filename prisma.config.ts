import { defineConfig } from 'prisma/config'
import { PrismaNeon } from '@prisma/adapter-neon'

export default defineConfig({
  datasource: {
    adapter: new PrismaNeon({
      connectionString: process.env.DATABASE_URL,
    }),
  },
})