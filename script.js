const modallOn = document.querySelector('.modal-off');
const modallOff = document.querySelector('.modal-on');
const modalBackground = document.querySelector('.modal-bg');
const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.id === 'closeBtn') {
      modalBackground.style.display = 'none';
      modallOn.style.display = 'none';
      modallOff.style.display = '';
    } else if (e.currentTarget.id === 'openBtn') {
      modalBackground.style.display = '';
      modallOn.style.display = '';
      modallOff.style.display = 'none';
    }
  });
});
