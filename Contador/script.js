function contar() {
    let go = document.getElementById('go')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let cont = document.getElementById('cont')
    let but = document.getElementById('but')

   if (go.value.lenght == 0 || fim.value.length == 0 || passo.value.length == 0) {
      cont.innerHTML = "Impossível contar!"
   } else {
      cont.innerHTML = "<strong>Contando: </strong><br>"
      let i = Number(go.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if (p <= 0) {
         window.alert("Passo inexistente, consideraremos passo 1")
         p = 1
      }
      if (i < f) {
         for (let c = i; c <= f; c += p) {
            cont.innerHTML += `${c} \u{1F449}`
         } 
      } else {
         for (let c = i; c >= f; c -= p) {
            cont.innerHTML += ` ${c} \u{1F449}`
         }   
      }
      cont.innerHTML += `\u{1F3C1}`
   }  
}