export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistances = this.checkDistances.bind(this);
  }

  // Pega a distância de cada item em relação ao topo do site
  getDistances() {
    this.distances = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distância de cada item em relação ao scroll do site
  checkDistances() {
    this.distances.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistances();
      this.checkDistances();
      window.addEventListener("scroll", this.checkDistances);
    }
    return this;
  }

  // Remove o evento de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistances);
  }
}
