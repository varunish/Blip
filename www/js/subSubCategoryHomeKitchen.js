optionFurniture = document.getElementById('optionFurniture')
optionFurniture.addEventListener('click', function(){
	window.location.assign('showProducts.html?city=furniture')
})

optionDiningAppliances = document.getElementById('optionDiningAppliances')
optionDiningAppliances.addEventListener('click', function(){
	window.location.assign('showProducts.html?city=dining & appliances')
})

optionHomeFurnishing = document.getElementById('optionHomeFurnishing')
optionHomeFurnishing.addEventListener('click', function(){
	window.location.assign('showProducts.html?city=home furnishing')
})
