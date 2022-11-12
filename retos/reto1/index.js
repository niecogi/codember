function openFile(input) {
  const number = document.getElementById('number')
  const name = document.getElementById('name')
  let file = input.files[0]
  const reader = new FileReader()
  reader.readAsText(file)
  reader.onload = function () {
    let correctUsers = 0
    const text = reader.result
    let lines = text.split(/\r?\n\r?\n/)
    let finalName

    lines.forEach(function (line) {
      if (line.includes('usr:') && line.includes('eme:')
        && line.includes('psw:') && line.includes('age:')
        && line.includes('loc:') && line.includes('fll:')) {
        correctUsers += 1
        finalName = line
      }
    })
    number.value = correctUsers
    let nameText = finalName.split(/[usr]?\s/)[0]
    name.value =  nameText.replace('usr:','')
  }
}