$(document).ready(()=>{
    for(let id in products){
        console.log("2")
        let block = document.createElement("div");
        block.className = "block";

        $(".owl-carousel").append(block);

        let img_cont = document.createElement("div");
        img_cont.className = "image-container";

        $(".block").append(img_cont);

        let image = document.createElement("img");
        image.src = products[id].image;
        image.alt = products[id].description;

        $(".image-container").append(image);

        let image_overlay = document.createElement("div");
        image_overlay.className ="image-overlay";

        $(".image-container").append(image_overlay);

        let button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-dark");
        button.innerText="Add to Cart";

        $(".image-overlay").append(button);

        let name_tag = document.createElement("a");
        name_tag.href = "/product-details.html";
        name_tag.innerText = products[id].description;

        $(".block").append(name_tag);

        let tag = document.createElement("span");
        if(products[id].tag =="new"){
            tag.classList.add("badge");
            tag.classList.add("new");
            tag.innerText = "New";
            $(".image-container").append(tag);
        }else if(products[id].tag =="sale"){    
            tag.classList.add("badge");
            tag.classList.add("sale");
            tag.innerText = "Sale";

            $(".image-container").append(tag);

            let price = parseInt(products[id].price)*0.5;
            let oldSpan = document.createElement("span");
            oldSpan.className="old-price";
            oldSpan.innerText= products[id].price;

            let newSpan = document.createElement("span");
            newSpan.className="text-danger";
            newSpan.innerText= price +"$";

            $(".block").append(oldSpan);
            $(".block").append(newSpan);
        }
    }
});