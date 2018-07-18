export function animationTrigger() {
  let animated = false;
  console.log('works');

  window.addEventListener('scroll', () => {
    if (animated) {
      return 1;
    }

    if (window.scrollY > window.innerHeight / 5) {
      const fadeOne = document.getElementById('fadeInOne');
      const fadeTwo = document.getElementById('fadeInTwo');
      const fadeThree = document.getElementById('fadeInThree');

      fadeOne.classList.add('fadeOne');
      fadeTwo.classList.add('fadeTwo');
      fadeThree.classList.add('fadeThree');

      animated = true;
    }
  })
}

