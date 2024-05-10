const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ],
    }
};