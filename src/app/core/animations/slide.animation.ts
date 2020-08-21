// import the required animation functions from the angular animations module
import { trigger, animate, transition, style } from "@angular/animations";

export const fadeInUpAnimation = trigger("fadeInUpAnimation", [
  transition(":enter", [
    style({
      opacity: 0,
      transform: "translate3d(0,40px,0)",
    }),
    animate(
      1500,
      style({
        opacity: 1,
        transform: "translate3d(0,0,0)",
      })
    ),
  ]),
]);
