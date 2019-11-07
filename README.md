# Quiz
System for creating and taking quizes
## Deployment
You will need [npm](https://nodejs.org/en/download/) to install required Node.js modules. Run the following command from the project root directory:

```
npm i
```

In order for the project to work you have to compile scss and js files using following commands:

```
npm run build:js
npm run build:css
```

As an alternative you could use watch mode to automatically recompile js and scss when changes appear:

```
npm run dev:js
npm run dev:css
```

In order to run the project you may use [lite-server](https://www.npmjs.com/package/lite-server). After installation simply run the following command from the project root directory:

```
lite-server
```
