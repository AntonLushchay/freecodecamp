const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;
const num = process.argv[2];
const Directory = "./JavaScriptAlgorithmsandDataStructures/LearnIntroductoryJavaScriptByBuildingAPyramidGenerator/"
const command = `git commit -m "step${num-1}"`;

try {
  execSync(command, { stdio: 'inherit' });
  console.log(`Комит создан с сообщением: step${num-1}`);
} catch (err) {
  console.error('Ошибка при создании коммита:', err);
}

fs.mkdir(Directory + "step" + num, err => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error(`Папка "${num}" уже существует.`);
    } else {
      console.error(err);
    }
    return;
  }

  console.log(`Папка "${num}" создана.`);
});

fs.writeFile(Directory + "step" + num + "/script.js", "", err => {
	if (err) {
	  console.error(err);
	  return;
	}
	console.log(`Файл создан.`);
  });

