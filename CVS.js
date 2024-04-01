const apiUrl = "https://patronum.azurewebsites.net/api/Products/TopViewed";

// Khởi tạo biến để lưu trữ trang hiện tại
let currentPage = 1;

// Khởi tạo biến để lưu trữ số lượng sản phẩm trên mỗi trang
const pageSize = 20;

// Lấy danh sách sản phẩm dựa trên trang hiện tại và số lượng sản phẩm trên mỗi trang
function getProducts(page) {
  const url = `${apiUrl}?page=${page}&pageSize=${pageSize}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const productGrid = document.querySelector(".product_list--items");

      // Xóa các sản phẩm cũ trước khi thêm sản phẩm mới
      productGrid.innerHTML = "";

      // Lặp qua danh sách sản phẩm và tạo các phần tử HTML tương ứng
      data.items.forEach((product) => {
        const productItem = document.createElement("a");
        productItem.classList.add(
          "product-items",
          "col-3",
          "col-md-3",
          "col-xl-2"
        );
        productItem.href = `Chitietsp.html?id=${product.id}`;
        productGrid.addEventListener("click", () => {
          window.location.href = `Chitietsp.html?id=${product.id}`;
        });

        // Kiểm tra status của sản phẩm
        if (product.status === 1 || product.status === 2) {
          // Tao the div bao hoc hot
          const productHot = document.createElement("div");
          productHot.classList.add("product_hot");
          productItem.appendChild(productHot);
          const hotImage = document.createElement("img");
          hotImage.src = "./assets/iimg/hot.png";
          productHot.appendChild(hotImage);
        }

        // Tao the div bao boc hinh anh san pham
        const productImage = document.createElement("div");
        productImage.classList.add("product_items--img");
        // Tao the img ben trong the div chua anh san pham
        const productImageImg = document.createElement("img");
        productImageImg.src = product.productImg;
        productImage.appendChild(productImageImg);

        // Tao the chua noi dung san pham
        const productItemContent = document.createElement("div");
        productItemContent.classList.add("product_items--content");

        // Tao the p chua ten san pham
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
        productAdd.appendChild(productAddIcon);

        const priceIcon = document.createElement("i");
        priceIcon.classList.add("bi", "bi-cart-plus");
        productAddIcon.appendChild(priceIcon);

        // Thêm các phần tử vào trong phần tử "product-item"
        productItem.appendChild(productImage);
        productItem.appendChild(productItemContent);
        productItem.appendChild(productContact);
        productItem.appendChild(productAdd);

        // Thêm sản phẩm vào danh sách sản phẩm
        productGrid.appendChild(productItem);
      });

      productGrid.appendChild(productItem);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function createPaginationButtons() {
  const paginationContainer = document.querySelector(".pagination");

  // Xóa các nút chuyển trang cũ trước khi tạo mới
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= 4; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;

    // Thêm lớp 'active' cho nút trang hiện tại
    if (i === currentPage) {
      pageButton.classList.add("active");
    }

    pageButton.addEventListener("click", () => {
      currentPage = i;
      getProducts(currentPage);

      // Xóa lớp 'active' khỏi tất cả các nút
      const buttons = paginationContainer.querySelectorAll("button");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });

      // Thêm lớp 'active' cho nút trang được chọn
      pageButton.classList.add("active");
    });

    paginationContainer.appendChild(pageButton);
  }
}

// Khi trang web được tải, lấy danh sách sản phẩm và tạo nút chuyển trang
document.addEventListener("DOMContentLoaded", () => {
  getProducts(currentPage);
  createPaginationButtons();
});

// fetch("https://patronum.azurewebsites.net/api/HomePage/TypicalCategories")
//   .then((response) => response.json())
//   .then((data) => {
//     const typicalItemsBox = document.querySelector(".typical_items--box");

//     data.slice(0, 12).forEach((typicalCategory) => {
//       // Tạo phần tử div bao bọc cho từng danh mục
//       const typicalItem = document.createElement("div");
//       typicalItem.classList.add(
//         "typical_items",
//         "col-md-2",
//         "col-3",
//         "col-xl-2"
//       );

//       // Tạo phần tử a bao bọc cho từng danh mục
//       const typicalLink = document.createElement("a");
//       typicalLink.href = "";
//       typicalLink.addEventListener("click", (event) => {
//         event.preventDefault();
//         fetch(
//           `https://patronum.azurewebsites.net/api/Subcate?subcateid=${typicalCategory.subCateId}`
//         )
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data); // Xử lý dữ liệu trả về ở đây
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//           });
//       });

