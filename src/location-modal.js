(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-location-open]"),
    closeModalBtn: document.querySelector("[data-modal-location-close]"),
    modal: document.querySelector("[data-location-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("location-backdrop--hidden");
  }
})();