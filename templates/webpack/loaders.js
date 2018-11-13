const loadersList = {
    'style-loader': {
        type: 'styles',
        priority: 0,
        loader: `{
            loader: 'style-loader',
            options: {}
        }`,
        pack: 'style-loader'
    },
    'css-loader': {
        type: 'styles',
        priority: 3,
        loader: `{
            loader: 'css-loader',
            options: {url: false}
        }`,
        pack: 'css-loader'
    },
    'less-loader': {
        type: 'styles',
        priority: 10,
        loader: `{
            loader: 'less-loader',
            options: {}
        }`,
        pack: 'less-loader less'
    },
    'sass-loader': {
        type: 'styles',
        priority: 10,
        loader: `{
            loader: 'sass-loader',
            options: {}
        }`,
        pack: 'sass-loader node-sass'
    },
    'stylus-loader': {
        type: 'styles',
        priority: 10,
        loader: `{
            loader: 'stylus-loader',
            options: {}
        }`,
        pack: 'stylus-loader stylus'
    },
    'postcss-loader': {
        type: 'styles',
        priority: 9,
        loader: `{
            loader: 'postcss-loader',
            options: {}
        }`,
        pack: 'postcss-loader'
    }
}

export default (...loadersArray) => {
    console.log(loadersArray);
    const loaders = loadersArray.reduce((acc, el) => {
        if (loadersList[el]) {
            acc.push(loadersList[el])
        }
        return acc;
    }, []);

    return {loaders};
}