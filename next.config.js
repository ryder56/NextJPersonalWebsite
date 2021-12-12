const path = require('path');
module.exports = {
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    trailingSlash: true,
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300
        };
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
};
