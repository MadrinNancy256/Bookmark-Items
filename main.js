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
	var flowerAlts  = ['Yellow' , 'Red' , 'Orange' , 'Blue' , 'White' , 'Black' , 'Pink' , 'Purple', 'Green' , 'Violet' , 'Daffodils'];
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
		var ModalImg = document.getElementById('modal_img');
		ModalImg.src= img.src; 
		var imageAlt = document.getElementById('ImgAlt');
		imageAlt.innerHTML = img.alt;
		document.getElementById('FlowerName').innerHTML+= img.alt;
		//img = SlideShow(this);

	}
	// var indexSlide = 1;
	// 	SlideShow(indexSlide);
	// 	function PlusSlides(n){
	// 		SlideShow(indexSlide+=n);
	// 	}
	// 	function SlideShow(n){
	// 		var imageSlides = document.getElementsByClassName('images');
	// 		var i , pos =0;
	// 		if(n>imageSlides.length){
	// 			indexSlide =1;
	// 		}else if(n<1){
	// 			indexSlide = imageSlides.length;
	// 		}
	// 		for(i=0;i<imageSlides.length;i++){
	// 			imageSlides[i].style.display = '';
	// 		}
	// 		imageSlides[indexSlide-1].style.display = 'block';
	// 	}