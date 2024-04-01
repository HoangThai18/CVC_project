function AllPro() {
  // Lấy dữ liệu từ Fake Store API
  fetch("https://patronum.azurewebsites.net/api/HomePage/GetAllProduct")
    .then((response) => response.json())
    .then((data) => {
      showLoading();
      const productGrid = document.querySelector(".product-grid");

      // Lặp qua danh sách sản phẩm và tạo các phần tử HTML tương ứng
      // Lặp qua từng sản phẩm trong mảng
      data.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add(
          "product_items",
          "lazy",
          "col-md-3",
          "col-xl-2",
          "col-4",
          "px-5"
        );

        // Kiểm tra status của sản phẩm và thêm hình ảnh hot nếu cần
        const productA = document.createElement("a");
        productA.classList.add("set-text");
        productA.href = `Chitietsp.html?id=${product.id}`;
        productGrid.addEventListener("click", () => {
          window.location.href = `Chitietsp.html?id=${product.id}`;
        });

        // Kiểm tra status của sản phẩm
        if (product.status === 1 || product.status === 2) {
          // Tao the div bao hoc hot
          const productHot = document.createElement("div");
          productHot.classList.add("product_hot");
          productA.appendChild(productHot);
          const hotImage = document.createElement("img");
          hotImage.src = "./assets/iimg/hot.png";
          productHot.appendChild(hotImage);
        }

        // Tao the div bao boc hinh anh san pham
        const productImage = document.createElement("div");
        productImage.classList.add("product_items--img");
        // Tao the img ben trong the div chua anh san pham
        const productImageImg = document.createElement("img");
        productImageImg.classList.add("truong");
        productImageImg.src = product.productImg;
        productImage.appendChild(productImageImg);

        // Tao the chua noi dung san pham
        const productItemContent = document.createElement("div");
        productItemContent.classList.add("product_items--content");

        // Tao the p chua ten san pham
        // Tạo phần tử "product-name" và thêm nội dung
        const productName = document.createElement("p");
        productName.classList.add("product_item_name");
        productName.innerText = product.name;
        productItemContent.appendChild(productName);

        // Tao the chua Product Contact
        const productContact = document.createElement("div");
        productContact.classList.add("product_contact");
        productItemContent.appendChild(productContact);

        // Tạo phần tử "product-price" và thêm nội dung
        const productPrice = document.createElement("div");
        productPrice.classList.add("contact_text");
        productPrice.innerHTML += ` Giá: `;
        productContact.appendChild(productPrice);

        // Tao the a chua dien thoai va lien he
        const productContactCall = document.createElement("a");
        productContactCall.classList.add("contact_call");
        productContact.appendChild(productContactCall);
        // Tao the div chua icon call
        const productCallIcon = document.createElement("div");
        productCallIcon.classList.add("contact_call--icon");
        productContactCall.appendChild(productCallIcon);
        // Tạo phần tử <i> cho icon
        const cartIcon = document.createElement("i");
        cartIcon.classList.add("fa-solid", "fa-phone-volume");
        productCallIcon.appendChild(cartIcon);
        // Product Lien He
        const productLienHe = document.createElement("p");
        productLienHe.innerHTML += "Liên hệ";
        productContactCall.appendChild(productLienHe);

        // Product add
        const productAdd = document.createElement("div");
        productAdd.classList.add("product_add");
        productContact.appendChild(productAdd);
        // Tao the a chua icon add
        const productAddIcon = document.createElement("a");
        productAddIcon.href = "";
        productAdd.appendChild(productAddIcon);

        const priceIcon = document.createElement("i");
        priceIcon.classList.add("bi", "bi-cart-plus");
        productAddIcon.appendChild(priceIcon);

        // Thêm các phần tử vào trong phần tử "product-item"
        productItem.appendChild(productA);
        productA.appendChild(productImage);
        productA.appendChild(productItemContent);

        productGrid.appendChild(productItem);
        hideLoading();
      });
    })
    .catch((error) => {
      hideLoading();
      console.error("Error:", error);
    });
}
function showLoading() {
  document.querySelector(".loading-overlay").style.display = "flex";
}

// Ẩn phần loading
function hideLoading() {
  document.querySelector(".loading-overlay").style.display = "none";
}
