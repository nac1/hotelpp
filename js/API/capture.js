//creamos un objeto de tipo estandar
var capture={
    imgTomada:function(imgs){
        var image='';
        for(i=0;i<imgs.length;i++)
            image=imgs[i].fullPath;
            
        $('#regFoto').attr('rel',image); //agregar atributo
        $('#viewPhoto').html('<img src="'+image+'" style:"width:100%;">');
    },
    
    imgError:function(err){
        
        navigator.notification.alert('error: '+err.code,null,'lo sentimos','Aceptar');
    },
    
    imgCapture:function(){
        
        // start image capture
navigator.device.capture.captureImage(capture.imgTomada, capture.imgError, {limit:2});
    }
    
}