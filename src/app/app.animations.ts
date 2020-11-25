import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query
} from '@angular/animations';

export const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

export const slider =
  trigger('routeAnimations', [
    transition('* => home', slideTo('left')),
    transition('home => *', slideTo('right')),
    transition('* => contact-us', slideTo('right')),
    transition('contact-us => *', slideTo('left')),
    transition('solutions => about', slideTo('right')),
    transition('about => solutions', slideTo('left'))
  ]);

function slideTo(direction) {
  const optional = {
    optional: true
  };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%',
        opacity: 1
      })
    ], optional),
    query(':enter', [
      style({
        [direction]: '-100%',
        opacity: 0
      })
    ]),
    group([
      query(':leave', [
        animate('700ms ease', style({
          [direction]: '100%',
          opacity: 0
        }))
      ], optional),
      query(':enter', [
        animate('700ms ease', style({
          [direction]: '0%',
          opacity: 1
        }))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    query(':leave', animateChild()),
    query(':enter', animateChild()),
  ];
}
