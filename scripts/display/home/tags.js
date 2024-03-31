import createElement from "../../function/dom/createElement.js";

const displayTag = () => {
  const containerTags = createElement("div", {
    classList: "container-tags",
  });
  const containerDropdown = document.querySelector(".container-dropdown");

  containerDropdown.insertAdjacentElement("afterend", containerTags);
};

export default displayTag;
