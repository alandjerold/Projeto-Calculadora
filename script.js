function insert(num){
    let tela = document.getElementById('tela')
    tela.innerText += (`${num}`)
}
function clean(){
    
    let tela = document.getElementById('tela')
    tela.innerText = (``) 
    
}
function back(){
    let tela = document.getElementById('tela') 
    let str = tela.innerHTML.substring(0, tela.innerHTML.length -1)
    tela.innerHTML = (`${str}`)
    
    
}
function calcular(){
    let tela = document.getElementById('tela')
    
    if(tela.innerHTML.length  >= 1){

        tela.innerHTML = eval(tela.innerHTML)
    }
    else {
        document.getElementById('tela').innerHTML = 'Faça um cálculo..'
    }
    


}