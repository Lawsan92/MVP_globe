##  This is a 3D planet simluator rendered on the broswer using a combination of react, threejs and react-three/fiber libraries

package.json setup

  npm init -y

## Server-side

dependencies
```sh
npm install nodemon express dotenv path
```

## Client-side
react dependencies

```sh
npm install react react-dom
```

babel loader dependencies

```sh
    npm install
    @babel/core
    @babel/preset-env
    @babel/preset-react
    babel-loader
```

webpack dependencies
```sh
npm install webpack webpack cli
```
threejs dependencies

```sh
npm install three three @react-three/fiber
```

threejs dependencies to interact with the globe, zoom, pan, rotate etc...
```sh
npm install @react-three/fiber
```

webpack loader to load image files

```sh
 npm install file-loader --save-dev
 ```

additions to webpack

```sh
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
```
## Scripts for CLI

to run server

```sh
npm run server
```
to monitor changes to client files (react files)

```sh
npm run client
```