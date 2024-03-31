import createElement from "../../function/dom/createElement.js";

export default class Tags {
  createTagElement(tag) {
    return createElement("div", {
      innerText: tag,
      classList: "tag",
    });
  }
}
