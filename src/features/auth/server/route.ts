import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

import { loginSchema } from '@/features/auth/schemas'

const app = new Hono().post('/login', zValidator('json', loginSchema), (c) =>
  c.json({ success: 'ok' })
)

export default app
