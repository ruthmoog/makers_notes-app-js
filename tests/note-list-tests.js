(function() {
  function testNoteList() {
    var noteList = new NoteList()

    var got = noteList.allNotes.length
    var want = 0

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`)
    }
  }
  testNoteList();
})(this);

(function() {
  function testCreateNote() {
    var noteList = new NoteList()
    var string = "Cheese twists are twisty"
    noteList.createNote(string)

    var got = noteList.allNotes.length
    var want = 1

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`)
    }
  }
  testCreateNote();
})(this);
