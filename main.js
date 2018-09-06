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
	var containerdiv =document.getElementById('Container1');	
	for(var i=0; i<flowerNames.length;i++){
		//console.log(flowerNames[i]);
		//console.log(img.src);
		var img = document.createElement('img');
	img.setAttribute('class' ,'images SlidesImages');
	img.setAttribute('alt' , flowerNames[i]);
	img.setAttribute('onclick' ,'OpenModal(this)');
		containerdiv.appendChild(img); 
		containerdiv.src += img.src = 'flowers/'+flowerNames[i]+'.jpg';
	}	
	var imageAlt = document.getElementById('ImgAlt');
	var ModalImg = document.getElementById('modal_img');
	var Descr_div = document.getElementById('details');
	var modal_div = document.getElementById('Modal');
	var ImagName = document.getElementById('FlowerName');
	var addQntyName = document.getElementById('addQntyName');
	function OpenModal(img){
		//console.log('pleaseWait');		
		modal_div.style.display = 'block';		
		Descr_div.style.display = 'block';		
		ModalImg.src= img.src; 		
		imageAlt.innerHTML = img.alt;
		ImagName.innerHTML ='<h3>Image Description of '+ img.alt + '</h3>';
		addQntyName.innerHTML = '<h4>Add Quantity for: '+img.alt;+ '</h4>';
		//img = SlideShow(this);
	}
	//Close div when an imagee is clicked;
	function CloseDiv(){
		modal_div.style.display = 'none';
		Descr_div.style.display = 'none';
	}
//Category button whn clicked
var asideNav = document.getElementById('Navigation');
var crossX = document.getElementById('times');
var container = document.getElementById('container');
function VerticalNav(){
	console.log('hey');
	crossX.style.display = 'block';
	asideNav.className.replace('Nav_links' , 'verticalnav');
	asideNav.className = "verticalnav";
	asideNav.style.width = '200px';
	asideNav.style.display = 'block';
	container.style.marginLeft = '200px';
}
//ContainerMarginBack
function ContainerMarginBack(){
	// 	asideNav.className.replace('verticalnav' , 'Nav_links');
	// asideNav.className = "Nav_links";
	asideNav.style.width = '0px';
	asideNav.style.display = 'none';
	container.style.marginLeft = '0px';
}
//items in Cart 
function Items_in_cart(){
	//console.log('oops');
	container.innerHTML = '';
	if(container.innerHTML == ""){
	container.innerHTML = '<div class="emptyCart"><h1> Ooopssss!!The Cart is Empty!Please Go Shopping</h1>'+ '<a href="index.html">Go Shopping!&#x1f6d2;</a>'
	+'</div>';
    }else{
    	container.innerHTML= '<div>Hey</div>';
    }
}
//Account button settings
function OpenAccountSettings(){
	container.innerHTML = '<div class="emptyCart"><h1> Account settings in process , Please wait thanks!</h1>'+ '<a href="index.html">BackToHome</a>'
	+'</div>';
}
var num =0;
var added = document.getElementById('Minus_Plus');
added.innerHTML = num++;
var plus = document.getElementById('PlusQnty').addEventListener('click', function(){
	added.innerHTML = num++;	
});
var plus = document.getElementById('MinusQnty').addEventListener('click', function(){
	if(added.innerHTML <= 1){
		//added.innerHTML = 1;
		return alert('We cant Deliver lessthan one Item!');
		
	}else if(num > 1){
		added.innerHTML = --num;
	}
	
});
//grab values of the items when "add item to cart button is clicked";
var AddToCart = document.getElementById('AddToCart');
// var qntyValue = document.getElementById('Minus_Plus');
AddToCart.addEventListener('click', function(){
	if(added.innerHTML == 0){
		alert('Cant Add zero item');
		return false;
	}
	console.log('Bitch!,Grab values insteady!');
	console.log(added.innerHTML);
	console.log(ModalImg.src);

	console.log(ImagName.innerHTML);
	console.log(img.alt );
	setTimeout(function(){
		alert(ImagName.innerHTML + ' adde to Cart,thanks!');
	}, 3000);
});
