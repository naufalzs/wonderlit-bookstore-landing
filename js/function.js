$(document).ready(function () {
  $("#toggle-menu").change(function (e) {
    $("#nav-mobile-wrapper").toggleClass("nav__wrapper--active");
  });
  $.getJSON("/json/monthsTopBooks.json",
    function (data) {
      const topBooksData = data.data
    }
  );
});
