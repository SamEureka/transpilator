// Because we don't want to tab out of the textarea!

var tabInsert = function(e){
  if(e.keyCode === 9){
    var start = this.selectionStart;
    var end = this.selectionEnd;
    var target = e.target;
    var value = target.value;
    target.value = value.substring(0, start)
          + "  "
          + value.substring(end);
    this.selectionStart = this.selectionEnd = start + 2;
    e.preventDefault();
  }
};

module.exports = tabInsert;
