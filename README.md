# Frontend Starter Kit

This starter kit is a good starting place for you if you are starting out with a React based project using Typescript. You can clone this repository and start using the project without having to worry about configuring tools and configurations.

This project uses React, Typescript, Babel (for transpiling TS), Webpack ,ESLint (for code checking), Prettier (for code formatting) and Jest (for testing).

If you are interested in learning about the configurations, then this project can be useful as well since all the configurations have been outlined as individual commits in the history of the project to make it easier to understand. We have also started writing posts explaining the configuration steps. The first one in the series is about [configuring Typescript with Babel and Webpack](https://www.wisdomgeek.com/development/web-development/how-to-setup-typescript-with-babel-and-webpack/) and more will follow soon.

## Running the project

**You’ll need to have Node installed on your local development machine**. You can then clone this repo

```sh
git clone --depth=1 https://github.com/saranshkataria/frontend-starter-kit.git <YOUR_PROJECT_NAME>
```

You can then start building your own project based on the project that gets cloned. You can also remove the remote to the repo to avoid accidentally pushing to it.

Once you have a copy of the project, you need to install the dependencies. Run the command `npm install` or `yarn` in the command line.
After that you can run one of the following commands in the command line:

- `npm dev` or `yarn dev` to run a development server using webpack dev server. Each time you hit save, changes get hot reloaded using hot module replacement
- `npm prod` or `yarn prod` to create a production build
- `npm prod:debug` or `yarn prod:debug` to run webpack in debug mode while using the production configuration
- `npm dev:debug` or `yarn dev:debug` to run webpack in debug mode while using the development configuration
- `npm lint` or `yarn lint` for running ESLint to type check your source code
- `npm test` or `yarn test` for running Jest to run your test cases

It is also recommended that you install Prettier for your IDE since the project supports it out of the box. Currently we have not integrated Prettier as part of the build step, but we will do so in the near future. If you are not sure about what prettier is, you can read more about it [in this blog post about Prettier](https://www.wisdomgeek.com/development/web-development/using-prettier-format-javascript-code/).
