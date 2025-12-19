import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Hero } from "../hero/hero";
import { WhyChooseUs } from "../why-choose-us/why-choose-us";
import { Testimonials } from "../testimonials/testimonials";
import { Footer } from "../footer/footer";
import { HowItWorks } from "../how-it-works/how-it-works";
import { AppPromo } from "../app-promo/app-promo";

@Component({
  selector: 'app-home',
  imports: [Header, Hero, WhyChooseUs, Testimonials, Footer, HowItWorks, AppPromo],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
