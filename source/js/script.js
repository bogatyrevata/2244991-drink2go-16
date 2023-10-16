const menu = () => {
  let mainHeader = document.querySelector('.header');
  let navToggle = document.querySelector('.header__toggle');

  mainHeader.classList.remove('header--nojs');

  navToggle.addEventListener('click', function () {
    if (mainHeader.classList.contains('header--closed')) {
      mainHeader.classList.remove('header--closed');
      mainHeader.classList.add('header--opened');
    } else {
      mainHeader.classList.add('header--closed');
      mainHeader.classList.remove('header--opened');
    }
  });
};

menu();
