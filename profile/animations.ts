import {trigger, state, style, transition, animate, group, stagger, keyframes} from '@angular/animations'

export const SlideInOutAnimation=[
    trigger('slideInOut', [
        state('in', style({
            'max-height': '700px', 'opacity': '1', 
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 
        })),
        transition('in=>out', [group([
            animate('400ms ease-in-out',
            style({
                'opacity': '0'
            })),
          
            animate('450ms ease-in-out', style({
                'max-height': '0px'
            })),
            // animate('450ms ease-in-out', style({
            //     'display': 'none'
            // }))
        ])]),
        transition('out => in', [group([
            animate('400ms ease-in-out',
            style({
                'max-height': '700px'
            })),
          
            animate('450ms ease-in-out', style({
                'opacity': 1
            })),
            // animate('1000ms step-end', style({
            //     'display': 'block'
            // }))
        ]
        )])
    ])
]