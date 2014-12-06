//creamos un objeto de tipo estandar
var capture={
    imgTomada:function(imgs){
        var images='';
        for(i=0;i<imgs.length;i++)
            images=imgs[i].fullPath;
            
        $('#regFoto').attr('rel',images); //agregar atributo
    },
    
    imgError:function(err){
        
        navigator.notification.alert('error: '+err.code,null,'lo sentimos','Aceptar');
    },
    
    imgCapture:function(){
        
        // start image capture
navigator.device.capture.captureImage(capture.imgTomada, capture.imgError, {limit:2});
    }
    
}