import loaders from './loaders';

const getStylesLoaders = (styles) => {
    if (!styles) {
        return;
    }
    const loaderArray = [];
    styles.forEach((style) => {
        loaderArray.push(loaders(...style.loaders));
    });

    return loaderArray;
}

export default (data) => {
    getStylesLoaders(data['styles'])
}