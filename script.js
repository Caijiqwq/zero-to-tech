function changeText() {
  document.getElementById('msg').textContent = '你刚刚触发了一段 JavaScript。';
  setTimeout(function() {
    document.getElementById('msg').textContent = '这是我的第一个网页，现在它有了一点样式。';
  }, 2000);
}
