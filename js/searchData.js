// alert('Hello from alertJs');


document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
});

function loadProducts() {

    // URL that loads products that is on the file productsJs;
    const url = 'products.json';


    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //Template that will be render when looping though the array
            let html = '';

            data.products.forEach(item => {
                html += `<div class="product">
                            <a href="#"><img src="img/tv.png" alt="Product" class="feature"></a>
                            <h3><a href="#">${item.productName}</h3>
                            <p>${item.desc}</p>
                            <h5>Availability: <span class="instock">${item.available}</span></h5>
                            <p>
                                <a href="#" class="cart-btn">
                                    <span class="price">${item.price}</span>
                                    <img src="img/white-cart.gif" alt="Add to Cart">
                                    ADD TO CART
                                </a>
                            </p>
                        </div>
                        `;
            });
            //After templete is build we render it here.
            document.querySelector('#search-results').innerHTML = html;
        })
}