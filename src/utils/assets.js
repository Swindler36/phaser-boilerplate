const fs = require("fs");

fs.rmSync("./dist/assets", { recursive: true, force: true });

fs.cp("./src/assets", "./dist/assets", { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  }
});

fs.cp("./src/assets", "./public/assets", { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  }
});

const preload_files = [];

const readdir = (dir_path = "") => {
  fs.readdirSync("./src/" + dir_path).forEach((file) => {
    if (fs.lstatSync("./src/" + dir_path + file).isDirectory()) {
      readdir(dir_path + file + "/");
    } else {
      preload_files.push(dir_path + file);
    }
  });
};

readdir("assets/preload/");

fs.writeFileSync(
  "./dist/assets.js",
  "const preload_files = " + JSON.stringify(preload_files)
);

fs.writeFileSync(
  "./public/assets.js",
  "const preload_files = " + JSON.stringify(preload_files)
);

fs.copyFile(
  "./src/config/fbapp-config.json",
  "./dist/fbapp-config.json",
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
