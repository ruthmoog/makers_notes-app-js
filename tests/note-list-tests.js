(function() {
  function testShowAllNotes() {
    var noteList = new NoteList()

    var got = noteList.showAllNotes().length
    var want = 0

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`)
    }
  }
  testShowAllNotes();
})(this);

(function() {
  function testCreateNote() {
    var noteList = new NoteList()
    var string = "Cheese twists are twisty"
    noteList.createNote(string)

    var got = noteList.showAllNotes().length
    var want = 1

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`)
    }
  }
  testCreateNote();
})(this);
