function calcular(){
let inputPeso = document.getElementById('peso')
let inputAltura = document.getElementById('altura')
let seuIMC = document.getElementById('IMC')
let situation = document.getElementById('situacao')
let obesity = document.getElementById('obesidade')

inputAltura.style.border = 'none'
inputPeso.style.border = 'none'

if(!inputPeso.value || !inputAltura ){
    if(!inputPeso.value && inputAltura.value){
        inputPeso.style.border =' 2px solid red';
        inputAltura.style.border =' 2px solid red';
    }else if(inputPeso.value){
        inputPeso.style.border =' 2px solid red';
    }else{
        inputAltura.style.border =' 2px solid red';
    }
}
else{
    let weight = Number(inputPeso.value)
    let height = Number(inputAltura.value)
    let total = weight/ (height*height)
    let IMC = total.toFixed(2)
    seuIMC.innerHTML = `${IMC}` 

    if(IMC < 18,5){
        situation.innerHTML= 'Magreza'
        obesity.innerHTML = '0'
    }else if(IMC >=18.5 && IMC <25)
    {
        situation.innerHTML= 'Normal'
         obesity.innerHTML = '0'
    }else if(IMC >= 25 && IMC < 30)
    {
        situation.innerHTML = 'Sobrepeso'
        obesity.innerHTML = 'I'
    }else if(IMC >= 30 && IMC  <40)
    {
        situation.innerHTML = 'Obesidade'
        obesity.innerHTML = 'II'
    }else{
        situation.innerHTML= 'Obesidade grave'
        obesity.innerHTML= 'III'
    }
}
   
}