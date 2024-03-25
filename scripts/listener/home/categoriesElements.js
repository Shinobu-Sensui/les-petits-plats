const dropdownButtons = document.querySelectorAll(".dropdown-button");

const handleDropdownButtonClick = () => {
  if (!dropdownButtons) return;

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log(event);
     
    });
  });
};

export { handleDropdownButtonClick };
