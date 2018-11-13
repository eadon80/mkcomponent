import webpack from './webpack';
import frameworks from './frameworks';
import styles from './styles';
import templates from './templates';

const styleNames = ['sass', 'less', 'stylus', 'postcss'];
const frameworkNames = ['angular', 'react', 'vue'];
const templateNames = ['pug', 'handlebars'];

export default (...presets) => {
    const result = presets.reduce((acc, el) => {
        if (styleNames.some((item) => item === el)) {
            acc['styles'] = acc['styles'] ? [...acc['styles'], styles.generate(el)] : [styles.generate(el)];
        }
        // if (frameworkNames.some((item) => item === el)) {
        //     acc['frameworks'] = acc['frameworks'] ? [...acc['frameworks'],  frameworks.generate(el)] : [frameworks.generate(el)];
        // }
        // if (templateNames.some((item) => item === el)) {
        //     acc['templates'] = acc['templates'] ? [...acc['templates'], templates.generate(el)] : [templates.generate(el)];
        // }
        return acc;
    }, {});
    webpack(result);
}