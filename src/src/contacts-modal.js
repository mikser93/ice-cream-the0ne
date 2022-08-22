(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-contacts-open]"),
    closeModalBtn: document.querySelector("[data-modal-contacts-close]"),
    modal: document.querySelector("[data-contacts-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("contacts-backdrop--hidden");
  }
})();