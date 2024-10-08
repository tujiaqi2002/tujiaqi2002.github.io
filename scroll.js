const blogContainer = document.querySelector('.blog-section');
blogContainer.style.scrollBehavior = 'smooth';
// JavaScript to handle scrolling animations
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.blog-post');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  posts.forEach((post) => {
    observer.observe(post);
  });
});
