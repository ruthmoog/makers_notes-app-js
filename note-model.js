(function(exports) {
  function Note(text) {
    this.text = text;
    this.returnNote = function() {
      return this.text
    };
  };

  exports.Note = Note;
})(this);


