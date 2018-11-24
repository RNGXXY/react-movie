const { injectBabelPlugin } = require('react-app-rewired');

const PATH = require('path')

function resolve(url) {
    return PATH.resolve(__dirname, 'src/', url)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);

     // 配置别名
    //  跟vue不一样的是，这里用的是键值对
     config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(''),
        '@As': resolve('assets'),
        '@C': resolve('components'),
        '@Commons': resolve('components/commons'),
        '@Hoc': resolve('components/hoc'),
        '@Pages': resolve('pages'),
        '@Libs': resolve('libs'),
        '@Connect': resolve('connect'),
        "@Store": resolve('store')
    }

    return config;
};  