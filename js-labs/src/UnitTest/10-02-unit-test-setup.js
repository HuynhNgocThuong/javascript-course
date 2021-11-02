/**
# 1. Initial npm
npm init
# 2. Install jest
yarn add --dev jest
# 3. Install  Babel packages
yarn add --dev babel-jest @babel/core @babel/preset-env
# 4. Add babel.config.js
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}; */
