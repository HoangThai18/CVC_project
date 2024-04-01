src = "https://code.jquery.com/jquery-3.6.0.min.js";
src =
  "https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyloadxt/1.1.0/jquery.lazyloadxt.min.js";
$(function () {
  $(".lazy").lazyLoadXT({
    visibleOnly: false, // Hiển thị tất cả các thẻ div ngay cả khi chúng ở trong viewport
    load: function () {
      // Thực hiện tải thêm dữ liệu khi cuộn đến cuối trang
      // Gọi API để lấy dữ liệu mới
      // ...

      // Thêm các sản phẩm mới vào trang web
      // ...

      // Kích hoạt lazy loading trên các sản phẩm mới
      $(".lazy").lazyLoadXT();
    },
  });
});
