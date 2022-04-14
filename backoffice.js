const productId = new URLSearchParams(window.location.search).get("productId");
const method = productId ? "PUT" : "POST";
const endpoint = productId
  ? "https://striveschool-api.herokuapp.com/api/product/" + productId
  : "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  if (productId) {
    try {
      const response = await fetch(endpoint, {
        headers: {
          "content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NDk4NjA4NDYsImV4cCI6MTY1MTA3MDQ0Nn0.ouJ0ESyWuDBINoFyGY_IxNScwwIJ9Hl7zzWLvMhuIR4",
        },

        method: "POST",
        body: JSON.stringify(createdProduct),
      });
      console.log(response);
    } catch (error) {}
  }
};

const createdProduct = {
  name: "",
  description: "",
  brand: "",
  imageUrl: "",
  price: 0,
};

function genericUpdateHandler() {
  createdProduct.name = document.getElementById("product-name").value;
  createdProduct.description = document.getElementById(
    "product-description"
  ).value;
  createdProduct.brand = document.getElementById("product-brand").value;
  createdProduct.imageUrl = document.getElementById("product-imageUrl").value;
  createdProduct.price = parseInt(
    document.getElementById("product-price").value
  );
}

function handleProductSubmit(event) {
  event.preventDefault();
  genericUpdateHandler();
  createProduct();
}

async function createProduct() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      headers: {
        "content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NDk4NjA4NDYsImV4cCI6MTY1MTA3MDQ0Nn0.ouJ0ESyWuDBINoFyGY_IxNScwwIJ9Hl7zzWLvMhuIR4",
      },

      method: "POST",
      body: JSON.stringify(createdProduct),
    }
  );
  if (response.ok) {
    const data = await response.json();

    console.log(data);
    alert("Product Added Successfully");
  }
}
