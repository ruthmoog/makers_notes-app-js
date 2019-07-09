(function() {
  function testEmptyNoteListView() {
    var view = new NoteListView();

    var got = view.generateHTML();
    var want = "<ul></ul>";

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`);
    }
  }
  testEmptyNoteListView()
})(this);
