//alert('hey');
//fixed top nav
var topNav = document.getElementById('topNav');
window.onscroll = function(){
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
// 	//add or minus buttons
// 	var up =true;
// 	var value = 0;
// 	var total = 30;
// 	var increment = 1;

// 	var div_counter=document.getElementById('Minu_Plus');
// 	div_counter.innerHTML +='<span>'+increment+'</span>'
// function PlusQnty(){
// 	if(up== true && value <=total){
// 		div_counter.innerHTML +=value+=increment;
// 		if(value == total){
// 			up = false;
// 		}
// 	}
// }
// function MinusQnty(){
// 	document.getElementById('Minu_Plus').innerHTML+=--min;
// 	console.log(addNumber);

// }
