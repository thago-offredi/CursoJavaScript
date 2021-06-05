function contar(){
    var inicio = document.getElementById("conti")
    var fim = document.getElementById("contf")
    var passo = document.getElementById("contp")
    var res =document.getElementById("res")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length==0){
        alert("[ERRO!] Digite os dados nos campos e tente novamente" )
    }else{
        res.innerHTML = " Contando: <br> " 
        var i= Number(inicio.value)
        var f= Number(fim.value)
        var p= Number(passo.value)
        if(p <=0){
            alert("Passo inválido, considerando passo 1")
        p=1
        }
        // contagem crescente
        if(i<f){
        for(var c = i;c<=f;c+=p){
        res.innerHTML += "\u{1f449}" + c
        }
    }
    else{
        // contagem regressiva
        for(var c = i; c >=f; c-= p){
            res.innerHTML += "\u{1f449}" +c
        }
      }
      res.innerHTML +="\u{1f3c1}"
    }
}