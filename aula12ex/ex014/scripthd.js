function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagen')
  var data = new Date()
  var hora = 22 //data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = 'rgb(231, 130, 105'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = 'rgb(230, 191, 109'
  } else {
    img.src = 'noite.png'
    document.body.style.background = 'rgb(75, 28, 16)'
  }
}
