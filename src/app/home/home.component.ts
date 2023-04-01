import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    let temp = document.getElementById("blueShip");
    if (!temp) return;
    let blueShip: HTMLElement = temp;

    temp = document.getElementById("orangeShip");
    if (!temp) return;
    let orangeShip: HTMLElement = temp;

    temp = document.getElementById("parallax1");
    if (!temp) return;
    let parallaxDiv: HTMLElement = temp;

    let scroller: HTMLElement = this.elementRef.nativeElement.parentElement;

    let ScrollMethod = () => {
      // get the height currently scrolled (in percent)
      let percentage = 100.0 * scroller.scrollTop / parallaxDiv.clientHeight;

      blueShip.style.marginLeft = 0.45 * percentage + '%';
      blueShip.style.marginTop = -0.3 * percentage + '%';
      orangeShip.style.marginLeft = 0.15 * percentage + '%';
      orangeShip.style.marginTop = -0.12 * percentage + '%';
    }

    scroller.addEventListener("scroll", ScrollMethod);
  }
}
