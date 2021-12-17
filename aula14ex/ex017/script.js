function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    Window.alert('Por favor, digite um número!')
    let n = Number(num.value)
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ``
    /*while (c <= 10) { //mesma coisa que for
       let item = document.createElement('option')
      item.text = `${n} X ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }*/
    for (c; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${n} X ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
    }
  }
}
