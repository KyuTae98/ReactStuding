const path = require('path');

module.export = {
    entry: './src/index.js',
    ouput: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}