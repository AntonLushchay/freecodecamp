import { src, dest, series } from 'gulp';
import concat from 'gulp-concat';
import { deleteAsync } from 'del';

const paths = {
    lern1: {
        src: 'JavaScriptAlgorithmsAndDataStructures/LearnIntroductoryJavaScriptByBuildingAPyramidGenerator/**/*.js',
        dest: 'JavaScriptAlgorithmsAndDataStructures/LearnIntroductoryJavaScriptByBuildingAPyramidGenerator/',
    },
};

export function concatjs() {
    return src(paths.lern1.src).pipe(concat('concated.js')).pipe(dest(paths.lern1.dest));
}

export const clean = () => deleteAsync(paths.lern1.dest);

// function watchFiles() {
//     watch(paths.lern1.src, concatjs);
// }
// export { watchFiles as watch };

const build = series(clean, concatjs);

export default build;
