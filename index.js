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
    return this.read().then(notes => {
      let parsedNotes;
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
    const newNote = { title, text, id: uuiid() };

    return this.getNotes()
      .then(notes => [...notes, newNote])
      .then(updatedNotes => this.write(updatedNotes))
      .then(() => newNote);
  }

  removal(id) {
    return this.getNotes()
      .then(notes => notes.filter(note => note.id !== id))
      .then(filteredNotes => this.write(filteredNotes));
  }
}

module.exports = new Notes();