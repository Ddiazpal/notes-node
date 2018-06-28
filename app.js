//console.log('starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); //this is gonna save everything on exports property
const titleOptions = {
  describe: 'Title od the note',
  demand: true,
  alias:'t'
};
const bodyOptions = {
  describe: 'Wtite what you need in your note',
  demand: true,
  alias:'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title:titleOptions,
    body:bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title:titleOptions
  })
  .command('remove', 'remove the notes you want',{
    title:titleOptions
  })
  .help()
  .argv;
var command = argv._[0]

 if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log('everything is ok');
    notes.logNotes(note);
  }else {
    console.log('there was a problem, note was not created');
  }
} else if (command=== 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length}  note(s).`);
  allNotes.forEach((note) => notes.logNotes(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('note readen');
    notes.logNotes(note);
  }else{
    console.log('note was not found');
  }
} else if (command === 'remove' ) {
  var noteRemoved = notes.removeNote(argv.title);
  var  message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('command do not recognized');
}
