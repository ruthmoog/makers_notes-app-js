(function(exports) {
  function NoteList() {
    this.allNotes = []
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this.allNotes.push(note)
  }

  NoteList.prototype.showAllNotes = function() {
    return this.allNotes
  }

  exports.NoteList = NoteList;
})(this);
