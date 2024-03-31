const createElement = (tag, properties = {}) => {
  const element = document.createElement(tag);
  Object.entries(properties).forEach(([key, value]) => {
    if (key === "classList") {
      if (Array.isArray(value)) {
        value.forEach((className) => element.classList.add(className));
      } else {
        element.classList.add(value);
      }
    } else {
      element[key] = value;
    }
  });
  return element;
};

export default createElement;
