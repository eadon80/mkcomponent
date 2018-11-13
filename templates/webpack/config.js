IMPORTS

const config = {
    entry: ENTRY,
    output: OUTPUT,
    module: MODULE,
    plugins: PLUGINS
};

module.exports = (env, argv) => {
    return config;
};

