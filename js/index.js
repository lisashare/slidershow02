//ES5
function Slider(id){
	//属性
	this.ele = $(id);
	this.ullis = $get($get(this.ele,"ul")[0],"li");
	//获取图片li的数量创建小圆点
	this.num = this.ullis.length;
	this.ollis = this.createElement();
	this.indexX = 0;
	this.slid();
	this.ltBtn = $("ltBtn");
	this.rtBtn = $("rtBtn");
	this.addEvent();
	this.timer = null;
	this.autoPlay();
}
//原型方法
Slider.prototype = {
	createElement : function(){
		var ol = $create("ol"); 
		var arrLi = [];  //数组
		for(var i = 0;i < this.num;i++){
			var li = $create("li");
			ol.appendChild(li);
			arrLi.push(li);
		}
		this.ele.appendChild(ol);
		//左右按钮
		var leftSpan = $create("span");
		leftSpan.innerHTML = '&lt;';
		leftSpan.id = "ltBtn";
		this.ele.appendChild(leftSpan);
		
		var rightSpan = $create("span");
		rightSpan.innerHTML = '&gt;';
		rightSpan.id = "rtBtn";
		this.ele.appendChild(rightSpan);
		//文字背景
		var oDiv = $create();
		oDiv.id = 'msg';
		this.ele.appendChild(oDiv);
		return arrLi;
	},
	slid : function(){
		//排他思想
		for(var i = 0;i < this.num;i++){
			this.ullis[i].style.display = "none";
			this.ollis[i].style.backgroundColor = "red";
		}
		this.ullis[this.indexX].style.display = 'block';
		this.ollis[this.indexX].style.backgroundColor = 'blue';
		this.div = $("msg");
		this.div.innerHTML = this.ullis[this.indexX].firstElementChild.firstElementChild.alt;
	},
	addEvent : function(){
		//左右按钮点击事件
		this.ltBtn.onclick = function(){
			this.indexX --;
			if(this.indexX == -1){
				this.indexX = this.num -1;
			}
			this.slid();
		}.bind(this);
		this.rtBtn.onclick = function(){
			this.indexX ++;
			if(this.indexX == this.num){
				this.indexX = 0;
			}
			this.indexX = 0;
		}.bind(this);
		//小圆点移入事件
		for(var i = 0;i < this.num;i++){
			this.ollis[i].index = i;
			var that = this;
			this.ollis[i].onmouseenter = function(){
				that.indexX = this.index;
				that.slid();
			}
		}
	},
	autoPlay : function(){
		this.timer = setInterval(function(){
			this.indexX ++;
			if(this.indexX == this.num){
				this.indexX = 0;
			}
			this.slid();
		}.bind(this),3000)
		this.ele.onmouseenter = function(){
			clearInterval(this.timer);
		}.bind(this)
		this.ele.onmouseleave = function(){
			this.autoPlay();
		}.bind(this);
	}
}
//ES6