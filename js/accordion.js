"use strict"
let accordion = document.querySelectorAll('.accordion');

for (let item of accordion) {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
}
accordion.forEach(element => {
  element.addEventListener('click', function() {
    this.classList.toggle('active');
  });
})
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle('active');
  });
}


