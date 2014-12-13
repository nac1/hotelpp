var fileTransfer={ //usando test
 
    subido:function(r){
        if (r.response==0)
        {
            //satisafactorio
            var acciones=function(btn){
                if(btn==1)//sonido
                    navigator.notification.beep(1);
                if(btn==2)//vibrar
                    navigator.vibrate(1000);
            }
             navigator.notification.confirm('se ha registrado correctamente',acciones,'Felicidades',['Sonido', 'Vibrar','Cancelar']);
        }else{
            //error en servidor
             navigator.notification.alert('Error en el servidor','null',"lo sentimos!",'Aceptar');
        }
        
      //alert();
    },
    
    
    error:function(err){
    navigator.notification.alert('Error '+err.code,null,'Lo sentimos!','Aceptar');
        
        
    },
    
    opciones:new FileUploadOptions(),
    
    ft:new fileTransfer(),
    
    subirFoto:function(){
    fileTransfer.opciones.filekey='foto'; //nombre del input haciendo referencia
    fileTransfer.opciones.fileName='carlos'; //nombre del archivo
    fileTransfer.opciones.mimeType='image/jpeg';
        
    fileTransfer.ft.upload(
        $('#regFoto').attr('rel'),//url del archivo a subir
        'http://carlos.igtsoft.com/apps/test.php',//url del servidor
        fileTransfer.subido, //función en caso de ser satisfactorio
        fileTransfer.error,//función en caso de error
        fileTransfer.opciones
    );
        
        
    }
    
    
    
    
    
    
    

};