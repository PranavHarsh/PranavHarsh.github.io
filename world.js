/*! (c) 2026 Pranav Harsh. All rights reserved. */
var bu=0,wc=1,Tu=2;var Wr=1,Do=2,Gs=3,Ii=0,Ke=1,un=2,Xi=0,Vs=1,qi=2,Ac=3,Ec=4,wu=5;var Yi=100,Au=101,Eu=102,Ru=103,Cu=104,Iu=200,Pu=201,Lu=202,Du=203,Rc=204,Cc=205,Nu=206,Uu=207,Fu=208,Ou=209,Bu=210,zu=211,ku=212,Gu=213,Vu=214,to=0,eo=1,no=2,As=3,io=4,so=5,ro=6,ao=7,No=0,Hu=1,Wu=2,$n=0,Ic=1,Pc=2,Lc=3,Xr=4,Dc=5,Nc=6,Uc=7;var Fc=300,Zi=301,Hs=302,Uo=303,Fo=304,oo=1e3,Hn=1001,lo=1002,qe=1003,Xu=1004;var qr=1005;var on=1006,Oo=1007;var ui=1008;var dn=1009,Oc=1010,Bc=1011,Ws=1012,Bo=1013,Fn=1014,wn=1015,On=1016,zo=1017,ko=1018,Ji=1020,zc=35902,kc=35899,Gc=1021,Vc=1022,Bn=1023,li=1026,di=1027,Go=1028,Vo=1029,Pi=1030,Ho=1031;var Wo=1033,Yr=33776,Zr=33777,Jr=33778,$r=33779,Xo=35840,qo=35841,Yo=35842,Zo=35843,Jo=36196,$o=37492,Ko=37496,Qo=37488,jo=37489,Kr=37490,tl=37491,el=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,xl=36283,vl=36284,Qr=36285,yl=36286;var fr=2300,co=2301,Ka=2302,pc=2303,mc=2400,gc=2401,_c=2402;var qu=3200;var jr=0,Yu=1,fi="",Je="srgb",pr="srgb-linear",mr="linear",fe="srgb";var Qa=7680;var Zu=519,Ju=512,$u=513,Ku=514,Hc=515,Qu=516,ju=517,Wc=518,Xc=519,qc=35044;var Yc="300 es",bn=2e3,Es=2001;function Pf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){let i=Rs("canvas");return i.style.display="block",i}var Vh={},Cs=null;function gr(...i){let t="THREE."+i.shift();Cs?Cs("log",t,...i):console.log(t,...i)}function ed(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=ed(i);let t="THREE."+i.shift();if(Cs)Cs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=ed(i);let t="THREE."+i.shift();if(Cs)Cs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ki(...i){let t=i.join(" ");t in Vh||(Vh[t]=!0,Vt(...i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var id={[to]:to,[no]:ro,[io]:io,[As]:so,[eo]:eo,[ro]:no,[ao]:ao,[so]:As},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vl=Math.PI/180,_r=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function Df(i,t){return(i%t+t)%t}function Hl(i,t,e){return(1-e)*i+e*t}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rd(i,t){if(t.constructor===Float32Array)return i;let e=Sl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ad(i,t){if(t.constructor===Float32Array)return i;let e=Sl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var jc=class jc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jc.prototype.isVector2=!0;var zt=jc,Xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],f=r[a+1],x=r[a+2],M=r[a+3];if(p!==M||h!==d||c!==f||u!==x){let g=h*d+c*f+u*x+p*M;g<0&&(d=-d,f=-f,x=-x,M=-M,g=-g);let m=1-o;if(g<.9995){let S=Math.acos(g),R=Math.sin(S);m=Math.sin(m*S)/R,o=Math.sin(o*S)/R,h=h*m+d*o,c=c*m+f*o,u=u*m+x*o,p=p*m+M*o}else{h=h*m+d*o,c=c*m+f*o,u=u*m+x*o,p=p*m+M*o;let S=1/Math.sqrt(h*h+c*c+u*u+p*p);h*=S,c*=S,u*=S,p*=S}}t[e]=h,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],h=n[s+1],c=n[s+2],u=n[s+3],p=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+u*p+h*f-c*d,t[e+1]=h*x+u*d+c*p-o*f,t[e+2]=c*x+u*f+o*d-h*p,t[e+3]=u*x-o*p-h*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),d=h(n/2),f=h(s/2),x=h(r/2);switch(a){case"XYZ":this._x=d*u*p+c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p-d*f*x;break;case"YXZ":this._x=d*u*p+c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p+d*f*x;break;case"ZXY":this._x=d*u*p-c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p-d*f*x;break;case"ZYX":this._x=d*u*p-c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p+d*f*x;break;case"YZX":this._x=d*u*p+c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p-d*f*x;break;case"XZY":this._x=d*u*p-c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p+d*f*x;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],c=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-h)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(u-h)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(h+u)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(h+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*h,this._y=s*u+a*h+r*o-n*c,this._z=r*u+a*c+n*h-s*o,this._w=a*u-n*o-s*h-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let h=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);h=Math.sin(h*c)/u,e=Math.sin(e*c)/u,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},th=class th{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+h*c+a*p-o*u,this.y=n+h*u+o*c-r*p,this.z=s+h*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;var B=th,Wl=new B,Hh=new Xn,eh=class eh{constructor(t,e,n,s,r,a,o,h,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c)}set(t,e,n,s,r,a,o,h,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=h,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],u=n[4],p=n[7],d=n[2],f=n[5],x=n[8],M=s[0],g=s[3],m=s[6],S=s[1],R=s[4],b=s[7],C=s[2],E=s[5],_=s[8];return r[0]=a*M+o*S+h*C,r[3]=a*g+o*R+h*E,r[6]=a*m+o*b+h*_,r[1]=c*M+u*S+p*C,r[4]=c*g+u*R+p*E,r[7]=c*m+u*b+p*_,r[2]=d*M+f*S+x*C,r[5]=d*g+f*R+x*E,r[8]=d*m+f*b+x*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*h+s*r*c-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*h-u*r,f=c*r-a*h,x=e*p+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=p*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(u*e-s*h)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*h-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*o)+a+t,-s*c,s*h,-s*(-c*a+h*o)+o+e,0,0,1),this}scale(t,e){return ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;var qt=eh,Xl=new qt,Wh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nf(){let i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:t,whitePoint:n,transfer:mr,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),i}var re=Nf();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=Rs("canvas")),as.width=t.width,as.height=t.height;let s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uf=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ql(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Ff=0,Yl=new B,tn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=on,a=ui,o=Bn,h=dn,c=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=$i(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Fc;tn.DEFAULT_ANISOTROPY=1;var nh=class nh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,c=h[0],u=h[4],p=h[8],d=h[1],f=h[5],x=h[9],M=h[2],g=h[6],m=h[10];if(Math.abs(u-d)<.01&&Math.abs(p-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+M)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,b=(f+1)/2,C=(m+1)/2,E=(u+d)/4,_=(p+M)/4,T=(x+g)/4;return R>b&&R>C?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=E/n,r=_/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=T/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=_/r,s=T/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-x)*(g-x)+(p-M)*(p-M)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(g-x)/S,this.y=(p-M)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nh.prototype.isVector4=!0;var Te=nh,uo=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fo=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Lo=class Lo{constructor(t,e,n,s,r,a,o,h,c,u,p,d,f,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c,u,p,d,f,x,M,g)}set(t,e,n,s,r,a,o,h,c,u,p,d,f,x,M,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=h,m[2]=c,m[6]=u,m[10]=p,m[14]=d,m[3]=f,m[7]=x,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),a=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*p,x=o*u,M=o*p;e[0]=h*u,e[4]=-h*p,e[8]=c,e[1]=f+x*c,e[5]=d-M*c,e[9]=-o*h,e[2]=M-d*c,e[6]=x+f*c,e[10]=a*h}else if(t.order==="YXZ"){let d=h*u,f=h*p,x=c*u,M=c*p;e[0]=d+M*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-x,e[6]=M+d*o,e[10]=a*h}else if(t.order==="ZXY"){let d=h*u,f=h*p,x=c*u,M=c*p;e[0]=d-M*o,e[4]=-a*p,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*u,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let d=a*u,f=a*p,x=o*u,M=o*p;e[0]=h*u,e[4]=x*c-f,e[8]=d*c+M,e[1]=h*p,e[5]=M*c+d,e[9]=f*c-x,e[2]=-c,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let d=a*h,f=a*c,x=o*h,M=o*c;e[0]=h*u,e[4]=M-d*p,e[8]=x*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+x,e[10]=d-M*p}else if(t.order==="XZY"){let d=a*h,f=a*c,x=o*h,M=o*c;e[0]=h*u,e[4]=-p,e[8]=c*u,e[1]=d*p+M,e[5]=a*u,e[9]=f*p-x,e[2]=x*p-f,e[6]=o*u,e[10]=M*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Of,t,Bf)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),yi.crossVectors(n,pn),yi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),yi.crossVectors(n,pn)),yi.normalize(),wa.crossVectors(pn,yi),s[0]=yi.x,s[4]=wa.x,s[8]=pn.x,s[1]=yi.y,s[5]=wa.y,s[9]=pn.y,s[2]=yi.z,s[6]=wa.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],u=n[1],p=n[5],d=n[9],f=n[13],x=n[2],M=n[6],g=n[10],m=n[14],S=n[3],R=n[7],b=n[11],C=n[15],E=s[0],_=s[4],T=s[8],U=s[12],I=s[1],F=s[5],z=s[9],q=s[13],L=s[2],Y=s[6],K=s[10],W=s[14],rt=s[3],J=s[7],it=s[11],st=s[15];return r[0]=a*E+o*I+h*L+c*rt,r[4]=a*_+o*F+h*Y+c*J,r[8]=a*T+o*z+h*K+c*it,r[12]=a*U+o*q+h*W+c*st,r[1]=u*E+p*I+d*L+f*rt,r[5]=u*_+p*F+d*Y+f*J,r[9]=u*T+p*z+d*K+f*it,r[13]=u*U+p*q+d*W+f*st,r[2]=x*E+M*I+g*L+m*rt,r[6]=x*_+M*F+g*Y+m*J,r[10]=x*T+M*z+g*K+m*it,r[14]=x*U+M*q+g*W+m*st,r[3]=S*E+R*I+b*L+C*rt,r[7]=S*_+R*F+b*Y+C*J,r[11]=S*T+R*z+b*K+C*it,r[15]=S*U+R*q+b*W+C*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],c=t[13],u=t[2],p=t[6],d=t[10],f=t[14],x=t[3],M=t[7],g=t[11],m=t[15],S=h*f-c*d,R=o*f-c*p,b=o*d-h*p,C=a*f-c*u,E=a*d-h*u,_=a*p-o*u;return e*(M*S-g*R+m*b)-n*(x*S-g*C+m*E)+s*(x*R-M*C+m*_)-r*(x*b-M*E+g*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],h=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*h)+s*(r*c-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8],p=t[9],d=t[10],f=t[11],x=t[12],M=t[13],g=t[14],m=t[15],S=e*o-n*a,R=e*h-s*a,b=e*c-r*a,C=n*h-s*o,E=n*c-r*o,_=s*c-r*h,T=u*M-p*x,U=u*g-d*x,I=u*m-f*x,F=p*g-d*M,z=p*m-f*M,q=d*m-f*g,L=S*q-R*z+b*F+C*I-E*U+_*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/L;return t[0]=(o*q-h*z+c*F)*Y,t[1]=(s*z-n*q-r*F)*Y,t[2]=(M*_-g*E+m*C)*Y,t[3]=(d*E-p*_-f*C)*Y,t[4]=(h*I-a*q-c*U)*Y,t[5]=(e*q-s*I+r*U)*Y,t[6]=(g*b-x*_-m*R)*Y,t[7]=(u*_-d*b+f*R)*Y,t[8]=(a*z-o*I+c*T)*Y,t[9]=(n*I-e*z-r*T)*Y,t[10]=(x*E-M*b+m*S)*Y,t[11]=(p*b-u*E-f*S)*Y,t[12]=(o*U-a*F-h*T)*Y,t[13]=(e*F-n*U+s*T)*Y,t[14]=(M*R-x*C-g*S)*Y,t[15]=(u*C-p*R+d*S)*Y,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*h,c*h+s*o,0,c*o+s*h,u*o+n,u*h-s*a,0,c*h-s*o,u*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,c=r+r,u=a+a,p=o+o,d=r*c,f=r*u,x=r*p,M=a*u,g=a*p,m=o*p,S=h*c,R=h*u,b=h*p,C=n.x,E=n.y,_=n.z;return s[0]=(1-(M+m))*C,s[1]=(f+b)*C,s[2]=(x-R)*C,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+m))*E,s[6]=(g+S)*E,s[7]=0,s[8]=(x+R)*_,s[9]=(g-S)*_,s[10]=(1-(d+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),h=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let c=1/a,u=1/o,p=1/h;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=p,Cn.elements[9]*=p,Cn.elements[10]*=p,e.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=h,this}makePerspective(t,e,n,s,r,a,o=bn,h=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),x,M;if(h)x=r/(a-r),M=a*r/(a-r);else if(o===bn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Es)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn,h=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),x,M;if(h)x=1/(a-r),M=a/(a-r);else if(o===bn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===Es)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Lo.prototype.isMatrix4=!0;var ue=Lo,os=new B,Cn=new ue,Of=new B(0,0,0),Bf=new B(1,1,1),yi=new B,wa=new B,pn=new B,qh=new ue,Yh=new Xn,qn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],c=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zf=0,Zh=new B,ls=new Xn,ei=new ue,Aa=new B,sr=new B,kf=new B,Gf=new Xn,Jh=new B(1,0,0),$h=new B(0,1,0),Kh=new B(0,0,1),Qh={type:"added"},Vf={type:"removed"},cs={type:"childadded",child:null},Zl={type:"childremoved",child:null},Pe=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new qn,n=new Xn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new qt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Aa.copy(t):Aa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(sr,Aa,this.up):ei.lookAt(Aa,sr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ei),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qh),cs.child=t,this.dispatchEvent(cs),cs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vf),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qh),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){let p=h[c];r(t.shapes,p)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let h=[];for(let c in o){let u=o[c];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new B(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xe=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hf={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,n),m=this._getHandJoint(c,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hf)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Jl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Df(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jl(a,r,t+1/3),this.g=Jl(a,r,t),this.b=Jl(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=od[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return re.workingToColorSpace(je.copy(this),t),Math.round(ee(je.r*255,0,255))*65536+Math.round(ee(je.g*255,0,255))*256+Math.round(ee(je.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,c,u=(o+a)/2;if(o===a)h=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:h=(s-r)/p+(s<r?6:0);break;case s:h=(r-n)/p+2;break;case r:h=(n-s)/p+4;break}h/=6}return t.h=h,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Je){re.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Ea);let n=Hl(Si.h,Ea.h,e),s=Hl(Si.s,Ea.s,e),r=Hl(Si.l,Ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Pt;Pt.NAMES=od;var vr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gi=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},In=new B,ni=new B,$l=new B,ii=new B,hs=new B,us=new B,jh=new B,Kl=new B,Ql=new B,jl=new B,tc=new Te,ec=new Te,nc=new Te,ai=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),ni.subVectors(n,e),$l.subVectors(t,e);let a=In.dot(In),o=In.dot(ni),h=In.dot($l),c=ni.dot(ni),u=ni.dot($l),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*h-o*u)*d,x=(a*u-o*h)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,ii.x),h.addScaledVector(a,ii.y),h.addScaledVector(o,ii.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tc,r.x),a.addScaledVector(ec,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),ni.subVectors(t,e),In.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),In.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;hs.subVectors(s,n),us.subVectors(r,n),Kl.subVectors(t,n);let h=hs.dot(Kl),c=us.dot(Kl);if(h<=0&&c<=0)return e.copy(n);Ql.subVectors(t,s);let u=hs.dot(Ql),p=us.dot(Ql);if(u>=0&&p<=u)return e.copy(s);let d=h*p-u*c;if(d<=0&&h>=0&&u<=0&&h-u>0)return a=h/(h-u),e.copy(n).addScaledVector(hs,a);jl.subVectors(t,r);let f=hs.dot(jl),x=us.dot(jl);if(x>=0&&f<=x)return e.copy(r);let M=f*c-h*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(us,o);let g=u*x-f*p;if(g<=0&&p-u>=0&&f-x>=0)return jh.subVectors(r,s),o=(p-u)/(p-u+(f-x)),e.copy(s).addScaledVector(jh,o);let m=1/(g+M+d);return a=M*m,o=d*m,e.copy(n).addScaledVector(hs,a).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(t.matrixWorld),this.union(Ra)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Ca.subVectors(this.max,rr),ds.subVectors(t.a,rr),fs.subVectors(t.b,rr),ps.subVectors(t.c,rr),Mi.subVectors(fs,ds),bi.subVectors(ps,fs),Fi.subVectors(ds,ps);let e=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Fi.z,Fi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Fi.z,0,-Fi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Fi.y,Fi.x,0];return!ic(e,ds,fs,ps,Ca)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,ds,fs,ps,Ca))?!1:(Ia.crossVectors(Mi,bi),e=[Ia.x,Ia.y,Ia.z],ic(e,ds,fs,ps,Ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},si=[new B,new B,new B,new B,new B,new B,new B,new B],Pn=new B,Ra=new Yn,ds=new B,fs=new B,ps=new B,Mi=new B,bi=new B,Fi=new B,rr=new B,Ca=new B,Ia=new B,Oi=new B;function ic(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),h=t.dot(Oi),c=e.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>o)return!1}return!0}var Be=new B,Pa=new zt,Wf=0,Tn=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=t!==void 0?Sl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):rd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ad(t,this.array)}};var yr=class extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sr=class extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xf=new Yn,ar=new B,sc=new B,ci=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(sc)),this.expandByPoint(ar.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qf=0,Mn=new ue,rc=new Pe,ms=new B,mn=new Yn,or=new Yn,Xe=new B,Ye=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pf(t)?Sr:yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(mn.min,or.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,or.max),mn.expandByPoint(Xe)):(mn.expandByPoint(or.min),mn.expandByPoint(or.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],h=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xe.fromBufferAttribute(o,c),h&&(ms.fromBufferAttribute(t,c),Xe.add(ms)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],h=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new B,h[U]=new B;let u=new B,p=new B,d=new B,f=new zt,x=new zt,M=new zt,g=new B,m=new B;function S(U,I,F){c[U]=c[I]=c[F]=1,u.fromBufferAttribute(n,U),p.fromBufferAttribute(n,I),d.fromBufferAttribute(n,F),f.fromBufferAttribute(r,U),x.fromBufferAttribute(r,I),M.fromBufferAttribute(r,F),p.sub(u),d.sub(u),x.sub(f),M.sub(f);let z=1/(x.x*M.y-M.x*x.y);isFinite(z)&&(g.copy(p).multiplyScalar(M.y).addScaledVector(d,-x.y).multiplyScalar(z),m.copy(d).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(z),o[U].add(g),o[I].add(g),o[F].add(g),h[U].add(m),h[I].add(m),h[F].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,I=R.length;U<I;++U){let F=R[U],z=F.start,q=F.count;for(let L=z,Y=z+q;L<Y;L+=3)S(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let b=new B,C=new B,E=new B,_=new B;function T(U){E.fromBufferAttribute(s,U),_.copy(E);let I=o[U];b.copy(I),b.sub(E.multiplyScalar(E.dot(I))).normalize(),C.crossVectors(_,I);let z=C.dot(h[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,z)}for(let U=0,I=n.count;U<I;++U)c[U]&&T(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,h=new B,c=new B,u=new B,p=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){let x=t.getX(d+0),M=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(u),h.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,h){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(h.length*u),f=0,x=0;for(let M=0,g=h.length;M<g;M++){o.isInterleavedBufferAttribute?f=h[M]*o.data.stride+o.offset:f=h[M]*u;for(let m=0;m<u;m++)d[x++]=c[f++]}return new Tn(d,u,p)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],c=t(h,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let h=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],f=t(d,n);h.push(f)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let c=n[h];t.data.attributes[h]=c.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],u=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},po=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=tu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=tu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function tu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=$i()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var an=new B,Mr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Sl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):rd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ad(t,this.data.array)}},ac=new B,Yf=new B,Zf=new qt,Ln=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ac.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zf.getNormalMatrix(t),s=this.coplanarPoint(ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Jf=0,Dn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Vs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},wi=class extends Dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,lr=new B,_s=new B,xs=new B,vs=new zt,cr=new zt,ld=new ue,La=new B,hr=new B,Da=new B,eu=new zt,oc=new zt,nu=new zt,Vi=class extends Pe{constructor(t=new wi){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new po(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new Mr(n,3,0,!1)),gs.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new zt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),ld.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Na(La.set(-.5,-.5,0),xs,a,_s,s,r),Na(hr.set(.5,-.5,0),xs,a,_s,s,r),Na(Da.set(.5,.5,0),xs,a,_s,s,r),eu.set(0,0),oc.set(1,0),nu.set(1,1);let o=t.ray.intersectTriangle(La,hr,Da,!1,lr);if(o===null&&(Na(hr.set(-.5,.5,0),xs,a,_s,s,r),oc.set(0,1),o=t.ray.intersectTriangle(La,Da,hr,!1,lr),o===null))return;let h=t.ray.origin.distanceTo(lr);h<t.near||h>t.far||e.push({distance:h,point:lr.clone(),uv:ai.getInterpolation(lr,La,hr,Da,eu,oc,nu,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Na(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(cr.x=r*vs.x-s*vs.y,cr.y=s*vs.x+r*vs.y):cr.copy(vs),i.copy(t),i.x+=cr.x,i.y+=cr.y,i.applyMatrix4(ld)}var ri=new B,lc=new B,Ua=new B,Fa=new B,Ds=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lc.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Fa.copy(this.origin).sub(lc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ua),o=Fa.dot(this.direction),h=-Fa.dot(Ua),c=Fa.lengthSq(),u=Math.abs(1-a*a),p,d,f,x;if(u>0)if(p=a*h-o,d=a*o-h,x=r*u,p>=0)if(d>=-x)if(d<=x){let M=1/u;p*=M,d*=M,f=p*(p+a*d+2*o)+d*(a*p+d+2*h)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*h)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*h)+c;else d<=-x?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-h),r),f=-p*p+d*(d+2*h)+c):d<=x?(p=0,d=Math.min(Math.max(-r,-h),r),f=d*(d+2*h)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-h),r),f=-p*p+d*(d+2*h)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(lc).addScaledVector(Ua,d),f}intersectSphere(t,e){if(t.radius<0)return null;ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,h=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,h=(t.min.z-d.z)*p),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,h=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,x=e.x-a.x,M=e.y-a.y,g=e.z-a.z,m=n.x-a.x,S=n.y-a.y,R=n.z-a.z,b=Math.abs(h),C=Math.abs(c),E=Math.abs(u),_,T,U,I,F,z,q,L,Y,K,W,rt;if(b>=C&&b>=E?(U=h,z=p,Y=x,rt=m,h>=0?(_=c,T=u,I=d,F=f,q=M,L=g,K=S,W=R):(_=u,T=c,I=f,F=d,q=g,L=M,K=R,W=S)):C>=E?(U=c,z=d,Y=M,rt=S,c>=0?(_=u,T=h,I=f,F=p,q=g,L=x,K=R,W=m):(_=h,T=u,I=p,F=f,q=x,L=g,K=m,W=R)):(U=u,z=f,Y=g,rt=R,u>=0?(_=h,T=c,I=p,F=d,q=x,L=M,K=m,W=S):(_=c,T=h,I=d,F=p,q=M,L=x,K=S,W=m)),U===0)return null;let J=_/U,it=T/U,st=1/U,It=I-J*z,Gt=F-it*z,Z=q-J*Y,yt=L-it*Y,wt=K-J*rt,Ft=W-it*rt,xt=wt*yt-Ft*Z,Bt=It*Ft-Gt*wt,we=Z*Gt-yt*It;if(s){if(xt<0||Bt<0||we<0)return null}else if((xt<0||Bt<0||we<0)&&(xt>0||Bt>0||we>0))return null;let Dt=xt+Bt+we;if(Dt===0)return null;let ae=st*(xt*z+Bt*Y+we*rt);return(Dt>0?ae<0:ae>0)?null:this.at(ae/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},iu=new ue,Bi=new Ds,Oa=new ci,su=new B,Ba=new B,za=new B,ka=new B,cc=new B,Ga=new B,ru=new B,Va=new B,Ut=class extends Pe{constructor(t=new Ye,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let u=o[h],p=r[h];u!==0&&(cc.fromBufferAttribute(p,t),a?Ga.addScaledVector(cc,u):Ga.addScaledVector(cc.sub(e),u))}e.add(Ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Oa.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Oa,su)===null||Bi.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(iu.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(iu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){let g=d[x],m=a[g.materialIndex],S=Math.max(g.start,f.start),R=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,C=R;b<C;b+=3){let E=o.getX(b),_=o.getX(b+1),T=o.getX(b+2);s=Ha(this,m,t,n,c,u,p,E,_,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let g=x,m=M;g<m;g+=3){let S=o.getX(g),R=o.getX(g+1),b=o.getX(g+2);s=Ha(this,a,t,n,c,u,p,S,R,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){let g=d[x],m=a[g.materialIndex],S=Math.max(g.start,f.start),R=Math.min(h.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,C=R;b<C;b+=3){let E=b,_=b+1,T=b+2;s=Ha(this,m,t,n,c,u,p,E,_,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(h.count,f.start+f.count);for(let g=x,m=M;g<m;g+=3){let S=g,R=g+1,b=g+2;s=Ha(this,a,t,n,c,u,p,S,R,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function $f(i,t,e,n,s,r,a,o){let h;if(t.side===Ke?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===Ii,o),h===null)return null;Va.copy(o),Va.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Va);return c<e.near||c>e.far?null:{distance:c,point:Va.clone(),object:i}}function Ha(i,t,e,n,s,r,a,o,h,c){i.getVertexPosition(o,Ba),i.getVertexPosition(h,za),i.getVertexPosition(c,ka);let u=$f(i,t,e,n,Ba,za,ka,ru);if(u){let p=new B;ai.getBarycoord(ru,Ba,za,ka,p),s&&(u.uv=ai.getInterpolatedAttribute(s,o,h,c,p,new zt)),r&&(u.uv1=ai.getInterpolatedAttribute(r,o,h,c,p,new zt)),a&&(u.normal=ai.getInterpolatedAttribute(a,o,h,c,p,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:h,c,normal:new B,materialIndex:0};ai.getNormal(Ba,za,ka,d.normal),u.face=d,u.barycoord=p}return u}var br=class extends tn{constructor(t=null,e=1,n=1,s,r,a,o,h,c=qe,u=qe,p,d){super(null,a,o,h,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends Tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new ue,au=new ue,Wa=[],ou=new Yn,Kf=new ue,ur=new Ut,dr=new ci,wr=class extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),ou.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(ou)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),dr.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),t.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),au.multiplyMatrices(n,ys),ur.matrixWorld=au,ur.raycast(t,Wa);for(let a=0,o=Wa.length;a<o;a++){let h=Wa[a];h.instanceId=r,h.object=this,e.push(h)}Wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new br(new Float32Array(s*this.count),s,this.count,Go,wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,h=s*t;return r[h]=o,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zi=new ci,Qf=new zt(.5,.5),Xa=new B,Ai=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],c=r[3],u=r[4],p=r[5],d=r[6],f=r[7],x=r[8],M=r[9],g=r[10],m=r[11],S=r[12],R=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-a,f-u,m-x,C-S).normalize(),s[1].setComponents(c+a,f+u,m+x,C+S).normalize(),s[2].setComponents(c+o,f+p,m+M,C+R).normalize(),s[3].setComponents(c-o,f-p,m-M,C-R).normalize(),n)s[4].setComponents(h,d,g,b).normalize(),s[5].setComponents(c-h,f-d,m-g,C-b).normalize();else if(s[4].setComponents(c-h,f-d,m-g,C-b).normalize(),e===bn)s[5].setComponents(c+h,f+d,m+g,C+b).normalize();else if(e===Es)s[5].setComponents(h,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);let e=Qf.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xa.x=s.normal.x>0?t.max.x:t.min.x,Xa.y=s.normal.y>0?t.max.y:t.min.y,Xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lu=new ue,mo=class i{constructor(){this.coordinateSystem=bn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];lu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ai),n[s].setFromProjectionMatrix(lu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ai),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ns=class extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cu=new ue,xc=new Ds,qa=new ci,Ya=new B,Ar=class extends Pe{constructor(t=new Ye,e=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,t.ray.intersectsSphere(qa)===!1)return;cu.copy(s).invert(),xc.copy(t.ray).applyMatrix4(cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,M=f;x<M;x++){let g=c.getX(x);Ya.fromBufferAttribute(p,g),hu(Ya,g,h,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let x=d,M=f;x<M;x++)Ya.fromBufferAttribute(p,x),hu(Ya,x,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hu(i,t,e,n,s,r,a){let o=xc.distanceSqToPoint(i);if(o<e){let h=new B;xc.closestPointToPoint(i,h),h.applyMatrix4(n);let c=s.ray.origin.distanceTo(h);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Er=class extends tn{constructor(t=[],e=Zi,n,s,r,a,o,h,c,u){super(t,e,n,s,r,a,o,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rr=class extends tn{constructor(t,e,n,s,r,a,o,h,c){super(t,e,n,s,r,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends tn{constructor(t,e,n=Fn,s,r,a,o=qe,h=qe,c,u=li,p=1){if(u!==li&&u!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,h,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Cr=class extends hi{constructor(t,e=Fn,n=Zi,s,r,a=qe,o=qe,h,c=li){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,h,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ir=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Nn=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],c=[],u=[],p=[],d=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(p,2));function x(M,g,m,S,R,b,C,E,_,T,U){let I=b/_,F=C/T,z=b/2,q=C/2,L=E/2,Y=_+1,K=T+1,W=0,rt=0,J=new B;for(let it=0;it<K;it++){let st=it*F-q;for(let It=0;It<Y;It++){let Gt=It*I-z;J[M]=Gt*S,J[g]=st*R,J[m]=L,c.push(J.x,J.y,J.z),J[M]=0,J[g]=0,J[m]=E>0?1:-1,u.push(J.x,J.y,J.z),p.push(It/_),p.push(1-it/T),W+=1}}for(let it=0;it<T;it++)for(let st=0;st<_;st++){let It=d+st+Y*it,Gt=d+st+Y*(it+1),Z=d+(st+1)+Y*(it+1),yt=d+(st+1)+Y*it;h.push(It,Gt,yt),h.push(Gt,Z,yt),rt+=6}o.addGroup(f,rt,U),f+=rt,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Pr=class i extends Ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],h=[],c=[],u=e/2,p=Math.PI/2*t,d=e,f=2*p+d,x=n*2+r,M=s+1,g=new B,m=new B;for(let S=0;S<=x;S++){let R=0,b=0,C=0,E=0;if(S<=n){let U=S/n,I=U*Math.PI/2;b=-u-t*Math.cos(I),C=t*Math.sin(I),E=-t*Math.cos(I),R=U*p}else if(S<=n+r){let U=(S-n)/r;b=-u+U*e,C=t,E=0,R=p+U*d}else{let U=(S-n-r)/n,I=U*Math.PI/2;b=u+t*Math.sin(I),C=t*Math.cos(I),E=t*Math.sin(I),R=p+d+U*p}let _=Math.max(0,Math.min(1,R/f)),T=0;S===0?T=.5/s:S===x&&(T=-.5/s);for(let U=0;U<=s;U++){let I=U/s,F=I*Math.PI*2,z=Math.sin(F),q=Math.cos(F);m.x=-C*q,m.y=b,m.z=C*z,o.push(m.x,m.y,m.z),g.set(-C*q,E,C*z),g.normalize(),h.push(g.x,g.y,g.z),c.push(I+T,_)}if(S>0){let U=(S-1)*M;for(let I=0;I<s;I++){let F=U+I,z=U+I+1,q=S*M+I,L=S*M+I+1;a.push(F,z,q),a.push(z,L,q)}}}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Un=class i extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],f=[],x=0,M=[],g=n/2,m=0;S(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function S(){let b=new B,C=new B,E=0,_=(e-t)/n;for(let T=0;T<=r;T++){let U=[],I=T/r,F=I*(e-t)+t;for(let z=0;z<=s;z++){let q=z/s,L=q*h+o,Y=Math.sin(L),K=Math.cos(L);C.x=F*Y,C.y=-I*n+g,C.z=F*K,p.push(C.x,C.y,C.z),b.set(Y,_,K).normalize(),d.push(b.x,b.y,b.z),f.push(q,1-I),U.push(x++)}M.push(U)}for(let T=0;T<s;T++)for(let U=0;U<r;U++){let I=M[U][T],F=M[U+1][T],z=M[U+1][T+1],q=M[U][T+1];(t>0||U!==0)&&(u.push(I,F,q),E+=3),(e>0||U!==r-1)&&(u.push(F,z,q),E+=3)}c.addGroup(m,E,0),m+=E}function R(b){let C=x,E=new zt,_=new B,T=0,U=b===!0?t:e,I=b===!0?1:-1;for(let z=1;z<=s;z++)p.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),x++;let F=x;for(let z=0;z<=s;z++){let L=z/s*h+o,Y=Math.cos(L),K=Math.sin(L);_.x=U*K,_.y=g*I,_.z=U*Y,p.push(_.x,_.y,_.z),d.push(0,I,0),E.x=Y*.5+.5,E.y=K*.5*I+.5,f.push(E.x,E.y),x++}for(let z=0;z<s;z++){let q=C+z,L=F+z;b===!0?u.push(L,L+1,q):u.push(L+1,L,q),T+=3}c.addGroup(m,T,b===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Us=class i extends Un{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},go=class i extends Ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let R=new B,b=new B,C=new B;for(let E=0;E<e.length;E+=3)f(e[E+0],R),f(e[E+1],b),f(e[E+2],C),h(R,b,C,S)}function h(S,R,b,C){let E=C+1,_=[];for(let T=0;T<=E;T++){_[T]=[];let U=S.clone().lerp(b,T/E),I=R.clone().lerp(b,T/E),F=E-T;for(let z=0;z<=F;z++)z===0&&T===E?_[T][z]=U:_[T][z]=U.clone().lerp(I,z/F)}for(let T=0;T<E;T++)for(let U=0;U<2*(E-T)-1;U++){let I=Math.floor(U/2);U%2===0?(d(_[T][I+1]),d(_[T+1][I]),d(_[T][I])):(d(_[T][I+1]),d(_[T+1][I+1]),d(_[T+1][I]))}}function c(S){let R=new B;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(S),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function u(){let S=new B;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];let b=g(S)/2/Math.PI+.5,C=m(S)/Math.PI+.5;a.push(b,1-C)}x(),p()}function p(){for(let S=0;S<a.length;S+=6){let R=a[S+0],b=a[S+2],C=a[S+4],E=Math.max(R,b,C),_=Math.min(R,b,C);E>.9&&_<.1&&(R<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,R){let b=S*3;R.x=t[b+0],R.y=t[b+1],R.z=t[b+2]}function x(){let S=new B,R=new B,b=new B,C=new B,E=new zt,_=new zt,T=new zt;for(let U=0,I=0;U<r.length;U+=9,I+=6){S.set(r[U+0],r[U+1],r[U+2]),R.set(r[U+3],r[U+4],r[U+5]),b.set(r[U+6],r[U+7],r[U+8]),E.set(a[I+0],a[I+1]),_.set(a[I+2],a[I+3]),T.set(a[I+4],a[I+5]),C.copy(S).add(R).add(b).divideScalar(3);let F=g(C);M(E,I+0,S,F),M(_,I+2,R,F),M(T,I+4,b,F)}}function M(S,R,b,C){C<0&&S.x===1&&(a[R]=S.x-1),b.x===0&&b.z===0&&(a[R]=C/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var _o=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,h=r-1,c;for(;o<=h;)if(s=Math.floor(o+(h-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),h=e||(a.isVector2?new zt:new B);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,h=new ue;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ee(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(h.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ee(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(h.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function Zc(){let i=0,t=0,e=0,n=0;function s(r,a,o,h){i=r,t=o,e=-3*r+3*a-2*o-h,n=2*r-2*a+o+h}return{initCatmullRom:function(r,a,o,h,c){s(a,o,c*(o-r),c*(h-a))},initNonuniformCatmullRom:function(r,a,o,h,c,u,p){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(h-a)/(u+p)+(h-o)/p;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var uu=new B,du=new B,hc=new Zc,uc=new Zc,dc=new Zc,Lr=class extends _o{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:h===0&&o===r-1&&(o=r-2,h=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(du.subVectors(s[0],s[1]).add(s[0]),c=du);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(uu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),f),M=Math.pow(p.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);M<1e-4&&(M=1),x<1e-4&&(x=M),g<1e-4&&(g=M),hc.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,x,M,g),uc.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,x,M,g),dc.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,x,M,g)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),uc.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),dc.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(hc.calc(h),uc.calc(h),dc.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Dr=class i extends go{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Le=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),c=o+1,u=h+1,p=t/o,d=e/h,f=[],x=[],M=[],g=[];for(let m=0;m<u;m++){let S=m*d-a;for(let R=0;R<c;R++){let b=R*p-r;x.push(b,-S,0),M.push(0,0,1),g.push(R/o),g.push(1-m/h)}}for(let m=0;m<h;m++)for(let S=0;S<o;S++){let R=S+c*m,b=S+c*(m+1),C=S+1+c*(m+1),E=S+1+c*m;f.push(R,b,E),f.push(b,C,E)}this.setIndex(f),this.setAttribute("position",new he(x,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Fs=class i extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],h=[],c=[],u=[],p=t,d=(e-t)/s,f=new B,x=new zt;for(let M=0;M<=s;M++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=p*Math.cos(m),f.y=p*Math.sin(m),h.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,u.push(x.x,x.y)}p+=d}for(let M=0;M<s;M++){let g=M*(n+1);for(let m=0;m<n;m++){let S=m+g,R=S,b=S+n+1,C=S+n+2,E=S+1;o.push(R,b,E),o.push(b,C,E)}}this.setIndex(o),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Hi=class i extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),c=0,u=[],p=new B,d=new B,f=[],x=[],M=[],g=[];for(let m=0;m<=n;m++){let S=[],R=m/n,b=a+R*o,C=t*Math.cos(b),E=Math.sqrt(t*t-C*C),_=0;m===0&&a===0?_=.5/e:m===n&&h===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){let U=T/e,I=s+U*r;p.x=-E*Math.cos(I),p.y=C,p.z=E*Math.sin(I),x.push(p.x,p.y,p.z),d.copy(p).normalize(),M.push(d.x,d.y,d.z),g.push(U+_,1-R),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let R=u[m][S+1],b=u[m][S],C=u[m+1][S],E=u[m+1][S+1];(m!==0||a>0)&&f.push(R,b,E),(m!==n-1||h<Math.PI)&&f.push(b,C,E)}this.setIndex(f),this.setAttribute("position",new he(x,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Os=class i extends Ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let h=[],c=[],u=[],p=[],d=new B,f=new B,x=new B;for(let M=0;M<=n;M++){let g=a+M/n*o;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),x.subVectors(f,d).normalize(),u.push(x.x,x.y,x.z),p.push(m/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=s;g++){let m=(s+1)*M+g-1,S=(s+1)*(M-1)+g-1,R=(s+1)*(M-1)+g,b=(s+1)*M+g;h.push(m,S,b),h.push(S,R,b)}this.setIndex(h),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(fu(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Ki(i[e]);for(let s in n)t[s]=n[s]}return t}function fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var cd={clone:Ki,merge:en},tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xo=class extends Zn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pe=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jn=class extends pe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ki('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ki('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Nr=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=No,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vo=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yo=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Za(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},So=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gc:r=t,o=2*e-n;break;case _c:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case gc:a=t,h=2*n-e;break;case _c:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(h-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),M=x*x,g=M*x,m=-d*g+2*d*M-d*x,S=(1+d)*g+(-1.5-2*d)*M+(-.5+d)*x+1,R=(-1-f)*g+(1.5+f)*M+.5*x,b=f*g-f*M;for(let C=0;C!==o;++C)r[C]=m*a[u+C]+S*a[c+C]+R*a[h+C]+b*a[p+C];return r}},Mo=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[h+d]*u;return r}},bo=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},To=class extends Ei{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let x=(n-e)/(s-e),M=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*M+a[h+g]*x;return r}let d=o*2,f=t-1;for(let x=0;x!==o;++x){let M=a[c+x],g=a[h+x],m=f*d+x*2,S=p[m],R=p[m+1],b=t*d+x*2,C=u[b],E=u[b+1],_=ip(n,e,S,C,s);r[x]=hd(_,M,R,E,g)}return r}};function hd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function np(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ip(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=hd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let h=np(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-o/h))}return r}var _n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Za(t.settings)&&(n.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new To(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fr:e=this.InterpolantFactoryMethodDiscrete;break;case co:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break;case pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return Ka;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Za(this.settings)&&(pu(this.settings.inTangents,t),pu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Za(this.settings)&&(mu(this.settings.inTangents,t),mu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){Ht("KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){Ht("KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(s!==void 0&&Lf(s))for(let o=0,h=s.length;o!==h;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ka,r=t.length-1,a=1;for(let o=1;o<r;++o){let h=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)h=!0;else{let p=o*n,d=p-n,f=p+n;for(let x=0;x!==n;++x){let M=e[p+x];if(M!==e[d+x]||M!==e[f+x]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,h=a*n,c=0;c!==n;++c)e[h+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Za(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function mu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=co;var Ri=class extends _n{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=fr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};wo.prototype.ValueTypeName="color";var Ao=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};Ao.prototype.ValueTypeName="number";var Eo=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,h);return r}},Ur=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends _n{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=fr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};Ro.prototype.ValueTypeName="vector";var ja={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(gu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!gu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gu(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Co=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],x=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ud=new Co,Bs=class{constructor(t){this.manager=t!==void 0?t:ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ms=new WeakMap,Io=class extends Bs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=ja.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let p=Ms.get(a);p===void 0&&(p=[],Ms.set(a,p)),p.push({onLoad:e,onError:s})}return a}let o=Rs("img");function h(){u(),e&&e(this);let p=Ms.get(this)||[];for(let d=0;d<p.length;d++){let f=p[d];f.onLoad&&f.onLoad(this)}Ms.delete(this),r.manager.itemEnd(t)}function c(p){u(),s&&s(p),ja.remove(`image:${t}`);let d=Ms.get(this)||[];for(let f=0;f<d.length;f++){let x=d[f];x.onError&&x.onError(p)}Ms.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ja.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Fr=class extends Bs{constructor(t){super(t)}load(t,e,n,s){let r=new tn,a=new Io(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Wi=class extends Pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Or=class extends Wi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fc=new ue,_u=new B,xu=new B,zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;_u.setFromMatrixPosition(t.matrixWorld),e.position.copy(_u),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,h=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Es||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ja=new B,$a=new Xn,Vn=new B,Br=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ja,$a,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,$a,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ja,$a,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,$a,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new B,vu=new zt,yu=new zt,$e=class extends Br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,vu,yu),e.subVectors(yu,vu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/c,s*=a.width/h,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vc=class extends zs{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=_r*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},zr=class extends Wi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},yc=class extends zs{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}},kr=class extends Wi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gr=class extends Br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sc=class extends zs{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Wi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Sc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var bs=-90,Ts=1,ks=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(bs,Ts,t,e);s.layers=this.layers,this.add(s);let r=new $e(bs,Ts,t,e);r.layers=this.layers,this.add(r);let a=new $e(bs,Ts,t,e);a.layers=this.layers,this.add(a);let o=new $e(bs,Ts,t,e);o.layers=this.layers,this.add(o);let h=new $e(bs,Ts,t,e);h.layers=this.layers,this.add(h);let c=new $e(bs,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Po=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var $c="\\[\\]\\.:\\/",sp=new RegExp("["+$c+"]","g"),Kc="[^"+$c+"]",rp="[^"+$c.replace("\\.","")+"]",ap=/((?:WC+[\/:])*)/.source.replace("WC",Kc),op=/(WCOD+)?/.source.replace("WCOD",rp),lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),hp=new RegExp("^"+ap+op+lp+cp+"$"),up=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sp,"")}static parseTrackName(t){let e=hp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);up.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let h=n(o.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Mc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sx=new Float32Array(1);var Su=new ue,Hr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ds(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Su.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Su),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(Mu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,n,e);return n.sort(Mu),n}};function Mu(i,t){return i.distance-t.distance}function bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)bc(r[a],t,e,!0)}}var ih=class ih{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ih.prototype.isMatrix2=!0;var Tc=ih;function Qc(i,t,e,n){let s=dp(n);switch(e){case Gc:return i*t;case Go:return i*t/s.components*s.byteLength;case Vo:return i*t/s.components*s.byteLength;case Pi:return i*t*2/s.components*s.byteLength;case Ho:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Wo:return i*t*4/s.components*s.byteLength;case Yr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:case Zo:return Math.max(i,16)*Math.max(t,8)/4;case Xo:case Yo:return Math.max(i,8)*Math.max(t,8)/2;case Jo:case $o:case Qo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:case Kr:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qr:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dp(i){switch(i){case dn:case Oc:return{byteLength:1,components:1};case Ws:case Bc:case On:return{byteLength:2,components:1};case zo:case ko:return{byteLength:2,components:4};case Fn:case Bo:case wn:return{byteLength:4,components:1};case zc:case kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pp(i){let t=new WeakMap;function e(o,h){let c=o.array,u=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,h,c){let u=h.array,p=h.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<p.length;f++){let x=p[d],M=p[f];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++d,p[d]=M)}p.length=d+1;for(let f=0,x=p.length;f<x;f++){let M=p[f];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:s,remove:r,update:a}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:_p,alphamap_pars_fragment:xp,alphatest_fragment:vp,alphatest_pars_fragment:yp,aomap_fragment:Sp,aomap_pars_fragment:Mp,batching_pars_vertex:bp,batching_vertex:Tp,begin_vertex:wp,beginnormal_vertex:Ap,bsdfs:Ep,iridescence_fragment:Rp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Dp,color_fragment:Np,color_pars_fragment:Up,color_pars_vertex:Fp,color_vertex:Op,common:Bp,defaultnormal_vertex:zp,displacementmap_pars_vertex:kp,displacementmap_vertex:Gp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Hp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:am,envmap_vertex:$p,fog_vertex:Kp,fog_pars_vertex:Qp,fog_fragment:jp,fog_pars_fragment:tm,gradientmap_pars_fragment:em,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:dm,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:ym,map_fragment:Sm,map_pars_fragment:Mm,map_particle_fragment:bm,map_particle_pars_fragment:Tm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Em,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Im,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Nm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Gm,opaque_fragment:Vm,packing:Hm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Km,shadowmap_vertex:Qm,shadowmask_pars_fragment:jm,skinbase_vertex:t0,skinning_pars_vertex:e0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:_0,cube_vert:x0,cube_frag:v0,depth_vert:y0,depth_frag:S0,distance_vert:M0,distance_frag:b0,equirect_vert:T0,equirect_frag:w0,linedashed_vert:A0,linedashed_frag:E0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:I0,meshlambert_frag:P0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:N0,meshnormal_frag:U0,meshphong_vert:F0,meshphong_frag:O0,meshphysical_vert:B0,meshphysical_frag:z0,meshtoon_vert:k0,meshtoon_frag:G0,points_vert:V0,points_frag:H0,shadow_vert:W0,shadow_frag:X0,sprite_vert:q0,sprite_frag:Y0},bt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Qn={basic:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:en([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:en([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:en([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:en([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:en([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:en([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:en([bt.common,bt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:en([bt.lights,bt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Qn.physical={uniforms:en([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Ml={r:0,b:0,g:0},Z0=new ue,Nd=new qt;Nd.set(-1,0,0,0,1,0,0,0,1);function J0(i,t,e,n,s,r){let a=new Pt(0),o=s===!0?0:1,h,c,u=null,p=0,d=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let b=S.backgroundBlurriness>0;R=t.get(R,b)}return R}function x(S){let R=!1,b=f(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),R=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,R){let b=f(R);b&&b.isCubeTexture?(c===void 0&&(c=new Ut(new Nn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Ki(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nd),c.material.toneMapped=re.getTransfer(b.colorSpace)!==fe,(u!==b||p!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Ut(new Le(2,2),new Zn({name:"BackgroundMaterial",uniforms:Ki(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=re.getTransfer(b.colorSpace)!==fe,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,p=b.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function g(S,R){S.getRGB(Ml,Jc(i)),e.buffers.color.setClear(Ml.r,Ml.g,Ml.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:x,addToRenderList:M,dispose:m}}function $0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(F,z,q,L,Y){let K=!1,W=p(F,L,q,z);r!==W&&(r=W,c(r.object)),K=f(F,L,q,Y),K&&x(F,L,q,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(F,z,q,L),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function p(F,z,q,L){let Y=L.wireframe===!0,K=n[z.id];K===void 0&&(K={},n[z.id]=K);let W=F.isInstancedMesh===!0?F.id:0,rt=K[W];rt===void 0&&(rt={},K[W]=rt);let J=rt[q.id];J===void 0&&(J={},rt[q.id]=J);let it=J[Y];return it===void 0&&(it=d(h()),J[Y]=it),it}function d(F){let z=[],q=[],L=[];for(let Y=0;Y<e;Y++)z[Y]=0,q[Y]=0,L[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:L,object:F,attributes:{},index:null}}function f(F,z,q,L){let Y=r.attributes,K=z.attributes,W=0,rt=q.getAttributes();for(let J in rt)if(rt[J].location>=0){let st=Y[J],It=K[J];if(It===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(It=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(It=F.instanceColor)),st===void 0||st.attribute!==It||It&&st.data!==It.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function x(F,z,q,L){let Y={},K=z.attributes,W=0,rt=q.getAttributes();for(let J in rt)if(rt[J].location>=0){let st=K[J];st===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(st=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(st=F.instanceColor));let It={};It.attribute=st,st&&st.data&&(It.data=st.data),Y[J]=It,W++}r.attributes=Y,r.attributesNum=W,r.index=L}function M(){let F=r.newAttributes;for(let z=0,q=F.length;z<q;z++)F[z]=0}function g(F){m(F,0)}function m(F,z){let q=r.newAttributes,L=r.enabledAttributes,Y=r.attributeDivisors;q[F]=1,L[F]===0&&(i.enableVertexAttribArray(F),L[F]=1),Y[F]!==z&&(i.vertexAttribDivisor(F,z),Y[F]=z)}function S(){let F=r.newAttributes,z=r.enabledAttributes;for(let q=0,L=z.length;q<L;q++)z[q]!==F[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function R(F,z,q,L,Y,K,W){W===!0?i.vertexAttribIPointer(F,z,q,Y,K):i.vertexAttribPointer(F,z,q,L,Y,K)}function b(F,z,q,L){M();let Y=L.attributes,K=q.getAttributes(),W=z.defaultAttributeValues;for(let rt in K){let J=K[rt];if(J.location>=0){let it=Y[rt];if(it===void 0&&(rt==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),rt==="instanceColor"&&F.instanceColor&&(it=F.instanceColor)),it!==void 0){let st=it.normalized,It=it.itemSize,Gt=t.get(it);if(Gt===void 0)continue;let Z=Gt.buffer,yt=Gt.type,wt=Gt.bytesPerElement,Ft=yt===i.INT||yt===i.UNSIGNED_INT||it.gpuType===Bo;if(it.isInterleavedBufferAttribute){let xt=it.data,Bt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,we=it.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Dt=0;Dt<J.locationSize;Dt++)m(J.location+Dt,xt.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Dt=0;Dt<J.locationSize;Dt++)g(J.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Dt=0;Dt<J.locationSize;Dt++)R(J.location+Dt,It/J.locationSize,yt,st,Bt*wt,(we+It/J.locationSize*Dt)*wt,Ft)}else{if(it.isInstancedBufferAttribute){for(let xt=0;xt<J.locationSize;xt++)m(J.location+xt,it.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let xt=0;xt<J.locationSize;xt++)g(J.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let xt=0;xt<J.locationSize;xt++)R(J.location+xt,It/J.locationSize,yt,st,It*wt,It/J.locationSize*xt*wt,Ft)}}else if(W!==void 0){let st=W[rt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(J.location,st);break;case 3:i.vertexAttrib3fv(J.location,st);break;case 4:i.vertexAttrib4fv(J.location,st);break;default:i.vertexAttrib1fv(J.location,st)}}}}S()}function C(){U();for(let F in n){let z=n[F];for(let q in z){let L=z[q];for(let Y in L){let K=L[Y];for(let W in K)u(K[W].object),delete K[W];delete L[Y]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;let z=n[F.id];for(let q in z){let L=z[q];for(let Y in L){let K=L[Y];for(let W in K)u(K[W].object),delete K[W];delete L[Y]}}delete n[F.id]}function _(F){for(let z in n){let q=n[z];for(let L in q){let Y=q[L];if(Y[F.id]===void 0)continue;let K=Y[F.id];for(let W in K)u(K[W].object),delete K[W];delete Y[F.id]}}}function T(F){for(let z in n){let q=n[z],L=F.isInstancedMesh===!0?F.id:0,Y=q[L];if(Y!==void 0){for(let K in Y){let W=Y[K];for(let rt in W)u(W[rt].object),delete W[rt];delete Y[K]}delete q[L],Object.keys(q).length===0&&delete n[z]}}}function U(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:g,disableUnusedAttributes:S}}function K0(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function a(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Q0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Bn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let T=_===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==dn&&_!==wn&&!T&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=h(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:b,maxSamples:C,samples:E}}function j0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ln,o=new qt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,f){let x=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,m=i.get(p);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{let S=r?0:n,R=S*4,b=m.clippingState||null;h.value=b,b=u(x,d,R,f);for(let C=0;C!==R;++C)b[C]=e[C];m.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,f,x){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=h.value,x!==!0||g===null){let m=f+M*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,b=f;R!==M;++R,b+=4)a.copy(p[R]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var na=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nn(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Xi});r.uniforms.tEquirect.value=e;let a=new Ut(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=on),new ks(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},dd=256,tg=3,eg=20,Ud=256,Fd=16,ng=3,ig=new B,sg=new Pt,qs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ks(1,10,null),this._boxMesh=new Ut(new Nn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ig}=r,h=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=h.autoClear,d=h.autoClearColor,f=h.autoClearDepth,x=h.autoClearStencil,M=t.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,M===null&&(t.background=h.getClearColor(sg));let g=new ks(n,s,u);return g.position.copy(o),g.update(h,t),h.autoClear=p,h.autoClearColor=d,h.autoClearDepth=f,h.autoClearStencil=x,t.background=M,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(dd,sd(t))}_fromTexture(t,e){t.mapping===Zi||t.mapping===Hs?this._setSize(t.image.length===0?dd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=fd(t,!1,!1),n=Math.log2(t)-tg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Zi||t.mapping===Hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=rg(),this._integrationMaterial=ag());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Fd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-ng)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let h=o>0?Math.log2(e)+.5*Math.log2(6/(Ud*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=h,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=og());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function fd(i,t,e){return new na(i,{minFilter:ui,generateMipmaps:t,type:On,colorSpace:pr,depthBuffer:e})}function ia(i,t,e){return new Zn({name:i,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:Ke,blending:Xi,depthTest:!1,depthWrite:!1})}function rg(){return ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ud}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ag(){return ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function og(){return ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${eg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function pd(){return ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function md(){return ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function lg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Uo||f===Fo)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let M=new na(x.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,x=f===Uo||f===Fo,M=f===Zi||f===Hs;if(x||M){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new qs(i)),g=x?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let S=d.image;return x&&S&&S.height>0||M&&S&&h(S)?(n===null&&(n=new qs(i)),g=x?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===Uo?d.mapping=Zi:f===Fo&&(d.mapping=Hs),d}function h(d){let f=0,x=6;for(let M=0;M<x;M++)d[M]!==void 0&&f++;return f===x}function c(d){let f=d.target;f.removeEventListener("dispose",c);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function cg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ki("WebGLRenderer: "+n+" extension not supported."),s}}}function hg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){h(x.target)}function h(x){x.index!==null&&t.remove(x.index);for(let g in x.attributes)t.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let M=r.get(x);M&&(t.remove(M),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function u(x){let M=x.attributes;for(let g in M)t.update(M[g],i.ARRAY_BUFFER)}function p(x){let M=x.index,g=x.attributes.position,m=0;if(g===void 0)return;let S=M!==null?M.array.length:g.array.length/3-1,R=g.count>=65535?Sr:yr,b=new R(Math.ceil(S/3)*6,1),C=b.array;if(M!==null){let _=M.array;m=M.version;for(let T=0,U=0;T<S;T+=3){let I=_[T+0],F=_[T+1],z=_[T+2];C[U++]=I,C[U++]=F,C[U++]=F,C[U++]=z,C[U++]=z,C[U++]=I}}else{m=g.version;for(let _=0,T=0;_<S;_+=3){let U=_+0,I=_+1,F=_+2;C[T++]=U,C[T++]=I,C[T++]=I,C[T++]=F,C[T++]=F,C[T++]=U}}b.version=m;let E=r.get(x);E&&t.remove(E),r.set(x,b)}function d(x){let M=r.get(x);if(M){let g=x.index;g!==null&&M.version<g.version&&p(x)}else p(x);return r.get(x)}function f(){for(let x in s){let M=s[x].deref();M!==void 0&&h(M)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function ug(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function h(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,p*a,f),e.update(d,n,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,f);let M=0;for(let g=0;g<f;g++)M+=d[g];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=u}function dg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fg(i,t,e){let n=new WeakMap,s=new Te;function r(a,o,h){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let U=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],R=0;f===!0&&(R=1),x===!0&&(R=2),M===!0&&(R=3);let b=o.attributes.position.count*R,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*C*4*p),_=new xr(E,b,C,p);_.type=wn,_.needsUpdate=!0;let T=R*4;for(let I=0;I<p;I++){let F=g[I],z=m[I],q=S[I],L=b*C*4*I;for(let Y=0;Y<F.count;Y++){let K=Y*T;f===!0&&(s.fromBufferAttribute(F,Y),E[L+K+0]=s.x,E[L+K+1]=s.y,E[L+K+2]=s.z,E[L+K+3]=0),x===!0&&(s.fromBufferAttribute(z,Y),E[L+K+4]=s.x,E[L+K+5]=s.y,E[L+K+6]=s.z,E[L+K+7]=0),M===!0&&(s.fromBufferAttribute(q,Y),E[L+K+8]=s.x,E[L+K+9]=s.y,E[L+K+10]=s.z,E[L+K+11]=q.itemSize===4?s.w:1)}}d={count:p,texture:_,size:new zt(b,C)},n.set(o,d),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let x=o.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function pg(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",h)===!1&&c.addEventListener("dispose",h),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function h(c){let u=c.target;u.removeEventListener("dispose",h),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var mg={[Ic]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Lc]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Uc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function gg(i,t,e,n,s,r){let a=new gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,c=null,u=new Ye;u.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new he([0,2,0,0,2,0],2));let p=new xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ut(u,p),f=new Gr(-1,1,1,-1,0,1),x=null,M=null,g=!1,m,S=null,R=[],b=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),h!==null&&h.setSize(C,E);for(let _=0;_<R.length;_++){let T=R[_];T.setSize&&T.setSize(C,E)}},this.setEffects=function(C){R=C,b=R.length>0&&R[0].isRenderPass===!0;let E=a.width,_=a.height;R.length>0&&o===null&&(o=new gn(E,_,{type:On,depthBuffer:!1,stencilBuffer:!1}),h=new gn(E,_,{type:On,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&R.some(U=>U.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new hi(E,_),r===!0&&(c.format=di,c.type=Ji)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let U=0;U<R.length;U++){let I=R[U];I.setSize&&I.setSize(E,_),T&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(C,E){if(g||C.toneMapping===$n&&R.length===0)return!1;if(S=E,E!==null){let _=E.width,T=E.height;(a.width!==_||a.height!==T)&&this.setSize(_,T)}return b===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=$n,!0},this.hasRenderPass=function(){return b},this.end=function(C,E){C.toneMapping=m,g=!0;let _=a,T=o;for(let U=0;U<R.length;U++){let I=R[U];I.enabled!==!1&&(I.render(C,T,_,E),I.needsSwap!==!1&&(_=T,T=T===o?h:o))}if(x!==C.outputColorSpace||M!==C.toneMapping){x=C.outputColorSpace,M=C.toneMapping,p.defines={},re.getTransfer(x)===fe&&(p.defines.SRGB_TRANSFER="");let U=mg[M];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(S),C.render(d,f),S=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),u.dispose(),p.dispose()}}var Od=new tn,Bd=new hi(1,1),zd=new Cr(1),kd=new xr,Gd=new fo,Vd=new Er,gd=[],_d=[],xd=new Float32Array(16),vd=new Float32Array(9),yd=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gd[s];if(r===void 0&&(r=new Float32Array(s),gd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wl(i,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),He(e,n)}}function Mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;vd.set(n),i.uniformMatrix3fv(this.addr,!1,vd),He(e,n)}}function bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;xd.set(n),i.uniformMatrix4fv(this.addr,!1,xd),He(e,n)}}function Tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function Al(i){return i.version===0&&(i.compareFunction=Xc,i.needsUpdate=!0),i}function Lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Al(Bd):r=Od,e.setTexture2D(t||r,s)}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gd,s)}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Al(zd):r=Vd,e.setTextureCube(t||r,s)}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kd,s)}function Fg(i){switch(i){case 5126:return _g;case 35664:return xg;case 35665:return vg;case 35666:return yg;case 35674:return Sg;case 35675:return Mg;case 35676:return bg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Eg;case 5125:return Rg;case 36294:return Cg;case 36295:return Ig;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}function Og(i,t){i.uniform1fv(this.addr,t)}function Bg(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function zg(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function kg(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Gg(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vg(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hg(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wg(i,t){i.uniform1iv(this.addr,t)}function Xg(i,t){i.uniform2iv(this.addr,t)}function qg(i,t){i.uniform3iv(this.addr,t)}function Yg(i,t){i.uniform4iv(this.addr,t)}function Zg(i,t){i.uniform1uiv(this.addr,t)}function Jg(i,t){i.uniform2uiv(this.addr,t)}function $g(i,t){i.uniform3uiv(this.addr,t)}function Kg(i,t){i.uniform4uiv(this.addr,t)}function Qg(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Al(Bd):a=Od;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function jg(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gd,r[a])}function t_(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Al(zd):a=Vd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function e_(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kd,r[a])}function n_(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Gg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Jg;case 36295:return $g;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}var ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fg(e.type)}},oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}},lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},sh=/(\w+)(\])?(\[|\.)?/g;function Sd(i,t){i.seq.push(t),i.map[t.id]=t}function i_(i,t,e){let n=i.name,s=n.length;for(sh.lastIndex=0;;){let r=sh.exec(n),a=sh.lastIndex,o=r[1],h=r[2]==="]",c=r[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===s){Sd(e,c===void 0?new ah(o,i,t):new oh(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new lh(o),Sd(e,p)),e=p}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),h=t.getUniformLocation(e,o.name);i_(o,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Md(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var s_=37297,r_=0;function a_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var bd=new qt;function o_(i){re._getMatrix(bd,re.workingColorSpace,i);let t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case mr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+a_(i.getShaderSource(t),o)}else return r}function l_(i,t){let e=o_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var c_={[Ic]:"Linear",[Pc]:"Reinhard",[Lc]:"Cineon",[Xr]:"ACESFilmic",[Nc]:"AgX",[Uc]:"Neutral",[Dc]:"Custom"};function h_(i,t){let e=c_[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bl=new B;function u_(){re.getLuminanceCoefficients(bl);let i=bl.x.toFixed(4),t=bl.y.toFixed(4),e=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function f_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function p_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ea(i){return i!==""}function wd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ad(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(m_,g_)}function g_(i,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ch(e)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(__,x_)}function x_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var v_={[Wr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function y_(i){return v_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var S_={[Hs]:"ENVMAP_MODE_REFRACTION"};function M_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":S_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var b_={[No]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function T_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":b_[i.combine]||"ENVMAP_BLENDING_NONE"}function w_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,h=y_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=M_(e),p=T_(e),d=d_(e),f=f_(r),x=s.createProgram(),M,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ea).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ea).join(`
`),g.length>0&&(g+=`
`)):(M=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),g=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Kt.tonemapping_pars_fragment:"",e.toneMapping!==$n?h_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,l_("linearToOutputTexel",e.outputColorSpace),u_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ea).join(`
`)),a=ch(a),a=wd(a,e),a=Ad(a,e),o=ch(o),o=wd(o,e),o=Ad(o,e),a=Ed(a),o=Ed(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=m+M+a,R=m+g+o,b=Md(s,s.VERTEX_SHADER,S),C=Md(s,s.FRAGMENT_SHADER,R);s.attachShader(x,b),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(b)||"",q=s.getShaderInfoLog(C)||"",L=F.trim(),Y=z.trim(),K=q.trim(),W=!0,rt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,C);else{let J=Td(s,b,"vertex"),it=Td(s,C,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+J+`
`+it)}else L!==""?Vt("WebGLProgram: Program Info Log:",L):(Y===""||K==="")&&(rt=!1);rt&&(I.diagnostics={runnable:W,programLog:L,vertexShader:{log:Y,prefix:M},fragmentShader:{log:K,prefix:g}})}s.deleteShader(b),s.deleteShader(C),_=new Xs(s,x),T=p_(s,x)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,s_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=C,this}var A_=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uh(t),e.set(t,n)),n}},uh=class{constructor(t){this.id=A_++,this.code=t,this.usedTimes=0}};function E_(i){return i===Pi||i===Kr||i===Qr}function R_(i,t,e,n,s,r){let a=new Ps,o=new hh,h=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return h.add(_),_===0?"uv":`uv${_}`}function x(_,T,U,I,F,z){let q=I.fog,L=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=t.get(_.envMap||Y,K),rt=d[_.type],J=n.precision;_.precision!==null&&(J=n.getMaxPrecision(_.precision),J!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",J,"instead."));let it=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,st=it!==void 0?it.length:0,It=0;L.morphAttributes.position!==void 0&&(It=1),L.morphAttributes.normal!==void 0&&(It=2),L.morphAttributes.color!==void 0&&(It=3);let Gt,Z,yt,wt;if(rt){let St=Qn[rt];Gt=St.vertexShader,Z=St.fragmentShader}else{Gt=_.vertexShader,Z=_.fragmentShader;let St=o.getVertexShaderStage(_),ce=o.getFragmentShaderStage(_);o.update(_,St,ce),yt=St.id,wt=ce.id}let Ft=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,Dt=!!_.map,ae=!!_.matcap,de=!!W,Jt=de&&W.isPMREMTexture===!0,De=!!_.aoMap,Ie=!!_.lightMap,Ue=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,xn=!!_.displacementMap,Me=!!_.emissiveMap,We=!!_.metalnessMap,Fe=!!_.roughnessMap,cn=_.anisotropy>0,O=_.clearcoat>0,nn=_.diffuseRoughness>0,se=_.dispersion>0,_e=_.retroreflectivity>0,vt=_.iridescence>0,Xt=_.sheen>0,Ot=_.transmission>0,kt=cn&&!!_.anisotropyMap,A=O&&!!_.clearcoatMap,v=O&&!!_.clearcoatNormalMap,G=O&&!!_.clearcoatRoughnessMap,at=nn&&!!_.diffuseRoughnessMap,nt=vt&&!!_.iridescenceMap,dt=vt&&!!_.iridescenceThicknessMap,mt=Xt&&!!_.sheenColorMap,j=Xt&&!!_.sheenRoughnessMap,Q=!!_.specularMap,ut=!!_.specularColorMap,P=!!_.specularIntensityMap,et=Ot&&!!_.transmissionMap,$=Ot&&!!_.thicknessMap,ct=!!_.gradientMap,lt=!!_.alphaMap,ht=_.alphaTest>0,Lt=!!_.alphaHash,Zt=!!_.extensions,ot=$n;_.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(ot=i.toneMapping);let Nt=Jt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Yt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:Gt,fragmentShader:Z,defines:_.defines,customVertexShaderID:yt,customFragmentShaderID:wt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:J,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Dt,matcap:ae,envMap:de,envMapMode:de&&W.mapping,envMapPMREM:Jt,envMapMaxLod:Jt?Nt.length-1:null,envMapSize:Jt?Nt[0].width:null,aoMap:De,lightMap:Ie,bumpMap:Ue,normalMap:ve,displacementMap:xn,emissiveMap:Me,normalMapObjectSpace:ve&&_.normalMapType===Yu,normalMapTangentSpace:ve&&_.normalMapType===jr,packedNormalMap:ve&&_.normalMapType===jr&&E_(_.normalMap.format),metalnessMap:We,roughnessMap:Fe,anisotropy:cn,anisotropyMap:kt,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:G,diffuseRoughness:nn,diffuseRoughnessMap:at,dispersion:se,retroreflection:_e,iridescence:vt,iridescenceMap:nt,iridescenceThicknessMap:dt,sheen:Xt,sheenColorMap:mt,sheenRoughnessMap:j,specularMap:Q,specularColorMap:ut,specularIntensityMap:P,transmission:Ot,transmissionMap:et,thicknessMap:$,gradientMap:ct,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ht,alphaHash:Lt,combine:_.combine,mapUv:Dt&&f(_.map.channel),aoMapUv:De&&f(_.aoMap.channel),lightMapUv:Ie&&f(_.lightMap.channel),bumpMapUv:Ue&&f(_.bumpMap.channel),normalMapUv:ve&&f(_.normalMap.channel),displacementMapUv:xn&&f(_.displacementMap.channel),emissiveMapUv:Me&&f(_.emissiveMap.channel),metalnessMapUv:We&&f(_.metalnessMap.channel),roughnessMapUv:Fe&&f(_.roughnessMap.channel),anisotropyMapUv:kt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:ut&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:et&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ve||cn),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(Dt||lt),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:It,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Dt&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Me&&_.emissiveMap.isVideoTexture===!0&&re.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===Ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||we)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=h.has(1),Yt.vertexUv2s=h.has(2),Yt.vertexUv3s=h.has(3),h.clear(),Yt}function M(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)T.push(U),T.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(g(T,_),m(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function m(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let T=d[_.type],U;if(T){let I=Qn[T];U=cd.clone(I.uniforms)}else U=_.uniforms;return U}function R(_,T){let U=u.get(T);return U!==void 0?++U.usedTimes:(U=new w_(i,T,_,s),c.push(U),u.set(T,U)),U}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:E}}function C_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function I_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Id(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,x,M,g,m){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:x,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:m},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=x,S.materialVariant=a(d),S.groupOrder=M,S.renderOrder=d.renderOrder,S.z=g,S.group=m),t++,S}function h(d,f,x,M,g,m,S){S.reversedDepth===!0&&(g=-g);let R=o(d,f,x,M,g,m);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):e.push(R)}function c(d,f,x,M,g,m){let S=o(d,f,x,M,g,m);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):e.unshift(S)}function u(d,f){e.length>1&&e.sort(d||I_),n.length>1&&n.sort(f||Cd),s.length>1&&s.sort(f||Cd)}function p(){for(let d=t,f=i.length;d<f;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:c,finish:p,sort:u}}function P_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Id,i.set(n,[a])):s>=r.length?(a=new Id,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function L_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Pt};break;case"SpotLight":e={position:new B,direction:new B,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function D_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var N_=0;function U_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function F_(i){let t=new L_,e=D_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new ue,a=new ue;function o(c){let u=0,p=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,x=0,M=0,g=0,m=0,S=0,R=0,b=0,C=0,E=0,_=0,T=0,U=0,I=0;c.sort(U_);for(let z=0,q=c.length;z<q;z++){let L=c[z],Y=L.color,K=L.intensity,W=L.distance,rt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Pi?rt=L.shadow.map.texture:rt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=Y.r*K,p+=Y.g*K,d+=Y.b*K;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],K);I++}else if(L.isSunLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,st=e.get(L);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[x]=st,n.sunShadowMap[x]=rt;let It=it.getViewportCount();for(let Gt=0;Gt<It;Gt++)n.sunShadowMatrix[M+Gt]=it.getMatrix(Gt),n.sunShadowCascade[M+Gt]=it._cascadeData[Gt];M+=It,x++}n.sun[f]=J,f++}else if(L.isDirectionalLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,st=e.get(L);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,n.directionalShadow[g]=st,n.directionalShadowMap[g]=rt,n.directionalShadowMatrix[g]=L.shadow.matrix,C++}n.directional[g]=J,g++}else if(L.isSpotLight){let J=t.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(Y).multiplyScalar(K),J.distance=W,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[S]=J;let it=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,it.updateMatrices(L),L.castShadow&&U++),n.spotLightMatrix[S]=it.matrix,L.castShadow){let st=e.get(L);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,n.spotShadow[S]=st,n.spotShadowMap[S]=rt,_++}S++}else if(L.isRectAreaLight){let J=t.get(L);J.color.copy(Y).multiplyScalar(K),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[R]=J,R++}else if(L.isPointLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){let it=L.shadow,st=e.get(L);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,st.shadowCameraNear=it.camera.near,st.shadowCameraFar=it.camera.far,n.pointShadow[m]=st,n.pointShadowMap[m]=rt,n.pointShadowMatrix[m]=L.shadow.matrix,E++}n.point[m]=J,m++}else if(L.isHemisphereLight){let J=t.get(L);J.skyColor.copy(L.color).multiplyScalar(K),J.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[b]=J,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let F=n.hash;(F.sunLength!==f||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==S||F.rectAreaLength!==R||F.hemiLength!==b||F.numSunShadows!==x||F.numDirectionalShadows!==C||F.numPointShadows!==E||F.numSpotShadows!==_||F.numSpotMaps!==T||F.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=R,n.point.length=m,n.hemi.length=b,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+T-U,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=I,F.sunLength=f,F.directionalLength=g,F.pointLength=m,F.spotLength=S,F.rectAreaLength=R,F.hemiLength=b,F.numSunShadows=x,F.numDirectionalShadows=C,F.numPointShadows=E,F.numSpotShadows=_,F.numSpotMaps=T,F.numLightProbes=I,n.version=N_++)}function h(c,u){let p=0,d=0,f=0,x=0,M=0,g=0,m=u.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){let b=c[S];if(b.isSunLight){let C=n.sun[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(m),p++}else if(b.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(b.isSpotLight){let C=n.spot[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),x++}else if(b.isRectAreaLight){let C=n.rectArea[M];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let C=n.hemi[g];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(m),g++}}}return{setup:o,setupView:h,state:n}}function Pd(i){let t=new F_(i),e=[],n=[],s=[];function r(p){u.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function h(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o}}function O_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Pd(i),t.set(s,[o])):r>=a.length?(o=new Pd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],G_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Ld=new ue,ta=new B,rh=new B;function V_(i,t,e){let n=new Ai,s=new zt,r=new zt,a=new Te,o=new vo,h=new yo,c={},u=e.maxTextureSize,p={[Ii]:Ke,[Ke]:Ii,[un]:un},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:B_,fragmentShader:z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new Ye;x.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ut(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let m=this.type;this.render=function(E,_,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Do&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wr);let U=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Xi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=m!==this.type;q&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(Y=>Y.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,Y=E.length;L<Y;L++){let K=E[L],W=K.shadow;if(W===void 0){Vt("WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let rt=W.getFrameExtents();s.multiply(rt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,W.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=J,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Gs){if(K.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new gn(s.x,s.y,{format:Pi,type:On,minFilter:on,magFilter:on,generateMipmaps:!1}),W.map.texture.name=K.name+".shadowMap",W.map.depthTexture=new hi(s.x,s.y,wn),W.map.depthTexture.name=K.name+".shadowMapDepth",W.map.depthTexture.format=li,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=qe,W.map.depthTexture.magFilter=qe}else K.isPointLight?(W.map=new na(s.x),W.map.depthTexture=new Cr(s.x,Fn)):(W.map=new gn(s.x,s.y),W.map.depthTexture=new hi(s.x,s.y,Fn)),W.map.depthTexture.name=K.name+".shadowMap",W.map.depthTexture.format=li,this.type===Wr?(W.map.depthTexture.compareFunction=J?Wc:Hc,W.map.depthTexture.minFilter=on,W.map.depthTexture.magFilter=on):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=qe,W.map.depthTexture.magFilter=qe);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let it=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();K.isPointLight!==!0&&W.updateMatrices(K,T);let st=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:T.layers;for(let It=0;It<it;It++){let Gt=W.getCamera(It);if(K.isPointLight){let Z=W.camera,yt=W.matrix,wt=K.distance||Z.far;wt!==Z.far&&(Z.far=wt,Z.updateProjectionMatrix()),ta.setFromMatrixPosition(K.matrixWorld),Z.position.copy(ta),rh.copy(Z.position),rh.add(k_[It]),Z.up.copy(G_[It]),Z.lookAt(rh),Z.updateMatrixWorld(),yt.makeTranslation(-ta.x,-ta.y,-ta.z),Ld.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ld,Z.coordinateSystem,Z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,It),i.clear();else{It===0&&(i.setRenderTarget(W.map),i.clear());let Z=W.getViewport(It);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),z.viewport(a)}n=W.getFrustum(It),b(_,T,Gt,K,st,this.type)}W.isPointLightShadow!==!0&&this.type===Gs&&S(W,T),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(U,I,F)};function S(E,_){let T=t.update(M);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new gn(s.x,s.y,{format:Pi,type:On}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,T,d,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,T,f,M,null)}function R(E,_,T,U){let I=null,F=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)I=F;else if(I=T.isPointLight===!0?h:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=I.uuid,q=_.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let Y=L[q];Y===void 0&&(Y=I.clone(),L[q]=Y,_.addEventListener("dispose",C)),I=Y}if(I.visible=_.visible,I.wireframe=_.wireframe,U===Gs?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:p[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=i.properties.get(I);z.light=T}return I}function b(E,_,T,U,I,F){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===Gs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);let L=t.update(E),Y=E.material;if(Array.isArray(Y)){let K=L.groups;for(let W=0,rt=K.length;W<rt;W++){let J=K[W],it=Y[J.materialIndex];if(it&&it.visible){let st=R(E,it,U,F);E.onBeforeShadow(i,E,_,T,L,st,J),i.renderBufferDirect(T,null,L,st,E,J),E.onAfterShadow(i,E,_,T,L,st,J)}}}else if(Y.visible){let K=R(E,Y,U,F);E.onBeforeShadow(i,E,_,T,L,K,null),i.renderBufferDirect(T,null,L,K,E,null),E.onAfterShadow(i,E,_,T,L,K,null)}}let q=E.children;for(let L=0,Y=q.length;L<Y;L++)b(q[L],_,T,U,I,F)}function C(E){E.target.removeEventListener("dispose",C);for(let T in c){let U=c[T],I=E.target.uuid;I in U&&(U[I].dispose(),delete U[I])}}}function H_(i,t){function e(){let P=!1,et=new Te,$=null,ct=new Te(0,0,0,0);return{setMask:function(lt){$!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){P=lt},setClear:function(lt,ht,Lt,Zt,ot){ot===!0&&(lt*=Zt,ht*=Zt,Lt*=Zt),et.set(lt,ht,Lt,Zt),ct.equals(et)===!1&&(i.clearColor(lt,ht,Lt,Zt),ct.copy(et))},reset:function(){P=!1,$=null,ct.set(-1,0,0,0)}}}function n(){let P=!1,et=!1,$=null,ct=null,lt=null;return{setReversed:function(ht){if(et!==ht){let Lt=t.get("EXT_clip_control");ht?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),et=ht;let Zt=lt;lt=null,this.setClear(Zt)}},getReversed:function(){return et},setTest:function(ht){ht?xt(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(ht){$!==ht&&!P&&(i.depthMask(ht),$=ht)},setFunc:function(ht){if(et&&(ht=id[ht]),ct!==ht){switch(ht){case to:i.depthFunc(i.NEVER);break;case eo:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=ht}},setLocked:function(ht){P=ht},setClear:function(ht){lt!==ht&&(lt=ht,et&&(ht=1-ht),i.clearDepth(ht))},reset:function(){P=!1,$=null,ct=null,lt=null,et=!1}}}function s(){let P=!1,et=null,$=null,ct=null,lt=null,ht=null,Lt=null,Zt=null,ot=null;return{setTest:function(Nt){P||(Nt?xt(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(Nt){et!==Nt&&!P&&(i.stencilMask(Nt),et=Nt)},setFunc:function(Nt,Yt,St){($!==Nt||ct!==Yt||lt!==St)&&(i.stencilFunc(Nt,Yt,St),$=Nt,ct=Yt,lt=St)},setOp:function(Nt,Yt,St){(ht!==Nt||Lt!==Yt||Zt!==St)&&(i.stencilOp(Nt,Yt,St),ht=Nt,Lt=Yt,Zt=St)},setLocked:function(Nt){P=Nt},setClear:function(Nt){ot!==Nt&&(i.clearStencil(Nt),ot=Nt)},reset:function(){P=!1,et=null,$=null,ct=null,lt=null,ht=null,Lt=null,Zt=null,ot=null}}}let r=new e,a=new n,o=new s,h={},c=new WeakMap,u={},p={},d={},f=new WeakMap,x=[],M=null,g=!1,m=null,S=null,R=null,b=null,C=null,E=null,_=null,T=new Pt(0,0,0),U=0,I=!1,F=null,z=null,q=null,L=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,rt=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=rt>=1):J.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=rt>=2);let it=null,st={},It=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Z=new Te().fromArray(It),yt=new Te().fromArray(Gt);function wt(P,et,$,ct){let lt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(P,ht),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<$;Lt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(et+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ht}let Ft={};Ft[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(As),Ue(!1),ve(wc),xt(i.CULL_FACE),De(Xi);function xt(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Bt(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function we(P,et){return d[P]!==et?(i.bindFramebuffer(P,et),d[P]=et,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=et),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=et),!0):!1}function Dt(P,et){let $=x,ct=!1;if(P){$=f.get(et),$===void 0&&($=[],f.set(et,$));let lt=P.textures;if($.length!==lt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Lt=lt.length;ht<Lt;ht++)$[ht]=i.COLOR_ATTACHMENT0+ht;$.length=lt.length,ct=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ct=!0);ct&&i.drawBuffers($)}function ae(P){return M!==P?(i.useProgram(P),M=P,!0):!1}let de={[Yi]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};de[Ru]=i.MIN,de[Cu]=i.MAX;let Jt={[Iu]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Nu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[zu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function De(P,et,$,ct,lt,ht,Lt,Zt,ot,Nt){if(P===Xi){g===!0&&(Bt(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),P!==wu){if(P!==m||Nt!==I){if((S!==Yi||C!==Yi)&&(i.blendEquation(i.FUNC_ADD),S=Yi,C=Yi),Nt)switch(P){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",P);break}else switch(P){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ac:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",P);break}R=null,b=null,E=null,_=null,T.set(0,0,0),U=0,m=P,I=Nt}return}lt=lt||et,ht=ht||$,Lt=Lt||ct,(et!==S||lt!==C)&&(i.blendEquationSeparate(de[et],de[lt]),S=et,C=lt),($!==R||ct!==b||ht!==E||Lt!==_)&&(i.blendFuncSeparate(Jt[$],Jt[ct],Jt[ht],Jt[Lt]),R=$,b=ct,E=ht,_=Lt),(Zt.equals(T)===!1||ot!==U)&&(i.blendColor(Zt.r,Zt.g,Zt.b,ot),T.copy(Zt),U=ot),m=P,I=!1}function Ie(P,et){P.side===un?Bt(i.CULL_FACE):xt(i.CULL_FACE);let $=P.side===Ke;et&&($=!$),Ue($),P.blending===Vs&&P.transparent===!1?De(Xi):De(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ct=P.stencilWrite;o.setTest(ct),ct&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(P){F!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),F=P)}function ve(P){P!==bu?(xt(i.CULL_FACE),P!==z&&(P===wc?i.cullFace(i.BACK):P===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),z=P}function xn(P){P!==q&&(W&&i.lineWidth(P),q=P)}function Me(P,et,$){P?(xt(i.POLYGON_OFFSET_FILL),(L!==et||Y!==$)&&(L=et,Y=$,a.getReversed()&&(et=-et,$=-$),i.polygonOffset(et,$))):Bt(i.POLYGON_OFFSET_FILL)}function We(P){P?xt(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function Fe(P){P===void 0&&(P=i.TEXTURE0+K-1),it!==P&&(i.activeTexture(P),it=P)}function cn(P,et,$){$===void 0&&(it===null?$=i.TEXTURE0+K-1:$=it);let ct=st[$];ct===void 0&&(ct={type:void 0,texture:void 0},st[$]=ct),(ct.type!==P||ct.texture!==et)&&(it!==$&&(i.activeTexture($),it=$),i.bindTexture(P,et||Ft[P]),ct.type=P,ct.texture=et)}function O(){let P=st[it];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function nn(){try{i.compressedTexImage2D(...arguments)}catch(P){Ht("WebGLState:",P)}}function se(){try{i.compressedTexImage3D(...arguments)}catch(P){Ht("WebGLState:",P)}}function _e(){try{i.texSubImage2D(...arguments)}catch(P){Ht("WebGLState:",P)}}function vt(){try{i.texSubImage3D(...arguments)}catch(P){Ht("WebGLState:",P)}}function Xt(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ht("WebGLState:",P)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ht("WebGLState:",P)}}function kt(){try{i.texStorage2D(...arguments)}catch(P){Ht("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){Ht("WebGLState:",P)}}function v(){try{i.texImage2D(...arguments)}catch(P){Ht("WebGLState:",P)}}function G(){try{i.texImage3D(...arguments)}catch(P){Ht("WebGLState:",P)}}function at(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function nt(P,et){p[P]!==et&&(i.pixelStorei(P,et),p[P]=et)}function dt(P){Z.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function mt(P){yt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),yt.copy(P))}function j(P,et){let $=c.get(et);$===void 0&&($=new WeakMap,c.set(et,$));let ct=$.get(P);ct===void 0&&(ct=i.getUniformBlockIndex(et,P.name),i.uniformBlockBinding(et,ct,ct),$.set(P,ct))}function Q(P,et,$){let lt=c.get(et).get(P);h[lt]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,$),h[lt]=$)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},it=null,st={},d={},h={},f=new WeakMap,x=[],M=null,g=!1,m=null,S=null,R=null,b=null,C=null,E=null,_=null,T=new Pt(0,0,0),U=0,I=!1,F=null,z=null,q=null,L=null,Y=null,Z.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Bt,bindFramebuffer:we,drawBuffers:Dt,useProgram:ae,setBlending:De,setMaterial:Ie,setFlipSided:Ue,setCullFace:ve,setLineWidth:xn,setPolygonOffset:Me,setScissorTest:We,activeTexture:Fe,bindTexture:cn,unbindTexture:O,compressedTexImage2D:nn,compressedTexImage3D:se,texImage2D:v,texImage3D:G,pixelStorei:nt,getParameter:at,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:kt,texStorage3D:A,texSubImage2D:_e,texSubImage3D:vt,compressedTexSubImage2D:Xt,compressedTexSubImage3D:Ot,scissor:dt,viewport:mt,reset:ut}}function W_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap,p=new Set,d,f=new WeakMap,x=new Set,M=new FinalizationRegistry(A=>x.delete(A)),g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,v){return g?new OffscreenCanvas(A,v):Rs("canvas")}function S(A,v,G){let at=1,nt=kt(A);if((nt.width>G||nt.height>G)&&(at=G/Math.max(nt.width,nt.height)),at<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let dt=Math.floor(at*nt.width),mt=Math.floor(at*nt.height);d===void 0&&(d=m(dt,mt));let j=v?m(dt,mt):d;return j.width=dt,j.height=mt,j.getContext("2d").drawImage(A,0,0,dt,mt),Vt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+dt+"x"+mt+")."),j}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function R(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,v,G,at,nt,dt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;at&&(mt=t.get("EXT_texture_norm16"),mt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8),G===i.UNSIGNED_SHORT&&mt&&(j=mt.R16_EXT),G===i.SHORT&&mt&&(j=mt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),v===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8),G===i.UNSIGNED_SHORT&&mt&&(j=mt.RG16_EXT),G===i.SHORT&&mt&&(j=mt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&mt&&(j=mt.RGB16_EXT),G===i.SHORT&&mt&&(j=mt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let Q=dt?mr:re.getTransfer(nt);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=Q===fe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&mt&&(j=mt.RGBA16_EXT),G===i.SHORT&&mt&&(j=mt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(A,v){let G;return A?v===null||v===Fn||v===Ji?G=i.DEPTH24_STENCIL8:v===wn?G=i.DEPTH32F_STENCIL8:v===Ws&&(G=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fn||v===Ji?G=i.DEPTH_COMPONENT24:v===wn?G=i.DEPTH_COMPONENT32F:v===Ws&&(G=i.DEPTH_COMPONENT16),G}function T(A,v){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==qe&&A.minFilter!==on?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function U(A){let v=new WeakRef(A);n.get(A).__ref=v,x.add(v),M.register(A,v,v)}function I(A){let v=n.get(A).__ref;v!==void 0&&(x.delete(v),M.unregister(v))}function F(A){q(A.target)}function z(A){L(A.target)}function q(A){A.removeEventListener("dispose",F),I(A),K(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&p.delete(A)}function L(A){A.removeEventListener("dispose",z),I(A),rt(A)}function Y(){for(let A of x){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):q(v))}x.clear(),p.clear()}function K(A){let v=n.get(A);if(v.__webglInit===void 0)return;let G=A.source,at=f.get(G);if(at){let nt=at[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&W(A),Object.keys(at).length===0&&f.delete(G)}n.remove(A)}function W(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let G=A.source,at=f.get(G);delete at[v.__cacheKey],a.memory.textures--}function rt(A){let v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&q(G),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let dt=0;dt<v.__webglFramebuffer[nt].length;dt++)i.deleteFramebuffer(v.__webglFramebuffer[nt][dt]);else i.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[nt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let at=A.textures;for(let nt=0,dt=at.length;nt<dt;nt++){let mt=n.get(at[nt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(at[nt])}n.remove(A)}let J=0;function it(){J=0}function st(){return J}function It(A){J=A}function Gt(){let A=J;return A>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,A}function Z(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function yt(A,v){let G=n.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let at=A.image;if(at===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(G,A,v);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function wt(A,v){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Ie(G,A,v);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function Ft(A,v){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Ie(G,A,v);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function xt(A,v){let G=n.get(A);if(A.version>0&&G.__version!==A.version){Ue(G,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let Bt={[oo]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},we={[qe]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Dt={[Ju]:i.NEVER,[Xc]:i.ALWAYS,[$u]:i.LESS,[Hc]:i.LEQUAL,[Ku]:i.EQUAL,[Wc]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function ae(A,v){if(v.type===wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===on||v.magFilter===Oo||v.magFilter===qr||v.magFilter===ui||v.minFilter===on||v.minFilter===Oo||v.minFilter===qr||v.minFilter===ui)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Bt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Bt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Bt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,we[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,we[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==qr&&v.minFilter!==ui||v.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function de(A,v){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",F),U(v));let at=v.source,nt=f.get(at);nt===void 0&&(nt={},f.set(at,nt));let dt=Z(v);if(dt!==A.__cacheKey){nt[dt]===void 0&&(nt[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[dt].usedTimes++;let mt=nt[A.__cacheKey];mt!==void 0&&(nt[A.__cacheKey].usedTimes--,mt.usedTimes===0&&W(v)),A.__cacheKey=dt,A.__webglTexture=nt[dt].texture}return G}function Jt(A,v,G){return Math.floor(Math.floor(A/G)/v)}function De(A,v,G,at){let dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,at,v.data);else{dt.sort((P,et)=>P.start-et.start);let mt=0;for(let P=1;P<dt.length;P++){let et=dt[mt],$=dt[P],ct=et.start+et.count,lt=Jt($.start,v.width,4),ht=Jt(et.start,v.width,4);$.start<=ct+1&&lt===ht&&Jt($.start+$.count-1,v.width,4)===lt?et.count=Math.max(et.count,$.start+$.count-et.start):(++mt,dt[mt]=$)}dt.length=mt+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let P=0,et=dt.length;P<et;P++){let $=dt[P],ct=Math.floor($.start/4),lt=Math.ceil($.count/4),ht=ct%v.width,Lt=Math.floor(ct/v.width),Zt=lt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(i.TEXTURE_2D,0,ht,Lt,Zt,ot,G,at,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function Ie(A,v,G){let at=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(at=i.TEXTURE_3D);let nt=de(A,v),dt=v.source;e.bindTexture(at,A.__webglTexture,i.TEXTURE0+G);let mt=n.get(dt);if(dt.version!==mt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let ot=re.getPrimaries(re.workingColorSpace),Nt=v.colorSpace===fi?null:re.getPrimaries(v.colorSpace),Yt=v.colorSpace===fi||ot===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=S(v.image,!1,s.maxTextureSize);Q=Ot(v,Q);let ut=r.convert(v.format,v.colorSpace),P=r.convert(v.type),et=E(v.internalFormat,ut,P,v.normalized,v.colorSpace,v.isVideoTexture);ae(at,v);let $,ct=v.mipmaps,lt=v.isVideoTexture!==!0,ht=mt.__version===void 0||nt===!0,Lt=dt.dataReady,Zt=T(v,Q);if(v.isDepthTexture)et=_(v.format===di,v.type),ht&&(lt?e.texStorage2D(i.TEXTURE_2D,1,et,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,et,Q.width,Q.height,0,ut,P,null));else if(v.isDataTexture)if(ct.length>0){lt&&ht&&e.texStorage2D(i.TEXTURE_2D,Zt,et,ct[0].width,ct[0].height);for(let ot=0,Nt=ct.length;ot<Nt;ot++)$=ct[ot],lt?Lt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,$.width,$.height,ut,P,$.data):e.texImage2D(i.TEXTURE_2D,ot,et,$.width,$.height,0,ut,P,$.data);v.generateMipmaps=!1}else lt?(ht&&e.texStorage2D(i.TEXTURE_2D,Zt,et,Q.width,Q.height),Lt&&De(v,Q,ut,P)):e.texImage2D(i.TEXTURE_2D,0,et,Q.width,Q.height,0,ut,P,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){lt&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,et,ct[0].width,ct[0].height,Q.depth);for(let ot=0,Nt=ct.length;ot<Nt;ot++)if($=ct[ot],v.format!==Bn)if(ut!==null)if(lt){if(Lt)if(v.layerUpdates.size>0){let Yt=Qc($.width,$.height,v.format,v.type);for(let St of v.layerUpdates){let ce=$.data.subarray(St*Yt/$.data.BYTES_PER_ELEMENT,(St+1)*Yt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,St,$.width,$.height,1,ut,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,$.width,$.height,Q.depth,ut,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,et,$.width,$.height,Q.depth,0,$.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,$.width,$.height,Q.depth,ut,P,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,et,$.width,$.height,Q.depth,0,ut,P,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{lt&&ht&&e.texStorage2D(i.TEXTURE_2D,Zt,et,ct[0].width,ct[0].height);for(let ot=0,Nt=ct.length;ot<Nt;ot++)$=ct[ot],v.format!==Bn?ut!==null?lt?Lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,$.width,$.height,ut,$.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,et,$.width,$.height,0,$.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Lt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,$.width,$.height,ut,P,$.data):e.texImage2D(i.TEXTURE_2D,ot,et,$.width,$.height,0,ut,P,$.data)}else if(v.isDataArrayTexture)if(lt){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,et,Q.width,Q.height,Q.depth),Lt)if(v.layerUpdates.size>0){let ot=Qc(Q.width,Q.height,v.format,v.type);for(let Nt of v.layerUpdates){let Yt=Q.data.subarray(Nt*ot/Q.data.BYTES_PER_ELEMENT,(Nt+1)*ot/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,Q.width,Q.height,1,ut,P,Yt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,P,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,Q.width,Q.height,Q.depth,0,ut,P,Q.data);else if(v.isData3DTexture)lt?(ht&&e.texStorage3D(i.TEXTURE_3D,Zt,et,Q.width,Q.height,Q.depth),Lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,P,Q.data)):e.texImage3D(i.TEXTURE_3D,0,et,Q.width,Q.height,Q.depth,0,ut,P,Q.data);else if(v.isFramebufferTexture){if(ht)if(lt)e.texStorage2D(i.TEXTURE_2D,Zt,et,Q.width,Q.height);else{let ot=Q.width,Nt=Q.height;for(let Yt=0;Yt<Zt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,et,ot,Nt,0,ut,P,null),ot>>=1,Nt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),Q.parentNode!==ot){ot.appendChild(Q),p.add(v),ot.onpaint=Nt=>{let Yt=Nt.changedElements;for(let St of p)Yt.includes(St.image)&&(St.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Yt=i.RGBA,St=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,St,ce,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(lt&&ht){let ot=kt(ct[0]);e.texStorage2D(i.TEXTURE_2D,Zt,et,ot.width,ot.height)}for(let ot=0,Nt=ct.length;ot<Nt;ot++)$=ct[ot],lt?Lt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,ut,P,$):e.texImage2D(i.TEXTURE_2D,ot,et,ut,P,$);v.generateMipmaps=!1}else if(lt){if(ht){let ot=kt(Q);e.texStorage2D(i.TEXTURE_2D,Zt,et,ot.width,ot.height)}Lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,P,Q)}else e.texImage2D(i.TEXTURE_2D,0,et,ut,P,Q);R(v)&&v.mipmapsAutoUpdate===!0&&b(at),mt.__version=dt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ue(A,v,G){if(v.image.length!==6)return;let at=de(A,v),nt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let dt=n.get(nt);if(nt.version!==dt.__version||at===!0){e.activeTexture(i.TEXTURE0+G);let mt=re.getPrimaries(re.workingColorSpace),j=v.colorSpace===fi?null:re.getPrimaries(v.colorSpace),Q=v.colorSpace===fi||mt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ut=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,et=[];for(let St=0;St<6;St++)!ut&&!P?et[St]=S(v.image[St],!0,s.maxCubemapSize):et[St]=P?v.image[St].image:v.image[St],et[St]=Ot(v,et[St]);let $=et[0],ct=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),ht=E(v.internalFormat,ct,lt,v.normalized,v.colorSpace),Lt=v.isVideoTexture!==!0,Zt=dt.__version===void 0||at===!0,ot=nt.dataReady,Nt=T(v,$);ae(i.TEXTURE_CUBE_MAP,v);let Yt;if(v.isDepthTexture){if(ht=_(v.format===di,v.type),Zt)if(Lt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,$.width,$.height);else for(let St=0;St<6;St++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,$.width,$.height,0,ct,lt,null)}else if(ut){Lt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ht,$.width,$.height);for(let St=0;St<6;St++){Yt=et[St].mipmaps;for(let ce=0;ce<Yt.length;ce++){let Oe=Yt[ce];v.format!==Bn?ct!==null?Lt?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ce,0,0,Oe.width,Oe.height,ct,Oe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ce,ht,Oe.width,Oe.height,0,Oe.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ce,0,0,Oe.width,Oe.height,ct,lt,Oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ce,ht,Oe.width,Oe.height,0,ct,lt,Oe.data)}}}else{if(Yt=v.mipmaps,Lt&&Zt){Yt.length>0&&Nt++;let St=kt(et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ht,St.width,St.height)}for(let St=0;St<6;St++)if(P){Lt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,et[St].width,et[St].height,ct,lt,et[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,et[St].width,et[St].height,0,ct,lt,et[St].data);for(let ce=0;ce<Yt.length;ce++){let An=Yt[ce].image[St].image;Lt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ce+1,0,0,An.width,An.height,ct,lt,An.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ce+1,ht,An.width,An.height,0,ct,lt,An.data)}}else{Lt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ct,lt,et[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,ct,lt,et[St]);for(let ce=0;ce<Yt.length;ce++){let Oe=Yt[ce];Lt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ce+1,0,0,ct,lt,Oe.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ce+1,ht,ct,lt,Oe.image[St])}}}R(v)&&v.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),dt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ve(A,v,G,at,nt,dt){let mt=r.convert(G.format,G.colorSpace),j=r.convert(G.type),Q=E(G.internalFormat,mt,j,G.normalized,G.colorSpace),ut=n.get(v),P=n.get(G);if(P.__renderTarget=v,!ut.__hasExternalTextures){let et=Math.max(1,v.width>>dt),$=Math.max(1,v.height>>dt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,dt,Q,et,$,v.depth,0,mt,j,null):e.texImage2D(nt,dt,Q,et,$,0,mt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,nt,P.__webglTexture,0,_e(v)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,nt,P.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xn(A,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let at=v.depthTexture,nt=at&&at.isDepthTexture?at.type:null,dt=_(v.stencilBuffer,nt),mt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(v),dt,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(v),dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let at=v.textures;for(let nt=0;nt<at.length;nt++){let dt=at[nt],mt=r.convert(dt.format,dt.colorSpace),j=r.convert(dt.type),Q=E(dt.internalFormat,mt,j,dt.normalized,dt.colorSpace);vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(v),Q,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(A,v,G){let at=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(v.depthTexture);nt.__renderTarget=v;let dt=at?v.depthTexture.image[0]:v.depthTexture.image;(!nt.__webglTexture||dt.width!==v.width||dt.height!==v.height)&&(dt.width=v.width,dt.height=v.height,v.depthTexture.needsUpdate=!0),at?xt(v.depthTexture,0):yt(v.depthTexture,0);let mt=nt.__webglTexture,j=_e(v),Q=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ut=v.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===li)vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,mt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,mt,0);else if(v.depthTexture.format===di)vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,mt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(A){let v=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),at){let nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,at.removeEventListener("dispose",nt)};at.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=at}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let at=0;at<6;at++)Me(v.__webglFramebuffer[at],A,at);else A.texture.mipmaps.length>0?Me(v.__webglFramebuffer[0],A,0):Me(v.__webglFramebuffer,A,0);else if(G){v.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[at]),v.__webglDepthbuffer[at]===void 0)v.__webglDepthbuffer[at]=i.createRenderbuffer(),xn(v.__webglDepthbuffer[at],A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),xn(v.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,v,G){let at=n.get(A);v!==void 0&&ve(at.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&We(A)}function cn(A){let v=A.texture,G=n.get(A),at=n.get(v);A.addEventListener("dispose",z),U(A);let nt=A.textures,dt=A.isWebGLCubeRenderTarget===!0,mt=nt.length>1;if(mt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=v.version,a.memory.textures++),dt){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let Q=0;Q<v.mipmaps.length;Q++)G.__webglFramebuffer[j][Q]=i.createFramebuffer()}else G.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)G.__webglFramebuffer[j]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(mt)for(let j=0,Q=nt.length;j<Q;j++){let ut=n.get(nt[j]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<nt.length;j++){let Q=nt[j];G.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let ut=r.convert(Q.format,Q.colorSpace),P=r.convert(Q.type),et=E(Q.internalFormat,ut,P,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),$=_e(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,et,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,G.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),xn(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),ae(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)ve(G.__webglFramebuffer[j][Q],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else ve(G.__webglFramebuffer[j],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);R(v)?b(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let j=0,Q=nt.length;j<Q;j++){let ut=nt[j],P=n.get(ut),et=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(et=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,P.__webglTexture),ae(et,ut),ve(G.__webglFramebuffer,A,ut,i.COLOR_ATTACHMENT0+j,et,0),R(ut)&&b(et)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,at.__webglTexture),ae(j,v),v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)ve(G.__webglFramebuffer[Q],A,v,i.COLOR_ATTACHMENT0,j,Q);else ve(G.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,j,0);R(v)?b(j):v.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&We(A)}function O(A){let v=A.textures;for(let G=0,at=v.length;G<at;G++){let nt=v[G];if(R(nt)&&nt.mipmapsAutoUpdate===!0){let dt=C(A),mt=n.get(nt).__webglTexture;e.bindTexture(dt,mt),b(dt),e.unbindTexture()}}}let nn=[];function se(A){if(A.samples>0){if(vt(A)===!1){let v=A.textures,G=A.width,at=A.height,nt=i.COLOR_BUFFER_BIT,dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),j=v.length>1;if(j)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let P=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,G,at,0,0,G,at,nt,i.NEAREST),h===!0&&(nn.length=0,nn.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&nn.push(dt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let P=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&h){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function _e(A){return Math.min(s.maxSamples,A.samples)}function vt(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Xt(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Ot(A,v){let G=A.colorSpace,at=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==pr&&G!==fi&&(re.getTransfer(G)===fe?(at!==Bn||nt!==dn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",G)),v}function kt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Gt,this.resetTextureUnits=it,this.getTextureUnits=st,this.setTextureUnits=It,this.setTexture2D=yt,this.setTexture2DArray=wt,this.setTexture3D=Ft,this.setTextureCube=xt,this.rebindTextures=Fe,this.setupRenderTarget=cn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=vt,this.dispose=Y}function X_(i,t){function e(n,s=fi){let r,a=re.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===Bo)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===Bn)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Go)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===Pi)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===Wo)return i.RGBA_INTEGER;if(n===Yr||n===Zr||n===Jr||n===$r)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===$o||n===Ko||n===Qo||n===jo||n===Kr||n===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===$o)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qo)return r.COMPRESSED_R11_EAC;if(n===jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Kr)return r.COMPRESSED_RG11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===vl||n===Qr||n===yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Zn({vertexShader:q_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Le(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,c=null,u=null,p=null,d=null,f=null,x=null,M=typeof XRWebGLBinding!="undefined",g=new dh,m={},S=e.getContextAttributes(),R=null,b=null,C=[],E=[],_=new zt,T=null,U=null,I=new $e;I.viewport=new Te;let F=new $e;F.viewport=new Te;let z=[I,F],q=new Po,L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let yt=C[Z];return yt===void 0&&(yt=new Ls,C[Z]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(Z){let yt=C[Z];return yt===void 0&&(yt=new Ls,C[Z]=yt),yt.getGripSpace()},this.getHand=function(Z){let yt=C[Z];return yt===void 0&&(yt=new Ls,C[Z]=yt),yt.getHandSpace()};function K(Z){let yt=E.indexOf(Z.inputSource);if(yt===-1)return;let wt=C[yt];wt!==void 0&&(wt.update(Z.inputSource,Z.frame,c||a),wt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",rt);for(let Z=0;Z<C.length;Z++){let yt=E[Z];yt!==null&&(E[Z]=null,C[Z].disconnect(yt))}L=null,Y=null,g.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(R),f=null,d=null,p=null,s=null,b=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),U!==null){let Z=U.camera;Z.fov=U.fov,Z.zoom=U.zoom,Z.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",W),s.addEventListener("inputsourceschange",rt),S.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ft=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=S.stencil?di:li,Ft=S.stencil?Ji:Fn);let Bt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new gn(d.textureWidth,d.textureHeight,{format:Bn,type:dn,depthTexture:new hi(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let wt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new gn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(Z){for(let yt=0;yt<Z.removed.length;yt++){let wt=Z.removed[yt],Ft=E.indexOf(wt);Ft>=0&&(E[Ft]=null,C[Ft].disconnect(wt))}for(let yt=0;yt<Z.added.length;yt++){let wt=Z.added[yt],Ft=E.indexOf(wt);if(Ft===-1){for(let Bt=0;Bt<C.length;Bt++)if(Bt>=E.length){E.push(wt),Ft=Bt;break}else if(E[Bt]===null){E[Bt]=wt,Ft=Bt;break}if(Ft===-1)break}let xt=C[Ft];xt&&xt.connect(wt)}}function J(Z,yt){yt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(yt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let yt=Z.near,wt=Z.far;g.texture!==null&&(g.depthNear>0&&(yt=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),q.near=F.near=I.near=yt,q.far=F.far=I.far=wt,(L!==q.near||Y!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),L=q.near,Y=q.far),q.layers.mask=Z.layers.mask|6,I.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;let Ft=Z.parent,xt=q.cameras;J(q,Ft);for(let Bt=0;Bt<xt.length;Bt++)J(xt[Bt],Ft);q.projectionMatrix.copy(I.projectionMatrix),q.projectionMatrixInverse.copy(I.projectionMatrixInverse),U===null&&Z.isPerspectiveCamera&&(U={camera:Z,fov:Z.fov,zoom:Z.zoom}),it(Z,q,Ft)};function it(Z,yt,wt){wt===null?Z.matrix.copy(yt.matrixWorld):(Z.matrix.copy(wt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(yt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(yt.projectionMatrix),Z.projectionMatrixInverse.copy(yt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_r*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(Z){h=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(Z){return m[Z]};let st=null;function It(Z,yt){if(u=yt.getViewerPose(c||a),x=yt,u!==null){let wt=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Ft=!1;wt.length!==q.cameras.length&&(q.cameras.length=0,Ft=!0);for(let Dt=0;Dt<wt.length;Dt++){let ae=wt[Dt],de=null;if(f!==null)de=f.getViewport(ae);else{let De=p.getViewSubImage(d,ae);de=De.viewport,Dt===0&&(t.setRenderTargetTextures(b,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(b))}let Jt=z[Dt];Jt===void 0&&(Jt=new $e,Jt.layers.enable(Dt),Jt.viewport=new Te,z[Dt]=Jt),Jt.matrix.fromArray(ae.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(ae.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(de.x,de.y,de.width,de.height),Dt===0&&(q.matrix.copy(Jt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ft===!0&&q.cameras.push(Jt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Dt=p.getDepthInformation(wt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(Dt,s.renderState)}if(xt&&xt.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let Dt=0;Dt<wt.length;Dt++){let ae=wt[Dt].camera;if(ae){let de=m[ae];de||(de=new Ir,m[ae]=de);let Jt=p.getCameraImage(ae);de.sourceTexture=Jt}}}}for(let wt=0;wt<C.length;wt++){let Ft=E[wt],xt=C[wt];Ft!==null&&xt!==void 0&&xt.update(Ft,yt,c||a)}st&&st(Z,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),x=null}let Gt=new Dd;Gt.setAnimationLoop(It),this.setAnimationLoop=function(Z){st=Z},this.dispose=function(){}}},Z_=new ue,Hd=new qt;Hd.set(-1,0,0,0,1,0,0,0,1);function J_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Jc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,R,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?h(g,m,S,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),R=S.envMap,b=S.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function h(g,m,S,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=R*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $_(i,t,e,n){let s={},r={};function a(S,R){let b=R.program;n.uniformBlockBinding(S,b,s[S.id])}function o(S,R){let b=s[S.id];b===void 0&&(x(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",g));let C=R.program;n.updateUBOMapping(S,C);let E=t.render.frame;r[S.id]!==E&&(c(S),r[S.id]=E)}function h(S){let R=i.createBuffer(),b=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,b,C),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function c(S){let R=s[S.id],b=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let E=0,_=b.length;E<_;E++){let T=b[E];if(Array.isArray(T))for(let U=0,I=T.length;U<I;U++)u(T[U],E,U,C);else u(T,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,R,b,C){if(d(S,R,b,C)===!0){let E=S.__offset,_=S.value;if(Array.isArray(_)){let T=0;for(let U=0;U<_.length;U++){let I=_[U],F=M(I,!0);p(I,S.__data,T),T+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function p(S,R,b){typeof S=="number"||typeof S=="boolean"?R[b]=S:S.isMatrix3?(R[b]=S.elements[0],R[b+1]=S.elements[1],R[b+2]=S.elements[2],R[b+3]=0,R[b+4]=S.elements[3],R[b+5]=S.elements[4],R[b+6]=S.elements[5],R[b+7]=0,R[b+8]=S.elements[6],R[b+9]=S.elements[7],R[b+10]=S.elements[8],R[b+11]=0):ArrayBuffer.isView(S)?R.set(S.subarray(0,R.length-b),b):S.toArray(R,b)}function d(S,R,b,C){let E=S.value,_=R+"_"+b;if(Array.isArray(E)){C[_]===void 0&&(C[_]=[]);let T=C[_],U=!1;for(let I=0;I<E.length;I++)f(E[I],T,I)===!0&&(U=!0);return U}return f(E,C,_)}function f(S,R,b){if(R[b]===void 0)return typeof S=="number"||typeof S=="boolean"?R[b]=S:ArrayBuffer.isView(S)?R[b]=S.slice():R[b]=S.clone(),!0;{let C=R[b];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return R[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function x(S){let R=S.uniforms,b=0,C=16;for(let _=0,T=R.length;_<T;_++){let U=Array.isArray(R[_])?R[_]:[R[_]];for(let I=0,F=U.length;I<F;I++){let z=U[I],q=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(R[_])||Array.isArray(z.value),Y=b;for(let W=0,rt=q.length;W<rt;W++){let J=q[W],it=M(J,L),st=b%C,It=st%it.boundary,Gt=st+It;b+=It,Gt!==0&&C-Gt<it.storage&&(b+=C-Gt),W===0&&(Y=b),b+=it.storage}let K=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new K((b-Y)/Float32Array.BYTES_PER_ELEMENT),z.__offset=Y}}let E=b%C;return E>0&&(b+=C-E),S.__size=b,S.__cache={},this}function M(S,R){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",S),R===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(S){let R=S.target;R.removeEventListener("dispose",g),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var K_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function Q_(){return Kn===null&&(Kn=new br(K_,16,16,Pi,On),Kn.name="DFG_LUT",Kn.minFilter=on,Kn.magFilter=on,Kn.wrapS=Hn,Kn.wrapT=Hn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var Tl=class{constructor(t={}){let{canvas:e=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=f,g=new Set([Wo,Ho,Vo]),m=new Set([dn,Fn,Ws,Ji,zo,ko]),S=new Uint32Array(4),R=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},C=null,E=null,_=[],T=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,z=null,q=null,L=null,Y=null;this._outputColorSpace=Je;let K=0,W=0,rt=null,J=-1,it=null,st=new Te,It=new Te,Gt=null,Z=new Pt(0),yt=0,wt=e.width,Ft=e.height,xt=1,Bt=null,we=null,Dt=new Te(0,0,wt,Ft),ae=new Te(0,0,wt,Ft),de=!1,Jt=new Ai,De=new mo,Ie=!1,Ue=!1,ve=new ue,xn=new B,Me=new Te,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function cn(){return rt===null?xt:1}let O=n;function nn(y,D){return e.getContext(y,D)}let se,_e,vt,Xt,Ot,kt,A,v,G,at,nt,dt,mt,j,Q,ut,P,et,$,ct,lt,ht,Lt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",St,!1),O===null){let D="webgl2";if(O=nn(D,y),O===null)throw nn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(y){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Ht("WebGLRenderer: "+y.message),y}function Zt(){se=new cg(O),se.init(),lt=new X_(O,se),_e=new Q0(O,se,t,lt),vt=new H_(O,se),_e.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),q=O.createFramebuffer(),L=O.createFramebuffer(),Y=O.createFramebuffer(),Xt=new dg(O),Ot=new C_,kt=new W_(O,se,vt,Ot,_e,lt,Xt),A=new lg(I),v=new pp(O),ht=new $0(O,v),G=new hg(O,v,Xt,ht),at=new pg(O,G,v,ht,Xt),et=new fg(O,_e,kt),Q=new j0(Ot),nt=new R_(I,A,se,_e,ht,Q),dt=new J_(I,Ot),mt=new P_,j=new O_(se),P=new J0(I,A,vt,at,x,h),ut=new V_(I,at,_e),Lt=new $_(O,Xt,_e,vt),$=new K0(O,se,Xt),ct=new ug(O,se,Xt),Xt.programs=nt.programs,I.capabilities=_e,I.extensions=se,I.properties=Ot,I.renderLists=mt,I.shadowMap=ut,I.state=vt,I.info=Xt}M!==dn&&(U=new gg(M,e.width,e.height,o,s,r));let ot=new fh(I,O);this.xr=ot,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(y){y!==void 0&&(xt=y,this.setSize(wt,Ft,!1))},this.getSize=function(y){return y.set(wt,Ft)},this.setSize=function(y,D,X=!0){if(ot.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=y,Ft=D,e.width=Math.floor(y*xt),e.height=Math.floor(D*xt),X===!0&&(e.style.width=y+"px",e.style.height=D+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(wt*xt,Ft*xt).floor()},this.setDrawingBufferSize=function(y,D,X){wt=y,Ft=D,xt=X,e.width=Math.floor(y*X),e.height=Math.floor(D*X),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(M===dn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(st)},this.getViewport=function(y){return y.copy(Dt)},this.setViewport=function(y,D,X,V){y.isVector4?Dt.set(y.x,y.y,y.z,y.w):Dt.set(y,D,X,V),vt.viewport(st.copy(Dt).multiplyScalar(cn()).round())},this.getScissor=function(y){return y.copy(ae)},this.setScissor=function(y,D,X,V){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,D,X,V),vt.scissor(It.copy(ae).multiplyScalar(cn()).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(y){vt.setScissorTest(de=y)},this.setOpaqueSort=function(y){Bt=y},this.setTransparentSort=function(y){we=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,X=!0){let V=0;if(y){let H=!1;if(rt!==null){let gt=rt.texture.format;H=g.has(gt)}if(H){let gt=rt.texture.type,Tt=m.has(gt),ft=P.getClearColor(),Mt=P.getClearAlpha(),At=ft.r,Wt=ft.g,$t=ft.b;Tt?(S[0]=At,S[1]=Wt,S[2]=$t,S[3]=Mt,O.clearBufferuiv(O.COLOR,0,S)):(R[0]=At,R[1]=Wt,R[2]=$t,R[3]=Mt,O.clearBufferiv(O.COLOR,0,R))}else V|=O.COLOR_BUFFER_BIT}D&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),P.dispose(),mt.dispose(),j.dispose(),kt.dispose(),Ot.dispose(),A.dispose(),at.dispose(),G.dispose(),ht.dispose(),Lt.dispose(),nt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",la),ot.removeEventListener("sessionend",Il),En.stop()};function Nt(y){y.preventDefault(),gr("WebGLRenderer: Context Lost."),F=!0}function Yt(){gr("WebGLRenderer: Context Restored."),F=!1;let y=Xt.autoReset,D=ut.enabled,X=ut.autoUpdate,V=ut.needsUpdate,H=ut.type;Zt(),Xt.autoReset=y,ut.enabled=D,ut.autoUpdate=X,ut.needsUpdate=V,ut.type=H}function St(y){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ce(y){let D=y.target;D.removeEventListener("dispose",ce),Oe(D)}function Oe(y){An(y),Ot.remove(y)}function An(y){let D=Ot.get(y).programs;D!==void 0&&(D.forEach(function(X){nt.releaseProgram(X)}),y.isShaderMaterial&&nt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,X,V,H,gt){D===null&&(D=We);let Tt=H.isMesh&&H.matrixWorld.determinantAffine()<0,ft=es(y,D,X,V,H);vt.setMaterial(V,Tt);let Mt=X.index,At=1;if(V.wireframe===!0){if(Mt=G.getWireframeAttribute(X),Mt===void 0)return;At=2}let Wt=X.drawRange,$t=X.attributes.position,Ct=Wt.start*At,Qt=(Wt.start+Wt.count)*At;gt!==null&&(Ct=Math.max(Ct,gt.start*At),Qt=Math.min(Qt,(gt.start+gt.count)*At)),Mt!==null?(Ct=Math.max(Ct,0),Qt=Math.min(Qt,Mt.count)):$t!=null&&(Ct=Math.max(Ct,0),Qt=Math.min(Qt,$t.count));let Ae=Qt-Ct;if(Ae<0||Ae===1/0)return;ht.setup(H,V,ft,X,Mt);let ne,le=$;if(Mt!==null&&(ne=v.get(Mt),le=ct,le.setIndex(ne)),H.isMesh)V.wireframe===!0?(vt.setLineWidth(V.wireframeLinewidth*cn()),le.setMode(O.LINES)):le.setMode(O.TRIANGLES);else if(H.isLine){let Ne=V.linewidth;Ne===void 0&&(Ne=1),vt.setLineWidth(Ne*cn()),H.isLineSegments?le.setMode(O.LINES):H.isLineLoop?le.setMode(O.LINE_LOOP):le.setMode(O.LINE_STRIP)}else H.isPoints?le.setMode(O.POINTS):H.isSprite&&le.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(se.get("WEBGL_multi_draw"))le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ne=H._multiDrawStarts,Et=H._multiDrawCounts,ke=H._multiDrawCount,oe=Mt?v.get(Mt).bytesPerElement:1,sn=Ot.get(V).currentProgram.getUniforms();for(let Ge=0;Ge<ke;Ge++)sn.setValue(O,"_gl_DrawID",Ge),le.render(Ne[Ge]/oe,Et[Ge])}else if(H.isInstancedMesh)le.renderInstances(Ct,Ae,H.count);else if(X.isInstancedBufferGeometry){let Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,Ne);le.renderInstances(Ct,Ae,Et)}else le.render(Ct,Ae)};function oa(y,D,X,V){z!==null&&y.isNodeMaterial&&z.setObject(V,y),Ie===!0&&Q.setState(y,X,!1),y.transparent===!0&&y.side===un&&y.forceSinglePass===!1?(y.side=Ke,y.needsUpdate=!0,Li(y,D,V),y.side=Ii,y.needsUpdate=!0,Li(y,D,V),y.side=un):Li(y,D,V)}this.compile=function(y,D,X=null){X===null&&(X=y),z!==null&&z.renderStart(y,D,X),E=j.get(X),E.init(D),T.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==X&&y.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),Ue=this.localClippingEnabled,Ie=Q.init(this.clippingPlanes,Ue),Ie===!0&&Q.setGlobalState(this.clippingPlanes,D),z!==null&&ut.render(E.state.shadowsArray,X,D);let V=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let gt=H.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){let ft=gt[Tt];oa(ft,X,D,H),V.add(ft)}else oa(gt,X,D,H),V.add(gt)}),E=T.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(y,D,X=null){let V=this.compile(y,D,X);return new Promise(H=>{function gt(){if(V.forEach(function(Tt){let Mt=Ot.get(Tt).currentProgram;(Mt===void 0||Mt.isReady())&&V.delete(Tt)}),V.size===0){H(y);return}setTimeout(gt,10)}se.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Qi=null;function Cl(y){Qi&&Qi(y)}function la(){En.stop()}function Il(){En.start()}let En=new Dd;En.setAnimationLoop(Cl),typeof self!="undefined"&&En.setContext(self),this.setAnimationLoop=function(y){Qi=y,ot.setAnimationLoop(y),y===null?En.stop():En.start()},ot.addEventListener("sessionstart",la),ot.addEventListener("sessionend",Il),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(y,D);let X=ot.enabled===!0&&ot.isPresenting===!0,V=U!==null&&(rt===null||X)&&U.begin(I,rt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(D),D=ot.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,D,rt),E=j.get(y,T.length),E.init(D),E.state.textureUnits=kt.getTextureUnits(),T.push(E),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?De.setFromArrayCamera(D):Jt.setFromProjectionMatrix(ve,bn,D.reversedDepth),Ue=this.localClippingEnabled,Ie=Q.init(this.clippingPlanes,Ue),C=mt.get(y,_.length),C.init(),_.push(C),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let Tt=I.xr.getDepthSensingMesh();Tt!==null&&zn(Tt,D,-1/0,I.sortObjects)}zn(y,D,0,I.sortObjects),C.finish(),z!==null&&z.updateLights(E.state.lightsArray),I.sortObjects===!0&&C.sort(Bt,we),Fe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Fe&&P.addToRenderList(C,y),this.info.autoReset===!0&&this.info.reset(),Ie===!0&&Q.beginShadows();let H=E.state.shadowsArray;if(ut.render(H,y,D),Ie===!0&&Q.endShadows(),(V&&U.hasRenderPass())===!1){let Tt=C.opaque,ft=C.transmissive;if(E.setupLights(),D.isArrayCamera){let Mt=D.cameras;if(ft.length>0)for(let At=0,Wt=Mt.length;At<Wt;At++){let $t=Mt[At];ts(Tt,ft,y,$t)}Fe&&P.render(y);for(let At=0,Wt=Mt.length;At<Wt;At++){let $t=Mt[At];ji(C,y,$t,$t.viewport)}}else ft.length>0&&ts(Tt,ft,y,D),Fe&&P.render(y),ji(C,y,D)}rt!==null&&W===0&&(kt.updateMultisampleRenderTarget(rt),kt.updateRenderTargetMipmap(rt)),V&&U.end(I),y.isScene===!0&&y.onAfterRender(I,y,D),ht.resetDefaultState(),J=-1,it=null,T.pop(),T.length>0?(E=T[T.length-1],kt.setTextureUnits(E.state.textureUnits),Ie===!0&&Q.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,z!==null&&z.renderEnd()};function zn(y,D,X,V){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let Tt=D.isArrayCamera?De:Jt;if(!y.frustumCulled||y.intersectsFrustum(Tt)){V&&Me.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);let ft=at.update(y),Mt=y.material;Mt.visible&&C.push(y,ft,Mt,X,Me.z,null,D)}}else if(y.isMesh||y.isLine||y.isPoints){let Tt=D.isArrayCamera?De:Jt;if(!y.frustumCulled||y.intersectsFrustum(Tt)){let ft=at.update(y),Mt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Me.copy(y.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Me.copy(ft.boundingSphere.center)),Me.applyMatrix4(y.matrixWorld).applyMatrix4(ve)),Array.isArray(Mt)){let At=ft.groups;for(let Wt=0,$t=At.length;Wt<$t;Wt++){let Ct=At[Wt],Qt=Mt[Ct.materialIndex];Qt&&Qt.visible&&C.push(y,ft,Qt,X,Me.z,Ct,D)}}else Mt.visible&&C.push(y,ft,Mt,X,Me.z,null,D)}}}let gt=y.children;for(let Tt=0,ft=gt.length;Tt<ft;Tt++)zn(gt[Tt],D,X,V)}function ji(y,D,X,V){let{opaque:H,transmissive:gt,transparent:Tt}=y;E.setupLightsView(X),Ie===!0&&Q.setGlobalState(I.clippingPlanes,X),V&&vt.viewport(st.copy(V)),H.length>0&&pi(H,D,X),gt.length>0&&pi(gt,D,X),Tt.length>0&&pi(Tt,D,X),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ts(y,D,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Ct=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new gn(1,1,{generateMipmaps:!0,type:Ct?On:dn,minFilter:ui,samples:Math.max(4,_e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let gt=E.state.transmissionRenderTarget[V.id],Tt=V.viewport||st;gt.setSize(Tt.z*I.transmissionResolutionScale,Tt.w*I.transmissionResolutionScale);let ft=I.getRenderTarget(),Mt=I.getActiveCubeFace(),At=I.getActiveMipmapLevel();I.setRenderTarget(gt),I.getClearColor(Z),yt=I.getClearAlpha(),yt<1&&I.setClearColor(16777215,.5),I.clear(),Fe&&P.render(X);let Wt=I.toneMapping;I.toneMapping=$n;let $t=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Ie===!0&&Q.setGlobalState(I.clippingPlanes,V),pi(y,X,V),kt.updateMultisampleRenderTarget(gt),kt.updateRenderTargetMipmap(gt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Qt=0,Ae=D.length;Qt<Ae;Qt++){let ne=D[Qt],{object:le,geometry:Ne,material:Et,group:ke}=ne;if(Et.side===un&&le.layers.test(V.layers)){let oe=Et.side;Et.side=Ke,Et.needsUpdate=!0,ca(le,X,V,Ne,Et,ke),Et.side=oe,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(kt.updateMultisampleRenderTarget(gt),kt.updateRenderTargetMipmap(gt))}I.setRenderTarget(ft,Mt,At),I.setClearColor(Z,yt),$t!==void 0&&(V.viewport=$t),I.toneMapping=Wt}function pi(y,D,X){let V=D.isScene===!0?D.overrideMaterial:null;for(let H=0,gt=y.length;H<gt;H++){let Tt=y[H],{object:ft,geometry:Mt,group:At}=Tt,Wt=Tt.material;Wt.allowOverride===!0&&V!==null&&(Wt=V),ft.layers.test(X.layers)&&ca(ft,D,X,Mt,Wt,At)}}function ca(y,D,X,V,H,gt){z!==null&&H.isNodeMaterial&&z.setObject(y,H),y.onBeforeRender(I,D,X,V,H,gt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(I,D,X,V,y,gt),H.transparent===!0&&H.side===un&&H.forceSinglePass===!1?(H.side=Ke,H.needsUpdate=!0,I.renderBufferDirect(X,D,V,H,y,gt),H.side=Ii,H.needsUpdate=!0,I.renderBufferDirect(X,D,V,H,y,gt),H.side=un):I.renderBufferDirect(X,D,V,H,y,gt),y.onAfterRender(I,D,X,V,H,gt)}function ha(y){let D=0;for(let X of y)X.texture!==null&&D++;return D}function Li(y,D,X){D.isScene!==!0&&(D=We);let V=Ot.get(y),H=E.state.lights,gt=E.state.shadowsArray,Tt=H.state.version,ft=nt.getParameters(y,H.state,gt,D,X,E.state.lightProbeGridArray),Mt=nt.getProgramCacheKey(ft),At=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;let Wt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=A.get(y.envMap||V.environment,Wt),V.envMapRotation=V.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",ce),At=new Map,V.programs=At,V.programVariants=new Map);let $t=At.get(Mt);if($t!==void 0){if(V.currentProgram===$t&&V.lightsStateVersion===Tt)return Di(y,ft),$t}else ft.uniforms=nt.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,X,ft),y.onBeforeCompile(ft,I),$t=nt.acquireProgram(ft,Mt),At.set(Mt,$t),V.uniforms=ft.uniforms;let Ct=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ct.clippingPlanes=Q.uniform),Di(y,ft),V.needsLights=$s(y),V.lightsStateVersion=Tt,V.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.sunLights.value=H.state.sun,Ct.sunLightShadows.value=H.state.sunShadow,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.sunShadowMatrix.value=H.state.sunShadowMatrix,Ct.sunShadowCascade.value=H.state.sunShadowCascade,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix),V.numLightProbeGrids=ha(E.state.lightProbeGridArray),V.currentProgram=$t,V.uniformsList=null,$t}function ua(y,D,X,V,H){let gt=Ot.get(y),Tt=gt.currentProgram.id+","+V+","+H,ft=gt.programVariants.get(Tt);return ft===void 0?(ft=Li(y,D,X),gt.programVariants.set(Tt,ft)):(gt.currentProgram=ft,gt.uniformsList=null,gt.outputColorSpace=V,gt.toneMapping=H),ft}function da(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=Xs.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Di(y,D){let X=Ot.get(y);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function es(y,D,X,V,H){D.isScene!==!0&&(D=We),kt.resetTextureUnits();let gt=D.fog,Tt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,ft=rt===null?I.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:re.workingColorSpace,Mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,At=A.get(V.envMap||Tt,Mt),Wt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$t=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,Ae=!!X.morphAttributes.color,ne=$n;V.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ne=I.toneMapping);let le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ne=le!==void 0?le.length:0,Et=Ot.get(V),ke=E.state.lights;if(Ie===!0&&(Ue===!0||y!==it)){let me=y===it&&V.id===J;Q.setState(V,y,me)}let oe=!1,sn=!1;V.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==ke.state.version||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==At||V.fog===!0&&Et.fog!==gt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Q.numPlanes||Et.numIntersection!==Q.numIntersection)||Et.vertexAlphas!==Wt||Et.vertexTangents!==$t||Et.morphTargets!==Ct||Et.morphNormals!==Qt||Et.morphColors!==Ae||Et.morphTargetsCount!==Ne||Et.numLightProbeGrids!==ha(E.state.lightProbeGridArray)?oe=!0:(Et.outputColorSpace!==ft||Et.toneMapping!==ne)&&(sn=!0):(oe=!0,Et.__version=V.version);let Ge=Et.currentProgram;(oe===!0||sn===!0)&&(Ge=sn===!0?ua(V,D,H,ft,ne):Li(V,D,H),z&&V.isNodeMaterial&&z.onUpdateProgram(V,Ge,Et));let mi=!1,fn=!1,vn=!1,jt=Ge.getUniforms(),Ee=Et.uniforms;if(vt.useProgram(Ge.program)&&(mi=!0,fn=!0,vn=!0),V.id!==J&&(J=V.id,fn=!0),mi||it!==y){vt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),jt.setValue(O,"projectionMatrix",y.projectionMatrix),jt.setValue(O,"viewMatrix",y.matrixWorldInverse);let Re=jt.map.cameraPosition;Re!==void 0&&Re.setValue(O,xn.setFromMatrixPosition(y.matrixWorld)),_e.logarithmicDepthBuffer&&jt.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&jt.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),it!==y&&(it=y,fn=!0,vn=!0)}if(Et.needsLights&&(ke.state.sunShadowMap.length>0&&jt.setValue(O,"sunShadowMap",ke.state.sunShadowMap,kt),ke.state.directionalShadowMap.length>0&&jt.setValue(O,"directionalShadowMap",ke.state.directionalShadowMap,kt),ke.state.spotShadowMap.length>0&&jt.setValue(O,"spotShadowMap",ke.state.spotShadowMap,kt),ke.state.pointShadowMap.length>0&&jt.setValue(O,"pointShadowMap",ke.state.pointShadowMap,kt)),H.isSkinnedMesh){jt.setOptional(O,H,"bindMatrix"),jt.setOptional(O,H,"bindMatrixInverse");let me=H.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),jt.setValue(O,"boneTexture",me.boneTexture,kt))}H.isBatchedMesh&&(jt.setOptional(O,H,"batchingTexture"),jt.setValue(O,"batchingTexture",H._matricesTexture,kt),jt.setOptional(O,H,"batchingIdTexture"),jt.setValue(O,"batchingIdTexture",H._indirectTexture,kt),jt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&jt.setValue(O,"batchingColorTexture",H._colorsTexture,kt));let hn=X.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&et.update(H,X,Ge),(fn||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,jt.setValue(O,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(Ee.envMapIntensity.value=D.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Q_()),fn){if(jt.setValue(O,"toneMappingExposure",I.toneMappingExposure),Et.needsLights&&Js(Ee,vn),gt&&V.fog===!0&&dt.refreshFogUniforms(Ee,gt),dt.refreshMaterialUniforms(Ee,V,xt,Ft,E.state.transmissionRenderTarget[y.id]),Et.needsLights&&Et.numLightProbeGrids>0){let me=b,Re=0;for(let ie of E.state.lightProbeGridArray)ie.texture!==null&&(me.textures[Re]=ie.texture,me.min[Re]=ie.boundingBox.min,me.max[Re]=ie.boundingBox.max,me.resolution[Re]=ie.resolution,Re++);for(let ie in me)me[ie].length=Re;Ee.probesSH.value=me.textures,Ee.probesMin.value=me.min,Ee.probesMax.value=me.max,Ee.probesResolution.value=me.resolution}Xs.upload(O,da(Et),Ee,kt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xs.upload(O,da(Et),Ee,kt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&jt.setValue(O,"center",H.center),jt.setValue(O,"modelViewMatrix",H.modelViewMatrix),jt.setValue(O,"normalMatrix",H.normalMatrix),jt.setValue(O,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let me=V.uniformsGroups;for(let Re=0,ie=me.length;Re<ie;Re++){let fa=me[Re];Lt.update(fa,Ge),Lt.bind(fa,Ge)}}return Ge}function Js(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function $s(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(y,D,X){let V=Ot.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ot.get(y.texture).__webglTexture=D,Ot.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let X=Ot.get(y);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,X=0){rt=y,K=D,W=X;let V=null,H=!1,gt=!1;if(y){let ft=Ot.get(y);if(ft.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(O.FRAMEBUFFER,ft.__webglFramebuffer),st.copy(y.viewport),It.copy(y.scissor),Gt=y.scissorTest,vt.viewport(st),vt.scissor(It),vt.setScissorTest(Gt),J=-1;return}else if(ft.__webglFramebuffer===void 0)kt.setupRenderTarget(y);else if(ft.__hasExternalTextures)kt.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Wt=y.depthTexture;if(ft.__boundDepthTexture!==Wt){if(Wt!==null&&Ot.has(Wt)&&(y.width!==Wt.image.width||y.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(y)}}let Mt=y.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(gt=!0);let At=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[D])?V=At[D][X]:V=At[D],H=!0):y.samples>0&&kt.useMultisampledRTT(y)===!1?V=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?V=At[X]:V=At,st.copy(y.viewport),It.copy(y.scissor),Gt=y.scissorTest}else st.copy(Dt).multiplyScalar(xt).floor(),It.copy(ae).multiplyScalar(xt).floor(),Gt=de;if(X!==0&&(V=q),vt.bindFramebuffer(O.FRAMEBUFFER,V)&&vt.drawBuffers(y,V),vt.viewport(st),vt.scissor(It),vt.setScissorTest(Gt),H){let ft=Ot.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,X)}else if(gt){let ft=D;for(let Mt=0;Mt<y.textures.length;Mt++){let At=Ot.get(y.textures[Mt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Mt,At.__webglTexture,X,ft)}}else if(y!==null&&X!==0){let ft=Ot.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,X)}J=-1};function kn(y){let D=Ot.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=_e.textureFormatReadable(y.format),D.__typeReadable=_e.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,X,V,H,gt,Tt,ft=0){if(!(y&&y.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Tt!==void 0&&(Mt=Mt[Tt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){vt.bindFramebuffer(O.FRAMEBUFFER,Mt);try{let At=y.textures[ft],Wt=At.format,$t=At.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);let Ct=kn(At);if(Ct.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-V&&X>=0&&X<=y.height-H&&O.readPixels(D,X,V,H,lt.convert(Wt),lt.convert($t),gt)}finally{let At=rt!==null?Ot.get(rt).__webglFramebuffer:null;vt.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,D,X,V,H,gt,Tt,ft=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Tt!==void 0&&(Mt=Mt[Tt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(D>=0&&D<=y.width-V&&X>=0&&X<=y.height-H){vt.bindFramebuffer(O.FRAMEBUFFER,Mt);let At=y.textures[ft],Wt=At.format,$t=At.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);let Ct=kn(At);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(D,X,V,H,lt.convert(Wt),lt.convert($t),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ae=rt!==null?Ot.get(rt).__webglFramebuffer:null;vt.bindFramebuffer(O.FRAMEBUFFER,Ae);let ne=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await nd(O,ne,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Qt),O.deleteSync(ne),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,X=0){let V=Math.pow(2,-X),H=Math.floor(y.image.width*V),gt=Math.floor(y.image.height*V),Tt=D!==null?D.x:0,ft=D!==null?D.y:0;kt.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Tt,ft,H,gt),vt.unbindTexture()},this.copyTextureToTexture=function(y,D,X=null,V=null,H=0,gt=0){let Tt,ft,Mt,At,Wt,$t,Ct,Qt,Ae,ne=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(X!==null)Tt=X.max.x-X.min.x,ft=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,Wt=X.min.y,$t=X.isBox3?X.min.z:0;else{let jt=Math.pow(2,-H);Tt=Math.floor(ne.width*jt),ft=Math.floor(ne.height*jt),y.isDataArrayTexture?Mt=ne.depth:y.isData3DTexture?Mt=Math.floor(ne.depth*jt):Mt=1,At=0,Wt=0,$t=0}V!==null?(Ct=V.x,Qt=V.y,Ae=V.z):(Ct=0,Qt=0,Ae=0);let le=lt.convert(D.format),Ne=lt.convert(D.type),Et;D.isData3DTexture?(kt.setTexture3D(D,0),Et=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(kt.setTexture2DArray(D,0),Et=O.TEXTURE_2D_ARRAY):(kt.setTexture2D(D,0),Et=O.TEXTURE_2D),vt.activeTexture(O.TEXTURE0),vt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),vt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),vt.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let ke=vt.getParameter(O.UNPACK_ROW_LENGTH),oe=vt.getParameter(O.UNPACK_IMAGE_HEIGHT),sn=vt.getParameter(O.UNPACK_SKIP_PIXELS),Ge=vt.getParameter(O.UNPACK_SKIP_ROWS),mi=vt.getParameter(O.UNPACK_SKIP_IMAGES);vt.pixelStorei(O.UNPACK_ROW_LENGTH,ne.width),vt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ne.height),vt.pixelStorei(O.UNPACK_SKIP_PIXELS,At),vt.pixelStorei(O.UNPACK_SKIP_ROWS,Wt),vt.pixelStorei(O.UNPACK_SKIP_IMAGES,$t);let fn=y.isDataArrayTexture||y.isData3DTexture,vn=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let jt=Ot.get(y),Ee=Ot.get(D),hn=Ot.get(jt.__renderTarget),me=Ot.get(Ee.__renderTarget);vt.bindFramebuffer(O.READ_FRAMEBUFFER,hn.__webglFramebuffer),vt.bindFramebuffer(O.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Re=0;Re<Mt;Re++)fn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(y).__webglTexture,H,$t+Re),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(D).__webglTexture,gt,Ae+Re)),O.blitFramebuffer(At,Wt,At+Tt,Wt+ft,Ct,Qt,Ct+Tt,Qt+ft,O.DEPTH_BUFFER_BIT,O.NEAREST);vt.bindFramebuffer(O.READ_FRAMEBUFFER,null),vt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||Ot.has(y)){let jt=Ot.get(y),Ee=Ot.get(D);vt.bindFramebuffer(O.READ_FRAMEBUFFER,L),vt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Y);for(let hn=0;hn<Mt;hn++)fn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,jt.__webglTexture,H,$t+hn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,jt.__webglTexture,H),vn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.__webglTexture,gt,Ae+hn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ee.__webglTexture,gt),H!==0?O.blitFramebuffer(At,Wt,At+Tt,Wt+ft,Ct,Qt,Ct+Tt,Qt+ft,O.COLOR_BUFFER_BIT,O.NEAREST):vn?O.copyTexSubImage3D(Et,gt,Ct,Qt,Ae+hn,At,Wt,Tt,ft):O.copyTexSubImage2D(Et,gt,Ct,Qt,At,Wt,Tt,ft);vt.bindFramebuffer(O.READ_FRAMEBUFFER,null),vt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else vn?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Et,gt,Ct,Qt,Ae,Tt,ft,Mt,le,Ne,ne.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,gt,Ct,Qt,Ae,Tt,ft,Mt,le,ne.data):O.texSubImage3D(Et,gt,Ct,Qt,Ae,Tt,ft,Mt,le,Ne,ne):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,Ct,Qt,Tt,ft,le,Ne,ne.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,Ct,Qt,ne.width,ne.height,le,ne.data):O.texSubImage2D(O.TEXTURE_2D,gt,Ct,Qt,Tt,ft,le,Ne,ne);vt.pixelStorei(O.UNPACK_ROW_LENGTH,ke),vt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,oe),vt.pixelStorei(O.UNPACK_SKIP_PIXELS,sn),vt.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),vt.pixelStorei(O.UNPACK_SKIP_IMAGES,mi),gt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Et),vt.unbindTexture()},this.initRenderTarget=function(y){Ot.get(y).__webglFramebuffer===void 0&&kt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?kt.setTextureCube(y,0):y.isData3DTexture?kt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?kt.setTexture2DArray(y,0):kt.setTexture2D(y,0),vt.unbindTexture()},this.resetState=function(){K=0,W=0,rt=null,vt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var El=class extends Gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Nn;t.deleteAttribute("uv");let e=new pe({side:Ke}),n=new pe,s=new kr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ut(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new wr(t,n,6),o=new Pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let h=new Ut(t,Zs(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let c=new Ut(t,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ut(t,Zs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let p=new Ut(t,Zs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let d=new Ut(t,Zs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ut(t,Zs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Zs(i){return new Nr({color:0,emissive:16777215,emissiveIntensity:i})}var aa=document.documentElement,ra=document.getElementById("world"),ge=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Rl=()=>window.innerWidth<761,ze=(i,t,e)=>i+(t-i)*e,Xd=i=>Math.min(1,Math.max(0,i)),sa=(i,t,e)=>{let n=Xd((e-i)/(t-i));return n*n*(3-2*n)},Wd=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,Ze=(i,t,e,n)=>ze(i,t,1-Math.exp(-e*n)),jn=(i,t,e,n)=>ge?t:Ze(i,t,e,n),Ce=(i,t,e)=>new B(i,t,e),qd=()=>aa.classList.remove("world","world-on");function j_(){let i=new Tl({canvas:ra,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,Rl()?1.5:1.75)),i.outputColorSpace=Je,i.toneMapping=Xr,i.shadowMap.enabled=!0,i.shadowMap.type=Do;let t=new Gi;t.background=new Pt,t.fog=new vr(16777215,34,110);let e=new qs(i);t.environment=e.fromScene(new El,.04).texture,e.dispose();let n=new $e(36,1,.3,400),s=new Nn(1,1,1),r=(l,w)=>new pe(Object.assign({color:l,roughness:.7,metalness:0},w)),a=(l,w,N,k,tt,pt,_t,Rt,te)=>{let ye=new Ut(s,tt);return ye.scale.set(w,N,k),ye.position.set(pt,_t,Rt),ye.castShadow=te!==!1,ye.receiveShadow=!0,l.add(ye),ye},o=(l,w,N,k,tt,pt,_t)=>{let Rt=new Ut(new Le(w,N),k);return Rt.rotation.x=-Math.PI/2,Rt.position.set(tt,pt,_t),Rt.receiveShadow=!0,l.add(Rt),Rt},h=[],c=(l,w,N)=>{let k=document.createElement("canvas");k.width=l,k.height=w;let tt=new Rr(k);tt.colorSpace=Je,tt.anisotropy=4;let pt=()=>{let _t=k.getContext("2d");_t.clearRect(0,0,l,w),N(_t,l,w),tt.needsUpdate=!0};return pt(),h.push(pt),tt},u="Archivo, 'Helvetica Neue', Arial, sans-serif",p="'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",d="'IBM Plex Mono', Menlo, monospace",f=(l,w,N,k,tt,pt)=>{l.beginPath(),l.moveTo(w+pt,N),l.arcTo(w+k,N,w+k,N+tt,pt),l.arcTo(w+k,N+tt,w,N+tt,pt),l.arcTo(w,N+tt,w,N,pt),l.arcTo(w,N,w+k,N,pt),l.closePath()},x=1316636,M=16762173,g=3102164,m=c(64,64,l=>{let w=l.createRadialGradient(32,32,0,32,32,32);w.addColorStop(0,"rgba(255,255,255,1)"),w.addColorStop(.35,"rgba(255,255,255,.45)"),w.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=w,l.fillRect(0,0,64,64)}),S=(l,w,N,k,tt,pt)=>{let _t=new Vi(new wi({map:m,color:w,blending:qi,depthWrite:!1,transparent:!0,fog:!1}));return _t.scale.setScalar(N),_t.position.set(k,tt,pt),l.add(_t),_t},R=[],b=r(4869975,{roughness:.35,metalness:.7}),C=r(11570519,{roughness:.35,metalness:.8}),E=r(15856108,{roughness:.6}),_=new xe;t.add(_);let T=new Jn({color:13617597,roughness:.42,clearcoat:.6,clearcoatRoughness:.35}),U=o(_,220,120,T,0,0,-10);U.receiveShadow=!0;let I=r(12169892,{roughness:.6});for(let l=-11;l<=14;l+=1.6)o(_,220,.025,I,0,.004,l);let F=r(15526113,{roughness:.92});a(_,220,14,.6,F,0,7,-12.4);let z=r(2830134,{roughness:.5});a(_,220,.28,.08,z,0,.14,-12.06,!1),R.push(l=>{T.color.setHex(13617597).lerp(new Pt(2369325),l),I.color.setHex(12169892).lerp(new Pt(1776930),l),F.color.setHex(15526113).lerp(new Pt(2764342),l)});let q=[],L=new ln({color:16769968,transparent:!0,opacity:0,blending:qi,depthWrite:!1,side:un,fog:!1});a(_,70,.12,.12,r(1777188,{roughness:.4,metalness:.6}),0,11.6,3.2,!1);let Y=(l,w,N,k,tt,pt,_t,Rt)=>{let te=new zr(16769720,0,0,Rt||.36,.6,1.1);te.position.set(l,w,N),te.target.position.set(k,tt,pt),t.add(te,te.target);let ye=new Ut(new Un(.16,.22,.55,14),r(1777188,{roughness:.35,metalness:.6}));ye.position.set(l,w+.1,N),ye.lookAt(k,tt,pt),ye.rotateX(Math.PI/2),_.add(ye),a(_,.05,11.6-w,.05,b,l,(11.6+w)/2+.2,N,!1);let be=Math.hypot(k-l,tt-w,pt-N),Sn=L.clone(),Ui=new Ut(new Us(Math.tan(Rt||.36)*be*.8,be,28,1,!0),Sn);return Ui.position.set((l+k)/2,(w+tt)/2,(N+pt)/2),Ui.lookAt(l,w,N),Ui.rotateX(-Math.PI/2),_.add(Ui),q.push({spot:te,power:_t,cone:Sn,on:ge?1:0}),te};R.push(l=>{q.forEach(w=>{w.spot.intensity=ze(w.power*.18,w.power,l)*w.on,w.cone.opacity=l*.05*w.on})});let K=new Or(16777215,8947848,1);t.add(K);let W=new Vr(16777215,2);W.castShadow=!0,W.shadow.mapSize.setScalar(Rl()?1024:2048),Object.assign(W.shadow.camera,{left:-30,right:30,top:16,bottom:-16,near:1,far:90}),W.shadow.bias=-5e-4,W.shadow.normalBias=.03,W.shadow.radius=5,W.target.position.set(0,0,-4),t.add(W,W.target);let rt={bg:new Pt(15328733),sky:new Pt(16775406),ground:new Pt(11576976),sun:new Pt(16773594)},J={bg:new Pt(855827),sky:new Pt(3950438),ground:new Pt(789776),sun:new Pt(10466047)},it=(l,w)=>{t.background.lerpColors(rt.bg,J.bg,l),t.fog.color.copy(t.background),K.color.lerpColors(rt.sky,J.sky,l),K.groundColor.lerpColors(rt.ground,J.ground,l),K.intensity=ze(1.05,.32,l),W.color.lerpColors(rt.sun,J.sun,l),W.intensity=ze(2.3,.35,l),W.position.set(ze(-16,10,l),26,ze(24,18,l)),t.environmentIntensity=ze(.75,.22,l),i.toneMappingExposure=ze(1,1.15,l);for(let N=0;N<R.length;N++)R[N](l,w)},st=r(16052974,{roughness:.55}),It=r(16513784,{roughness:.4});R.push(l=>{st.color.setHex(16052974).lerp(new Pt(2895928),l*.65),It.color.setHex(16513784).lerp(new Pt(3422531),l*.6)});let Gt=1.15,Z=-2.4,yt=(l,w,N)=>{a(_,7.2,Gt,7.2,st,l,Gt/2,Z),a(_,7.36,.06,7.36,It,l,Gt+.03,Z),a(_,7,.08,7,z,l,.04,Z,!1);let k=c(512,200,(_t,Rt,te)=>{_t.fillStyle="#fbfaf7",_t.fillRect(0,0,Rt,te),_t.fillStyle="#14171c",_t.textBaseline="alphabetic",_t.font="800 58px "+u,_t.fillText(w,30,86),_t.fillStyle="#d99200",_t.fillRect(30,108,60,6),_t.fillStyle="#565e67",_t.font="400 30px "+p,_t.fillText(N,30,160)}),tt=new Ut(new Le(1.9,.74),new pe({map:k,roughness:.45,metalness:.1}));tt.position.set(l+2.1,.62,Z+3.63),_.add(tt),a(_,1.96,.8,.03,C,l+2.1,.62,Z+3.61,!1);let pt=new xe;return pt.position.set(l,Gt+.06,Z),t.add(pt),Y(l-1.4,10.4,3.6,l,Gt+1.2,Z,150,.42),pt},wt=0,Ft=6.6,xt=4,Bt=5,we=-12.02,Dt=new xe;Dt.position.set(wt,Ft,we),_.add(Dt),a(Dt,xt+1.3,Bt+1.3,.14,r(1513757,{roughness:.35,metalness:.2}),0,0,.07),a(Dt,xt+.9,Bt+.9,.1,r(16184300,{roughness:.9}),0,0,.13,!1);let ae=new pe({color:16777215,roughness:.55,emissive:16777215,emissiveIntensity:0}),de=new Ut(new Le(xt,Bt),ae);de.position.z=.19,Dt.add(de),new Fr().load("images/hero.jpg",l=>{l.colorSpace=Je,l.anisotropy=8;let w=l.image,N=xt/Bt,k=w.width/w.height;if(k<N){let tt=k/N;l.repeat.set(1,tt),l.offset.set(0,(1-tt)*(1-.18))}else{let tt=N/k;l.repeat.set(tt,1),l.offset.set((1-tt)/2,0)}ae.map=l,ae.emissiveMap=l,ae.needsUpdate=!0}),R.push(l=>{ae.emissiveIntensity=l*.12}),Y(wt-.6,10.6,-6.5,wt,Ft,we,70,.32);let Jt=new ln({color:8363519,transparent:!0,opacity:0,fog:!1}),De=new Ut(new Le(xt,.05),Jt);De.position.z=.21,Dt.add(De);let Ie=new ln({color:M,transparent:!0,opacity:0,fog:!1}),Ue=new xe,ve=(.44+.085-.5)*xt,xn=(.5-.13-.085)*Bt,Me=.17*xt,We=.17*Bt,Fe=.045;Ue.position.set(ve,xn,.22),[[0,We/2,Me+Fe,Fe],[0,-We/2,Me+Fe,Fe],[-Me/2,0,Fe,We],[Me/2,0,Fe,We]].forEach(([l,w,N,k])=>{let tt=new Ut(new Le(N,k),Ie);tt.position.set(l,w,0),Ue.add(tt)});let cn=c(256,56,(l,w,N)=>{l.fillStyle="#ffc53d",l.fillRect(0,0,w,N),l.fillStyle="#14171c",l.textAlign="center",l.textBaseline="middle",l.font="500 30px "+d,l.fillText("FACE FOUND",w/2,N/2+2)}),O=new ln({map:cn,transparent:!0,opacity:0,fog:!1}),nn=new Ut(new Le(.95,.21),O);nn.position.set(-Me/2+.475-Fe/2,We/2+.13,0),Ue.add(nn),Dt.add(Ue);let se={t:ge?9:0,line:0,found:0},_e=l=>{se.t+=l;let w=se.t>2.6&&se.t<4,N=se.t>=4&&se.t<9.8;se.found=jn(se.found,N?1:0,7,l),Jt.opacity=w?1:Ze(Jt.opacity,0,10,l),w&&(De.position.y=Bt/2-(se.t-2.6)/1.4*Bt),Ie.opacity=O.opacity=se.found,Ue.scale.setScalar(1+(1-se.found)*.5)},vt=yt(-18,"ParkEase","Parking marketplace"),Xt=new xe;Xt.scale.setScalar(.315),Xt.position.x=-.5,vt.add(Xt);let Ot=r(3882564,{roughness:.92});o(Xt,17.6,13.6,Ot,0,.02,0),o(Xt,3.2,3.6,Ot,10.2,.02,0);let kt=r(13947336,{roughness:.85});a(Xt,18,.45,.3,kt,0,.22,-6.95),a(Xt,18,.45,.3,kt,0,.22,6.95),a(Xt,.3,.45,14.2,kt,-8.95,.22,0),a(Xt,.3,.45,5.2,kt,8.95,.22,-4.4),a(Xt,.3,.45,5.2,kt,8.95,.22,4.4);let A=l=>{let w=l<6?0:1;return{x:-6.5+l%6*2.6,z:w?3.95:-3.95,row:w,heading:w?0:Math.PI}};for(let l=0;l<=6;l++)o(Xt,.12,4.5,E,-7.8+l*2.6,.045,-3.95),o(Xt,.12,4.5,E,-7.8+l*2.6,.045,3.95);let v=r(M,{roughness:.6});for(let l=-6;l<=8;l+=2)o(Xt,1,.14,v,l,.045,0);let G=[];for(let l=0;l<12;l++){let w=A(l),N=w.row?6.35:-6.35,k=new Ut(new Un(.06,.06,1.5,6),b);k.position.set(w.x,.75,N),Xt.add(k);let tt=new pe({color:3074159,emissive:3074159,emissiveIntensity:1.6}),pt=new Ut(new Hi(.2,12,8),tt);pt.position.set(w.x,1.6,N),Xt.add(pt),G.push({mat:tt,halo:S(Xt,3074159,1,w.x,1.6,N)})}let at=c(256,320,(l,w,N)=>{l.fillStyle="#1740c9",l.fillRect(0,0,w,N),l.fillStyle="#fff",l.textAlign="center",l.textBaseline="middle",l.font="800 190px "+u,l.fillText("P",w/2,118),l.fillStyle="#ffc53d",l.fillRect(0,232,w,88),l.fillStyle="#14171c",l.font="800 46px "+u,l.fillText("ParkEase",w/2,278)}),nt=new Ut(new Un(.12,.14,5,8),b);nt.position.set(11,2.5,3),nt.castShadow=!0,Xt.add(nt);let dt=new pe({map:at,emissive:16777215,emissiveMap:at,emissiveIntensity:0,roughness:.5});R.push(l=>{dt.emissiveIntensity=.1+l*.7}),a(Xt,2.1,2.62,.16,b,11,4.6,3);let mt=new Ut(new Le(2,2.5),dt);mt.position.set(11,4.6,3.09),Xt.add(mt),a(Xt,.46,1.2,.46,r(M,{roughness:.5}),9.4,.6,-1.95);let j=c(256,16,(l,w,N)=>{for(let k=0;k<w;k+=32)l.fillStyle=k/32%2?"#14171c":"#ffc53d",l.fillRect(k,0,32,N)}),Q=new xe;Q.position.set(9.4,1.1,-1.95);let ut=new Ut(s,new pe({map:j,roughness:.5}));ut.scale.set(.14,.16,3.6),ut.position.z=1.8,ut.castShadow=!0,Q.add(ut),Xt.add(Q);let P=c(64,64,l=>{l.fillStyle="#fff",l.fillRect(0,0,64,64),l.fillStyle="#14171c";let w=5,N=()=>(w=w*16807%2147483647,w/2147483647);for(let k=0;k<8;k++)for(let tt=0;tt<8;tt++)N()<.5&&l.fillRect(4+tt*7,4+k*7,7,7)}),et=new Ut(new Le(.4,.4),new pe({map:P,emissive:16777215,emissiveMap:P,emissiveIntensity:.25}));et.position.set(9.4,.95,-1.71),Xt.add(et);let $=c(96,96,l=>{l.fillStyle="#ffc53d",l.beginPath(),l.arc(48,48,44,0,Math.PI*2),l.fill(),l.fillStyle="#14171c",l.textAlign="center",l.textBaseline="middle",l.font="800 60px "+u,l.fillText("P",48,52)}),ct=new Vi(new wi({map:$,transparent:!0,fog:!1,depthTest:!1}));ct.scale.setScalar(1.6),ct.visible=!1,Xt.add(ct);let lt=new ln({color:M,transparent:!0,opacity:0,side:un,depthWrite:!1}),ht=new Ut(new Fs(.92,1,64),lt);ht.rotation.x=-Math.PI/2,ht.position.y=.08,Xt.add(ht);let Lt=new Jn({color:1844528,roughness:.08,metalness:.2,clearcoat:1}),Zt=r(1513499,{roughness:.9}),ot=new pe({color:16774876,emissive:16773312,emissiveIntensity:.4}),Nt=new pe({color:7999504,emissive:16722474,emissiveIntensity:.3});R.push(l=>{ot.emissiveIntensity=.4+l*2.6,Nt.emissiveIntensity=.3+l*1.8});let Yt=new Un(.34,.34,.26,16);Yt.rotateZ(Math.PI/2);let St=l=>new Jn({color:l,roughness:.28,metalness:.45,clearcoat:1,clearcoatRoughness:.12}),ce=[15921902,12172998,g,10166822,2830134,2062957,14275264].map(St),Oe=St(M),An=(l,w,N,k)=>w.forEach(tt=>[-N,N].forEach(pt=>{let _t=new Ut(Yt,Zt);_t.position.set(pt,k||.34,tt),_t.castShadow=!0,l.add(_t)})),oa=l=>{let w=new xe;return a(w,1.76,.56,4,l,0,.64,0),a(w,1.56,.5,2.1,Lt,0,1.15,-.25),a(w,1.6,.07,2.16,l,0,1.43,-.25),An(w,[1.25,-1.3],.86),[-.56,.56].forEach(N=>{a(w,.42,.15,.06,ot,N,.72,2.01,!1),a(w,.42,.13,.06,Nt,N,.74,-2.01,!1)}),w},Qi=l=>new Lr(l.map(([w,N])=>Ce(w,0,N)),!1,"catmullrom",.3),Cl=l=>{let w=ze(-1,l.z,.45);return Qi([[14.2,-1],[9.8,-1],[Math.min(l.x+2.6,8.6),-1],[l.x,w],[l.x,l.z]])},la=(l,w)=>Qi([[l.x,w],[Math.min(l.x+2.6,8.6),1],[9.8,1],[14.2,1]]),En=[].slice.call(document.querySelectorAll(".bays-grid button")).map((l,w)=>({el:l,spot:A(w),car:null,state:0})),zn=[],ji=Ce(0,0,0),ts=Ce(0,0,0),pi=(l,w)=>(l.curve.getPointAt(w,ji),l.curve.getTangentAt(w,ts),l.g.position.set(ji.x,0,ji.z),Math.atan2(ts.x,ts.z)),ca=(l,w,N,k)=>{let tt=w-l.rotation.y;tt=Math.atan2(Math.sin(tt),Math.cos(tt)),l.rotation.y+=tt*(1-Math.exp(-N*k))},ha=(l,w,N)=>{let k={g:oa(w?Oe:ce[Math.floor(Math.random()*ce.length)]),mine:w,phase:"in",u:0,bay:l};k.curve=Cl(l.spot),Xt.add(k.g),N?(k.phase="parked",k.g.position.set(l.spot.x,0,l.spot.z),k.g.rotation.y=l.spot.heading):(k.g.rotation.y=pi(k,0),k.g.scale.setScalar(.001)),l.car=k},Li=(l,w)=>{if(w){Xt.remove(l.g);return}l.wantOut=!0,zn.push(l)},ua=l=>{for(let w=0;w<En.length;w++){let N=En[w],k=N.el.classList,tt=k.contains("mine")?2:k.contains("taken")?1:0;if(tt===N.state)continue;N.car&&(Li(N.car,l),N.car=null),tt&&ha(N,tt===2,l),N.state=tt;let pt=tt===2?M:tt?16731469:3074159;G[w].mat.color.setHex(pt),G[w].mat.emissive.setHex(pt),G[w].halo.material.color.setHex(pt)}},da=(l,w)=>{if(l.phase==="in")l.u=Math.min(1,l.u+w/5.2),l.g.rotation.y=pi(l,Wd(l.u)),l.g.scale.setScalar(Math.max(.001,sa(0,.12,l.u))),l.u>=1&&(l.phase="parked",l.g.rotation.y=l.bay.spot.heading,l.g.scale.setScalar(1));else if(l.phase==="parked")l.wantOut&&(l.phase="back",l.u=0,l.zFrom=l.g.position.z,l.zTo=l.bay.spot.row?1.4:-1.4);else if(l.phase==="back")l.u=Math.min(1,l.u+w/1.3),l.g.position.z=ze(l.zFrom,l.zTo,Wd(l.u)),l.u>=1&&(l.phase="out",l.u=0,l.curve=la(l.bay.spot,l.zTo));else if(l.phase==="out"){l.u=Math.min(1,l.u+w/5.5);let N=l.u*l.u*(2.2-1.2*l.u);ca(l.g,pi(l,Math.min(1,N)),6,w),l.g.scale.setScalar(Math.max(.001,1-sa(.86,1,l.u))),l.u>=1&&(l.phase="gone")}};ua(!0);let Di=0,es=(l,w,N)=>{N>es.pollAt&&(ua(ge),es.pollAt=N+140);let k=!1,tt=null,pt=En.map(_t=>_t.car).filter(Boolean).concat(zn);for(let _t=0;_t<pt.length;_t++){let Rt=pt[_t];da(Rt,l),Rt.mine&&Rt.phase==="parked"&&(tt=Rt),Rt.phase!=="parked"&&Rt.phase!=="gone"&&Math.abs(Rt.g.position.x-9.6)<2.6&&Math.abs(Rt.g.position.z)<2&&(k=!0)}for(let _t=zn.length-1;_t>=0;_t--)zn[_t].phase==="gone"&&(Xt.remove(zn[_t].g),zn.splice(_t,1));if(Q.rotation.x=Ze(Q.rotation.x,k?-1.3:0,6,l),tt){ct.visible=!0,ct.position.set(tt.g.position.x,3+(ge?0:Math.sin(w*2.4)*.18),tt.g.position.z),Di=(Di+l/2.2)%1;let _t=ge?4:1+Di*7;ht.scale.set(_t,_t,_t),ht.position.set(tt.g.position.x,.08,tt.g.position.z),lt.opacity=ge?.5:(1-Di)*.8}else ct.visible=!1,lt.opacity=0;ge||G.forEach((_t,Rt)=>{_t.halo.scale.setScalar(.95+Math.sin(w*3+Rt)*.08)})};es.pollAt=0;let Js=yt(-6,"face-detect-url","Face finder + link check"),$s=r(9069638,{roughness:.65}),kn=new xe;kn.position.set(-1.2,0,-.6),kn.rotation.y=.18,Js.add(kn),[[-.95,-.12],[.95,-.12]].forEach(([l,w])=>{let N=a(kn,.11,4.1,.11,$s,l,2,.15);N.rotation.z=w*Math.sign(l)});let y=a(kn,.11,3.8,.11,$s,0,1.85,-.75);y.rotation.x=-.32,a(kn,2.5,.12,.34,$s,0,.98,.25);let D=new xe;D.position.set(0,2.55,.26),D.rotation.x=-.06,kn.add(D),a(D,2.6,3.2,.1,r(1711136,{roughness:.4}),0,0,-.06);let X=c(400,480,(l,w,N)=>{let k=l.createLinearGradient(0,0,0,N);k.addColorStop(0,"#f3d9b8"),k.addColorStop(1,"#e7c39a"),l.fillStyle=k,l.fillRect(0,0,w,N),l.fillStyle="#ffc53d",l.beginPath(),l.arc(320,80,34,0,Math.PI*2),l.fill(),l.fillStyle="#c9a37c",l.beginPath(),l.moveTo(0,380),l.quadraticCurveTo(120,320,220,370),l.quadraticCurveTo(320,410,400,350),l.lineTo(400,480),l.lineTo(0,480),l.fill(),l.fillStyle="#2f55d4",l.beginPath(),l.moveTo(80,480),l.bezierCurveTo(80,360,140,330,200,330),l.bezierCurveTo(260,330,320,360,320,480),l.fill(),l.fillStyle="#cf9f78",l.fillRect(178,270,44,70),l.fillStyle="#e2b48c",l.beginPath(),l.ellipse(200,210,64,76,0,0,Math.PI*2),l.fill(),l.fillStyle="#3a2a22",l.beginPath(),l.ellipse(200,160,70,46,0,Math.PI,0),l.fill(),l.fillStyle="#3a2a22",l.beginPath(),l.arc(178,214,5,0,7),l.arc(222,214,5,0,7),l.fill(),l.strokeStyle="#a8613f",l.lineWidth=4,l.beginPath(),l.arc(200,238,16,.2,Math.PI-.2),l.stroke()}),V=new pe({map:X,roughness:.75,color:16777215}),H=new Ut(new Le(2.4,2.88),V);H.position.z=0,D.add(H);let gt=new ln({color:M,transparent:!0,opacity:0,fog:!1}),Tt=new xe;Tt.position.set(0,.47,.03);let ft=.86,Mt=.98,At=.04;[[0,Mt/2,ft+At,At],[0,-Mt/2,ft+At,At],[-ft/2,0,At,Mt],[ft/2,0,At,Mt]].forEach(([l,w,N,k])=>{let tt=new Ut(new Le(N,k),gt);tt.position.set(l,w,0),Tt.add(tt)}),D.add(Tt);let Wt=new ln({color:8363519,transparent:!0,opacity:0,fog:!1}),$t=new Ut(new Le(2.4,.04),Wt);$t.position.z=.02,D.add($t);let Ct=c(400,480,(l,w,N)=>{l.fillStyle="rgba(16,18,22,.94)",l.fillRect(0,0,w,N),l.save(),l.translate(w/2,N/2),l.rotate(-Math.PI/4),l.fillStyle="rgba(255,59,59,.22)";for(let k=-700;k<700;k+=52)l.fillRect(k,-700,26,1400);l.restore(),l.textAlign="center",l.textBaseline="middle",l.fillStyle="#ff6b6b",l.font="800 58px "+u,l.fillText("Blocked",w/2,N/2-26),l.fillStyle="#aab2bd",l.font="400 21px "+d,l.fillText("The picture was not opened",w/2,N/2+30)}),Qt=new ln({map:Ct,transparent:!0,opacity:0,fog:!1}),Ae=new Ut(new Le(2.4,2.88),Qt);Ae.position.z=.03,D.add(Ae);let ne=new xe;ne.position.set(1.6,0,.9),ne.rotation.y=-1.05,Js.add(ne),a(ne,1.3,.14,.9,r(1777188,{roughness:.4,metalness:.5}),0,.07,0),[-1,1].forEach(l=>a(ne,.1,.9,.1,b,0,.5,l*.32,!1));let le=new pe({color:14673650,emissive:16777215,emissiveIntensity:.05,roughness:.25,metalness:.6}),Ne=new Ut(new Os(.95,.11,20,72),le);Ne.position.y=1.95,Ne.rotation.y=Math.PI/2,Ne.castShadow=!0,ne.add(Ne);let Et=S(ne,16777215,0,0,1.95,0),ke=new ln({color:16726843,transparent:!0,opacity:0,side:un,depthWrite:!1}),oe=new Ut(new Fs(0,.86,48),ke);oe.rotation.y=Math.PI/2,oe.position.y=1.95,ne.add(oe);let sn=new xe;ne.add(sn);let Ge=new pe({color:13225686,roughness:.2,metalness:.9,emissive:0});for(let l=0;l<3;l++){let w=new Ut(new Os(.2,.05,12,28),Ge);w.scale.set(1.7,1,1),w.position.x=l*.5,w.rotation.x=l%2?Math.PI/2:0,w.castShadow=!0,sn.add(w)}sn.position.set(2.2,1.95,0);let mi=l=>c(128,128,w=>{l(w)}),fn={safe:mi(l=>{l.fillStyle="#2ee86f",l.beginPath(),l.arc(64,64,58,0,7),l.fill(),l.strokeStyle="#0d3a1f",l.lineWidth=14,l.lineCap="round",l.beginPath(),l.moveTo(36,66),l.lineTo(56,86),l.lineTo(92,44),l.stroke()}),suspicious:mi(l=>{l.fillStyle="#ffd23f",l.beginPath(),l.moveTo(64,8),l.lineTo(122,116),l.lineTo(6,116),l.closePath(),l.fill(),l.fillStyle="#3a2c00",l.fillRect(57,42,14,42),l.fillRect(57,94,14,14)}),dangerous:mi(l=>{l.fillStyle="#ff3b3b",l.beginPath(),l.arc(64,64,58,0,7),l.fill(),l.strokeStyle="#fff",l.lineWidth=14,l.lineCap="round",l.beginPath(),l.moveTo(42,42),l.lineTo(86,86),l.moveTo(86,42),l.lineTo(42,86),l.stroke()})},vn=new wi({map:fn.safe,transparent:!0,fog:!1}),jt=new Vi(vn);jt.scale.setScalar(.001),jt.position.set(0,3.25,0),ne.add(jt);let Ee=document.getElementById("fd-demo"),hn=!1;Ee&&"IntersectionObserver"in window&&new IntersectionObserver(l=>l.forEach(w=>{hn=w.isIntersecting}),{threshold:.15}).observe(Ee);let me={safe:3074159,suspicious:16765503,dangerous:16726843},Re=new Pt,ie={chainX:2.2,lit:0,box:0,block:0,scan:0,badge:0,chainOn:1},fa=(l,w)=>{let N="done",k="safe";hn&&Ee&&(N=Ee.getAttribute("data-state")||"done",k=Ee.getAttribute("data-level")||"safe");let tt=N==="done",pt=tt&&k==="dangerous",_t=N==="typing"?2.2:N==="scanning"?-.5:pt?.25:-2.6;if(ie.chainX=ge?_t:Ze(ie.chainX,_t,N==="typing"?2:3,l),sn.position.x=ie.chainX,sn.position.y=1.95+(ge?0:Math.sin(w*2)*.03),sn.rotation.x=ge?0:w*(N==="scanning"?3:.6),ie.chainOn=jn(ie.chainOn,ie.chainX<-2?0:1,6,l),sn.scale.setScalar(Math.max(.001,ie.chainOn)),Ge.emissive.setHex(pt?5898240:0),N==="scanning"){let ye=Math.floor(w*5)%3;Re.setHex([me.dangerous,me.suspicious,me.safe][ye]),ie.lit=.8}else tt?(Re.setHex(me[k]||me.safe),ie.lit=1):(Re.setHex(14673650),ie.lit=.05);le.emissive.lerp(Re,ge?1:1-Math.exp(-10*l)),le.emissiveIntensity=jn(le.emissiveIntensity,ie.lit*2.4,8,l),Et.material.color.copy(le.emissive),Et.scale.setScalar(le.emissiveIntensity*1.6),ke.opacity=jn(ke.opacity,pt?.42:0,8,l),ie.badge=jn(ie.badge,tt?1:0,9,l),tt&&vn.map!==fn[k]&&(vn.map=fn[k]||fn.safe,vn.needsUpdate=!0),jt.scale.setScalar(Math.max(.001,ie.badge*.62)),jt.position.y=3.25+(ge?0:Math.sin(w*2.2)*.06);let Rt=tt&&!pt;ie.box=jn(ie.box,Rt&&ie.chainX<-1.4?1:0,8,l),gt.opacity=ie.box,Tt.scale.setScalar(1+(1-ie.box)*.4),ie.block=jn(ie.block,pt?1:0,6,l),Qt.opacity=ie.block;let te=tt&&!pt&&ie.chainX<-1.2&&ie.box<.6;ie.scan=te?(ie.scan+l/.9)%1:0,Wt.opacity=te?1:Ze(Wt.opacity,0,12,l),$t.position.y=1.44-ie.scan*2.88,V.color.setScalar(ze(.55,1,sa(0,1,N==="done"?1:.4)))},gi=yt(6,"Grab-Goods","Online shop, UPI checkout"),ti=new xe;ti.position.set(-1.25,0,-1.85),gi.add(ti),a(ti,3.6,2.3,2.2,r(15327954,{roughness:.85}),0,1.15,0),a(ti,3.85,.14,2.45,r(4869975),0,2.37,0);let ph=c(1024,180,(l,w,N)=>{l.fillStyle="#14171c",l.fillRect(0,0,w,N),l.fillStyle="#ffc53d",l.textAlign="center",l.textBaseline="middle",l.font="800 120px "+u,l.fillText("GRAB-GOODS",w/2,N/2+6)}),mh=new pe({map:ph,emissive:16777215,emissiveMap:ph,emissiveIntensity:0,roughness:.5}),gh=new Ut(new Le(3.3,.58),mh);gh.position.set(0,1.95,1.12),ti.add(gh);let Yd=c(256,32,(l,w,N)=>{for(let k=0;k<w;k+=32)l.fillStyle=k/32%2?"#f4f1e8":"#1740c9",l.fillRect(k,0,32,N)}),Zd=a(ti,3.6,.06,.9,new pe({map:Yd,roughness:.8}),0,1.5,1.45);Zd.rotation.x=.38;let _h=new Jn({color:10467529,roughness:.08,metalness:.1,transmission:0,clearcoat:1,emissive:16755021,emissiveIntensity:0});a(ti,1.9,1,.05,_h,-.7,.75,1.11,!1),a(ti,.62,1.2,.05,r(2832970,{roughness:.4}),1.05,.6,1.11,!1),R.push(l=>{mh.emissiveIntensity=.15+l*.85,_h.emissiveIntensity=l*1.4});let xh=[14242639,3102164,16762173,2062957,16052712];for(let l=0;l<8;l++)a(ti,.16,.24+l%3*.06,.14,r(xh[l%xh.length]),-1.5+l*.22,.4+l%2*.42,1,!1);let ns=new xe;ns.position.set(2.15,0,-2.05),gi.add(ns),a(ns,1.6,1.25,1.5,r(15920096,{roughness:.9}),0,.63,0);let Ks=new Ut(new Us(1.32,.8,4),r(11684402,{roughness:.7}));Ks.rotation.y=Math.PI/4,Ks.position.y=1.65,Ks.scale.set(1,1,.95),Ks.castShadow=!0,ns.add(Ks),a(ns,.38,.66,.04,r(4020851),.25,.33,.76,!1);let vh=r(11125718,{emissive:16761978,emissiveIntensity:0});a(ns,.36,.32,.04,vh,-.38,.78,.76,!1),R.push(l=>{vh.emissiveIntensity=l*1.3});let Jd=r(3882564,{roughness:.92});o(gi,6.6,1.05,Jd,0,.012,-.05);for(let l=-2.8;l<=2.8;l+=.8)o(gi,.38,.05,v,l,.02,-.05);let $d=r(12950115,{roughness:.85}),Kd=r(15326400),pa=((l,w,N)=>{let k=new xe;return a(k,l,w,N,$d,0,w/2,0),a(k,l*.22,w+.01,N+.01,Kd,0,w/2,0,!1),k})(.36,.28,.3);pa.scale.setScalar(.001),gi.add(pa);let Qd=Ce(-.1,0,-.62),jd=Ce(2.42,0,-1.08),rn=new xe,tf=new Jn({color:16052712,roughness:.35,metalness:.2,clearcoat:.8});a(rn,2,2,3.5,tf,0,1.5,-.75),a(rn,2,1.25,1.5,St(g),0,1.12,1.75),a(rn,1.8,.62,.9,Lt,0,1.6,2.06),An(rn,[1.7,-1.7],1,.42),[-.65,.65].forEach(l=>{a(rn,.4,.16,.06,ot,l,.8,2.51,!1),a(rn,.3,.3,.06,Nt,l,.9,-2.51,!1)});let ef=c(512,256,(l,w,N)=>{l.fillStyle="#f4f1e8",l.fillRect(0,0,w,N),l.fillStyle="#14171c",l.textAlign="center",l.textBaseline="middle",l.font="800 74px "+u,l.fillText("Grab-Goods",w/2,108),l.fillStyle="#ffc53d",l.fillRect(70,160,w-140,14)}),Pl=new Ut(new Le(3.3,1.65),new pe({map:ef,roughness:.5}));Pl.rotation.y=-Math.PI/2,Pl.position.set(-1.01,1.55,-.75),rn.add(Pl),rn.scale.setScalar(.3),gi.add(rn);let ma=-1.9,yh=1.35,nf=.12;rn.rotation.y=Math.PI/2,rn.position.set(ma,0,nf);let Ni=new xe;Ni.position.set(2.7,0,2.3),Ni.rotation.y=-.5,Ni.scale.setScalar(.85),gi.add(Ni),a(Ni,.7,.12,.5,r(1777188,{roughness:.4,metalness:.5}),0,.06,-.06);let sf=a(Ni,1.12,2.24,.12,r(1382171,{roughness:.25,metalness:.6}),0,1.22,0);sf.rotation.x=-.12;let rf=(l,w,N,k,tt)=>{let pt=11,_t=()=>(pt=pt*16807%2147483647,pt/2147483647);l.fillStyle="#14171c";for(let Rt=0;Rt<tt;Rt++)for(let te=0;te<tt;te++)_t()<.5&&l.fillRect(w+te*k,N+Rt*k,k,k);[[w,N],[w+(tt-4)*k,N],[w,N+(tt-4)*k]].forEach(([Rt,te])=>{l.fillStyle="#14171c",l.fillRect(Rt,te,k*4,k*4),l.fillStyle="#fff",l.fillRect(Rt+k*.7,te+k*.7,k*2.6,k*2.6),l.fillStyle="#14171c",l.fillRect(Rt+k*1.3,te+k*1.3,k*1.4,k*1.4)})},Ll=c(300,600,(l,w,N)=>{l.fillStyle="#fbfaf7",l.fillRect(0,0,w,N),l.fillStyle="#14171c",l.font="800 30px "+u,l.textAlign="center",l.fillText("Pay by UPI",w/2,70),l.fillStyle="#565e67",l.font="400 20px "+p,l.fillText("Order GG-1042",w/2,104),l.fillStyle="#fff",f(l,40,130,220,220,14),l.fill(),rf(l,55,145,12.5,15),l.fillStyle="#14171c",l.font="800 44px "+u,l.fillText("\u20B9499",w/2,410),l.fillStyle="#1740c9",f(l,40,450,220,58,12),l.fill(),l.fillStyle="#fff",l.font="600 21px "+p,l.fillText("Open UPI app",w/2,486),l.fillStyle="#565e67",l.font="400 16px "+p,l.fillText("GPay \xB7 PhonePe \xB7 Paytm \xB7 BHIM",w/2,548)}),af=c(300,600,(l,w,N)=>{l.fillStyle="#fbfaf7",l.fillRect(0,0,w,N),l.fillStyle="#1f9d55",l.beginPath(),l.arc(w/2,220,84,0,7),l.fill(),l.strokeStyle="#fff",l.lineWidth=20,l.lineCap="round",l.lineJoin="round",l.beginPath(),l.moveTo(w/2-40,222),l.lineTo(w/2-8,254),l.lineTo(w/2+44,190),l.stroke(),l.fillStyle="#14171c",l.textAlign="center",l.font="800 40px "+u,l.fillText("Paid",w/2,380),l.fillStyle="#565e67",l.font="400 20px "+p,l.fillText("\u20B9499 \xB7 Order GG-1042",w/2,420),l.fillText("The shop will pack it next",w/2,452)}),Qs=new pe({map:Ll,emissive:16777215,emissiveMap:Ll,emissiveIntensity:.55,roughness:.2}),Dl=new Ut(new Le(1,2),Qs);Dl.position.set(0,1.22,.065),Dl.rotation.x=-.12,Ni.add(Dl);let Sh=document.getElementById("gg-track"),Gn={vanX:ma,parcel:0,paid:-1},of=(l,w)=>{let N=Sh?parseInt(Sh.getAttribute("data-step"),10)||0:4,k=N>=1?1:0;k!==Gn.paid&&(Gn.paid=k,Qs.map=Qs.emissiveMap=k?af:Ll,Qs.needsUpdate=!0),Qs.emissiveIntensity=k?.6:.55+(ge?0:Math.sin(w*5)*.22);let tt=N===3?yh:ma;Gn.vanX=ge?tt:Ze(Gn.vanX,tt,1.4,l),rn.position.x=Gn.vanX,rn.position.y=ge?0:Math.abs(Math.sin(w*14))*.012*Math.min(1,Math.abs(tt-Gn.vanX)*3);let pt=Gn.vanX>ma+.05;rn.rotation.y=jn(rn.rotation.y,tt===yh||!pt?Math.PI/2:-Math.PI/2,4,l);let _t=null;N===2?_t=Qd:N===4&&(_t=jd),Gn.parcel=jn(Gn.parcel,_t?1:0,9,l),_t&&pa.position.copy(_t),pa.scale.setScalar(Math.max(.001,Gn.parcel))},_i=yt(18,"Srijo","AI creator studio"),ga=15900679,lf=14964526,cf=2792847,Mh=new pe({color:ga,emissive:ga,emissiveIntensity:.6,roughness:.3}),_a=new Ut(new Hi(.42,32,20),Mh);_a.position.set(-2.2,3.85,-1.3),_a.castShadow=!0,_i.add(_a);let hf=S(_i,ga,1.6,-2.2,3.85,-1.3),uf=new pe({color:16777215,roughness:.1,metalness:.2,transparent:!0,opacity:.45}),bh=(l,w,N)=>a(_i,.035,w,.035,uf,l,w/2,N,!1);bh(-2.2,3.4,-1.3);let Th=new Pr(.24,1.35,8,20);Th.rotateZ(Math.PI/2);let df=[ga,lf,cf].map((l,w)=>{let N=new Ut(Th,new Jn({color:l,roughness:.3,clearcoat:1,clearcoatRoughness:.15}));return N.position.set(-1.75+w*.6,2.85-w*.62,-1.3),N.castShadow=!0,_i.add(N),bh(N.position.x,N.position.y-.24,-1.3),N}),wh=[14964526,1929062,13144106,5200853,9323909,8161850].map(l=>{let w=new Ut(new Hi(.1,16,10),new pe({color:l,emissive:l,emissiveIntensity:.4,roughness:.35}));return _i.add(w),w}),is=(l,w,N)=>c(256,340,(k,tt,pt)=>{k.fillStyle="#fffdf8",k.fillRect(0,0,tt,pt),k.fillStyle=w,k.fillRect(0,0,tt,10),k.fillStyle="#17130f",k.font="700 26px "+u,k.fillText(l,18,52),N(k,tt,pt)}),Nl=(l,w,N,k)=>{l.fillStyle="#d9d2c3";for(let tt=0;tt<N;tt++)l.fillRect(18,w+tt*22,(k-36)*(tt%3===2?.6:1),9)},ff=[is("Video script","#e4572e",(l,w)=>{l.fillStyle="#e4572e",l.font="500 15px "+d,l.fillText("SCENE 1",18,88),Nl(l,102,4,w),l.fillStyle="#e4572e",l.fillText("SCENE 2",18,210),Nl(l,224,4,w)}),is("Poster","#f2a007",(l,w)=>{l.fillStyle="#17130f",l.fillRect(18,72,w-36,236),l.fillStyle="#f2a007",l.beginPath(),l.arc(w/2,160,54,0,7),l.fill(),l.fillStyle="#fffdf8",l.font="800 30px "+u,l.textAlign="center",l.fillText("BIG SALE",w/2,262),l.textAlign="left"}),is("Caption","#2a9d8f",(l,w)=>{Nl(l,80,5,w),l.fillStyle="#2a9d8f",l.font="500 17px "+d,l.fillText("#festive #local",18,210),l.fillText("#shopsmall",18,236)}),is("Short video","#4f5bd5",(l,w)=>{l.fillStyle="#17130f",l.fillRect(18,72,w-36,160),l.fillStyle="#fffdf8",l.beginPath(),l.moveTo(w/2-18,128),l.lineTo(w/2+24,152),l.lineTo(w/2-18,176),l.fill(),l.fillStyle="#4f5bd5",l.fillRect(18,250,(w-36)*.55,8),l.fillStyle="#d9d2c3",l.fillRect(18+(w-36)*.55,250,(w-36)*.45,8)}),is("Voice-over","#8e4585",(l,w)=>{l.fillStyle="#8e4585";for(let N=0;N<26;N++){let k=16+Math.abs(Math.sin(N*1.7)*70);l.fillRect(18+N*8.2,170-k/2,5,k)}l.fillStyle="#565e67",l.font="500 15px "+d,l.fillText("0:00 / 0:30",18,260)}),is("Calendar","#7c8a3a",l=>{for(let w=0;w<4;w++)for(let N=0;N<5;N++)l.fillStyle=(w*5+N)%4===1?"#f2a007":(w*5+N)%6===3?"#2a9d8f":"#ebe5d8",l.fillRect(18+N*44,78+w*56,38,48)})].map(l=>{let w=new Ut(new Nn(.82,1.09,.03),[r(15196629),r(15196629),r(15196629),r(15196629),new pe({map:l,roughness:.6}),r(15196629)]);return w.castShadow=!0,_i.add(w),w}),pf=l=>{let w=-.95+l*.38;return{x:.9+Math.sin(w)*2,y:1+l%2*.12+.62,z:.55+(1-Math.cos(w))*-1.1+.6,ry:-w*.85}},Ul=Ce(-.55,1.61,-1.3),Ah=[],mf=new pe({color:9323909,roughness:.4});for(let l=0;l<16;l++){let w=a(_i,.09,1,.09,mf,-2.85+l*.16,.5,2.55);Ah.push(w)}let Eh=document.getElementById("sj-demo"),Rn={step:-1,since:0,glow:0,spin:0},gf=(l,w)=>{let N=Eh?parseInt(Eh.getAttribute("data-step"),10)||0:4;N!==Rn.step&&(Rn.step=N,Rn.since=0),Rn.since+=l;let k=N===1?2.4+Math.sin(w*8)*.6:N>=2?1.5:.6;Rn.glow=ge?k:Ze(Rn.glow,k,6,l),Mh.emissiveIntensity=Rn.glow,hf.scale.setScalar(1.2+Rn.glow*.5),_a.position.y=3.85+(ge?0:Math.sin(w*1.6)*.05);let tt=N===2;Rn.spin+=l*(ge?0:tt?3.2:.6),wh.forEach((pt,_t)=>{let Rt=Rn.spin+_t/wh.length*Math.PI*2,te=tt?.95:.72;pt.position.set(-2.2+Math.cos(Rt)*te,3.85+Math.sin(Rt*2)*.12,-1.3+Math.sin(Rt)*te),pt.material.emissiveIntensity=Ze(pt.material.emissiveIntensity,tt?2.2:N>=3?.9:.4,6,l)}),df.forEach((pt,_t)=>{pt.scale.y=pt.scale.z=1+(N===2?Math.max(0,Math.sin(w*6-_t))*.12:0)}),ff.forEach((pt,_t)=>{let Rt=N>=3&&(ge||N>=4||Rn.since>_t*.22),te=pf(_t),ye=Ze(pt.userData.k||0,Rt?1:0,Rt?5:9,l);pt.userData.k=ge?Rt?1:0:ye;let be=pt.userData.k;pt.position.set(ze(Ul.x,te.x,be),ze(Ul.y,te.y,be)+(ge?0:Math.sin(w*1.4+_t)*.03*be),ze(Ul.z,te.z,be)),pt.rotation.set(0,ze(0,te.ry,be),ze(.6,0,be)),pt.scale.setScalar(Math.max(.001,ze(.2,1,be)))}),Ah.forEach((pt,_t)=>{let Rt=ge?.25+Math.abs(Math.sin(_t*1.7))*.3:.12+Math.abs(Math.sin(w*6+_t*.7)*Math.cos(w*2.3+_t*.3))*.55;pt.scale.y=Rt,pt.position.y=Rt/2})},_f=r(2830134,{roughness:.45,metalness:.2}),xf=r(4160847,{roughness:.75,flatShading:!0}),vf=r(5937759,{roughness:.75,flatShading:!0}),yf=new Dr(1,1);[[-4.4,-10.6],[4.4,-10.6],[-33,-10.4],[33,-10.4]].forEach(([l,w],N)=>{let k=new Ut(new Un(.55,.42,1.1,24),_f);k.position.set(l,.55,w),k.castShadow=k.receiveShadow=!0,_.add(k);let tt=new Ut(new Un(.05,.07,1.6,6),r(5981750));tt.position.set(l,1.8,w),_.add(tt),[[0,2.7,0,.75],[.35,2.25,.2,.55],[-.38,2.1,-.1,.5],[.1,3.25,-.15,.45]].forEach(([pt,_t,Rt,te],ye)=>{let be=new Ut(yf,(ye+N)%2?xf:vf);be.scale.set(te,te*1.15,te),be.position.set(l+pt,_t,w+Rt),be.castShadow=!0,_.add(be)})});let js=(l,w,N,k)=>{let tt=c(360,450,(Rt,te,ye)=>{Rt.fillStyle="#fbfaf7",Rt.fillRect(0,0,te,ye),k(Rt,te,ye),Rt.fillStyle="#14171c",Rt.font="700 26px "+u,Rt.fillText(w,24,ye-52),Rt.fillStyle="#6b737c",Rt.font="400 17px "+p,Rt.fillText(N,24,ye-24)}),pt=new xe;pt.position.set(l,6.6,-12.06),_.add(pt),a(pt,2.5,3.08,.08,r(1513757,{roughness:.35}),0,0,.04),a(pt,2.3,2.88,.06,r(16184300,{roughness:.9}),0,0,.08,!1);let _t=new Ut(new Le(1.92,2.4),new pe({map:tt,roughness:.6}));_t.position.z=.115,pt.add(_t),Y(l,10.8,-8.2,l,6.6,-12,22,.24)};js(-26,"Robofriends","React",l=>{l.fillStyle="#0e6e7a",l.fillRect(0,0,360,340);for(let w=0;w<3;w++)for(let N=0;N<3;N++){let k=60+N*120,tt=70+w*100;l.fillStyle="#cfe9e6",f(l,k-38,tt-30,76,70,14),l.fill(),l.fillStyle="#0e6e7a",l.fillRect(k-20,tt-6,12,12),l.fillRect(k+8,tt-6,12,12),l.fillRect(k-14,tt+18,28,5),l.fillStyle="#cfe9e6",l.fillRect(k-2,tt-46,4,16)}}),js(-12,"monsters-rolodex","React",l=>{l.fillStyle="#e8e2f2",l.fillRect(0,0,360,340),l.fillStyle="#fff",f(l,40,30,280,44,22),l.fill(),l.fillStyle="#9a8fb0",l.font="400 18px "+p,l.fillText("search monsters",62,58);for(let w=0;w<4;w++){let N=40+w%2*145,k=100+Math.floor(w/2)*115;l.fillStyle="#fff",f(l,N,k,135,105,12),l.fill(),l.fillStyle=["#7b5ea7","#d1495b","#00798c","#edae49"][w],l.beginPath(),l.arc(N+67,k+42,26,0,7),l.fill(),l.fillStyle="#c9c2d6",l.fillRect(N+25,k+80,85,8)}}),js(12,"timer","JavaScript",l=>{l.fillStyle="#14171c",l.fillRect(0,0,360,340),l.lineWidth=22,l.strokeStyle="#2b3038",l.beginPath(),l.arc(180,170,110,0,7),l.stroke(),l.strokeStyle="#ffc53d",l.lineCap="round",l.beginPath(),l.arc(180,170,110,-Math.PI/2,Math.PI*.9),l.stroke(),l.fillStyle="#fff",l.font="700 54px "+d,l.textAlign="center",l.fillText("0:42",180,188),l.textAlign="left"}),js(26,"movie-compare","JavaScript",l=>{l.fillStyle="#1d2433",l.fillRect(0,0,360,340),[30,190].forEach((w,N)=>{l.fillStyle=N?"#3b5b9a":"#9a3b3b",f(l,w,26,140,110,8),l.fill();for(let k=0;k<4;k++)l.fillStyle=(k+N)%2?"#2e8b57":"#3a4256",f(l,w,150+k*44,140,36,6),l.fill()})}),js(40,"background-designer","JavaScript",l=>{let w=l.createLinearGradient(0,0,360,340);w.addColorStop(0,"#ff7a59"),w.addColorStop(.5,"#ffc53d"),w.addColorStop(1,"#2a9d8f"),l.fillStyle=w,l.fillRect(0,0,360,340),l.fillStyle="rgba(255,255,255,.88)",f(l,60,110,240,120,12),l.fill(),l.fillStyle="#14171c",l.font="700 26px "+u,l.fillText("Coral",84,156),l.fillStyle="#565e67",l.font="400 18px "+d,l.fillText("rgb(255, 122, 89)",84,194)});let xa=Rl()?260:520,va=new Float32Array(xa*3),Rh=new Float32Array(xa),Ch=[[-18,Z],[-6,Z],[6,Z],[18,Z],[0,-9.5]];for(let l=0;l<xa;l++){let[w,N]=Ch[l%Ch.length],k=Math.random()*Math.PI*2,tt=Math.sqrt(Math.random())*2.8;va[l*3]=w+Math.cos(k)*tt,va[l*3+1]=1.3+Math.random()*8.5,va[l*3+2]=N+Math.sin(k)*tt,Rh[l]=Math.random()*100}let ya=new Ye;ya.setAttribute("position",new he(va,3));let Ih=new Ns({map:m,color:16771524,size:.07,transparent:!0,opacity:0,blending:qi,depthWrite:!1,fog:!1}),Sa=new Ar(ya,Ih);t.add(Sa),R.push(l=>{Ih.opacity=.18+l*.55});let Sf=(l,w)=>{if(ge||!Sa.visible)return;let N=ya.attributes.position.array;for(let k=0;k<xa;k++){let tt=Rh[k];N[k*3]+=Math.sin(l*.3+tt)*.0025,N[k*3+1]+=(Math.sin(l*.2+tt*2)*.5+.12)*w*.18,N[k*3+2]+=Math.cos(l*.25+tt)*.0025,N[k*3+1]>9.8&&(N[k*3+1]=1.3)}ya.attributes.position.needsUpdate=!0},Fl={t:ge?9:0},Mf=q.map((l,w)=>w===4?.45:w<4?1.05+w*.38:2.6+(w-5)*.12),bf=l=>(Fl.t+=l,q.forEach((w,N)=>{let k=Fl.t-Mf[N];w.on=k<0?0:k<.32?Math.sin(k*90+N)>.1?1:.12:1}),ze(.4,1,sa(.1,2.6,Fl.t))),Tf=new ln({visible:!1}),tr=(l,w,N,k,tt,pt,_t)=>{let Rt=new Ut(s,Tf);return Rt.scale.set(w,N,k),Rt.position.set(tt,pt,_t),l.add(Rt),Rt},Ma=[{mesh:tr(t,7.4,6,7.4,-18,3,Z),base:vt,tip:"Reserve a bay",run:()=>{let l=document.querySelectorAll(".bays-grid button:not(.taken):not(.mine)");l.length&&l[Math.floor(Math.random()*l.length)].click()}},{mesh:tr(t,7.4,6,7.4,-6,3,Z),base:Js,tip:"Check another link",run:()=>{let l=[].slice.call(document.querySelectorAll("#fd-demo [data-sample]"));if(!l.length)return;let w=l.findIndex(N=>N.getAttribute("aria-pressed")==="true");l[(w+1)%l.length].click()}},{mesh:tr(t,7.4,6,7.4,6,3,Z),base:gi,tip:"Place a demo order",run:()=>{let l=document.getElementById("gg-go");l&&l.click()}},{mesh:tr(t,7.4,6,7.4,18,3,Z),base:_i,tip:"Run the cascade",run:()=>{let l=document.getElementById("sj-go");l&&l.click()}},{mesh:tr(Dt,xt+1.3,Bt+1.3,.4,0,0,.2),base:null,tip:"Find the face",run:()=>{se.t=2.4}}];Ma.forEach(l=>{l.base&&(l.baseY=l.base.position.y),l.lift=0});let Ph=new Hr,Lh=new zt,wf="a, button, input, label, header, footer, .placard, .stats, .ticker, .hero .wrap > div:first-child, section:not(.scene)",Dh=(l,w,N)=>{if(N&&N.closest&&N.closest(wf))return null;Lh.set(l/ss*2-1,-(w/rs)*2+1),Ph.setFromCamera(Lh,n);let k=Ph.intersectObjects(Ma.map(tt=>tt.mesh),!1);return k.length?Ma.find(tt=>tt.mesh===k[0].object):null},er=null,Ol=document.getElementById("world-tip");window.matchMedia("(hover: hover) and (pointer: fine)").matches&&window.addEventListener("pointermove",l=>{er=Dh(l.clientX,l.clientY,l.target),aa.classList.toggle("world-pick",!!er),Ol&&(Ol.textContent=er?er.tip:"",Ol.style.transform="translate("+(l.clientX+16)+"px,"+(l.clientY+18)+"px)")},{passive:!0}),window.addEventListener("click",l=>{let w=Dh(l.clientX,l.clientY,l.target);w&&w.run()});let Af=l=>{Ma.forEach(w=>{w.base&&(w.lift=jn(w.lift,w===er?1:0,8,l),w.base.position.y=w.baseY+w.lift*.18)})},nr=[{id:"top",pos:Ce(-2.2,6.2,3),look:Ce(.3,6.3,-12),shift:.25,far:1.6,up:.13},{id:"work",pos:Ce(-17.2,11.2,9.6),look:Ce(-18.2,.9,-2.4),shift:.22,far:1.6,up:.13},{id:"face",pos:Ce(-8.4,5.4,9.2),look:Ce(-6,2.5,-2.4),shift:-.23,far:1.6,up:.13},{id:"shop",pos:Ce(7.4,6.9,9.8),look:Ce(6,1.5,-2.4),shift:.23,far:1.6,up:.13},{id:"srijo",pos:Ce(15.8,5.8,9.8),look:Ce(18.3,2.4,-2.4),shift:-.23,far:1.6,up:.13},{id:"contact",pos:Ce(3,15,27),look:Ce(0,2.4,-5),shift:.16,far:1.35,up:.14}].map(l=>Object.assign(l,{el:document.getElementById(l.id)})).filter(l=>l.el),xi=Ce(0,0,0),ir=Ce(0,0,0),vi=Ce(0,0,0),Ef=Ce(0,0,0),Rf=Ce(0,0,0),ba=0,Ta=0,ss=1,rs=1,Nh=0,Uh=0,Fh=!0,Oh=(l,w,N)=>(N.copy(l.pos),w&&N.sub(l.look).multiplyScalar(l.far).add(l.look),N),Cf=l=>{let w=Rl(),N=window.innerHeight/2,k=0,tt=0,pt=nr.map(Sn=>{let Ui=Sn.el.getBoundingClientRect();return Ui.top+Math.min(Ui.height,window.innerHeight*1.6)/2});for(let Sn=0;Sn<nr.length-1;Sn++)N>=pt[Sn]&&(k=Sn,tt=(N-pt[Sn])/Math.max(1,pt[Sn+1]-pt[Sn]));tt=sa(.15,.85,Xd(tt));let _t=nr[k],Rt=nr[Math.min(nr.length-1,k+1)];xi.lerpVectors(Oh(_t,w,Ef),Oh(Rt,w,Rf),tt),xi.y+=Math.sin(tt*Math.PI)*(_t.id==="srijo"?4:1.6),ir.lerpVectors(_t.look,Rt.look,tt);let te=w?0:ze(_t.shift,Rt.shift,tt),ye=w?ze(_t.up,Rt.up,tt):0;ge||(xi.x+=Nh*1.1,xi.y+=Uh*-.6),Fh&&(n.position.copy(xi),ge||(n.position.y+=3,n.position.z+=10),vi.copy(ir),ba=te,Ta=ye,Fh=!1);let be=ge?14:3.2;n.position.x=Ze(n.position.x,xi.x,be,l),n.position.y=Ze(n.position.y,xi.y,be,l),n.position.z=Ze(n.position.z,xi.z,be,l),vi.x=Ze(vi.x,ir.x,be,l),vi.y=Ze(vi.y,ir.y,be,l),vi.z=Ze(vi.z,ir.z,be,l),ba=Ze(ba,te,be,l),Ta=Ze(Ta,ye,be,l),n.lookAt(vi),n.setViewOffset(ss,rs,-ba*ss,Ta*rs,ss,rs)},Bl=l=>{let w=ra.clientWidth,N=ra.clientHeight;!l&&w===ss&&Math.abs(N-rs)<130||(ss=w,rs=N,i.setSize(w,N,!1),n.aspect=w/N,n.fov=w<N?46:36,n.updateProjectionMatrix())};Bl(!0),window.addEventListener("resize",()=>Bl(!1));let zl=new Set,Bh=!0;if("IntersectionObserver"in window){let l=new IntersectionObserver(w=>{w.forEach(N=>{N.isIntersecting?zl.add(N.target):zl.delete(N.target)}),Bh=zl.size>0});[].forEach.call(document.querySelectorAll(".scene"),w=>l.observe(w))}window.matchMedia("(hover: hover) and (pointer: fine)").matches&&window.addEventListener("pointermove",l=>{Nh=l.clientX/window.innerWidth-.5,Uh=l.clientY/window.innerHeight-.5},{passive:!0});let If=window.matchMedia("(prefers-color-scheme: dark)"),kl=()=>{let l=aa.getAttribute("data-theme");return(l?l==="dark":If.matches)?1:0},Gl=kl();document.fonts&&document.fonts.load&&Promise.all([document.fonts.load("800 80px Archivo"),document.fonts.load("500 30px 'IBM Plex Mono'"),document.fonts.load("400 30px 'IBM Plex Sans'")]).then(()=>h.forEach(l=>l())).catch(()=>{});let zh=performance.now(),kh=!1,yn={sum:0,n:0,level:0,skip:60},Gh=l=>{requestAnimationFrame(Gh);let w=Math.min(.05,(l-zh)/1e3),N=l/1e3;if(zh=l,!Bh||document.hidden)return;Gl=ge?kl():Ze(Gl,kl(),2.6,w);let k=bf(w);if(it(Gl,N),K.intensity*=k,W.intensity*=k,Sf(N,w),Af(w),_e(w),es(w,N,l),fa(w,N),of(w,N),gf(w,N),Cf(w),i.render(t,n),kh||(kh=!0,aa.classList.add("world-on")),yn.skip>0){yn.skip--;return}if(yn.sum+=w,yn.n++,yn.n>=90){let tt=yn.sum/yn.n;if(yn.sum=0,yn.n=0,tt>.028&&yn.level<3){yn.level++;let pt=i.getPixelRatio();pt>1?i.setPixelRatio(Math.max(1,pt-.5)):Sa.visible?Sa.visible=!1:W.castShadow&&(W.castShadow=!1),Bl(!0),yn.skip=30}}};requestAnimationFrame(Gh),ra.addEventListener("webglcontextlost",l=>{l.preventDefault(),qd()})}if(ra&&aa.classList.contains("world"))try{j_()}catch{qd()}
