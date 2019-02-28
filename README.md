# c29-heroku-test

## Simple react/json-server app that can be (easily?) deployed to heroku.

### Things to note:
1. **package.json**
    * `start` script runs production build
    * `start:dev` script runs "normal" create-react-app dev build
    * `json-server` dependency
1. **server.js**
    * Runs json-server to host **both** the database and the app
    * Assumes the json-server database file is `./API/db.json`
1. **data.js**
    * Database interaction module
    * Uses the following code to determine if the app is in `production` mode and sets the db url accordingly
    ```js
    const baseUrl = process.env.NODE_ENV === 'production'
        ? "/"
        : "http://localhost:5002/";
    ```
