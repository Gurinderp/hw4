const util = require("util");
const fs = require("fs");
const uuiid = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  read() {
    return readFileAsync("/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("/db.json", JSON.stringify(note));
  }

  retrieval() {
  }

  addNote(note) {
  }

  removal(id) {
  }
}

module.exports = new Notes();