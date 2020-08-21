const library = require("../utility/librarydata");

const getAllRoutes = (app) => {
  const routedir = __dirname;
  const alldirectories = library.fs.readdirSync(routedir);
  alldirectories.forEach((element) => {
    // Remove extension from file name
    // Only load files that aren't directories and aren't blacklisted
    const cuurentelemtpath =  library.path.format({
      root: '/ignored',
      dir: routedir,
      base: element
    }); 
    const cuurentelemt = library.fs.lstatSync(cuurentelemtpath);
    if (!cuurentelemt.isDirectory() && element != "index.js") {
      app.use(require(cuurentelemtpath));
    }
  });
}

module.exports.getAllRoutes = getAllRoutes;