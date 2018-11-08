import fs from 'fs';
import webpackGenerator from './generators/webpack.generator';


const defaultConfig = {
    components: {
        names: ['header', 'content', 'footer'],
        path: '/src/components'
    },
    assets: {
        names: ['images', 'fonts'],
        path: '/src/assets'
    }
}

const createFile = (path, name, ext, content) => {
    fs.writeFileSync(`${path}/${name}.${ext}`, content);
    return Promise.resolve(name);
}

const createDir = (name) => {
    fs.mkdirSync(name); 
    return Promise.resolve(name);
}

const createComponent = (name, path) => {
    createDir(__dirname + `${path}/${name}`).then((dirName) => {
        createFile(dirName, name, 'js', 'console.log(123)');
        createFile(dirName, name, 'css', '* {margin: 0}');
        createFile(dirName, name, 'html', '<h1>Hello world</h1>');
    })
}


const createStructure = (config) => {
    const pathArray = Object.keys(config).map((key) => {
        return config[key].path;
    })

    pathArray.forEach((path) => {
        path.split('/').slice(1).reduce((acc, item) => {
            acc.push(item);
            const dir = __dirname + '/' + acc.join('/');
            if (!fs.existsSync(dir)) {
                createDir(dir);
            }
            return acc;
        }, []);
    })
}

const createComponents = (names, path) => {
    names.forEach((name) => {
        if (!fs.existsSync(__dirname + `${path}/${name}`)) {
            createComponent(name, path);
        }
    })
}

const createAssets = (names, path) => {
    names.forEach((name) => {
        if (!fs.existsSync(__dirname + `${path}/${name}`)) {
            createDir(__dirname + `${path}/${name}`)
        }
    })
}

const processInit = () => {
    fs.readFile('./mkc.config.json', 'utf8', (err, data) => {
        const config = Object.assign(defaultConfig, data ? JSON.parse(data) : {});

        createStructure(config);
        createComponents(config.components.names, config.components.path);
        createAssets(config.assets.names, config.assets.path);
    })
}

const processAdd = (names) => {
    fs.readFile('./mkc.config.json', 'utf8', (err, data) => {
        const config = Object.assign(defaultConfig, data ? JSON.parse(data) : {});

        createStructure(config);
        createComponents(names, config.components.path);
    })
}

const processWebpack = () => {
    // createFile(__dirname, 'webpack.config', 'js', 'const a = 2;');
    webpackGenerator(__dirname + '/webpack.config.js');
}

const argv = process.argv.slice(2);

if (argv.length) {
    if (argv[0] === 'init') {
        processInit();
    }

    if (argv[0] === 'add') {
        processAdd(argv.slice(1));
    }

    if (argv[0] === 'webpack') {
        processWebpack();
    }
}