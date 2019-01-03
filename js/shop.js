window.onload = function(){
	var cover =document.getElementsByClassName('cover')[0];
	window.onscroll = function() {
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = 'fixed';
		}
		else{
			cover.style.position = 'static';
		}
	}
}
//轮播图
		var box = document.getElementById('lbt');
		var oNavlist = document.getElementById('sz').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 1;
		var timer;
		var isMoving = false;
		box.onmouseover = function(){
			animate(left,{opacity:80})
			animate(right,{opacity:80})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			(function(i){
				oNavlist[i].onclick = function(){
					index = i+1;
					navmove();
					animate(slider,{left:-800*index});
				}
			})(i);
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = '-6400px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index > 6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[5].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);

	// animate.js	
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

		//公告滚动
		var ad =document.getElementById('ad');
        var ad1 = document.getElementById('ad1');
        var ad2 = document.getElementById('ad2');
        ad2.innerHTML=ad1.innerHTML;
        function scrollUp(){
            if(ad.scrollTop>=ad1.offsetHeight){
                ad.scrollTop=0;
            }else{
                ad.scrollTop++;
            }
        }                
        var time = 25;
        var mytimer=setInterval(scrollUp,time);
        ad.onmouseover=function(){
            clearInterval(mytimer);
        }
        ad.onmouseout=function(){
            mytimer=setInterval(scrollUp,time);
        }



        //悬浮窗
function openNav1() {
    document.getElementById("mySidenav1").style.width = "120px";
}
function closeNav1() {
    document.getElementById("mySidenav1").style.width = "43px";
}
function openNav4() {
    document.getElementById("mySidenav4").style.width = "120px";}
function closeNav4() {
    document.getElementById("mySidenav4").style.width = "43px";
}
function openNav2() {
    document.getElementById("mySidenav2").style.right="0";
}
function closeNav2() {
    document.getElementById("mySidenav2").style.right= "-80px";
}
function openNav3() {
    document.getElementById("mySidenav3").style.width = "120px";
    document.getElementById("ewm1").style.display="none";
    document.getElementById("ewm2").style.display="block";
}
function closeNav3() {
    document.getElementById("mySidenav3").style.width = "43px";
    document.getElementById("ewm1").style.display="block";
    document.getElementById("ewm2").style.display="none";
}

        //充值功能

        var select =document.getElementById("sel");
        var price = document.getElementById("price");
        select.setAttribute("onchange","change()");
        function change(){
        	price.innerHTML = "¥ "+select.value;
        }



