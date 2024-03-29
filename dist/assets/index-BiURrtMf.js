(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();window.onload=function(){debugger;var c=localStorage.getItem("reloadFlag");c?localStorage.removeItem("reloadFlag"):(localStorage.setItem("reloadFlag","true"),window.location.reload())};var F=function(c,l){var o=document.querySelector("#"+c+" > .particles-js-canvas-el");this.pJS={canvas:{el:o,w:o.offsetWidth,h:o.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var e=this.pJS;l&&Object.deepExtend(e,l),e.tmp.obj={size_value:e.particles.size.value,size_anim_speed:e.particles.size.anim.speed,move_speed:e.particles.move.speed,line_linked_distance:e.particles.line_linked.distance,line_linked_width:e.particles.line_linked.width,mode_grab_distance:e.interactivity.modes.grab.distance,mode_bubble_distance:e.interactivity.modes.bubble.distance,mode_bubble_size:e.interactivity.modes.bubble.size,mode_repulse_distance:e.interactivity.modes.repulse.distance},e.fn.canvasInit=function(){e.canvas.ctx=e.canvas.el.getContext("2d")},e.fn.canvasSize=function(){e.canvas.el.width=e.canvas.w,e.canvas.el.height=e.canvas.h,e&&e.interactivity.events.resize&&window.addEventListener("resize",function(){e.canvas.w=e.canvas.el.offsetWidth,e.canvas.h=e.canvas.el.offsetHeight,e.tmp.retina&&(e.canvas.w*=e.canvas.pxratio,e.canvas.h*=e.canvas.pxratio),e.canvas.el.width=e.canvas.w,e.canvas.el.height=e.canvas.h,e.particles.move.enable||(e.fn.particlesEmpty(),e.fn.particlesCreate(),e.fn.particlesDraw(),e.fn.vendors.densityAutoParticles()),e.fn.vendors.densityAutoParticles()})},e.fn.canvasPaint=function(){e.canvas.ctx.fillRect(0,0,e.canvas.w,e.canvas.h)},e.fn.canvasClear=function(){e.canvas.ctx.clearRect(0,0,e.canvas.w,e.canvas.h)},e.fn.particle=function(t,a,i){if(this.radius=(e.particles.size.random?Math.random():1)*e.particles.size.value,e.particles.size.anim.enable&&(this.size_status=!1,this.vs=e.particles.size.anim.speed/100,e.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=i?i.x:Math.random()*e.canvas.w,this.y=i?i.y:Math.random()*e.canvas.h,this.x>e.canvas.w-this.radius*2?this.x=this.x-this.radius:this.x<this.radius*2&&(this.x=this.x+this.radius),this.y>e.canvas.h-this.radius*2?this.y=this.y-this.radius:this.y<this.radius*2&&(this.y=this.y+this.radius),e.particles.move.bounce&&e.fn.vendors.checkOverlap(this,i),this.color={},typeof t.value=="object")if(t.value instanceof Array){var r=t.value[Math.floor(Math.random()*e.particles.color.value.length)];this.color.rgb=k(r)}else t.value.r!=null&&t.value.g!=null&&t.value.b!=null&&(this.color.rgb={r:t.value.r,g:t.value.g,b:t.value.b}),t.value.h!=null&&t.value.s!=null&&t.value.l!=null&&(this.color.hsl={h:t.value.h,s:t.value.s,l:t.value.l});else t.value=="random"?this.color.rgb={r:Math.floor(Math.random()*256)+0,g:Math.floor(Math.random()*256)+0,b:Math.floor(Math.random()*256)+0}:typeof t.value=="string"&&(this.color=t,this.color.rgb=k(this.color.value));this.opacity=(e.particles.opacity.random?Math.random():1)*e.particles.opacity.value,e.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=e.particles.opacity.anim.speed/100,e.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(e.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0};break}e.particles.move.straight?(this.vx=n.x,this.vy=n.y,e.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var s=e.particles.shape.type;if(typeof s=="object"){if(s instanceof Array){var v=s[Math.floor(Math.random()*s.length)];this.shape=v}}else this.shape=s;if(this.shape=="image"){var d=e.particles.shape;this.img={src:d.image.src,ratio:d.image.width/d.image.height},this.img.ratio||(this.img.ratio=1),e.tmp.img_type=="svg"&&e.tmp.source_svg!=null&&(e.fn.vendors.createSvgImg(this),e.tmp.pushing&&(this.img.loaded=!1))}},e.fn.particle.prototype.draw=function(){var t=this;if(t.radius_bubble!=null)var a=t.radius_bubble;else var a=t.radius;if(t.opacity_bubble!=null)var i=t.opacity_bubble;else var i=t.opacity;if(t.color.rgb)var r="rgba("+t.color.rgb.r+","+t.color.rgb.g+","+t.color.rgb.b+","+i+")";else var r="hsla("+t.color.hsl.h+","+t.color.hsl.s+"%,"+t.color.hsl.l+"%,"+i+")";switch(e.canvas.ctx.fillStyle=r,e.canvas.ctx.beginPath(),t.shape){case"circle":e.canvas.ctx.arc(t.x,t.y,a,0,Math.PI*2,!1);break;case"edge":e.canvas.ctx.rect(t.x-a,t.y-a,a*2,a*2);break;case"triangle":e.fn.vendors.drawShape(e.canvas.ctx,t.x-a,t.y+a/1.66,a*2,3,2);break;case"polygon":e.fn.vendors.drawShape(e.canvas.ctx,t.x-a/(e.particles.shape.polygon.nb_sides/3.5),t.y-a/(2.66/3.5),a*2.66/(e.particles.shape.polygon.nb_sides/3),e.particles.shape.polygon.nb_sides,1);break;case"star":e.fn.vendors.drawShape(e.canvas.ctx,t.x-a*2/(e.particles.shape.polygon.nb_sides/4),t.y-a/(2*2.66/3.5),a*2*2.66/(e.particles.shape.polygon.nb_sides/3),e.particles.shape.polygon.nb_sides,2);break;case"image":let v=function(){e.canvas.ctx.drawImage(n,t.x-a,t.y-a,a*2,a*2/t.img.ratio)};var s=v;if(e.tmp.img_type=="svg")var n=t.img.obj;else var n=e.tmp.img_obj;n&&v();break}e.canvas.ctx.closePath(),e.particles.shape.stroke.width>0&&(e.canvas.ctx.strokeStyle=e.particles.shape.stroke.color,e.canvas.ctx.lineWidth=e.particles.shape.stroke.width,e.canvas.ctx.stroke()),e.canvas.ctx.fill()},e.fn.particlesCreate=function(){for(var t=0;t<e.particles.number.value;t++)e.particles.array.push(new e.fn.particle(e.particles.color,e.particles.opacity.value))},e.fn.particlesUpdate=function(){for(var t=0;t<e.particles.array.length;t++){var a=e.particles.array[t];if(e.particles.move.enable){var i=e.particles.move.speed/2;a.x+=a.vx*i,a.y+=a.vy*i}if(e.particles.opacity.anim.enable&&(a.opacity_status==!0?(a.opacity>=e.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=e.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),e.particles.size.anim.enable&&(a.size_status==!0?(a.radius>=e.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=e.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),e.particles.move.out_mode=="bounce")var r={x_left:a.radius,x_right:e.canvas.w,y_top:a.radius,y_bottom:e.canvas.h};else var r={x_left:-a.radius,x_right:e.canvas.w+a.radius,y_top:-a.radius,y_bottom:e.canvas.h+a.radius};switch(a.x-a.radius>e.canvas.w?(a.x=r.x_left,a.y=Math.random()*e.canvas.h):a.x+a.radius<0&&(a.x=r.x_right,a.y=Math.random()*e.canvas.h),a.y-a.radius>e.canvas.h?(a.y=r.y_top,a.x=Math.random()*e.canvas.w):a.y+a.radius<0&&(a.y=r.y_bottom,a.x=Math.random()*e.canvas.w),e.particles.move.out_mode){case"bounce":(a.x+a.radius>e.canvas.w||a.x-a.radius<0)&&(a.vx=-a.vx),(a.y+a.radius>e.canvas.h||a.y-a.radius<0)&&(a.vy=-a.vy);break}if(y("grab",e.interactivity.events.onhover.mode)&&e.fn.modes.grabParticle(a),(y("bubble",e.interactivity.events.onhover.mode)||y("bubble",e.interactivity.events.onclick.mode))&&e.fn.modes.bubbleParticle(a),(y("repulse",e.interactivity.events.onhover.mode)||y("repulse",e.interactivity.events.onclick.mode))&&e.fn.modes.repulseParticle(a),e.particles.line_linked.enable||e.particles.move.attract.enable)for(var n=t+1;n<e.particles.array.length;n++){var s=e.particles.array[n];e.particles.line_linked.enable&&e.fn.interact.linkParticles(a,s),e.particles.move.attract.enable&&e.fn.interact.attractParticles(a,s),e.particles.move.bounce&&e.fn.interact.bounceParticles(a,s)}}},e.fn.particlesDraw=function(){e.canvas.ctx.clearRect(0,0,e.canvas.w,e.canvas.h),e.fn.particlesUpdate();for(var t=0;t<e.particles.array.length;t++){var a=e.particles.array[t];a.draw()}},e.fn.particlesEmpty=function(){e.particles.array=[]},e.fn.particlesRefresh=function(){cancelRequestAnimFrame(e.fn.checkAnimFrame),cancelRequestAnimFrame(e.fn.drawAnimFrame),e.tmp.source_svg=void 0,e.tmp.img_obj=void 0,e.tmp.count_svg=0,e.fn.particlesEmpty(),e.fn.canvasClear(),e.fn.vendors.start()},e.fn.interact.linkParticles=function(t,a){var i=t.x-a.x,r=t.y-a.y,n=Math.sqrt(i*i+r*r);if(n<=e.particles.line_linked.distance){var s=e.particles.line_linked.opacity-n/(1/e.particles.line_linked.opacity)/e.particles.line_linked.distance;if(s>0){var v=e.particles.line_linked.color_rgb_line;e.canvas.ctx.strokeStyle="rgba("+v.r+","+v.g+","+v.b+","+s+")",e.canvas.ctx.lineWidth=e.particles.line_linked.width,e.canvas.ctx.beginPath(),e.canvas.ctx.moveTo(t.x,t.y),e.canvas.ctx.lineTo(a.x,a.y),e.canvas.ctx.stroke(),e.canvas.ctx.closePath()}}},e.fn.interact.attractParticles=function(t,a){var i=t.x-a.x,r=t.y-a.y,n=Math.sqrt(i*i+r*r);if(n<=e.particles.line_linked.distance){var s=i/(e.particles.move.attract.rotateX*1e3),v=r/(e.particles.move.attract.rotateY*1e3);t.vx-=s,t.vy-=v,a.vx+=s,a.vy+=v}},e.fn.interact.bounceParticles=function(t,a){var i=t.x-a.x,r=t.y-a.y,n=Math.sqrt(i*i+r*r),s=t.radius+a.radius;n<=s&&(t.vx=-t.vx,t.vy=-t.vy,a.vx=-a.vx,a.vy=-a.vy)},e.fn.modes.pushParticles=function(t,a){e.tmp.pushing=!0;for(var i=0;i<t;i++)e.particles.array.push(new e.fn.particle(e.particles.color,e.particles.opacity.value,{x:a?a.pos_x:Math.random()*e.canvas.w,y:a?a.pos_y:Math.random()*e.canvas.h})),i==t-1&&(e.particles.move.enable||e.fn.particlesDraw(),e.tmp.pushing=!1)},e.fn.modes.removeParticles=function(t){e.particles.array.splice(0,t),e.particles.move.enable||e.fn.particlesDraw()},e.fn.modes.bubbleParticle=function(t){if(e.interactivity.events.onhover.enable&&y("bubble",e.interactivity.events.onhover.mode)){let m=function(){t.opacity_bubble=t.opacity,t.radius_bubble=t.radius};var g=m,a=t.x-e.interactivity.mouse.pos_x,i=t.y-e.interactivity.mouse.pos_y,r=Math.sqrt(a*a+i*i),n=1-r/e.interactivity.modes.bubble.distance;if(r<=e.interactivity.modes.bubble.distance){if(n>=0&&e.interactivity.status=="mousemove"){if(e.interactivity.modes.bubble.size!=e.particles.size.value)if(e.interactivity.modes.bubble.size>e.particles.size.value){var s=t.radius+e.interactivity.modes.bubble.size*n;s>=0&&(t.radius_bubble=s)}else{var v=t.radius-e.interactivity.modes.bubble.size,s=t.radius-v*n;s>0?t.radius_bubble=s:t.radius_bubble=0}if(e.interactivity.modes.bubble.opacity!=e.particles.opacity.value)if(e.interactivity.modes.bubble.opacity>e.particles.opacity.value){var d=e.interactivity.modes.bubble.opacity*n;d>t.opacity&&d<=e.interactivity.modes.bubble.opacity&&(t.opacity_bubble=d)}else{var d=t.opacity-(e.particles.opacity.value-e.interactivity.modes.bubble.opacity)*n;d<t.opacity&&d>=e.interactivity.modes.bubble.opacity&&(t.opacity_bubble=d)}}}else m();e.interactivity.status=="mouseleave"&&m()}else if(e.interactivity.events.onclick.enable&&y("bubble",e.interactivity.events.onclick.mode)){let m=function(u,M,w,p,b){if(u!=M)if(e.tmp.bubble_duration_end){if(w!=null){var A=p-f*(p-u)/e.interactivity.modes.bubble.duration,z=u-A;x=u+z,b=="size"&&(t.radius_bubble=x),b=="opacity"&&(t.opacity_bubble=x)}}else if(r<=e.interactivity.modes.bubble.distance){if(w!=null)var _=w;else var _=p;if(_!=u){var x=p-f*(p-u)/e.interactivity.modes.bubble.duration;b=="size"&&(t.radius_bubble=x),b=="opacity"&&(t.opacity_bubble=x)}}else b=="size"&&(t.radius_bubble=void 0),b=="opacity"&&(t.opacity_bubble=void 0)};var h=m;if(e.tmp.bubble_clicking){var a=t.x-e.interactivity.mouse.click_pos_x,i=t.y-e.interactivity.mouse.click_pos_y,r=Math.sqrt(a*a+i*i),f=(new Date().getTime()-e.interactivity.mouse.click_time)/1e3;f>e.interactivity.modes.bubble.duration&&(e.tmp.bubble_duration_end=!0),f>e.interactivity.modes.bubble.duration*2&&(e.tmp.bubble_clicking=!1,e.tmp.bubble_duration_end=!1)}e.tmp.bubble_clicking&&(m(e.interactivity.modes.bubble.size,e.particles.size.value,t.radius_bubble,t.radius,"size"),m(e.interactivity.modes.bubble.opacity,e.particles.opacity.value,t.opacity_bubble,t.opacity,"opacity"))}},e.fn.modes.repulseParticle=function(t){if(e.interactivity.events.onhover.enable&&y("repulse",e.interactivity.events.onhover.mode)&&e.interactivity.status=="mousemove"){var a=t.x-e.interactivity.mouse.pos_x,i=t.y-e.interactivity.mouse.pos_y,r=Math.sqrt(a*a+i*i),n={x:a/r,y:i/r},s=e.interactivity.modes.repulse.distance,v=100,d=P(1/s*(-1*Math.pow(r/s,2)+1)*s*v,0,50),f={x:t.x+n.x*d,y:t.y+n.y*d};e.particles.move.out_mode=="bounce"?(f.x-t.radius>0&&f.x+t.radius<e.canvas.w&&(t.x=f.x),f.y-t.radius>0&&f.y+t.radius<e.canvas.h&&(t.y=f.y)):(t.x=f.x,t.y=f.y)}else if(e.interactivity.events.onclick.enable&&y("repulse",e.interactivity.events.onclick.mode))if(e.tmp.repulse_finish||(e.tmp.repulse_count++,e.tmp.repulse_count==e.particles.array.length&&(e.tmp.repulse_finish=!0)),e.tmp.repulse_clicking){let p=function(){var b=Math.atan2(h,g);if(t.vx=u*Math.cos(b),t.vy=u*Math.sin(b),e.particles.move.out_mode=="bounce"){var _={x:t.x+t.vx,y:t.y+t.vy};(_.x+t.radius>e.canvas.w||_.x-t.radius<0)&&(t.vx=-t.vx),(_.y+t.radius>e.canvas.h||_.y-t.radius<0)&&(t.vy=-t.vy)}};var M=p,s=Math.pow(e.interactivity.modes.repulse.distance/6,3),g=e.interactivity.mouse.click_pos_x-t.x,h=e.interactivity.mouse.click_pos_y-t.y,m=g*g+h*h,u=-s/m*1;m<=s&&p()}else e.tmp.repulse_clicking==!1&&(t.vx=t.vx_i,t.vy=t.vy_i)},e.fn.modes.grabParticle=function(t){if(e.interactivity.events.onhover.enable&&e.interactivity.status=="mousemove"){var a=t.x-e.interactivity.mouse.pos_x,i=t.y-e.interactivity.mouse.pos_y,r=Math.sqrt(a*a+i*i);if(r<=e.interactivity.modes.grab.distance){var n=e.interactivity.modes.grab.line_linked.opacity-r/(1/e.interactivity.modes.grab.line_linked.opacity)/e.interactivity.modes.grab.distance;if(n>0){var s=e.particles.line_linked.color_rgb_line;e.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+n+")",e.canvas.ctx.lineWidth=e.particles.line_linked.width,e.canvas.ctx.beginPath(),e.canvas.ctx.moveTo(t.x,t.y),e.canvas.ctx.lineTo(e.interactivity.mouse.pos_x,e.interactivity.mouse.pos_y),e.canvas.ctx.stroke(),e.canvas.ctx.closePath()}}}},e.fn.vendors.eventsListeners=function(){e.interactivity.detect_on=="window"?e.interactivity.el=window:e.interactivity.el=e.canvas.el,(e.interactivity.events.onhover.enable||e.interactivity.events.onclick.enable)&&(e.interactivity.el.addEventListener("mousemove",function(t){if(e.interactivity.el==window)var a=t.clientX,i=t.clientY;else var a=t.offsetX||t.clientX,i=t.offsetY||t.clientY;e.interactivity.mouse.pos_x=a,e.interactivity.mouse.pos_y=i,e.tmp.retina&&(e.interactivity.mouse.pos_x*=e.canvas.pxratio,e.interactivity.mouse.pos_y*=e.canvas.pxratio),e.interactivity.status="mousemove"}),e.interactivity.el.addEventListener("mouseleave",function(t){e.interactivity.mouse.pos_x=null,e.interactivity.mouse.pos_y=null,e.interactivity.status="mouseleave"})),e.interactivity.events.onclick.enable&&e.interactivity.el.addEventListener("click",function(){if(e.interactivity.mouse.click_pos_x=e.interactivity.mouse.pos_x,e.interactivity.mouse.click_pos_y=e.interactivity.mouse.pos_y,e.interactivity.mouse.click_time=new Date().getTime(),e.interactivity.events.onclick.enable)switch(e.interactivity.events.onclick.mode){case"push":e.particles.move.enable||e.interactivity.modes.push.particles_nb==1?e.fn.modes.pushParticles(e.interactivity.modes.push.particles_nb,e.interactivity.mouse):e.interactivity.modes.push.particles_nb>1&&e.fn.modes.pushParticles(e.interactivity.modes.push.particles_nb);break;case"remove":e.fn.modes.removeParticles(e.interactivity.modes.remove.particles_nb);break;case"bubble":e.tmp.bubble_clicking=!0;break;case"repulse":e.tmp.repulse_clicking=!0,e.tmp.repulse_count=0,e.tmp.repulse_finish=!1,setTimeout(function(){e.tmp.repulse_clicking=!1},e.interactivity.modes.repulse.duration*1e3);break}})},e.fn.vendors.densityAutoParticles=function(){if(e.particles.number.density.enable){var t=e.canvas.el.width*e.canvas.el.height/1e3;e.tmp.retina&&(t=t/(e.canvas.pxratio*2));var a=t*e.particles.number.value/e.particles.number.density.value_area,i=e.particles.array.length-a;i<0?e.fn.modes.pushParticles(Math.abs(i)):e.fn.modes.removeParticles(i)}},e.fn.vendors.checkOverlap=function(t,a){for(var i=0;i<e.particles.array.length;i++){var r=e.particles.array[i],n=t.x-r.x,s=t.y-r.y,v=Math.sqrt(n*n+s*s);v<=t.radius+r.radius&&(t.x=a?a.x:Math.random()*e.canvas.w,t.y=a?a.y:Math.random()*e.canvas.h,e.fn.vendors.checkOverlap(t))}},e.fn.vendors.createSvgImg=function(t){var a=e.tmp.source_svg,i=/#([0-9A-F]{3,6})/gi,r=a.replace(i,function(f,g,h,m){if(t.color.rgb)var u="rgba("+t.color.rgb.r+","+t.color.rgb.g+","+t.color.rgb.b+","+t.opacity+")";else var u="hsla("+t.color.hsl.h+","+t.color.hsl.s+"%,"+t.color.hsl.l+"%,"+t.opacity+")";return u}),n=new Blob([r],{type:"image/svg+xml;charset=utf-8"}),s=window.URL||window.webkitURL||window,v=s.createObjectURL(n),d=new Image;d.addEventListener("load",function(){t.img.obj=d,t.img.loaded=!0,s.revokeObjectURL(v),e.tmp.count_svg++}),d.src=v},e.fn.vendors.destroypJS=function(){cancelAnimationFrame(e.fn.drawAnimFrame),o.remove(),pJSDom=null},e.fn.vendors.drawShape=function(t,a,i,r,n,s){var v=n*s,d=n/s,f=180*(d-2)/d,g=Math.PI-Math.PI*f/180;t.save(),t.beginPath(),t.translate(a,i),t.moveTo(0,0);for(var h=0;h<v;h++)t.lineTo(r,0),t.translate(r,0),t.rotate(g);t.fill(),t.restore()},e.fn.vendors.exportImg=function(){window.open(e.canvas.el.toDataURL("image/png"),"_blank")},e.fn.vendors.loadImg=function(t){if(e.tmp.img_error=void 0,e.particles.shape.image.src!="")if(t=="svg"){var a=new XMLHttpRequest;a.open("GET",e.particles.shape.image.src),a.onreadystatechange=function(r){a.readyState==4&&(a.status==200?(e.tmp.source_svg=r.currentTarget.response,e.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),e.tmp.img_error=!0))},a.send()}else{var i=new Image;i.addEventListener("load",function(){e.tmp.img_obj=i,e.fn.vendors.checkBeforeDraw()}),i.src=e.particles.shape.image.src}else console.log("Error pJS - No image.src"),e.tmp.img_error=!0},e.fn.vendors.draw=function(){e.particles.shape.type=="image"?e.tmp.img_type=="svg"?e.tmp.count_svg>=e.particles.number.value?(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame)):e.tmp.img_error||(e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw)):e.tmp.img_obj!=null?(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame)):e.tmp.img_error||(e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw)):(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame))},e.fn.vendors.checkBeforeDraw=function(){e.particles.shape.type=="image"?e.tmp.img_type=="svg"&&e.tmp.source_svg==null?e.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(e.tmp.checkAnimFrame),e.tmp.img_error||(e.fn.vendors.init(),e.fn.vendors.draw())):(e.fn.vendors.init(),e.fn.vendors.draw())},e.fn.vendors.init=function(){e.fn.canvasInit(),e.fn.canvasSize(),e.fn.canvasPaint(),e.fn.particlesCreate(),e.fn.vendors.densityAutoParticles(),e.particles.line_linked.color_rgb_line=k(e.particles.line_linked.color)},e.fn.vendors.start=function(){y("image",e.particles.shape.type)?(e.tmp.img_type=e.particles.shape.image.src.substr(e.particles.shape.image.src.length-3),e.fn.vendors.loadImg(e.tmp.img_type)):e.fn.vendors.checkBeforeDraw()},e.fn.vendors.eventsListeners(),e.fn.vendors.start()};Object.deepExtend=function c(l,o){for(var e in o)o[e]&&o[e].constructor&&o[e].constructor===Object?(l[e]=l[e]||{},c(l[e],o[e])):l[e]=o[e];return l};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(c){window.setTimeout(c,1e3/60)}}();window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();function k(c){var l=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;c=c.replace(l,function(e,t,a,i){return t+t+a+a+i+i});var o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}function P(c,l,o){return Math.min(Math.max(c,l),o)}function y(c,l){return l.indexOf(c)>-1}window.pJSDom=[];window.particlesJS=function(c,l){typeof c!="string"&&(l=c,c="particles-js"),c||(c="particles-js");var o=document.getElementById(c),e="particles-js-canvas-el",t=o.getElementsByClassName(e);if(t.length)for(;t.length>0;)o.removeChild(t[0]);var a=document.createElement("canvas");a.className=e,a.style.width="100%",a.style.height="100%";var i=document.getElementById(c).appendChild(a);i!=null&&pJSDom.push(new F(c,l))};window.particlesJS.load=function(c,l,o){var e=new XMLHttpRequest;e.open("GET",l),e.onreadystatechange=function(t){if(e.readyState==4)if(e.status==200){var a=JSON.parse(t.currentTarget.response);window.particlesJS(c,a),o&&o()}else console.log("Error pJS - XMLHttpRequest status: "+e.status),console.log("Error pJS - File config not found")},e.send()};particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});
