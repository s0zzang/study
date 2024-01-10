const headerBtns = document.querySelectorAll('.header-button');

headerBtns.forEach((headerBtn) => {
  headerBtn.addEventListener('click', () => {
    headerBtns.forEach((el) => el.classList.remove('is_act'));
    headerBtn.classList.toggle('is_act');
  });
});