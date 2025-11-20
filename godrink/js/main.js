const panels = document.querySelectorAll('.panel');
const panels_warrap = document.querySelectorAll('.panels')[0];

panels.forEach(function(panel) {
  panel.addEventListener('mouseenter', function() {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
 panels_warrap.addEventListener('mouseleave', function() {
removeActiveClasses();
 });

function removeActiveClasses() {
  panels.forEach(function(panel) {
    panel.classList.remove('active');
  });
}



const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator-index');

function update(entries) {
  const indicatorParent = document.querySelectorAll('.indicator')[0];
  entries.forEach((entry) => {
    const i = entry.target.dataset.index;
    indicators[i].classList.toggle('expand',entry.isIntersecting);
    if( i== 0 && entry.isIntersecting ) {
      indicatorParent.classList.add('first_slide');
    }
    else if( i==0 && !entry.isIntersecting ) {
      indicatorParent.classList.remove('first_slide');
    }
  });
}

function detect(slide) {
  const options = {threshold:0.2}; 
  const io = new IntersectionObserver(update,options);
  io.observe(slide);
}

const init = () => slides.forEach(detect);

window.addEventListener('load',init,false);