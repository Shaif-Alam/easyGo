import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,                 // ✅ REQUIRED
  imports: [CommonModule], 
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
})

export class WhyChooseUs {
features = [
  {
    title: 'Real-Time Tracking',
    desc: 'Track your shipment every step',
    icon: '/assets/mob.png'
  },
  {
    title: 'Affordable Pricing',
    desc: 'Transparent & competitive rates',
   icon: '/assets/h.png'
  },
  {
    title: 'Customer Support',
    desc: '24/7 assistance',
    icon: '/assets/m.png'
  },
  {
    title: 'Reliable Network',
    desc: 'Trusted couriers',
    icon: '/assets/g.png'
  }
];

}
