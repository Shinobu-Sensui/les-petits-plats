const deleteCategoryElementSVG = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "15");
  svg.setAttribute("height", "15");

  // Créer une ligne diagonale gauche-droite de la croix
  const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.setAttribute("x1", "2");
  line1.setAttribute("y1", "2");
  line1.setAttribute("x2", "12");
  line1.setAttribute("y2", "12");
  line1.setAttribute("stroke", "black");
  line1.setAttribute("stroke-width", "2");

  // Créer une ligne diagonale droite-gauche de la croix
  const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.setAttribute("x1", "2");
  line2.setAttribute("y1", "12");
  line2.setAttribute("x2", "12");
  line2.setAttribute("y2", "2");
  line2.setAttribute("stroke", "black");
  line2.setAttribute("stroke-width", "2");

  // Ajouter les lignes à l'élément SVG
  svg.appendChild(line1);
  svg.appendChild(line2);
  return svg;
};

export default deleteCategoryElementSVG;
