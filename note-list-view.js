(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.generateHTML = function() {
    var crazyNote = this.noteList.showAllNotes().map(note => `<li>${note.returnNote()}</li>`);
    return `<ul>${crazyNote}</ul>`
  }

  exports.NoteListView = NoteListView;
})(this);