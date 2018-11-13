import less from './presets/less';
import sass from './presets/sass';
import stylus from './presets/stylus';
import postcss from './presets/postcss';

const extensions = {less, sass, stylus, postcss};

const generate = (ext) => {
    return extensions[ext]();
}

export default {generate};