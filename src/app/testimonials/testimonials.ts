import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {

  testimonials = [
    {
      msg: 'Horem ipsum dolor sit amet, consectetur adipiscing elit. service and fast delivery!',
      title:'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      name: 'Morem ipsum dolor'
    },
    {
     msg: 'Horem ipsum dolor sit amet, consectetur adipiscing elit. service and fast delivery!',
     title:'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
     name: 'Morem ipsum dolor'
    }
  ];

}
