(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modald-contacts-open]"),
    closeModalBtn: document.querySelector("[data-modald-contacts-close]"),
    modal: document.querySelector("[data-contacts-modald]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("contacts-backdrop--hidden");
  }
})();