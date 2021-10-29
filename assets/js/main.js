//Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.
//Bonus:Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

const app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        image: "./assets/img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.Lorem ipsum",
      },
      {
        image: "./assets/img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.Lorem ipsum",
      },
      {
        image: "./assets/img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.Lorem ipsum",
      },
      {
        image: "./assets/img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.Lorem ipsum",
      },
      {
        image: "./assets/img/05.jpg",
        title: "Paradise",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.Lorem ipsum",
      },
    ],
  },
});
