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

  let swiper = new Swiper(".swiper-review", {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    navigation: {
      nextEl: ".swiper-review__btn--next",
      prevEl: ".swiper-review__btn--prev",
    },
    spaceBetween: 100
  });

  $.getJSON("/json/reviews.json", function (data) {
    function createReviewEl(review) {
      const $review = $("<div>", {
        class: "review",
      });
      // child of review are text and id
      const $reviewText = $("<div>", {
        class: "review__text",
        text: review.content,
      });
      const $reviewId = $("<div>", {
        class: "review__id",
      });

      // create id object
      const $idAvatar = $("<img>", {
        class: "id__avatar",
        src: review.avatar,
        alt: review.name + " profile picture",
      });
      const $idName = $("<div>", {
        class: "id__name",
        text: review.name,
      });
      const $idJob = $("<div>", {
        class: "id__job",
        text: review.job,
      });
      const $idInfo = $("<div>").prepend($idName, $idJob);

      // create element structure
      $review.append($reviewText, $reviewId);
      $reviewId.append($idAvatar, $idInfo);

      return $review;
    }

    const reviewsData = data.data;
    reviewsData.forEach((item, index) => {
      $slideContent = createReviewEl(item)
      $(".swiper-slide--" + (index + 1)).append($slideContent);
    });

  });
});
