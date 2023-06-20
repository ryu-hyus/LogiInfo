const id_num = window.location.search.substr(-1,1)

async function getOneProducts() {
    console.log("상품목록조회");
    const productListApiUrl =
        `https://00dc-14-39-99-50.ngrok-free.app/shop/product/${id_num}/`

    const response = await fetch(productListApiUrl);
    const jsonObject = await response.json();
    console.log("조회된 상품목록", jsonObject);

    document.getElementById("product_img").src = jsonObject.image_url;
    const divRow = document.getElementById("product_Info");


    // const htmlArray = products.map((product) => {
    //     console.log("상품단건", product);
    //     return `<div class="h1">${jsonObject.korean_name}</div>
    //     <div class="h2">${jsonObject.english_name}</div>
    //     <div class="h3">${jsonObject.price}</div>
    //     <div class="h5">${jsonObject.roasting}</div>
    //     <div class="h5">${jsonObject.aroma}</div>
    //     <div class="h5">${jsonObject.roasting_date}</div>
    //     <div class="h5">${jsonObject.description}</div>`;
    // }
    // );
    
    divRow.innerHTML = `<div class="h1">${jsonObject.korean_name}</div>
    <div class="h2">${jsonObject.english_name}</div>
    <div class="h3">${jsonObject.price}원</div>
    <div class="h5">${jsonObject.roasting}</div>
    <div class="h5">${jsonObject.aroma}</div>
    <div class="h5">${jsonObject.roasting_date}</div>
    <div class="h5">${jsonObject.description}</div>`;
}