//获取id的封装函数
function $(id){
	return document.getElementById(id);
}
//返回该元素下带有指定标签名的对象的集合
function $get(ele,tagName){
	if(typeof ele === 'string'&& $(ele)){
		return $(ele).getElementsByTagName(tagName);
	}else if(typeof ele === 'object'){
		return ele.getElementsByTagName(tagName);
	}
}
//通过标签名创建标签
function $create(tagName){
	return document.createElement(tagName);
}
