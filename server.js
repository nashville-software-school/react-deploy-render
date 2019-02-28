// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./API/db.json');
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 3000;
const dbRoutes = Object.keys(require('./API/db.json'));

server.use(middlewares);

server.use((req, res, next) => {
    if (req.path === '/' || dbRoutes.some(r => req.path.endsWith(r))) {
        next();
    } else {
        res.redirect('/');
    }
})


server.use(router);

server.listen(port, () => {
    console.log(`app running on port ${port}`);
});
