a='0123456789',a=new Blob([a]),b=new FileReader(),b.readAsDataURL(a),b.onloadend=function(){console.log(b.result.slice(37))}
