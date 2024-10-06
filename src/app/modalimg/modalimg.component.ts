import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MainComponent } from '../main/main.component';
import { Dialog } from '@angular/cdk/dialog';
@Component({
  selector: 'app-modalimg',
  templateUrl: './modalimg.component.html',
  styleUrls: ['./modalimg.component.scss']
})
export class ModalimgComponent implements OnInit {
ngOnInit(): void {

}
images: string[] = ['./assets/imagess.jpg', './assets/img.jpg', './assets/img2.jpg'];
currentIndex: number = 0;
currentImage: string = this.images[this.currentIndex];

previousImage() {
  this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  this.currentImage = this.images[this.currentIndex];
}

nextImage() {
  this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  this.currentImage = this.images[this.currentIndex];
}
constructor(private dialog:Dialog){}
close(){
  this.dialog.closeAll();
}
}
