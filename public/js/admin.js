const deleteProduct = (btn) => {
  const productId = btn.parentNode.querySelector(
    'input[name="productId"]'
  ).value;
  const csrfToken = btn.parentNode.querySelector('input[name="_csrf"]').value;

  const productElement = btn.closest("article");

  fetch("/admin/product/" + productId, {
    method: "DELETE",
    headers: {
      "CSRF-Token": csrfToken,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productElement.parentNode.removeChild(productElement);
    })
    .catch((err) => {
      console.log(err);
    });
};
