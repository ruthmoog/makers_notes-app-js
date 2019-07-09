(function(exports) {
  function NoteList() {
    this.allNotes = []
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this.allNotes.push(note)
  }
  exports.NoteList = NoteList;
})(this);
