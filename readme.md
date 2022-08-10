#  This is a a 3-D globe rendered on the page using react, threejs and react-three/fiber

# initial setup

  npm init -y : creates package.json

# if you need to load images files to use as meshes

# cli command

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