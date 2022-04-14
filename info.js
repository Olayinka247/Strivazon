async function fetchProducts() {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NDk4NTQ4MDUsImV4cCI6MTY1MTA2NDQwNX0.7-xZQ1wfoykK7_wgstyZSKaXHHF7bPiUG5dgg6dEcyI",
      },
    }
  );
  {
    if (response.ok) {
      const data = await response.json();

      const row1 = document.querySelector(".row");
      row1.innerHTML = data
        .map(
          (product) => `
        <div class="col-md-3">
        <div class="card shadow-sm p-3 mb-5 bg-white rounded">
           <img src="${product.imageUrl}" class="card-img-top" alt="...">
           <div class="card-body ">
             <h5 class="card-title">${product.name}</h5>
             <p class="card-text">${product.description}</p>
             <p>${product.brand}</p>
             <a href="#" class="btn btn-dark">${product.price} £</a>
             <a href="./detailspage.html?productId=${product._id}" class="btn btn-danger">More...</a>
           </div>
       </div>
       </div>`
        )
        .join("");
    }
  }
}
fetchProducts();
function deleteProduct(event) {
  event.target.closest(".col-md-3").remove();
}
