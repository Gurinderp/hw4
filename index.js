const util = require("util");
const fs = require("fs");
const uuiid = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  read() {
  }

  write(note) {
  }

  getNotes() {
  }

  addNote(note) {
  }

  removeNote(id) {
  }
}

module.exports = new Notes();