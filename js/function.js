$(document).ready(function () {
  $("#toggle-menu").change(function (e) {
    $("#nav-mobile-wrapper").toggleClass("nav__wrapper--active");
  });
  
  $.getJSON("/json/monthsTopBooks.json", function (data) {
    function createBookEl(book) {
      const $book = $("<div/>", {
        class: "top-books__book",
      });
      const $img = $("<img>", {
        src: book.cover,
        alt: book.title + " book cover",
        class: "book__cover",
      });
      const $title = $("<h3>", {
        class: "book__title",
        text: book.title,
      });
      const $author = $("<p>", {
        class: "book__author",
        text: book.author,
      });
      const $price = $("<div>", {
        class: "book__price",
        text: "$" + book.price,
      });
      const $btn = $("<a/>", {
        href: "#",
      }).prepend(
        $("<button>", {
          class: "btn btn--sm",
          text: "buy now",
        })
      );
      $book.append($img, $title, $author, $price, $btn);
      return $book;
    }

    const topBooksData = data.data;
    let listBooks = topBooksData.map((item) => {
      return createBookEl(item);
    });
    $(".top-books__main-content").prepend(listBooks);
  });
});
