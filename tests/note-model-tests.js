(function() {
  function testCreateNote() {
    var string = "Hello World"
    var note = new Note(string);

    if (note.text !== "Hello World") {
      throw new Error(`Expected ${string}`);
    }
  };
  testCreateNote();
})(this);