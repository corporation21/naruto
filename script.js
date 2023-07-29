function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fno = document.getElementById(`txtano`)
    var res = document.getElementById(`res`)
    var a = Number(fno.value)
    var img = document.getElementById(`imagem`)
    if (a <= 0 || a > ano) {
        window.alert(`[ERRO] Verifique Os Dados e Tente Novamente`)
       
    }else{
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - a
        var genero = ''
      
         if (fsex[1].checked){
            genero = `Mulher`
            if (idade >= 0 && idade < 10){
                //crianca
                //img.src = 'criancab.jpg'
            } else if(idade >= 10 && idade < 21){
                //jovem
                img.src = 'foto-naruto.jpg'

            }else if(idade >= 21 && idade < 50){
                //adulta
                img.src = 'foto-moca.png'
            } else{
                //idosa
                img.src = 'foto-velha.png'
                
            }
         } else{
            genero = 'Homen'
            if (idade >= 0 && idade < 10){
                //crianca
                img.src= 'foto-crianca.png'
            } else if(idade >= 10 && idade < 21){
                //jovem
                img.src = 'foto-jovem.jpg'
            }else if(idade >= 21 && idade < 50){
                //adulto
                img.src= 'uchiha.jpg'
            } else{
                //idoso
                img.src = 'foto-velho.png'
            }
         }
         res.innerHTML = `Detectamos: ${genero} com ${idade} Anos`
         res.style.textAlign = 'center'
         res.appendChild ='img'
    }
}