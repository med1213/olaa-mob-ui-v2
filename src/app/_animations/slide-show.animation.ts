import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideShow = trigger(
    'slideShowAnimation', [
    state('show',
        style({
            display: 'block',
            opacity: '1'
        })
    ),
    state('notShow',
        style({
            opacity: '0',
            display: 'none'
        })),
    transition('show => notShow', [
        animate('0.25s')
    ]),
    transition('notShow => show', [
        animate('0.25s')
    ]),

]); 