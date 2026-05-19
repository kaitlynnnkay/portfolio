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
    <div class="resume-wrapper">

      <a href="/assets/Kaitlyn-Kelly-Resume.pdf" download="Kaitlyn Kelly Resume.pdf">
        <div class="resume-download">
          <h3>TL;DR</h3>
          <p>Download Resume</p>
        </div>
      </a>

      <div class="education">
        <h1>Education</h1>
          <div class="education-resume-wrapper">
            <div class="education-resume">
              <h2>Bellevue University</h2>
              <p>2025 to 2026</p>
              <p>Bachelor's of Science in Web Development</p>
            </div>
          </div>
        </div>

      <div class="development">
        <h1>Development</h1>
        <div class="development-resume-wrapper">
          <div class="development-resume">
            <h2>eCreamery Ice Cream</h2>
            <p>2020 - Current</p>
            <h3>Website & Operations Manager</h3>
            <ul>
              <li>Maintain Shopify-based Website</li>
              <li>Custom Coding</li>
              <li>App Implementation</li>
              <li>Data Analytics</li>
              <li>E-commerce Strategy & Operations</li>
            </ul>
          </div>

          <div class="development-resume">
            <h2>eComm By Kaitlyn</h2>
            <p>2024 - Current</p>
            <h3>Freelancer</h3>
            <ul>
              <li>Website Maintenance</li>
              <li>Custom Coding</li>
              <li>App Implementation</li>
              <li>Strategy Consulting</li>
              <li>Email Marketing Design &  Strategy</li>
            </ul>
          </div>

          <div class="development-resume">
            <h2>No Substitutes</h2>
            <p>2023 - Current</p>
            <h3>E-commerce Consultant</h3>
            <ul>
              <li>Audit Websites for Performance, Accessibility, & Conversion</li>
              <li>Email Marketing</li>
              <li>Website Redesign & Merchandising</li>
              <li>Custom Coding</li>
              <li>Merchandising</li>
              <li>App Implementation</li>
            </ul>
          </div>
        </div>
      </div>


      <div class="leadership">
        <h1>Leadership</h1>
        <div class="leadership-resume-wrapper">
          <div class="leadership-resume">
            <h2>eCreamery Ice Cream</h2>
            <p>2020 - Current</p>
            <h3>Website & Operations Manager</h3>
            <ul>
              <li>Process Implementation</li>
              <li>Oversee Customer Service, Fulfillment, & Production</li>
              <li>Employee Hiring & Onboarding</li>
              <li>Client & Vendor Relationships</li>
            </ul>
          </div>

          <div class="leadership-resume">
            <h2>Scooter's Coffee</h2>
            <p>2016 - 2020</p>
            <h3>Director of Operations</h3>
            <ul>
              <li>Oversaw 20 Locations</li>
              <li>Training & Development</li>
              <li>Labor& Product Budgeting</li>
              <li>Process Implementation</li>
              <li>Employee Hiring & Onboarding</li>
              <li>Client & Vendor Relationships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .resume-wrapper {
      margin: 0 auto;
      text-align: center;
    }

    /* AI assistance with background "flashing" */
    .resume-download {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      border-radius: 50%;
      width: 8.5rem;
      height: 8.5rem;
      box-shadow: 0.2em 0.3em 0.3em #523546;
      animation: flash 2.5s infinite;
    }

    @keyframes flash {
      0%, 100% {
        background-color: #c492b1;
      }
      25% {
        background-color: #d5a021;
      }
      50% {
        background-color: #af3b63;
      }
      75% {
        background-color: #83c4f3;
      }
    }

    .resume-download h3 {
      color: #fff;
      font-size: 1.1rem;
      font-family: "fields", sans-serif;
      font-weight: 700;
      letter-spacing: -1.2px;
      margin: 0;
    }

    .resume-download p {
      font-size: 1rem;
      margin: 0;
    }

    h1 {
      font-family: "fields", sans-serif;
      font-weight: 900;
      letter-spacing: -1.9px;
      color: #fff;
      font-size: 3rem;
    }

    h2 {
      font-family: "fields", sans-serif;
      font-weight: 700;
      letter-spacing: -1.2px;
      font-size: 2rem;
      color: #fff;
      margin-bottom: 0;
    }

    .development h3 {
      font-size: 1.7rem;
      font-family: "fields", sans-serif;
      font-weight: 700;
      letter-spacing: -1.2px;
      margin: 0;
      color: #af3b63;
    }

    .leadership h3 {
      font-size: 1.7rem;
      font-family: "fields", sans-serif;
      font-weight: 700;
      letter-spacing: -1.2px;
      margin: 0;
      color: #ebb026;
    }

    p {
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
      color: #fff;
    }

    li {
      text-align: left;
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
      color: #fff;
      margin: 0.5rem 0;
    }

    .education {
      background-color: #83c4f3cc;
      padding: 1rem 2rem 3rem;
    }

    .development {
      background-color: #af3b63cc;
      padding: 1rem 2rem 3rem;
    }

    .leadership {
      background-color: #d5a021cc;
      padding: 1rem 2rem 3rem;
    }

    .education-resume-wrapper {
      background-color: #c492b1;
      min-height: 200px;
      height: auto;
      box-sizing: border-box;
      padding: 2rem 0 0;
      padding: 0 2rem;
      border-radius: 15px;
    }

    .development-resume-wrapper, .leadership-resume-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2rem;
      padding-bottom: 2erm;
    }

    .education-resume {
      padding: 0.3rem 2.5rem;
    }

    .development-resume {
      flex: 1 1 calc(33.333% - 5rem);
      background-color: #6daedb;
      min-height: 450px;
      height: auto;
      box-sizing: border-box;
      padding: 0 2rem 2.5rem;
      display: flex;
      flex-direction: column;
      border-radius: 15px;
    }

    .leadership-resume {
      flex: 1 1 calc(50% - 5rem);
      background-color: #af3b63;
      min-height: 450px;
      height: auto;
      box-sizing: border-box;
      padding: 0 2rem 2.5rem;
      display: flex;
      flex-direction: column;
      border-radius: 15px;
    }

    /* TABLET STYLES */
    @media (max-width: 1279px) {

    h1 {
      font-size: 2.2rem;
      }

      h2 {
      font-size: 1.8rem;
     }

    .development h3, .leadership h3 {
      font-size: 1.5rem;
    }

    p {
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
      color: #fff;
    }

    li {
      text-align: left;
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
      color: #fff;
      margin: 0.5rem 0;
    }
  }

    /* MOBILE STYLES */
    @media (max-width: 768px) {
      .resume-download {
        bottom: 1rem;
        right: 1rem;
        border-radius: 50%;
        width: 5.5rem;
        height: 5.5rem;

      }

      .resume-download h3 {
        color: #fff;
        font-size: 1rem;
        font-family: "fields", sans-serif;
        font-weight: 700;
        letter-spacing: -1.2px;
        margin: 0;
      }

      .resume-download p {
        font-size: 0.8rem;
        margin: 0;
      }

      h1 {
      font-size: 1.75rem;
      }

      h2 {
      font-size: 1.4rem;
     }

    .development h3, .leadership h3 {
      font-size: 1.2rem;
    }
  }
  `
})
export class ResumeComponent {

}
