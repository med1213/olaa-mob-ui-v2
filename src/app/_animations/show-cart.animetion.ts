import { trigger, animate, transition, style } from '@angular/animations';

export const showCartAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('showCartAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({
                opacity: 0,
                transform: "translateY(-20px)"
            }),

            // animation and styles at end of transition
            animate('.5s', style({
                opacity: 1,
                transform: "translateY(0)"
            }))
        ]),
        // route 'enter' transition
        transition(':leave', [

            // css styles at start of transition
            style({
                opacity: 1,
                transform: "translateY(0)"
            }),

            // animation and styles at end of transition
            animate('.5s', style({
                opacity: 0,
                transform: "translateY(-20px)"
            }))
        ])
    ]);
