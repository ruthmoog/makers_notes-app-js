(function() {
  function testCreateNote() {
    var string = "Hello World"
    var note = new Note(string);

    var got = note.text
    var want = string

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`)
    }
  };
  testCreateNote();
})(this);

(function() {
  function testReturnNote() {
    var string2 = "Hello JavaScript"
    var note = new Note(string2);

    var got = note.returnNote()
    var want = string2

    if (got !== want) {
      throw new Error(`Expected ${want}, got ${got}`)
    }
  };
  testReturnNote();
})(this);
