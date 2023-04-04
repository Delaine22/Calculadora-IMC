function calcular(){
let inputPeso = document.getElementById('peso')
let inputAltura = document.getElementById('altura')
let seuIMC = document.getElementById('IMC')
let situation = document.getElementById('situacao')
let obesity = document.getElementById('obesidade')

inputAltura.style.border = 'none'
inputPeso.style.border = 'none'

if(!inputPeso.value || !inputAltura ){
    if(!inputPeso.value && !inputAltura.value){
        inputPeso.style.border =' 2px solid red';
        inputAltura.style.border =' 2px solid red';
    }else if(!inputPeso.value){
        inputPeso.style.border =' 2px solid red';
    }else{
        inputAltura.style.border =' 2px solid red';
    }
   
}
else{
    let weight = Number(inputPeso.value)
    let height = Number(inputAltura.value)
    let total = weight/ (height*height)
    let IMC = total.toFixed(2).replace('.',',')
    seuIMC.innerHTML = `${IMC}` 
}
   
}

