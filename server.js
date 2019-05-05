const path = require('path');
const dbPath = './API/db.json';
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 5002;

server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}));

server.use((req, res, next) => {
    // use originalUrl since other middleware is likely reassigning req.url
    const isApiRoute = req.originalUrl.includes('/api/');

    if (isApiRoute) return next();

    return res.sendFile(path.join(__dirname, './build/index.html'));
});

server.use(router);

server.listen(port, () => {
    console.log(`app running on port ${port}`);
});