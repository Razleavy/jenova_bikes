// import the required animation functions from the angular animations module
import { trigger, animate, transition, style, state } from "@angular/animations";

export const fadeInUpAnimation = trigger("fadeInUpAnimation", [
  state('default', style({
    opacity: 0,
    transform: "translate3d(0,40px,0)"
  })),
  state('animate', style({
    opacity: 1,
    transform: "translate3d(0,0,0)"
  })),
  transition('* => *', animate(300))
]);