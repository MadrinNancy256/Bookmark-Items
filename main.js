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
	var FooterNav1 = document.getElementById('DisplayWhenImgClicked');
	var FooterNav2 = document.getElementById('DisplayedAtHome');
	function OpenModal(img){
			//console.log('pleaseWait');
			CounterParent2.appendChild(span);
			FooterNav1.style.display = 'block';
			FooterNav1.style.display = 'flex';
			FooterNav1.style.flex = 1;
			FooterNav2.style.display = 'none';		
				modal_div.style.display = 'block';	
				Descr_div.style.display = 'block';	
				ModalImg.src= img.src; 		
				imageAlt.innerHTML = img.alt;
				ImagName.innerHTML ='<h3>Image Description of '+ img.alt + '</h3>';
				addQntyName.innerHTML = '<h4>Add Quantity for: '+img.alt;+ '</h4>';
			}
	//Close div when an imagee is clicked;
	function CloseDiv(){
		modal_div.style.display = 'none';
		Descr_div.style.display = 'none';
		FooterNav2.style.display = 'block';
			FooterNav.style.display = 'none';

	}
//Category button whn clicked
var asideNav = document.getElementById('Navigation');
var container = document.getElementById('container');
function VerticalNav(){
	//console.log('hey');	
	if(asideNav.style.display ==='none'){
		asideNav.style.width = '300px';
		asideNav.style.display = 'block';
		container.style.marginLeft = '300px';
	}else{
		asideNav.style.width = '0px';
		asideNav.style.display = 'none';
		container.style.marginLeft = '0px';
	}
}
//ContainerMarginBack
function ContainerMarginBack(){
	asideNav.style.width = '0px';
	asideNav.style.display = 'none';
	container.style.marginLeft = '0px';
}
var num =0;
var added = document.getElementById('Minus_Plus');
added.innerHTML = 1;
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
//items in Cart
// Items_in_cart(AddItemsToCart, false);
//grab values of the items when "add item to cart button is clicked";
var CounterParent1 = document.getElementById('Home_ViewCart1');
var CounterParent2 = document.getElementById('Home_ViewCart2');
	var span = document.createElement('span');
	span.setAttribute('class','Counter');
	CounterParent1.appendChild(span);
	span.innerHTML = 1;
var AddToCart = document.getElementById('AddToCart');
var qntyValue = document.getElementById('Minus_Plus');
var Cart_img = document.getElementById('Cart_img');
var Cart_img_title = document.getElementById('Title');
var Cart_img_price = document.getElementById('Price');
var Cart_img_qnty = document.getElementById('Quantities');
var currency = '$';
var price = 2.5;
AddToCart.addEventListener('click', AddItemsToCart); function AddItemsToCart(){
	if(added.innerHTML == 0){
		alert('Cant Add zero item');
		return false;
	}
	console.log('Bitch!,Grab values insteady!');
	console.log(added.innerHTML);
	console.log(ModalImg.src);
	 console.log(ImagName.innerHTML);
	 var price_qnty = price*added.innerHTML;
	console.log(price_qnty);
	var itemsinStorage={
		Itemimgsrc :ModalImg.src,
		Itemdescript:ImagName.innerHTML,
		Itemqnty:added.innerHTML,
		Itemprice:price_qnty
	}
	if(localStorage.getItem('CartItemsInStorage')== null){
		var CartItemsInStorage = [];
		CartItemsInStorage.push(itemsinStorage);
		localStorage.setItem('CartItemsInStorage', JSON.stringify(CartItemsInStorage));
	}else{
		var CartItemsInStorage = JSON.parse(localStorage.getItem('CartItemsInStorage'));
		CartItemsInStorage.push(itemsinStorage);
		localStorage.setItem('CartItemsInStorage', JSON.stringify(CartItemsInStorage));
	}
	fetchCartItems();
	setTimeout(function(){
		alert(ImagName.innerHTML + ' adde to Cart,thanks!');
	}, 3000);
};
var Results = document.getElementById('Results');
function deleteItem(Flowerimg){
	// console.log(Flowerimg,FlowerDesc,FlowerPrice,FlowerQuanty);
	var CartItemsInStorage = JSON.parse(localStorage.getItem('CartItemsInStorage'));
			CartItemsInStorage.splice(this.index, 1);
	
	localStorage.setItem('CartItemsInStorage', JSON.stringify(CartItemsInStorage));
	fetchCartItems();
}
// function to display the Cart Items
	// Edit Items in the function
function fetchCartItems(){
	var CartItemsInStorage = JSON.parse(localStorage.getItem('CartItemsInStorage'));
	var DisplayCartItems = document.getElementById('container3');
	//console.log(CartItemsInStorage);
	// CartItemsDisplayedIn Cart
	DisplayCartItems.innerHTML = '';
	for(var i=0;i<CartItemsInStorage.length;i++){
		var Flowerimg = CartItemsInStorage[i].Itemimgsrc;
		var FlowerDesc = CartItemsInStorage[i].Itemdescript;
		var FlowerQuanty = CartItemsInStorage[i].Itemqnty;
		var FlowerPrice = CartItemsInStorage[i].Itemprice;
		 var output =
		 '<div class="box_selection" id="TickMark">'+
		 '<input type="checkbox" value="items">'+'</div>'+
		 '<div id="Results" class="Results">'+
		'<div class="image_div">'+
		'<img src="'+Flowerimg +'" alt="flower"></div>'+
		'<div class="ImageTitle">'+
		'<div class="title">'
		+'<h4>' + FlowerDesc + '</h4><hr></div>' +
		'<div class="price"><h4>Price:</h4>'+
		'<input type="text" class="box" name="Price" id="Price" value="'+FlowerPrice +'"></h2></div><hr>'+
		'<div class="Quantities">'+
	'<h4>Quantity:</h4><h3 class="box">X'+ FlowerQuanty+'</h3></div>'+'<a href="#" onclick="deleteItem(\''+Flowerimg+'\')" class="box">Delete</a>'
	+'</div></div>';
		
		DisplayCartItems.innerHTML += output;
	}
	var count = CartItemsInStorage.length;
	console.log(count);
	var arr = document.getElementsByName('Price');
	var tot = 0;
	for(var i =0; i<arr.length;i++){
		if(parseFloat(arr[i].value)){
			tot+=parseFloat(arr[i].value);
		}
	}
	console.log(tot);
}
	
// function showMark(){
// 	console.log('clicked');
// 	if(Mark.style.display =='none'){
// 	Mark.style.display= 'block';
// 	}else{
// 		Mark.style.display= 'none';
// 	}
// }
function DisplayEdtOptions(){
	// console.log('clicked');
	var Cont = document.getElementById('container3');
	var Mark = document.getElementById('TickMark');
	var EditOptions = document.getElementById('Nav12');
	EditOptions.style.display= 'block';
	EditOptions.style.display= 'flex';
	Mark.style.display = 'block';
	// Cont.className.replace('cart_container' , 'Grid_cont');
	// Cont.className = "Grid_cont";
	// Results.className.replace('Results', '');
	// Results.className = "";	
	}
// <span class="Counter"></span>
// function Items_in_cart(){
// 	DisplayCartItems.style.display = 'block';
// }
//Account button settings
function OpenAccountSettings(){
	container.innerHTML = '<div class="emptyCart"><h1> Account settings in process , Please wait thanks!</h1>'+ '<a href="index.html">BackToHome</a>'
	+'</div>';
}
