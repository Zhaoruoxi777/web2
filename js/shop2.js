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

	//放大镜
  		var box = document.getElementById("box");
  		var img1 = document.getElementById("img1");
  		var slider = document.getElementById("slider");
  		var img2 = document.getElementById("img2");
  		var Bimg = document.getElementById("Bimg");
  		//给左侧的小图随鼠标移动移出移入事件
  		img1.onmouseover = function(){
  			slider.style.display = "block";
  			img2.style.display = "block";
  		}
  		img1.onmouseout = function(){
  			slider.style.display = "none";
  			img2.style.display = "none";
  		}
  		img1.onmousemove = function(ev){
  			var ev = ev||window.event;
  			var left = ev.clientX -box.offsetLeft - slider.offsetWidth/2;
  			var top = ev.clientY - box.offsetTop - slider.offsetHeight/2;
  			var maxleft = img1.offsetWidth - slider.offsetWidth;
  			var maxtop = img1.offsetHeight - slider.offsetHeight;

  			left = left>maxleft ? maxleft : left<0 ? 0 : left;
  			top = top>maxtop ? maxtop : top<0 ? 0 : top;

  			//设置放大镜的位置
  			slider.style.left = left + "px";
  			slider.style.top = top + "px";

  			//根据左侧的放大镜的位置去计算右侧大图移动的比例
  			var w = left/maxleft;
  			var h = top/maxtop;

  			//计算大图的最大的移动范围
  			var BimgLeft = img2.offsetWidth - Bimg.offsetWidth;
  			var BimgTop = img2.offsetHeight - Bimg.offsetHeight;

  			//计算出来大图的移动的距离，设置位置
  			Bimg.style.left = w* BimgLeft + "px";
  			Bimg.style.top = h*BimgTop + "px";

  		}		



  	var num = document.getElementById("num");
  	var plus = document.getElementsByClassName("plus")[0];
	// 增加数量
	function add(){
		// var num = document.getElementById("num");
		if (num.value<5) {
			num.value++;
			plus.style.cursor = 'pointer';
		}
		else{
			plus.style.cursor = 'not-allowed';
		}		
	}
	plus.onmouseover = function(){
		if (num.value<5) {
			plus.style.cursor = 'pointer';
		}
		else{
			plus.style.cursor = 'not-allowed';
		}	
	}

	//减少数量
	var minus = document.getElementsByClassName('minus')[0];
	minus.onclick = function jianshao(){
		if(num.value>1){
			num.value--;
			minus.style.cursor = 'pointer';
		}
		else{
			minus.style.cursor =  'not-allowed';
		}
	}
	minus.onmouseover = function(){
		if(num.value>1){
			minus.style.cursor = 'pointer';
		}
		else{
			minus.style.cursor =  'not-allowed';
		}
	}

	//更换图片
	var bimg = document.getElementsByClassName('bimg')[0];
	var simg1 = document.getElementById('simg1');
	var simg2 = document.getElementById('simg2');
	var Bimg = document.getElementById('Bimg');
	simg1.onclick = function(){
		bimg.src = '../img/pp0.jpeg';
		Bimg.src = '../img/pp0.jpeg';
		simg1.style.border = '2px solid #ff4d04';
		simg2.style.border = 0;
	}
	simg2.onclick = function(){
		bimg.src = '../img/pp1.jpeg';
		Bimg.src = '../img/pp1.jpeg';
		simg2.style.border = '2px solid #ff4d04';
		simg1.style.border = 0;
	}

	//更换容量
	// background: url(../img/duigou.png) no-repeat right bottom;
	var choose1 = document.getElementsByClassName('choose1')[0];
	var choose2 = document.getElementsByClassName('choose2')[0];
	var rl = document.getElementById('rl');
	choose1.onclick = function(){
		choose1.style.border = '1px solid #fe0e4e';
		choose1.style.background = 'url(../img/duigou.png) no-repeat right bottom';
		choose2.style.border = 0;
		choose2.style.background = 0;
		rl.innerHTML = ' "150ml" ';
	}
	choose2.onclick = function(){
		choose2.style.border = '1px solid #fe0e4e';
		choose2.style.background = 'url(../img/duigou.png) no-repeat right bottom';
		choose1.style.border = 0;
		choose1.style.background = 0;
		rl.innerHTML = ' "200ml" ';
	}


	//加入购物车
	var jrgwc = document.getElementById('jrgwc');
	var background = document.getElementById('background');
	var shop = document.getElementById('shop');
	var close = document.getElementById('close');
	var go = document.getElementById('go');
	jrgwc.onclick = function(){
		background.style.display = 'block';
		shop.style.display = 'block';
	}
	close.onclick = function(){
		background.style.display = 'none';
		shop.style.display = 'none';	
	}
	go.onclick = function(){
		background.style.display = 'none';
		shop.style.display = 'none';
	}