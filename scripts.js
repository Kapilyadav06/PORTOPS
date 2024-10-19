document.addEventListener('DOMContentLoaded', function() {
  // Example: Change header background color on hover
  document.querySelector('header').addEventListener('mouseover', function() {
      this.style.backgroundColor = '#fff';
      this.style.color = '#333';
  });

  document.querySelector('header').addEventListener('mouseout', function() {
      this.style.backgroundColor = '#3498db';
      this.style.color = '#fff';
  });

  // Example: Add animation to images on hover
  const images = document.querySelectorAll('img');
  images.forEach(function(image) {
      image.addEventListener('mouseover', function() {
          this.style.transform = 'scale(1.1)';
      });
      image.addEventListener('mouseout', function() {
          this.style.transform = 'scale(1)';
      });
  });
});