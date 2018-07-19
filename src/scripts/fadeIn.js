export function animationTrigger() {

  window.addEventListener('scroll', () => {

    // Page2, three articles fade in
    if (window.scrollY > window.innerHeight / 5) {
      const fadeOne = document.getElementById('fadeInOne');
      const fadeTwo = document.getElementById('fadeInTwo');
      const fadeThree = document.getElementById('fadeInThree');

      fadeOne.classList.add('fadeOne');
      fadeTwo.classList.add('fadeTwo');
      fadeThree.classList.add('fadeThree');
    }

    // Page3, thumbnails fade in
    // CODE TO BE REFACTORED BEFORE PUBLIC

    if (window.scrollY > window.innerHeight + window.innerHeight / 2) {
      const p1 = document.getElementById('p1');
      p1.classList.add('fadeOne');

      if (window.scrollY > window.innerHeight * 2) {
        const p2 = document.getElementById('p2');
        p2.classList.add('fadeTwo');

        if (window.scrollY > window.innerHeight * 2.5) {
          const p3 = document.getElementById('p3');
          p3.classList.add('fadeTwo');

          if (window.scrollY > window.innerHeight * 3) {
            const p4 = document.getElementById('p4');
            p4.classList.add('fadeTwo');

            if (window.scrollY > window.innerHeight * 3.5) {
              const p5 = document.getElementById('p5');
              p5.classList.add('fadeTwo');

              if (window.scrollY > window.innerHeight * 4) {
                const p6 = document.getElementById('p6');
                p6.classList.add('fadeTwo');
              }
            }
          }
        }
      }
    }
    // END Second page

    
    if (window.scrollY >= window.innerHeight * 4.5) {
      const clients  = document.getElementById('clients-title');
      const testimony1 = document.getElementById('testimony-1');
      clients.classList.add('fadeOne');
      testimony1.classList.add('fadeTwo');

      if (window.scrollY >= window.innerHeight * 5.5) {
        const testimony2 = document.getElementById('testimony-2');
        testimony2.classList.add('fadeTwo');

        if (window.scrollY >= window.innerHeight * 6) {
          const testimony3 = document.getElementById('testimony-3');
          testimony3.classList.add('fadeThree');
        }
      }
    }
  })
}

