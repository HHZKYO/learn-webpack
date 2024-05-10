const path = require('path')   //引入path
module.exports = {
    entry: './src/index.js',     //设置入口
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        //这里的path是一个全局变量，所以需要引入，看前面的：const path = require('require')
        path: path.resolve(__dirname, 'dist'),  
        filename: 'bundle.js',     //代码的意思是：把index.js打包到dist目录下，文件名为：bundle.js
    }
};