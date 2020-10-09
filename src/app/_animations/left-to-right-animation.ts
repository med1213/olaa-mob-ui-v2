// import the required animation functions from the angular animations module
import { trigger, animate, transition, style } from '@angular/animations';

export const leftToRightAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('leftToRightAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ marginLeft: '-100%' }),

            // animation and styles at end of transition
            animate('.3s', style({ marginLeft: '0' }))
        ])
    ]);
