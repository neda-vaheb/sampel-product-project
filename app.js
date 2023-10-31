const searchInput = document.querySelector("#search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const searchPriceButton = document.getElementById("search-price").querySelector("button");

const selectedButtton=(filter)=>{

    buttons.forEach((button)=>{
        const filterBtn = button.dataset.filter;
        (filter === filterBtn) ? button.classList.add("selected") : button.classList.remove("selected");

    })
}

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

const buttonHandler = (event) =>{
    const filter = event.target.dataset.filter ; 
    selectedButtton(filter);
    products.forEach((product)=>{
       const category = product.dataset.category;
       if(category === "all"){
        product.style.display = "block";
       }else{
        (category === filter) ? product.style.display = "block" :  product.style.display = "none"; 
       }


    })


}
const searchPriceHandler = (event)=>{
    const inputSearch = +event.target.parentElement.children[0].value;
    products.forEach((product)=>{
       const price = +product.children[2].innerText.split(" ")[1];
       (inputSearch === price) ?  product.style.display = "block": product.style.display = "none";
    })
}


searchInput.addEventListener("keyup" , keyHandler);
searchPriceButton.addEventListener("click" , searchPriceHandler);
buttons.forEach((button)=>{
    button.addEventListener("click" , buttonHandler);
})
