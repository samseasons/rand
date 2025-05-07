a=32
function b(a){return new Uint8Array(a)}
function c(a){return new Uint32Array(a)}
function d(a,b){let c,d=0,e=[];for(;d<a;d++){c=b.slice(d*4,d*4+4),e.push(c[0]^c[1]<<8^c[2]<<16^c[3]<<24>>>0)}return e}
function e(a,b){let c=a.length,d=0,e=[];for(;d<c;d++){b[d]+=a[d],e.push(b[d]&255,b[d]>>>8&255,b[d]>>>16&255,b[d]>>>24&255)}return e}
function f(a){a=Array.from(a,a=>a.charCodeAt());let b=a.length,c=0;while(b--){c=c*256+a[b]}return c}
function g(a,g){let h=c(16);c=c(16),h.set([f('expa'),f('nd 3'),f('2-by'),f('te k')]),h.set(d(8,a),4),a=b(g);function i(a,b){return a<<b|a>>>32-b}function j(a,b,c,d,e){a[b]+=a[c],a[e]=i(a[e]^a[b],16),a[d]+=a[e],a[c]=i(a[c]^a[d],12),a[b]+=a[c],a[e]=i(a[e]^a[b],8),a[d]+=a[e],a[c]=i(a[c]^a[d],7)}function k(){c.set(h);let a=0;for(;a<10;a++){j(c,0,4,8,12),j(c,1,5,9,13),j(c,2,6,10,14),j(c,3,7,11,15),j(c,0,5,10,15),j(c,1,6,11,12),j(c,2,7,8,13),j(c,3,4,9,14)}a=e(h,c),h[12]++,h[12]==0&&h[13]++&&h[13]==0&&h[14]++&&h[14]==0&&h[15]++;return a}for(let l=0,m=g;l<m;l+=64){a.set(b(k()).slice(0,m-l),l)}return a}
function h(a){return btoa(String.fromCharCode(...a))}
console.log(h(g(crypto.getRandomValues(b(a)),a*16)))