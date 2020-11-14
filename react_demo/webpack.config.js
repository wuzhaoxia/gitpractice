const {resolve} = require('path')

module.exports = {
    entry:'./src/js/index.js',
    output: {
        filename: "index.js"
    },
    model:'prodution',
    rules:[{
        //解析less（不完美）
        test:/\.less$/,
        use:[
            'style-loader',
            'css-loader',
            'less-loader'
        ],
    },
    {
        test:/\.js$/,
        exclude:/node_modules/,
        enforce:"pre",
        use:{
            loader:"eslint-loader"}
    }
]
}