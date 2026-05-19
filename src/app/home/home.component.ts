import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule
  ],
  animations: [
    trigger('overlayEnter', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translate(-50%, 220px)'
        }),
        animate(
          '2700ms cubic-bezier(0.22, 1, 0.36, 1)',
          style({
            opacity: 1,
            transform: 'translate(-50%, 0)'
          })
        )
      ])
    ])
  ],
  template: `

    <div class="hero-wrapper">

      <div class="home-hero-img-container">
        <!-- Static hero image -->
        <img src="/assets/KK-Portfolio-Home-Hero-IMG-Transparent.png" alt="Hero image for Kaitlyn Kelly's Web Development Portfolio" class="home-hero-img">

        <!-- Animated hero image -->
        <img src="/assets/KK-Portfolio-Home-Hero-IMG-Overlay.png" alt="Overlay image that states 'web developer' in bold font" class="home-hero-overlay-img" [@overlayEnter]>

        <a routerLink='/about'><button class="home-hero-btn">Learn More.</button></a>
      </div>

    </div>

    <div class="home-main-wrapper-desktop">
      <div class="home-sections-options">
        <div class="development-option">
          <h1 (click)="toggle('development')">
            web development
            <span class="arrow-wrapper" [class.active]="activeSection === 'development'">
              <svg class="arrow-svg" viewBox="0 0 50 20">
                <path d="M5 10 L55 10 L50 5 M55 10 L50 15"
                  stroke="currentColor"
                  stroke-width="3"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
              </svg>
          </span>
          </h1>
        </div>

        <div class="design-option">
          <h1 (click)="toggle('design')">design
          <span class="arrow-wrapper" [class.active]="activeSection === 'design'">
              <svg class="arrow-svg" viewBox="0 0 50 20">
                <path d="M5 10 L55 10 L50 5 M55 10 L50 15"
                  stroke="currentColor"
                  stroke-width="3"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
              </svg>
          </span>
          </h1>
        </div>

        <div class="specialties-option">
          <h1 (click)="toggle('specialties')">specialties
          <span class="arrow-wrapper" [class.active]="activeSection === 'specialties'">
              <svg class="arrow-svg" viewBox="0 0 50 20">
                <path d="M5 10 L55 10 L50 5 M55 10 L50 15"
                  stroke="currentColor"
                  stroke-width="3"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
              </svg>
          </span>
          </h1>
        </div>

        <div class="clients-option">
          <h1 (click)="toggle('clients')">happy clients
          <span class="arrow-wrapper" [class.active]="activeSection === 'clients'">
              <svg class="arrow-svg" viewBox="0 0 50 20">
                <path d="M5 10 L55 10 L50 5 M55 10 L50 15"
                  stroke="currentColor"
                  stroke-width="3"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
              </svg>
          </span>
          </h1>
        </div>
      </div>

      <div class="home-sections-content">
        <div class="development-content" [class.active]="activeSection === 'development'">
          <p>I am currently enrolled in Bellevue University's Web Development program with a graduation date of Fall 2026. With my prior experience as a coding tween on MySpace, 6+ years as a professional e-commerce website manager, freelancing work, and now my formal education, I have both a passion for web development and the skill set to support it.</p>
        </div>

        <div class="design-content" [class.active]="activeSection === 'design'">
          <p>I pride myself on having not only the analytical and technical brain needed for intense development work, but also a keen eye for detail and design. My favorite work involves being able to create or enhance a digital environment in both the technical landscape, and the visual appeal.</p>
        </div>

        <div class="specialties-content" [class.active]="activeSection === 'specialties'">
          <p>With 6+ years in the e-commerce space, I've had the opportunity to apply my development and design skills on the daily basis. I enjoy working to find the balance between a seamless UX, consistent and beautiful UI, and conversion-friendly practices.</p>
        </div>

        <div class="clients-content" [class.active]="activeSection === 'clients'">
          <p>I've had the privilege of working with many fantastic small businesses on various projects ranging from full-time website management to small aesthetic or technical tweaks:</p>
          <ul>
            <li>eCreamery Ice Cream</li>
            <li>Sandhills Elixir</li>
            <li>MadeMeals</li>
            <li>Simple Peptide</li>
            <li>Good Grace</li>
            <li>Clothes Mentor Omaha</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="home-main-wrapper-mobile">
      <div class="home-sections-options-mobile">
        <div class="development-option-mobile">
          <h1 (click)="toggle('development')">web development
            <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'development'">
              <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                <path d="M30 30 L48 30 Q55 30 55 40 L55 52 L50 47 M55 52 L60 47"
                      stroke="currentColor"
                      stroke-width="3"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </span>
          </h1>
        </div>

        <div class="development-content-mobile" *ngIf="activeSection === 'development'">
              <p>I am currently enrolled in Bellevue University's Web Development program with a graduation date of Fall 2026. With my prior experience as a coding tween on MySpace, 6+ years as a professional e-commerce website manager, freelancing work, and now my formal education, I have both a passion for web development and the skill set to support it.</p>
          </div>

        <div class="development-option-mobile">
          <h1 (click)="toggle('design')">design
            <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'design'">
              <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                <path d="M30 30 L48 30 Q55 30 55 40 L55 52 L50 47 M55 52 L60 47"
                      stroke="currentColor"
                      stroke-width="3"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </span>
          </h1>
        </div>

        <div class="design-content-mobile" *ngIf="activeSection === 'design'">
            <p>I pride myself on having not only the analytical and technical brain needed for intense development work, but also a keen eye for detail and design. My favorite work involves being able to create or enhance a digital environment in both the technical landscape, and the visual appeal.</p>
          </div>

        <div class="development-option-mobile">
          <h1 (click)="toggle('specialties')">specialties
            <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'specialties'">
              <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                <path d="M30 30 L48 30 Q55 30 55 40 L55 52 L50 47 M55 52 L60 47"
                      stroke="currentColor"
                      stroke-width="3"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </span>
          </h1>
        </div>

        <div class="specialties-content-mobile" *ngIf="activeSection === 'specialties'">
            <p>With 6+ years in the e-commerce space, I've had the opportunity to apply my development and design skills on the daily basis. I enjoy working to find the balance between a seamless UX, consistent and beautiful UI, and conversion-friendly practices.</p>
          </div>

        <div class="development-option-mobile">
          <h1 (click)="toggle('clients')">happy clients
            <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'clients'">
              <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                <path d="M30 30 L48 30 Q55 30 55 40 L55 52 L50 47 M55 52 L60 47"
                      stroke="currentColor"
                      stroke-width="3"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </span>
          </h1>
        </div>

        <div class="clients-content-mobile" *ngIf="activeSection === 'clients'">
          <p>I've had the privilege of working with many fantastic small businesses on various projects ranging from full-time website management to small aesthetic or technical tweaks:</p>
          <ul>
            <li>eCreamery Ice Cream</li>
            <li>Sandhills Elixir</li>
            <li>MadeMeals</li>
            <li>Simple Peptide</li>
            <li>Good Grace</li>
            <li>Clothes Mentor Omaha</li>
          </ul>
          </div>

      </div>
    </div>
  `,
  styles: `

  .hero-wrapper {
    width: 100%;
    margin: 0 auto;
  }

  .home-hero-img-container {
    width: 100%;
    position: relative;
    /* removed with background img test
    margin-top: 10px; */
  }

  .home-hero-img {
    width: 100%;
    height: auto;
    display: block;
  }

  .home-hero-overlay-img {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    pointer-events: none;
}

  .home-hero-btn {
    font-family: 'Parkinsans', sans-serif;
    font-size: 2.5vw;
    padding: 2vw 5vw;
    background-color: #d5a021;
    text-align: center;
    border-radius: 80px;
    border: none;
    color: #fff;
    box-shadow: 0.2em 0.3em 0.3em #523b07;
    position: absolute;
    top: 49%; /* vertical */
    left: 23%; /* horizontal */
    cursor: pointer;
  }

  .home-hero-btn:hover {
    background-color: #6daedb;
    box-shadow: 0.2em 0.3em 0.3em #21333f;
    color: #fff;
  }

  .home-main-wrapper-mobile {
    display: none;
  }

  .home-main-wrapper-desktop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 2em;
    align-items: flex-start;
    height: 55vh;
    background-color: #af3b63cc; */
  }

  .home-sections-options {
    flex-grow: 2;
    flex-basis: 30%;
    min-width: max-content;
    margin-left: 3.5em;
  }

  .home-sections-options h1 {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;
    cursor: pointer;
    transition: transform 0.25s ease;
  }

  .home-sections-options h1:hover {
    color: #83c4f3;
    transform: scale(1.1);
  }

  /* AI assistance with arrow */
  .arrow-wrapper {
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    height: 1.2em;
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    margin-left: 0.5em;
  }

  .arrow-wrapper.active {
    opacity: 1;
    transform: translateX(0);
  }

  .arrow-wrapper.active .arrow-svg path {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: draw 0.5s ease forwards;
  }

  .arrow-svg {
    width: 1.2em;
    height: 1.2em;
    overflow: visible;
  }

  @keyframes draw {
    to { stroke-dashoffset: 0; }
  }
  /* End AI assistance */

  .home-sections-content {
    flex-grow: 5;
    padding-top: 1.1em;
    padding-left: 2.5em;
    margin-right: 3.5em;
  }

  .home-sections-content > div {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.45s ease, opacity 0.35s ease;
  }

  .home-sections-content > div.active {
    max-height: 600px;
    opacity: 1;
  }

  h1 {
    font-family: "fields", sans-serif;
    font-weight: 700;
    letter-spacing: -1.9px;
    color: #fff;
    font-size: 3rem;
  }

  h2 {
    font-family: "fields", sans-serif;
    font-weight: 300;
    letter-spacing: -1px;
    color: #6daedb;
    font-size: rem;
  }

  p {
    font-family: 'Parkinsans', sans-serif;
    font-weight: 400;
    color: #fff;
    letter-spacing: -0.5px;
    font-size: 1.1rem;
  }

  .clients-content li {
      list-style-type: none;
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      color: #83c4f3;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
    }

  /* TABLET STYLES */
  @media (max-width: 1279px) {

     .home-hero-img-container {
      margin-top: 0px;
    }

    .home-hero-overlay-img {
      position: absolute;
      bottom: 2%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: auto;
      pointer-events: none;
    }

    .home-main-wrapper-desktop {
      display: none;
    }

    .home-main-wrapper-mobile {
      display: flex;
      flex-direction: column;
      background-color: #af3b63cc;
      padding: 1em 0;
    }

    .home-sections-options-mobile {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .home-main-wrapper-mobile h1 {
      font-family: "fields", sans-serif;
      font-weight: 500;
      letter-spacing: -2px;
      color: #fff;
      font-size: 2.2rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      margin: 0.5em auto;
      transition: transform 0.25s ease;
    }

    .home-main-wrapper-mobile h1:hover {
      color: #83c4f3;
      transform: scale(1.1);
    }

    /* AI assistance with arrow */
    .arrow-wrapper-mobile {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      margin-left: -0.4em;
      opacity: 0;
      transform: translateY(-6px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .arrow-wrapper-mobile.active {
      opacity: 1;
      transform: translateY(0);
    }

    .arrow-svg-mobile {
      width: 60px;
      height: 60px;
      overflow: visible;
    }

    .arrow-wrapper-mobile.active .arrow-svg-mobile path {
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation: draw 0.7s ease forwards;
    }

    @keyframes draw {
      to {stroke-dashoffset: 0;}
    }
    /* End AI Assistance */

    .home-main-wrapper-mobile p, .home-main-wrapper-mobile ul {
      text-align: center;
    }

    .development-content-mobile p, .design-content-mobile p, .specialties-content-mobile p, .clients-content-mobile p {
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      color: #fff;
      letter-spacing: -0.5px;
      font-size: 2em;
      padding: 0 3.5em;
    }

    .clients-content-mobile li {
      list-style-type: none;
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      color: #83c4f3;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
    }

    /* MOBILE STYLES */
    @media (max-width: 768px) {

      .home-main-wrapper-mobile h1 {
        font-family: "fields", sans-serif;
        font-weight: 400;
        letter-spacing: -2px;
        color: #fff;
        font-size: 1.75rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        margin: 0.2em auto;
      }

      .development-content-mobile p, .design-content-mobile p, .specialties-content-mobile p, .clients-content-mobile p {
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      color: #fff;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
      padding: 0 1.5em;
    }

    .clients-content-mobile li {
      list-style-type: none;
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      color: #83c4f3;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
    }
  }
  `
})

export class HomeComponent {
    activeSection: string | null = null

    toggle(section: string) {
      this.activeSection = this.activeSection === section ? null : section;
    }

}
