$(document).ready(function () {
  $("#toggle-menu").change(function (e) {
    $("#nav-mobile-wrapper").toggleClass("nav-wrapper--active");
  });
  $.getJSON("/json/monthsTopBooks.json",
    function (data) {
      const topBooksData = data.data
    }
  );
});
