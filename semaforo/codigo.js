let marcha = document.querySelector(".marcha");
let parada = document.querySelector(".parada");
let rojo_1 = document.querySelector(".rojo_1");
let amarillo_1 = document.querySelector(".amarillo_1");
let verde_1 = document.querySelector(".verde_1");
let rojo_2 = document.querySelector(".rojo_2");
let amarillo_2 = document.querySelector(".amarillo_2");
let verde_2 = document.querySelector(".verde_2");


    

function semaforo(){
  
var contador=0;
    
let firstTime=setInterval(()=>{
    rojo_1.style.backgroundColor = "rgb(255, 0, 0)";
    },1);

   let secondTime=setInterval(()=>{
    amarillo_2.style.backgroundColor = "rgb(255, 255, 0)";
    },1);

   let tercerTime=setInterval(()=>{
    verde_2.style.backgroundColor = "rgb(3, 192, 3)";
    },2000);

    let high2 = setInterval(()=>{
        rojo_2.style.backgroundColor = "rgb(255, 0, 0)";
        amarillo_1.style.backgroundColor = "rgb(255, 255, 0)";
        },10000);

        let high3= setInterval(()=>{
            verde_1.style.backgroundColor = "rgb(3, 192, 3)";
            amarillo_1.style.backgroundColor = "rgba(255, 255, 0,0.2)";
            },12000);


   let prueba = setInterval(() => {
       contador++;
       
       console.log(contador)
       if( contador == 10){
        clearInterval(firstTime);
        rojo_1.style.backgroundColor = "rgba(255, 0, 0,0.2)";
        amarillo_2.style.backgroundColor = "rgba(255, 255, 0,0.2)";
        
    } 
    
    if(contador ==8 ){
        clearInterval(tercerTime);
    verde_2.style.backgroundColor = "rgba(3, 192, 3,0.2)";
    amarillo_2.style.backgroundColor = "rgb(255, 255, 0)";
    } 
    
    if(contador==2 ){
        clearInterval(secondTime);
        amarillo_2.style.backgroundColor = "rgba(255, 255, 0,0.2)"
    }
    if(contador==18){
        clearInterval(high3);
        verde_1.style.backgroundColor = "rgba(3, 192, 3,0.2)";
        amarillo_1.style.backgroundColor = "rgb(255, 255, 0)";

    }
    if(contador==20){
        clearInterval(high2);
        rojo_2.style.backgroundColor = "rgba(255, 0, 0,0.2)";
        amarillo_1.style.backgroundColor = "rgba(255, 255, 0,0.2)";
        clearInterval(prueba);
        return semaforo()
         
       
        
    }

   },1000)

   
};




marcha.addEventListener("click",()=>{
  semaforo()
    
})

parada.addEventListener("click",()=>{
    window.location.reload();
})




