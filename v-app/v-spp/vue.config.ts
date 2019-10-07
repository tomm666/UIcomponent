module.exports = {
    // 反向代理
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://vuets-api.herokuapp.com/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    },
    module:{
        // 或者 loaders
        rules:[
            {
                test:/\.jsx$/,
                loader:'webpack-px2rem-loader',
                // 这个配置是可选的
                query:{
                    // 1rem=npx 默认为 10
                    basePx:10,
                    // 只会转换大于min的px 默认为0
                    // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
                    min:1,
                    // 转换后的rem值保留的小数点后位数 默认为3
                    floatWidth:3
                }

            }
        ]
    }
};
