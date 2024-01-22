/*Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.*/

//Creo l'array di oggetti
const carouselData = [
    {
      url: './assets/img/AOT1.jpg',
      title: 'Attack On Titan',
      description: 'Levi Ackerman',
    },
    {
      url: './assets/img/AOT2.png',
      title: 'Attack On Titan',
      description: 'Eren Jaeger',
    },
    {
      url: './assets/img/DN2.jpg',
      title: 'Death Note',
      description: 'Light Yagami',
    },
    {
      url: './assets/img/JK2.jpg',
      title: 'Jujutsu Kaisen',
      description: 'Satoru Gojo',
    },
    {
      url: './assets/img/SAO2.jpg',
      title: 'Sword Art Online',
      description: 'Kirigaya Kazuto (Kirito) ',
    },
    {
      url: './assets/img/TG2.jpg',
      title: 'Tokyo Ghoul',
      description: 'Ken Kaneki',
    },
  ];

//Dichiaro anche altre variabili che potrebbero tornarmi utili
const carouselContainer = document.getElementById('carousel');
const iconContainer = document.getElementById('carouselIcon');
const prevButtonHTML = document.getElementById('prevButton');
const nextButtonHTML = document.getElementById('nextButton');

let currentIndex=0;

//Carico i dati nel carosello
carouselData.forEach((item, index) =>{

    //Creo un contenitore e aggiungo la slide principale
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carouselItem')

    //versione compatta di: if(index=activeIndex){d-block}else{d-none}
    //vedo una sola immagine principale in base alla sua posizione nell'array
    carouselItem.style.display = index === currentIndex ? 'block' : 'none';

    //Genero l'immagine centrale
    const img = document.createElement('img');
    img.src = item.url;
    img.alt = item.title;
    
    //Genero un elemento per la descrizione
    const description = document.createElement('h2');
    description.textContent = item.description;
    
    //Genero un elemento per il titolo
    const title = document.createElement('p');
    title.textContent = item.title;

    //Appendo l'immagine, il titolo e la descrizione
    carouselItem.appendChild(img);
    carouselItem.appendChild(description);
    carouselItem.appendChild(title);


    //Appendo il div così da visualizzare il tutto
    carouselContainer.appendChild(carouselItem);

    //Ripeto il procedimento per creare le icone (finchè non ho riletto i bonus avevo rimosso il termine Miniature dalla mia testa)
    const iconItem = document.createElement('div');
    iconItem.classList.add('img-selector');

    //creo un div e inserisco le miniature
    const iconImg = document.createElement('img');
    iconImg.src = item.url;
    iconImg.alt = item.title;
    iconItem.appendChild(iconImg);
    iconContainer.appendChild(iconItem);
  });

  prevButtonHTML.addEventListener('click', function () {
    // Cambio l'indice per visualizzare l'immagine giusta, facendo in modo che rimanga sempre ni limiti dell'array
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;

    // Nascondo tutte le altre immagini
    const allImg = document.querySelectorAll('.carouselItem');
    allImg.forEach((image, index) => {
        image.style.display = index === currentIndex ? 'block' : 'none';
    });
});

nextButtonHTML.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % carouselData.length;

    const allImg = document.querySelectorAll('.carouselItem');
    allImg.forEach((image, index) => {
        image.style.display = index === currentIndex ? 'block' : 'none';
    });
});

//ANCHOR Funzione di autoscorrimento
var autoplayInterval = setInterval(function () {
    currentIndex = (currentIndex + 1) % carouselData.length;

    const allImages = document.querySelectorAll('.carouselItem');
    allImages.forEach((image, index) => {
      image.style.display = index === currentIndex ? 'block' : 'none';
    });
  }, 3000);

//ANCHOR Stop Button
const stopButtonHTML=document.getElementById('stopButton')
stopButtonHTML.addEventListener('click', function() {
  clearInterval(autoplayInterval)
});




