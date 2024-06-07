import { src, dest, series } from 'gulp';
import concat from 'gulp-concat';
import { deleteAsync } from 'del';
import order from 'gulp-order';
import fs from 'fs';
import path from 'path';

const paths = {
    lern1: {
        src: 'JavaScriptAlgorithmsAndDataStructures/LearnIntroductoryJavaScriptByBuildingAPyramidGenerator/**/*.js',
        dest: 'JavaScriptAlgorithmsAndDataStructures/LearnIntroductoryJavaScriptByBuildingAPyramidGenerator/dist',
    },
    lern2: {
        src: 'JavaScriptAlgorithmsAndDataStructures/LearnIntroductoryJavaScriptByBuildingAPyramidGenerator',
    },
};

// function countFolders(folderPath) {
//     let folderCount = 0;

//     const files = fs.readdirSync(folderPath);
//     for (const file of files) {
//         const filePath = path.join(folderPath, file);
//         const stats = fs.statSync(filePath);
//         if (stats.isDirectory()) {
//             folderCount++;
//         }
//     }

//     return folderCount;
// }

export function concatjs() {
    function countFolders(folderPath) {
        let folderCount = 0;

        const files = fs.readdirSync(folderPath);
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                folderCount++;
            }
        }

        return folderCount;
    }

    const folderPath = paths.lern2.src; // Путь к папке, в которой нужно посчитать папки
    const folderCount = countFolders(folderPath);
    console.log(`В папке ${folderPath} ${folderCount} папок.`);

    const sortedFolders = [...Array(folderCount)].map((_, i) => `Step${i + 1}`);
    return src(
        sortedFolders.map(
            (folder) =>
                `JavaScriptAlgorithmsAndDataStructures/LearnIntroductoryJavaScriptByBuildingAPyramidGenerator/${folder}/script.js`
        )
    )
        .pipe(order(['name', 'desc']))
        .pipe(concat('concated.js', { newLine: '\n\n\n' }))
        .pipe(dest(paths.lern1.dest));
}

export const clean = () => deleteAsync(paths.lern1.dest);

const build = series(clean, concatjs);

export default build;

