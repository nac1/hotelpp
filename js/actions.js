/*function listo()
{
    alert('listo');
}


document.addEventListener('click',listo,false);
*/


//objeto de tipo estandar

/*
function init()
{ alert(tn.otro);
}*/


var fn= {
//agregar propiedades y metodos
    ready:function(){
    
    document.addEventListener('deviceready',fn.init,false);
 

},
    

   init:function(){
        //alert(fn.otro);
        $('#regSend').click(fn.enviaRegistro); //boton de registrar
        
        $('#regFoto').click(capture.imgCapture);//boton de foto
       
       var x=false;
       if(!x)   
       window.location.href='#reg'; //con esto forzamos a que siempre se registre la personae
       
    },
        
    enviaRegistro:function(){
        var nom=$('#regNom').val();
        var tel=$('#regTel').val();
        var mai=$('#regMail').val();
        
        if(nom !='' && tel != '' && mail !='')
           {
         navigator.notification.alert('correcto',null,'felicidades','aceptar');
           }else{
         alert('Todos los campos son requeridos');
            }
  
        }
    
};

$(fn.ready);
            
//window.addEventListener('load',init,false);
//jQuery(document).ready(init); //alias es el $ en lugar de jquery
//$(document).ready(init);
