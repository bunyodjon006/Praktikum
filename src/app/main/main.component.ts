import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ModalimgComponent } from '../modalimg/modalimg.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {
  cards = [
    {
      title: 'Yusupov Shuxrat Abdumo\'minovich',
      position: 'Direktor',
      text: 'Direktor',
      img: './assets/direktor.jpg'
    },
    {
      title: 'Abdurazzoqov  Shuhratillo Mamarajabovich',
      position: 'Direktor o\'rin bosari',
      text: 'Ishlab chiqarish bo\'yicha direktor o\'rin bosari ',
      img: './assets/direktor.jpg'
    }
    ,
    {
      title: 'Yusupov Shuxrat Abdumo\'minovich',
      position: 'Direktor',
      text: 'Direktor',
      img: './assets/direktor.jpg'
    },
    {
      title: 'Qurbonazarov Olimjon Djumaqulovich',
      position: "Bo'lim boshlig'i",
      text: "O'quv-metodik bo'lim boshlig'i ",
      img: './assets/direktor.jpg'
    },
    {
      title: 'Tilakov Abdurahmon Iskandarovich',
      position: 'O\'qituvchi',
      text: 'Uslubchi',
      img: './assets/direktor.jpg'
    },


  ];

  currentIndex = 0;
  visibleCardsCount = 0; // 2 cards shown at a time
  
  visibleCards = this.cards.slice(0, 1); // Display 2 cards at a time
  currentsIndex = 0;
  nextCard() {
    if (this.currentIndex + this.visibleCardsCount < this.cards.length) {
      this.currentIndex++;
    }
  }
  nextsCard(){
    if (this.currentsIndex + 1 < this.cards.length) {
      this.currentsIndex++;
      this.updateVisibleCards();
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  prevsCard() {
    if (this.currentsIndex > 0) {
      this.currentsIndex--;
      this.updateVisibleCards();
    }
  }
  updateVisibleCards() {
    this.visibleCards = this.cards.slice(this.currentsIndex, this.currentsIndex + 1);
  }

  getCarouselTransform() {
    return `translateX(-${this.currentIndex * (250)}px)`; // 200px card width + 10px margin
  }
  handleClick() {
    if (window.innerWidth <= 979) {
      this.prevsCard();
    }
    else {
      this.prevCard();
    }
  }
  handleClicks(){ 
    if(window.innerWidth <=979){
      this.nextsCard();
    }
    else {
       this.nextCard();
    }
  }
  constructor(private dialog:Dialog){}
 OpenModal(){
 this.dialog.open(ModalimgComponent);
 }
}
