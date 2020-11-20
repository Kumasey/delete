let productsGallery = document.querySelector(".products-gallery")


let bill = []
Promise.all([
	fetch('https://www.parsehub.com/api/v2/projects/tmqFkbBX7hDj/last_ready_run/data?api_key=t3TaKT0tiiTo&format=json'),
    fetch('https://www.parsehub.com/api/v2/projects/tfjTqAA9qRFr/last_ready_run/data?api_key=t3TaKT0tiiTo&format=json'),
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (datas) {
    bill = datas[0].products.concat(datas[1].selection1)
    let tunji = {name :"tunji"}
    bill.concat(tunji)
   return console.log(bill)
}).then(function(){
    displayMen(bill)
}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});


function displayMen(bill){
    productsGallery.innerHTML = "";
    bill.forEach((b)=>{
        let{name, logo, img, url} = b;

        let productPack = document.createElement("div");
        productPack.classList.add("product-pack")

        productPack.innerHTML = `<a href="${url}">
        <div id="inputs">
        <input type="checkbox" name="" id="compare-input">
        <input type="checkbox" id="like-input">

    </div>
    
        <img src="${img}" alt="top-product" class="product-img">
        
    <h3 class="product-name">${name}</h3>
    <h5 class="product-price">New Price</h5>
    <h5 class="product-old-price">Old Price</h5>
    <h5 class="product-discount">discount</h5>
    <img src="${logo}" alt="vendor-logo" class="product-logo"></a>
        `
        productsGallery.appendChild(productPack)
    })


    console.log(bill)
}

console.log("tujni")