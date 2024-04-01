function DetailProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const subCateId = urlParams.get("id");
  fetch(`https://patronum.azurewebsites.net/api/Subcate?subcateid=${subCateId}`)
    .then((response) => response.json())
    .then((data) => {
      try {
        const productContainer = document.querySelector(".product");

        const detailRow = document.createElement("div");
        detailRow.classList.add("row", "detail");

        const sliderCol = document.createElement("div");
        sliderCol.classList.add(
          "col-xl-6",
          "col-lg-6",
          "col-md-6",
          "col-sm-12",
          "Set-slider"
        );

        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");

        const image = document.createElement("img");
        image.src = data.productImg;

        swiperSlide.appendChild(image);
        sliderCol.appendChild(swiperSlide);

        const infoCol = document.createElement("div");
        infoCol.classList.add(
          "row",
          "col-xl-6",
          "col-lg-6",
          "col-md-6",
          "col-sm-12",
          "set-mr"
        );

        const title = document.createElement("div");
        title.classList.add("col-12", "set-fontsize-tittle");
        const itemName = document.createElement("p");
        itemName.innerText = data.name;

        const brandDetail = document.createElement("div");
        brandDetail.classList.add("title-detail");
        const brandTitle = document.createElement("p");
        brandTitle.classList.add("title-detail-one");
        brandTitle.textContent = "Thương hiệu:";
        const brandValue = document.createElement("p");
        brandValue.classList.add("title-detail-two");
        brandValue.textContent = data.brand;
        brandDetail.appendChild(brandTitle);
        brandDetail.appendChild(brandValue);
        //
        const brandDetail2 = document.createElement("div");
        brandDetail2.classList.add("title-detail");
        const brandTitle2 = document.createElement("p");
        brandTitle2.classList.add("title-detail-one");
        brandTitle2.textContent = "Xuất xứ:";
        const brandValue2 = document.createElement("p");
        brandValue2.classList.add("title-detail-two");
        brandValue2.textContent = data.brand;
        brandDetail2.appendChild(brandTitle2);
        brandDetail2.appendChild(brandValue2);
        //

        //

        //

        detailRow.appendChild(sliderCol);
        detailRow.appendChild(infoCol);
        infoCol.appendChild(title);
        title.appendChild(itemName);
        infoCol.appendChild(brandDetail);
        infoCol.appendChild(brandDetail2);
        productContainer.appendChild(detailRow);
      } catch (ex) {
        console.log("Đã xảy ra lỗi:", ex);
      }
    })
    .catch((error) => {
      console.log("Đã xảy ra lỗi:", error);
    });
}
