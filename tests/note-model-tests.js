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

(function() {
  function testReturnNote() {
    var string2 = "Hello JavaScript"
    var note = new Note(string2);

    if (note.returnNote() !== "Hello JavaScript") {
      throw new Error(`Expected ${string2}`);
    }
  };
  testReturnNote();
})(this);