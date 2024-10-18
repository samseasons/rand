a='0123456789',b=a.length/2**32,c=new Uint32Array(1);for(d=16;d--;){f='';for(e=16;e--;)f+=a[Math.floor(crypto.getRandomValues(c)[0]*b)];console.log(f)}
