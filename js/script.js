// Placeholder for future functionality
console.log("renaissance site loaded!");

document.querySelector('.see-more').addEventListener('click', function() {
    const hiddenImages = document.querySelectorAll('.hidden');
    
    hiddenImages.forEach((image) => {
      image.classList.remove('hidden');
    });
  
    // დამალეთ ღილაკი
    this.style.display = 'none';
  });