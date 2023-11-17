class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu && this.navList && this.navLinks.length > 0) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavbar.init();
  
function disponivel() {
    var dataselec1 = document.getElementById('data').value
    Swal.fire({
        title: "Avaliação Enviada",
        text: "Você enviou o status do Pedido para a data " + dataselec1 ,
        icon: "success"
      });
}
function indisponivel() {
    var dataselec2 = document.getElementById('data').value
    Swal.fire({
        title: "Informação Enviada",
        text: "Você enviou o status do Pedido para a data " + dataselec2 ,
        icon: "success"
      });
}
