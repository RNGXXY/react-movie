const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(proxy('/migu',{
        target:'https://movie.miguvideo.com',
        changeOrigin:true,
        pathRewrite:{
            '^/migu':''
        }
    }))
}