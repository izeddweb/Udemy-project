// set var
const buttonShow = document.querySelector('.btn-out')
const buttonClose = document.querySelector('.btn-in')
const modalContainer = document.querySelector('.modal-container')

// set function

buttonShow.onclick = function() {
  modalContainer.style.opacity ='1';
  buttonShow.style.opacity ='0';
  buttonClose.onclick = function() {
    modalContainer.style.opacity ='0';
    buttonShow.style.opacity ='1';
  }
}
