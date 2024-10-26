import {Hono} from 'hono'
import {handle} from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => c.json({hello: "world"}));

app.get('/projects/:projectId', c => {
    const {projectId} = c.req.param();

    return c.json({projectId: projectId});
});

export const GET = handle(app);