
function loadFile() {
  fetch('http://localhost/static-binary-analysis-guide-1/code/foo.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })
}
