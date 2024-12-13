() => {
  const reviews = document.querySelectorAll('.response-item');
  const dots = document.querySelector('.response-list::after');
  let currentIndex = 0;

  function showReview(index) {
    reviews.forEach((review, i) => {
      review.style.display = i === index ? 'block' : 'none';
    });
  }
};
