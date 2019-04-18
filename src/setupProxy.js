const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(proxy('/migu',{
        target:'https://movie.miguvideo.com',
        changeOrigin:true,
        pathRewrite:{
            '^/migu':''
        }
    }))

    app.use(proxy('/cms',{
        target:'http://10.2.140.170:9000',
        changeOrigin:true,
        pathRewrite:{
            '^/cms':''
        }
    }))
}