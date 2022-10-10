const container = document.querySelector(".container");
const request = new XMLHttpRequest();
request.open("get","https://fakestoreapi.com/products?limit=5");
request.send();
request.addEventListener("load",addToHome);

function addToHome(){
    const data = JSON.parse(request.responseText)
    console.log(data);
    data.forEach(function(element){
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src",element.image);
        img.classList.add("image");

        const titleContainer = document.createElement("div");
        titleContainer.classList.add("titleContainer");
        const title = document.createElement("h4");
        title.classList.add("title");
        title.innerHTML = element.title;

        const price = document.createElement("div");
        price.innerHTML = "$"+element.price;
        price.classList.add("price");

        const viewMore = document.createElement("button");
        viewMore.innerHTML = "view More";
        viewMore.classList.add("viewMore");
        
        viewMore.addEventListener("click",addToProduct(element));
        
        titleContainer.appendChild(title);
        card.appendChild(img);
        card.appendChild(titleContainer);
        card.append(price);
        card.appendChild(viewMore);
        container.appendChild(card);
    })
}

function addToProduct(product){
    return function(){
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");

        const img = document.createElement("img");
        img.classList.add("img");
        img.setAttribute("src",product.image);

        const title = document.createElement("div");
        div.innerHTML = product.title;
        title.classList.add("title");

        const price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML = "$"+product.price;

        const desc = document.createElement("div");
        desc.classList.add("desc");
        desc.innerHTML = product.description;

        const rating = document.createElement("div");
        rating.innerHTML = product.rating;
        rating.classList.add("rating");

        const category = document.createElement("div");
        category.innerHTML = product.category;
        category.classList.add("category");

        const buy = document.createElement("button");
        buy.innerHTML = "BUY";
        buy.classList.add("buy");

        const addToCart = document.createElement("button");
        addToCart.innerHTML = "ADD TO CART";
        addToCart.classList.add("cart");
    }
}