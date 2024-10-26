import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono()
  .basePath('/api')
  .get('/hello', (c) => c.json({ hello: 'world' }))
  .get('/projects/:projectId', (c) => {
    const { projectId } = c.req.param()

    return c.json({ projectId: projectId })
  })

export const GET = handle(app)
