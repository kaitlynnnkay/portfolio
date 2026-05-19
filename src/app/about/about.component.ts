import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule
  ],
  template: `
    <div class="about-main-wrapper">

      <!-- START PERSONAL -->
      <div class="personal-wrapper">
      <h1>Personal Life</h1>
        <div class="personal-extras">
          <div class="personal-favorites">
            <h2 (click)="toggle('personal-favorites')">Favorites</h2>
              <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'personal-favorites'">
                <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                  <path d="M30 10 L30 50 M30 50 L20 40 M30 50 L40 40"
                        stroke="#fff"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </span>
            <div class="personal-favorites-list" [class.active]="activeSection === 'personal-favorites'">
              <p>Favorite Movie:</p>
              <p>Mad Max Fury Road</p>
              <p>Favorite Dessert:</p>
              <p>Cannoli</p>
              <p>Favorite Drink:</p>
              <p>Iced Oat Milk Latte</p>
              <p>Favorite Team:</p>
              <p>Chelsea FC</p>
            </div>
          </div>

          <div class="personal-life">
            <h2 (click)="toggle('personal-life')">Life</h2>
              <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'personal-life'">
                <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                  <path d="M30 10 L30 50 M30 50 L20 40 M30 50 L40 40"
                        stroke="#fff"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </span>
            <div class="personal-life-list" [class.active]="activeSection === 'personal-life'">
              <p>Located in:</p>
              <p>Bellevue, NE</p>
              <p>Family:</p>
              <p>Married & 1.5 Kids</p>
              <p>Pets:</p>
              <p>Two Perfect Dogs</p>
            </div>
          </div>

          <div class="personal-hobbies">
            <h2 (click)="toggle('personal-hobbies')">Hobbies</h2>
              <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'personal-hobbies'">
                <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                  <path d="M30 10 L30 50 M30 50 L20 40 M30 50 L40 40"
                        stroke="#fff"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </span>
            <div class="personal-hobbies-list" [class.active]="activeSection === 'personal-hobbies'">
              <p>For Fun:</p>
              <p>Travel</p>
              <p>For Exercise:</p>
              <p>Pilates</p>
              <p>For Leisure:</p>
              <p>Reading</p>
              <p>For Creativity:</p>
              <p>Cross-Stitch</p>
            </div>
          </div>
        </div>
      </div>
      <!-- END PERSONAL -->

      <!-- START PROFESSIONAL -->
      <div class="professional-wrapper">
      <h1>Professional Life</h1>
        <div class="professional-extras">
          <div class="professional-jobs">
            <h2 (click)="toggle('professional-jobs')">My Jobs</h2>
              <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'professional-jobs'">
                <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                  <path d="M30 10 L30 50 M30 50 L20 40 M30 50 L40 40"
                        stroke="#fff"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </span>
            <div class="professional-jobs-list" [class.active]="activeSection === 'professional-jobs'">
              <p>Full Time:</p>
              <p>Website & Operations Manager</p>
              <p>Freelance:</p>
              <p>E-Commerce Web Developer</p>
              <p>Freelance:</p>
              <p>E-commerce Email Marketing</p>
            </div>
          </div>

          <div class="professional-education">
            <h2 (click)="toggle('professional-education')">Education</h2>
              <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'professional-education'">
                <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                  <path d="M30 10 L30 50 M30 50 L20 40 M30 50 L40 40"
                        stroke="#fff"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </span>
            <div class="professional-education-list" [class.active]="activeSection === 'professional-education'">
              <p>Bellevue University:</p>
              <p>Bachelor's of Science in Web Development</p>
            </div>
          </div>
        </div>
      </div>
      <!-- END PROFESSIONAL -->

      <!-- START GOALS -->
      <div class="goals-wrapper">
      <h1>Goals</h1>
        <div class="goals-extras">
          <div class="goals-jobs">
            <h2 (click)="toggle('goals-jobs')">Professional Goals</h2>
              <span class="arrow-wrapper-mobile" [class.active]="activeSection === 'goals-jobs'">
                <svg class="arrow-svg-mobile" viewBox="0 0 60 60">
                  <path d="M30 10 L30 50 M30 50 L20 40 M30 50 L40 40"
                        stroke="#fff"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                         stroke-linejoin="round"/>
                </svg>
              </span>
            <div class="goals-jobs-list" [class.active]="activeSection === 'goals-jobs'">
              <p>One-Year Plan:</p>
              <p>Acquire more clients and continue to build my portfolio, with an emphasis on development projects.</p>
              <p>Three-Year Plan:</p>
              <p>Land a full time Web Development position.</p>
              <p>Five-Year Plan:</p>
              <p>Combine my development knowledge with my 12+ years of leadership and managerial experience to eventually lead a DevOps team.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: `

  .about-main-wrapper {
    margin: 0 auto;
  }

  .about-main-wrapper h1 {
    text-align: center;
  }

  .personal-wrapper h1 {
    font-family: "fields", sans-serif;
    font-weight: 900;
    letter-spacing: -1.9px;
    color: #f3b629;
    font-size: 3rem;
  }

  .professional-wrapper h1 {
    font-family: "fields", sans-serif;
    font-weight: 900;
    letter-spacing: -1.9px;
    color: #83c4f3;
    font-size: 3rem;
  }

  .goals-wrapper h1 {
    font-family: "fields", sans-serif;
    font-weight: 900;
    letter-spacing: -1.9px;
    color: #af3b63;
    font-size: 3rem;
  }

  .personal-wrapper {
    background-color: #af3b63cc;
    padding: 1rem 0;
    min-height: 400px;
  }

  .professional-wrapper {
    background-color: #b1779bcc;
    padding: 1rem 0;
    min-height: 400px;
  }

  .goals-wrapper {
    background-color: #d5a021cc;
    padding: 1rem 0;
    min-height: 400px;
  }

  /* AI assistance with arrow */
    .arrow-wrapper-mobile {
      display: block;
      margin: 0.4em auto 0; /* centers it */
      width: 40px;
      height: 40px;
      opacity: 0;
      transform: translateY(-6px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .arrow-wrapper-mobile.active {
      opacity: 1;
      transform: translateY(0);
    }

    .arrow-svg-mobile {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .arrow-wrapper-mobile.active .arrow-svg-mobile path {
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation: draw 0.7s ease forwards;
    }

    @keyframes draw {
      to { stroke-dashoffset: 0; }
    }
  /* End AI Assistance */

  .personal-extras, .professional-extras, .goals-extras {
    display: flex;
    flex-direction: row;
    gap: 8em;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
  }

  .personal-extras div, .professional-extras div, .goals-extras div {
    flex: 1;
    text-align: center;
    margin: 0 3.5em;
  }

  .personal-extras h2, .professional-extras h2, .goals-extras h2 {
    font-family: "fields", sans-serif;
    font-weight: 300;
    letter-spacing: -1.7px;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
    margin-bottom: -0.2em;
    transition: transform 0.25s ease;
  }

 .personal-extras h2:hover {
    color: #f3b629;
    transform: scale(1.1);
  }

  .professional-extras h2:hover {
    color: #83c4f3;
    transform: scale(1.1);
  }

  .goals-extras h2:hover {
    color: #af3b63;
    transform: scale(1.1);
  }

  p {
    font-family: 'Parkinsans', sans-serif;
    font-weight: 400;
    color: #fff;
    letter-spacing: -0.5px;
    font-size: 1.1rem;
    flex-grow: 2;
  }

  .personal-favorites-list, .personal-life-list, .personal-hobbies-list, .professional-jobs-list, .professional-education-list, .goals-jobs-list {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.45s ease, opacity 0.35s ease;
  }

  .personal-favorites-list.active, .personal-life-list.active, .personal-hobbies-list.active, .professional-jobs-list.active, .professional-education-list.active, .goals-jobs-list.active {
    max-height: 2000px;
    opacity: 1;
  }

  .personal-favorites-list p:nth-child(odd), .personal-life-list p:nth-child(odd), .personal-hobbies-list p:nth-child(odd) {
    color: #f3b629;
    font-size: 0.9rem;
    margin-bottom: -1em;
    font-weight: 500;
  }

  .professional-jobs-list p:nth-child(odd), .professional-education-list p:nth-child(odd) {
    color: #83c4f3;
    font-size: 0.9rem;
    margin-bottom: -1em;
    font-weight: 500;
  }

  .goals-jobs-list p:nth-child(odd) {
    color: #af3b63;
    font-size: 0.9em;
    margin-bottom: -1em;
    font-weight: 500;
  }

  /* TABLET STYLES */
  @media (max-width: 1279px) {

    .personal-wrapper h1, .professional-wrapper h1, .goals-wrapper h1 {
      font-weight: 900;
      font-size: 2.2rem;
    }

    .personal-extras h2, .professional-extras h2, .goals-extras h2 {
      font-size: 1.8rem;
      margin: 0.5em auto;
    }

    p {
      font-weight: 400;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
    }

    .personal-wrapper, .professional-wrapper, .goals-wrapper {
      height: auto;
      min-height: auto;
      padding: 1em 0;
    }

    .personal-extras, .professional-extras, .goals-extras {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: -0;
    }

    .personal-extras div, .professional-extras div, .goals-extras div {
      flex: 1;
      text-align: center;
    }

    .personal-favorites-list.active, .personal-life-list.active, .personal-hobbies-list.active, .professional-jobs-list.active, .professional-education-list.active, .goals-jobs-list.active {
      max-height: 600px;
      opacity: 1;
    }
  }

    /* MOBILE STYLES */
    @media (max-width: 768px) {


    .personal-wrapper h1, .professional-wrapper h1, .goals-wrapper h1 {
      font-size: 1.75rem;
    }

    .personal-extras div, .professional-extras div, .goals-extras div {
      margin: 0.3em 0;
    }

    .personal-extras h2, .professional-extras h2, .goals-extras h2 {
      font-size: 1.4rem;
      margin: 0.2em auto;
      font-weight: 400;
      letter-spacing: -0.5px;
    }

    p {
      font-weight: 400;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
    }

    .personal-favorites-list p:nth-child(odd), .personal-life-list p:nth-child(odd), .personal-hobbies-list p:nth-child(odd) {
      color: #83c4f3;
      font-size: 0.9rem;
      margin-bottom: -1em;
      font-weight: 500;
    }

    .professional-jobs-list p:nth-child(odd), .professional-education-list p:nth-child(odd) {
      color: #780F3D;
      font-size: 0.9rem;
      margin-bottom: -1em;
      font-weight: 500;
    }

    .goals-jobs-list p:nth-child(odd) {
      color: #77566a;
      font-size: 0.9em;
      margin-bottom: -1em;
      font-weight: 500;
    }

    .arrow-wrapper-mobile {
      height: 0;
      margin: 0;
      overflow: hidden;
    }

    .arrow-wrapper-mobile.active {
      height: 40px;
      margin: 0.2em auto;
      opacity: 1;
      transform: translateY(0);
    }
  }

  `
})
export class AboutComponent {
  activeSection: string | null = null

    toggle(section: string) {
      this.activeSection = this.activeSection === section ? null : section;
    }


}