//       // Tạo phần tử div bao bọc cho hình ảnh
//       const typicalImageBox = document.createElement("div");
//       typicalImageBox.classList.add("typical_items--img", "col-6");

//       // Tạo phần tử img chứa hình ảnh
//       const typicalImage = document.createElement("img");
//       typicalImage.src = typicalCategory.typicalImage;

//       // Tạo phần tử div bao bọc cho nội dung
//       const typicalContent = document.createElement("div");
//       typicalContent.classList.add("typical_items-p", "col-12");

//       // Tạo phần tử p chứa tên danh mục
//       const typicalName = document.createElement("p");
//       typicalName.classList.add("typical_items-p__name");
//       typicalName.innerText = typicalCategory.typicalName;

//       // Gắn các phần tử vào phần tử cha
//       typicalItem.appendChild(typicalLink);
//       typicalLink.appendChild(typicalImageBox);
//       typicalImageBox.appendChild(typicalImage);
//       typicalLink.appendChild(typicalContent);
//       typicalContent.appendChild(typicalName);

//       typicalItemsBox.appendChild(typicalItem);
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

fetch("https://patronum.azurewebsites.net/api/Products/SimilarProducts/1")
  .then((response) => response.json())
  .then((data) => {
    const similarProducts = document.querySelector(".similar_list--items");
    data.slice(0, 12).forEach((similarProduct) => {
      const similarItem = document.createElement("div");
      similarItem.classList.add(
        "similar_item",
        "col-6",
        "col-sm-4",
        "col-md-3",
        "col-lg-3",
        "col-xl-3"
      );

      const similarItemBox = document.createElement("div");
      similarItemBox.classList.add("similar_item--box");

      const similarLink = document.createElement("a");
      similarLink.href = "";

      const similarFist = document.createElement("div");
      similarFist.classList.add("col-xl-1");

      const similarItemImg = document.createElement("div");
      similarItemImg.classList.add("similar_item--img", "col-xl-3");

      const similarItemImgImg = document.createElement("img");
      similarItemImgImg.src = similarProduct.productImg;

      const similarItemContent = document.createElement("div");
      similarItemContent.classList.add("similar_item--content", "col-xl-8");

      const similarItemDes = document.createElement("div");
      similarItemDes.classList.add("similar_item--des");

      const similarItemName = document.createElement("p");
      similarItemName.innerText = similarProduct.name;

      const similarContact = document.createElement("div");
      similarContact.classList.add("product_contact");

      const contactText = document.createElement("div");
      contactText.classList.add("contact_text");
      contactText.innerText = "Giá: ";

      const contactCall = document.createElement("a");
      contactCall.href = "";
      contactCall.classList.add("contact_call");

      const contactCallIcon = document.createElement("div");
      contactCallIcon.classList.add("contact_call--icon");

      const contactCallIconI = document.createElement("i");
      contactCallIconI.classList.add("fa-solid", "fa-phone-volume");

      const contactCallP = document.createElement("p");
      contactCallP.innerText = "Liên hệ";

      similarProducts.appendChild(similarItem);
      similarItem.appendChild(similarItemBox);
      similarItemBox.appendChild(similarLink);
      similarLink.appendChild(similarFist);
      similarLink.appendChild(similarItemImg);
      similarItemImg.appendChild(similarItemImgImg);
      similarItemBox.appendChild(similarItemContent);
      similarItemContent.appendChild(similarItemDes);
      similarItemDes.appendChild(similarItemName);
      similarItemContent.appendChild(similarContact);
      similarContact.appendChild(contactText);
      similarContact.appendChild(contactCall);
      contactCall.appendChild(contactCallIcon);
      contactCallIcon.appendChild(contactCallIconI);
      contactCall.appendChild(contactCallP);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
