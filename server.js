const dbPath = './API/db.json';
const dbRoutes = Object.keys(require(dbPath)).map(r => '/' + r);
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 3000;

server.use(middlewares);

server.use((req, res, next) => {
    // If the route looks like one of our db "tables", route it through
    //  json-server's router.
    // Otherwise, let's reset the url to '/' and assume the original route
    //  is for client-side routing in a react app.
    if (dbRoutes.some(r => req.path.startsWith(r))) {
        router(req, res, next);
    } else {
        req.url = '/';
        next();
    }
})

// If we made it this far, the request's url has been changed to '/',
//  so we'll retry the default (static) middleware.
// ...surely there's a better way...????
server.use(middlewares);

server.listen(port, () => {
    console.log(`app running on port ${port}`);
});
