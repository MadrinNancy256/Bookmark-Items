//alert('hey');
//fixed top nav
var topNav = document.getElementById('topNav');
// var fadespeed = 200, fadeTo = 0.5, topDistance = 30;
// var inside = false;
window.onscroll = function(){
	//var position = window.onscrollTop();
	if(window.pageYOffset>100){
		topNav.style.position = 'fixed';
	}

}
//HomeBtn clicked 'show and hide Nav'
var HomeBtn = document.getElementById('button');
HomeBtn.addEventListener('click', function(){
	//console.log('tsup');
	var navigation_items = document.getElementById('Navigation');
	if(navigation_items.style.display ==='none'){
	navigation_items.style.display = 'block';

	}else{
		navigation_items.style.display = 'none';
		navigation_items.className = 'Nav_links';
	}
});
//body images loadded;

var imageFolder  = 'flowers';
	var flowerNames = ['flowr4', 'flowr2', 'flowr3','flower1', 'flowr5', 'flowr6', 'flowr7' , 'flowr8' , 'flowr9', 'flowr10', 'flowr11' , 'flowr12', 'flow13', 'flowr14', 'flowr15', 'flowr16' , 'flowr18' ,'flowr19', 'flowr20'];
	for(var i=0; i<flowerNames.length;i++){
	var containerdiv =document.getElementById('Container1');
	var img = document.createElement('img');
	img.setAttribute('class' ,'images SlidesImages');
	img.setAttribute('alt' , flowerNames[i]);
	img.setAttribute('onclick' ,'OpenModal(this)');
	containerdiv.appendChild(img); 
		//console.log(flowerNames[i]);
		//console.log(img.src);
		containerdiv.src += img.src = 'flowers/'+flowerNames[i]+'.jpg';
	}	
	function OpenModal(img){
		//console.log('pleaseWait');
		var modal_div = document.getElementById('Modal');
		modal_div.style.display = 'block';
		var Descr_div = document.getElementById('details');
		Descr_div.style.display = 'block';
		var ModalImg = document.getElementById('modal_img');
		ModalImg.src= img.src; 
		var imageAlt = document.getElementById('ImgAlt');
		imageAlt.innerHTML = img.alt;
		document.getElementById('FlowerName').innerHTML+= img.alt;
		//img = SlideShow(this);

	}
	//Close div when an imagee is clicked;
	function CloseDiv(){
		var modal_div = document.getElementById('Modal');
		modal_div.style.display = 'none';
		var Descr_div = document.getElementById('details');
		Descr_div.style.display = 'none';
	}
//Category button whn clicked
var asideNav = document.getElementById('Navigation');
var crossX = document.getElementById('times');
function VerticalNav(){
	console.log('hey');
	crossX.style.display = 'block';
	asideNav.className.replace('Nav_links' , 'verticalnav');
	asideNav.className = "verticalnav";
	asideNav.style.width = '200px';
	asideNav.style.display = 'block';
	document.getElementById('container').style.marginLeft = '200px';
}
//ContainerMarginBack
function ContainerMarginBack(){
	// 	asideNav.className.replace('verticalnav' , 'Nav_links');
	// asideNav.className = "Nav_links";
	asideNav.style.width = '0px';
	asideNav.style.display = 'none';
	document.getElementById('container').style.marginLeft = '0px';
}
//grab values of the items when "add item to cart button is clicked";
