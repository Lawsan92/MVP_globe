#  This is a 3D planet simluator rendered on the broswer using a combination of react, threejs and react-three/fiber libraries

# Home Page

## select a 3-D model of any of the 8 planets in our solar system

<img src ='https://res.cloudinary.com/darp0mj9i/image/upload/v1661969805/samples/planet_thumbnails/textures/Screen_Shot_2022-08-31_at_13.13.13_tq2fe7.jpg'/>

# Planet Info

## read some interesting trivia about each planet

<img src ='https://res.cloudinary.com/darp0mj9i/image/upload/v1661969855/samples/planet_thumbnails/textures/Screen_Shot_2022-08-31_at_13.17.18_my3adj.jpg'/>

## Or make your own planet ...

<img src ='https://res.cloudinary.com/darp0mj9i/image/upload/v1661969808/samples/planet_thumbnails/textures/Screen_Shot_2022-08-31_at_13.13.39_czamdj.jpg'/>

## And see it come to life!

<img src ='https://res.cloudinary.com/darp0mj9i/image/upload/v1661969799/samples/planet_thumbnails/textures/Screen_Shot_2022-08-31_at_13.13.00_vye4ql.jpg'/>

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
