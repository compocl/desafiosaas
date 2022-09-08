const precio = 400000;


let cantidad = document.querySelector('#cantidad');
let color = document.querySelector('#color');
let boton_calcular = document.querySelector('#calculo');
let total = document.querySelector('#total');
let cantidad_final = document.querySelector('#cantidad_final');
let color_final = document.querySelector('#color_final');


boton_calcular.addEventListener('click',function(){
let valor_total = cantidad.value * precio;
total.innerHTML = valor_total;
cantidad_final.innerHTML = cantidad.value;
color_final.style.backgroundColor = color.value;





});