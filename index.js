// const mockData = {
//     "products": [
//         {
//             "id": 1,
//             "korean_name": "코스타리카 그라니토스 데 오르티스 2000",
//             "english_name": "Costa Rica Granitos de Ortiz 2000",
//             "image_url": "https://m.coffeelibre.kr/web/product/big/202210/1d0ddd2e7d5a96df86a8489b4707f8b9.jpg",
//             "category": "싱글오리진",
//             "roasting": "중약배전",
//             "aroma": "황도, 라즈베리, 감귤, 꿀",
//             "description": "엄청 맛있습니다.",
//             "price": 20000,
//             "weight": [
//                 200,
//                 500
//             ],
//             "grind": [
//                 "분쇄",
//                 "홀빈"
//             ],
//             "delivery": "택배",
//             "roasting_date": "2023-06-19"
//         },
//         {
//             "id": 2,
//             "korean_name": "과테말라 실베리오",
//             "english_name": "Guatemala  Silverio",
//             "image_url": "https://coffeelibre.kr/web/product/big/202306/092be6dd1e54709edbaf10ebf0dc3c23.png",
//             "category": "싱글오리진",
//             "roasting": "중강배전",
//             "aroma": "오렌지, 사탕수수, 밀크초콜릿, 라운드바디",
//             "description": "좋은 커피입니다",
//             "price": 14000,
//             "weight": [
//                 200,
//                 500
//             ],
//             "grind": [
//                 "분쇄",
//                 "홀빈"
//             ],
//             "delivery": "택배",
//             "roasting_date": "2023-06-19"
//         }
//     ]
// }

// function getProducts() {
//     const responsePromise = Promise.resolve(mockData);
//     responsePromise.then((json) => {
//         console.log(json.products);


//         // for(var i = 0; i<4; i++){
//         //     document.getElementById('card'+ toString(i)).innerHTML = "<img src='" + json.products[i].image_url + "' class='card-img-top'>"
//         //     document.getElementById('cardtitle'+ toString(i)).innerHTML = json.products[i].korean_name
//         //     document.getElementById('cardtext' + toString(i)).innerHTML = json.products[i].description
//         // }
//         // document.getElementById('card0').innerHTML = "<img src='" + json.products[0].image_url + "' class='card-img-top'>"
//         document.getElementById('cardtitle0').innerHTML = json.products[0].korean_name
//         document.getElementById('cardtext0').innerHTML = json.products[0].description

//     });

// }

async function getProducts() {
    console.log("상품목록조회");
    const productListApiUrl =
        "https://00dc-14-39-99-50.ngrok-free.app/shop/product/"

    const response = await fetch(productListApiUrl);
    const jsonObject = await response.json();
    const products = jsonObject.products;
    console.log("조회된 상품목록", products);

    const divRow = document.querySelector("#productsSection > div.row");


    const htmlArray = products.map((product) => {
        console.log("상품단건", product);
        return `<div class="col card border-secondary m-2" style="width: 18rem;" id="card0">
        <img src="${product.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title h5">${product.korean_name}</h5>
                <p class="card-text h6">${product.description}</p>
                <a href="file:///C:/Users/RHS/Desktop/LogiInfo/LogiInfo/LogiInfo/product0.html?product_id=${product.id}" class="btn btn-secondary h6">상세 페이지</a>
            </div>
        </div>`;
        // `<div class='col'>${product.korean_name}+</div>`;

        // const divCol = document.createElement('div');
        // divCol.className = 'col';
        // divCol.innerText = product.korean_name;

        // divRow.appendChild(divCol);
    }
    );
    
    divRow.innerHTML = htmlArray.join("");
}
