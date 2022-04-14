// const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

const productId = new URLSearchParams(window.location.search).get("productId");

window.onload = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/" + productId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NDk5NDc2OTgsImV4cCI6MTY1MTE1NzI5OH0.MnvBLPd6g9tY608HnW_fTQcaIuyvPmEkUCFJRabJoFQ",
        },
      }
    );
    const product = await response.json();

    const productDetails = document.getElementById("product-details");

    const {
      _id,
      name,
      description,
      brand,
      imageUrl,
      price,
      userId,
      createdAt,
      updatedAt,
    } = product;

    productDetails.innerHTML = `
        <img src="${imageUrl}" style="width: 18rem;" alt="...">
        <div class="card-body">
          <p class="card-text">${name}</p>
          <p class="card-text">${brand}</p>
          <p class="card-text">${description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${price}</li>
          <li class="list-group-item">${_id}</li>
          <li class="list-group-item">${userId}</li>
          <li class="list-group-item">${createdAt}</li>
          <li class="list-group-item">${updatedAt}</li>
        </ul>
      
      <button class="btn btn-success mt-4" onclick="productEditBtnClick()">Edit Product</button>`;
  } catch (error) {
    console.log(error);
  }
};
function productEditBtnClick() {
  window.location.assign("./backoffice.html");
}
