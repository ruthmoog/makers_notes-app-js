(function() {
  function testEmptyNoteListView() {
    var view = new NoteListView(new NoteList());

    var got = view.generateHTML();
    var want = "<ul></ul>";

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`);
    }
  }
  testEmptyNoteListView()
})(this);

(function() {
  function testOneNoteListView() {
    var noteList = new NoteList()
    noteList.createNote("bebe")

    var view = new NoteListView(noteList);

    var got = view.generateHTML();
    var want = "<ul><li>bebe</li></ul>";

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`);
    }
  }
  testOneNoteListView()
})(this);