import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  private isDragging = false;
  private currentX = 0;
  private currentY = 0;
  private initialX = 0;
  private initialY = 0;
  private xOffset = 0;
  private yOffset = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    //if()

    console.log('onMouseMove');
    
    if (this.isDragging) {
      event.preventDefault();

      this.currentX = event.clientX - this.initialX;
      this.currentY = event.clientY - this.initialY;

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;

      const element = event.target as HTMLElement;
      element.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {

    console.log('onMouseUp');
    
    if (this.isDragging) {
      this.initialX = this.currentX;
      this.initialY = this.currentY;

      this.isDragging = false;
    }
  }

  startDragging(event: MouseEvent) {

    console.log('startDragging');

    this.initialX = event.clientX - this.xOffset;
    this.initialY = event.clientY - this.yOffset;

    if (event.target instanceof HTMLElement) {
      this.isDragging = true;
    }
  }
}
