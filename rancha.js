a=32
function b(a){return new Uint8Array(a)}
function c(a){return new Uint32Array(a)}
function d(a){let b=0,c=a.length,d=[];for(;b<c;b+=4){a=a.slice(b),d.push(a[0]^a[1]<<8^a[2]<<16^a[3]<<24>>>0)}return d}
function e(a){let b=0,c=a.length,d=[],e=255;for(;b<c;b++){d.push(a[b]&e,a[b]>>>8&e,a[b]>>>16&e,a[b]>>>24&e)}return d}
function f(a,b){return a<<b|a>>>32-b}
function g(a,g){let h=c(16),i=d(a);h.set(i),h[8]++,a=b(g);function j(a,b,c,d,e){a[b]+=a[c],a[e]=f(a[e]^a[b],16),a[d]+=a[e],a[c]=f(a[c]^a[d],12),a[b]+=a[c],a[e]=f(a[e]^a[b],8),a[d]+=a[e],a[c]=f(a[c]^a[d],7)}function k(){i=h;let a=c(i),b=a.length,d,e=0;for(;e<25;e++){j(a,0,4,8,12),j(a,1,5,9,13),j(a,2,6,10,14),j(a,3,7,11,15),j(a,0,5,10,15),j(a,1,6,11,12),j(a,2,7,8,13),j(a,3,4,9,14);if(e%5==4){d=b;while(d--){a[d]+=i[d]}i=c(a)}}a=8,h[a]++;while(h[a]==0&&a<15){h[a++]++}return i}for(let b=0;b<g;b+=64){a.set(e(k()).slice(0,g-b),b)}return a}
function h(a){return btoa(String.fromCharCode(...a))}
console.log(h(g(crypto.getRandomValues(b(a)),a*16)))