module.exports = {
    publicPath: './',
    configureWebpack:{
        entry:'./src/main.js',
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 244000,
            }
        }
    }
}