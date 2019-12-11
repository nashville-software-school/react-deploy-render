# Deploy React Application to render.com

This repository is a template you can use to have a straightforward process for deploying your client side capstone to render.com and have your data persist.

Using this template for deploying has a base cost of $7/month because it uses services on the platform that they charge for.

## Before You Get Started

When you set up your render.com service, you will be providing a name for it. Likely your project name. For example, if you name your application "Sounds Fishy", the Render platform will create a domain https://sounds-fishy.onrender.com/ for you.

The code in this repository will start `json-server` for you automatically and set up your service to make your API respond to requests at https://sounds-fishy.onrender.com/api/.

Therefore, you need to modify your application code **before you deploy** to make all API requests to https://sounds-fishy.onrender.com/api/ instead of http://localhost:8088 (or whatever your current URL is).

## Setup

### Setting up Repository

1. `cd ~/workspace`
1. Fork this repository to your account.
1. Clone your new repository to your machine.
    ```sh
    git clone {github connection string} capstone-deploy
    ```
1. `cd capstone-deploy`
1. Copy all of your source code into the `src` sub-directory.
1. If you installed any 3rd party `npm` tools, make sure you install them all again for this repository.
    ```sh
    npm i --save foo bar baz whatever
    ```

### Setting up render Service

1. Go to render.com and create a new account by connecting your Github account.
1. Once your are logged in, go to the Dashboard.
1. Create a new service.
1. Select the `react-deploy-render` repository from the list of your repositories that it shows next.
1. Provide a name for your service. Should be the name of your project.
1. Choose `Node` for the Environment field.
1. Keep `master` branch.
1. Build command should be `npm install && npm run build`.
1. Start command should be `npm start`.
1. Click the **Advanced** button at the bottom, but above the **Create Web Service** button.
1. Click the **Add Disk** button.
1. In the name field, you can provide any descriptive label you want for this disk (e.g. database)
1. Mount path should be `/var/data`
1. Choose `5GB` for the size.
1. Scroll down and click the **Create Web Service** button.

Then the platform will pull your repository code, install all the `npm` packages, build your project and make it live.

## Notes

### **package.json**

* `start` script runs production build and starts json-server. Static dist files will be served by json-server.
* `start:dev` script concurrently runs "normal" create-react-app dev build and json-server on separate ports.
* `json-server` dependency

### **server.js**

* Adds custom route for database resources by appending `/api` to the start of all db routes
* Looks at request url and assumes if it doesn't begin with `/api` to just return the React app

