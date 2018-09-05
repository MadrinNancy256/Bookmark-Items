var imageFolder  = 'flowers';
	var flowerNames = ['flowr4', 'flowr2', 'flowr3','flower1', 'flowr5', 'flowr6', 'flowr7' , 'flowr8' , 'flowr9', 'flowr10', 'flowr11'];
	var flowerAlts  = ['Yellow' , 'Red' , 'Orange' , 'Blue' , 'White' , 'Black' , 'Pink' , 'Purple', 'Green' , 'Violet' , 'Daffodils'];
	for(var i=0; i<flowerNames.length;i++){
	var containerdiv =document.getElementById('Container1');
	var img = document.createElement('img');
	img.setAttribute('class' ,'images');
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

	}