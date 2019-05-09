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
        target:'http://localhost:9000',
        changeOrigin:true,
        pathRewrite:{
            '^/cms':''
        }
    }))

    app.use(proxy('/bddt',{
        target:'http://api.map.baidu.com',
        changeOrigin:true,
        pathRewrite:{
            '^/bddt':''
        }
    }))
}