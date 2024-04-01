function Name() {
  const urlParams = new URLSearchParams(window.location.search);
  const subCateId = urlParams.get("id");
  const subCateMap = {
    1: "Báo mức chất rắn",
    2: "Báo mức chất lỏng",
    3: "Giải pháp đo mức",
    4: "Giải pháp đo mức Level Gauge",
    5: "Lưu lượng kế điện từ",
    6: "Lưu lượng kế dạng phao",
    7: "Đồng hồ đo lưu lượng",
    8: "Công tắc dòng chảy",
    9: "Công tắc nhiệt độ New-Flow",
    10: "Cảm biến nhiệt độ (Temperture)",
    11: "Cảm biến nhiệt độ Hawk Gauge",
    12: "Máy đo áp suất cầm tay",
    13: "Đồng hồ áp suất màng",
    14: "Công tắc áp suất",
    15: "Đồng hồ đo chênh lệch áp suất",
    16: "Cảm biến áp suất",
    17: "Đồng hồ đo Magnehelic Dwyer",
    18: "Màn hình hiển thị Nivelco",
    19: "Bộ hiển thị lưu lượng, mức,...",
    20: "Đo mức bằng sóng siêu âm",
    22: "Đo mức bằng sóng thủy",
    23: "Máy đo tốc độ gió",
    24: "Thiết bị phân tích chất lỏng",
    25: "MF",
    26: "MU",
    27: "Các thiết bị phòng sạch",
    28: "Bơm chân không",
    29: "Máy đo tốc độ vòng quay",
    30: "Van",
  };

  for (let i = 1; i <= 30; i++) {
    if (subCateId === String(i)) {
      const pTag = document.createElement("p");
      pTag.innerText = subCateMap[String(i)];
      const targetElement = document.querySelector(".title-top");
      targetElement.appendChild(pTag);
      break; // Dừng vòng lặp sau khi tìm thấy phần tử tương ứng
    }
  }
  fetch(`https://patronum.azurewebsites.net/api/Subcate?subcateid=${id}`);
}
function getAllItems() {
  const urlParams = new URLSearchParams(window.location.search);
  const subCateId = urlParams.get("id");
  setTimeout(() => {}, 3000);
  fetch(`https://patronum.azurewebsites.net/api/Subcate?subcateid=${subCateId}`)
    .then((response) => response.json())
    .then((data) => {
      showLoading();

      try {
      } catch (ex) {
        console.log("Đã xảy ra lỗi:", ex);
      }
      const productGrid = document.querySelector(".product_list--items");

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
        productImageImg.classList.add("truong", "col-12");
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
      console.log("Đã xảy ra lỗi:", error);
      hideLoading();
    });
}
function showLoading() {
  document.querySelector(".loading-overlay").style.display = "flex";
}

// Ẩn phần loading
function hideLoading() {
  document.querySelector(".loading-overlay").style.display = "none";
}
