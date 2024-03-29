//console.log('starting node.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
      title,
      body
    };

    var duplicateNotes = notes.filter((note) =>  note.title === title);

    if (duplicateNotes.length == 0){
      notes.push(note);
      saveNotes(notes);
      return note;
    }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  //fetch notes
  var notes = fetchNotes();
  //filter notes, removing the one with title of argument
  var filteredNotes = notes.filter((note) => note.title!==title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNotes = (note) => {
  debugger;
  console.log('------');
  console.log(`title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNotes
};
/*
module.exports.addNote = () => {
   console.log('addNote');
   return 'New note';
}

module.exports.add = function (a, b){
  return a+b;
}
*/
