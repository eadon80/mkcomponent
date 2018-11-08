import fs from 'fs';

const writeImports = (arr) => {
    return arr.map((package) => {
        return `const ${package.split('-').map(p => p[0].toUpperCase() + p.slice(1))} = require("${package}");`
    }).join('\n');
};

const imports = writeImports(
    ['path', 'html-webpack-plugin', 'webpack-md5-hash', 'mini-css-extract-plugin']
);

const entry = `{
    main: './src/index.js',
}`;

const output = `{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' 
}`;

// TODO: придумать как теплейтить модули, желательно чтобы не заполнять каждый
const modules = {}

// TODO: придумать как теплейтить плагины, желательно вмсте смодулями, а также чтобы заносилось в package.json
const plugins = {}

export default (webpackFile) => {
    fs.readFile(__dirname + '/templates/webpack/config.js', 'utf-8', (err, data) => {
        fs.writeFileSync(
            webpackFile, 
            data
                .replace('IMPORTS', imports)
                .replace('ENTRY', entry)
                .replace('OUTPUT', output)
        );
    })
}
