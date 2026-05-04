const hotelSearchBtnEl = document.querySelector("#hotel-search-btn");
const hotelSearchDialogEl = document.querySelector(
  "#hotel-search-dialog",
);
const closeButtonEl = document.querySelector("#close-button");

const openModal = (evt) => {
  evt.preventDefault();

  hotelSearchDialogEl.showModal();
  closeButtonEl.addEventListener("click", closeModal);
};

const closeModal = (evt) => {
  evt.preventDefault();

  hotelSearchDialogEl.close();
  closeButtonEl.removeEventListener("click", closeModal);
};

hotelSearchBtnEl.addEventListener("click", openModal);
