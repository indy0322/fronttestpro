const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    app.use('/api',
        createProxyMiddleware({
            target: 'https://testpro-uktu.onrender.com',
            changeOrigin: true
        })
    )
}