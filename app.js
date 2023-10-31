const searchInput = document.querySelector("#search-input");
const products = document.querySelectorAll(".product-item");

function keyHandler(event){

const searchValue = event.target.value.toLowerCase().trim();

products.forEach ((product)=>{
   const productName = product.children[1].innerText.toLowerCase();
  
   if(productName.includes(searchValue)){
    product.style.display = "block";
   }else{
    product.style.display = "none";
   }
})

}


searchInput.addEventListener("keyup" , keyHandler);

