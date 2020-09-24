const initialDbPath = './api/db.json';
const dbPath = '/var/data/db.json';

const path = require('path');
const fs = require('fs');

if (!fs.existsSync(dbPath)) {
    fs.copyFileSync(initialDbPath, dbPath);
}

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(dbPath)
const middlewares = jsonServer.defaults({
    static: "./build"
});

const port = process.env.PORT || 8088

server.use(middlewares)

server.use((req, res, next) => {
    // use originalUrl since other middleware is likely reassigning req.url
    const isApiRoute = req.originalUrl.includes('/api/');

    if (isApiRoute) return next();

    return res.sendFile(path.join(__dirname, './build/index.html'));
});

server.use(jsonServer.rewriter({
    "/api/*": "/$1"
}))

server.use(router)

server.listen(port, () => {
    console.log('JSON Server is running')
})
