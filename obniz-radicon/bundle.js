!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);var n=function(){function t(){}return t.STORAGE_KEY_OBNIZ_ID="OBNIZ_ID",t}(),r=function(t,e,o,n){return new(o||(o=Promise))(function(r,u){function i(t){try{s(n.next(t))}catch(t){u(t)}}function c(t){try{s(n.throw(t))}catch(t){u(t)}}function s(t){t.done?r(t.value):new o(function(e){e(t.value)}).then(i,c)}s((n=n.apply(t,e||[])).next())})},u=function(t,e){var o,n,r,u,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,n&&(r=2&u[0]?n.return:u[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,u[1])).done)return r;switch(n=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(t){u=[6,t],n=0}finally{o=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},i=(function(){function t(t,e){console.log("constructor"),e()}t.prototype.on=function(){console.log("on")},t.prototype.off=function(){console.log("off")},t.prototype.up=function(){console.log("up")},t.prototype.left=function(){console.log("left")},t.prototype.right=function(){console.log("right")},t.prototype.down=function(){console.log("down")},t.prototype.stop=function(){console.log("stop")},t.prototype.deviceMotion=function(t,e){console.log("deviceMotion")}}(),function(){function t(t,e){var o=this;this.THRESHOLD=1,this.MAX_ACCEL=5,this.OBNIZ=new Obniz(t),this.OBNIZ.onconnect=function(){return r(o,void 0,void 0,function(){return u(this,function(t){return e&&e(),this.led=this.OBNIZ.wired("LED",{anode:5,cathode:6}),this.motorLeft=this.OBNIZ.wired("DCMotor",{forward:0,back:1}),this.motorRight=this.OBNIZ.wired("DCMotor",{forward:10,back:11}),[2]})})}}return t.prototype.on=function(){this.led.on()},t.prototype.off=function(){this.led.off()},t.prototype.up=function(){this.motorLeft.power(60),this.motorRight.power(60),this.motorLeft.forward(),this.motorRight.forward()},t.prototype.left=function(){this.motorLeft.power(20),this.motorRight.power(60),this.motorLeft.forward(),this.motorRight.forward()},t.prototype.right=function(){this.motorLeft.power(60),this.motorRight.power(20),this.motorLeft.forward(),this.motorRight.forward()},t.prototype.down=function(){this.motorLeft.power(60),this.motorRight.power(60),this.motorLeft.reverse(),this.motorRight.reverse()},t.prototype.stop=function(){this.motorLeft.stop(),this.motorRight.stop()},t.prototype.deviceMotion=function(t,e){if(Math.abs(e)>this.THRESHOLD){var o=Math.min(100*(Math.abs(e)-this.THRESHOLD)/(this.MAX_ACCEL-this.THRESHOLD),100);this.motorLeft.power(o),this.motorRight.power(o);var n=e>0;this.motorLeft.move(n),this.motorRight.move(n)}else if(Math.abs(t)>this.THRESHOLD){o=Math.min(100*(Math.abs(t)-this.THRESHOLD)/(this.MAX_ACCEL-this.THRESHOLD),100);t>0?(this.motorRight.power(o),this.motorRight.move(!0),this.motorLeft.stop()):(this.motorLeft.power(o),this.motorLeft.move(!0),this.motorRight.stop())}else this.motorLeft.stop(),this.motorRight.stop()},t}()),c=document.querySelectorAll(".obniz-controller .button");c.forEach(function(t){return t.setAttribute("disabled","disabled")});var s=document.querySelector(".field.obniz-id .input");s.value=window.sessionStorage.getItem(n.STORAGE_KEY_OBNIZ_ID)||"",document.querySelector(".field.obniz-id .button").addEventListener("click",function(){var t=new i(s.value,function(){window.sessionStorage.setItem(n.STORAGE_KEY_OBNIZ_ID,s.value),document.querySelector(".button.led").addEventListener("mousedown",function(){return t.on()}),document.querySelector(".button.led").addEventListener("touchstart",function(){return t.on()}),document.querySelector(".button.led").addEventListener("mouseup",function(){return t.off()}),document.querySelector(".button.led").addEventListener("touchend",function(){return t.off()}),document.querySelector(".button.up").addEventListener("mousedown",function(){return t.up()}),document.querySelector(".button.up").addEventListener("touchstart",function(){return t.up()}),document.querySelector(".button.left").addEventListener("mousedown",function(){return t.left()}),document.querySelector(".button.left").addEventListener("touchstart",function(){return t.left()}),document.querySelector(".button.right").addEventListener("mousedown",function(){return t.right()}),document.querySelector(".button.right").addEventListener("touchstart",function(){return t.right()}),document.querySelector(".button.down").addEventListener("mousedown",function(){return t.down()}),document.querySelector(".button.down").addEventListener("touchstart",function(){return t.down()}),document.querySelector(".button.up").addEventListener("mouseup",function(){return t.stop()}),document.querySelector(".button.up").addEventListener("touchend",function(){return t.stop()}),document.querySelector(".button.left").addEventListener("mouseup",function(){return t.stop()}),document.querySelector(".button.left").addEventListener("touchend",function(){return t.stop()}),document.querySelector(".button.right").addEventListener("mouseup",function(){return t.stop()}),document.querySelector(".button.right").addEventListener("touchend",function(){return t.stop()}),document.querySelector(".button.down").addEventListener("mouseup",function(){return t.stop()}),document.querySelector(".button.down").addEventListener("touchend",function(){return t.stop()}),window.addEventListener("devicemotion",function(e){t.deviceMotion(e.accelerationIncludingGravity.x,e.accelerationIncludingGravity.y)},!0),c.forEach(function(t){return t.removeAttribute("disabled")})})})}]);