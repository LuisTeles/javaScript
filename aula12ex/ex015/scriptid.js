function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'cm.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'ym.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'am.png')
      } else {
        //idoso
        img.setAttribute('src', 'om.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'cw.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'yw.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'aw.png')
      } else {
        //idoso
        img.setAttribute('src', 'ow.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
