#  This is a a 3-D globe rendered on the page using react, threejs and react-three/fiber

# initial setup

  npm init -y : creates package.json

# react dependencies
npm install react react-dom

# threejs dependencies
npm install three three @react-three/fiber

# if you need to load images files to use as meshes

# cli command to install loader for images

 npm install file-loader --save-dev

# webpack.config additions

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