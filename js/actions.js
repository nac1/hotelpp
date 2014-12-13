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
        var foto=$('#regFoto').attr('rel');
        
        if(nom !='' && tel != '' && mail !='' && foto !='' && foto !=undefined)
           {
               //usar ajax para enviar datos
         
               $.ajax({
                    type: "POST",
                    url: "http://carlos.igtsoft.com/apps/test.php",
                    data: { nom: nom, mail: mail,tel:tel }
                    })
                    .done(function( msg ) {
                   // alert( "Data Saved: " + msg );
                   if(msg==1)
                   {
                       fileTransfer.subirFoto();
                   }
                   
                    });
               
               
           }else{
         navigator.notification.alert('Todos los campos son requeridos',null,'Lo sentimos','aceptar');
            }
  
        }
    
};

$(fn.ready);
            
//window.addEventListener('load',init,false);
//jQuery(document).ready(init); //alias es el $ en lugar de jquery
//$(document).ready(init);
