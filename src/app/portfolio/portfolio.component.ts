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
    <div class="portfolio-wrapper">

      <div class="education-portfolio">
        <h1>Education</h1>

        <div class="education-portfolio-wrapper">
          <div class="education-project">
            <h2>Bio Site</h2>
            <p>Using introductory HTML and CSS only, I created a biographical site dedicated to a person in my life that I knew and had access to.</p>
            <p>This project heavily features basic HTML and CSS skills, and also serves as a comparison point for growth throughout my education.</p>
            <a href="https://github.com/kaitlynnnkay/bioSite">Download</a>
          </div>
          <div class="education-project">
            <h2>JavaScript Recipe</h2>
            <p>Using a provided HTML and CSS structure, I implemented JavaScript code to open and close portions of a recipe.</p>
            <p>This project highlights basic JavaScript skills.</p>
            <a href="https://github.com/kaitlynnnkay/web-330/tree/main/week-9/project12-03">Download</a>
          </div>
          <div class="education-project">
            <h2>RESTful API</h2>
            <p>This project is a Node.js and Express server that powers a hypothetical bookstore.</p>
            <p>The app demonstrates strong backend skills like routing, validation, error handling, and asynchronous database operations.</p>
            <a href="https://github.com/kaitlynnnkay/in-n-out-books-api">Download</a>
          </div>
          <div class="education-project">
            <h2>Python Program</h2>
            <p>For this assignment, myself and a cohort created a database for a bookstore and a python program to simulate seraching for a book(s) through guided prompts.</p>
            <p>This project highlights the understanding of Python, MongoDB, and the pairing of the two.</p>
            <a href="https://github.com/kaitlynnnkay/web-335/tree/main/week-9">Download</a>
          </div>
          <div class="education-project">
            <h2>MongoDB Business Rules</h2>
            <p>This attached PDF displays the understanding of business rules and how those would be applied to a database structure.</p>
            <a href="/assets/Kaitlyn_Kelly_Assignment4.2.pdf">Download</a>
          </div>
          <div class="education-project">
            <h2>Angular RPG Character Builder</h2>
            <p>For my first Angular project, I was instructed to build a simulated RPG Character Builder.</p>
            <p>This project highlights many skills including more advanced HTML & CSS, understanding of Angular, Angular Routing, various form types, and successful unit testing.</p>
            <a href="https://github.com/kaitlynnnkay/web-425/tree/main/data-files/rpg-character-builder">Download</a>
          </div>
        </div>
      </div>

      <div class="freelance-portfolio">
        <div class="freelance-portfolio-wrapper">
          <h1>Freelance</h1>
            <div class="freelance-project">
              <p>eComm By Kaitlyn is a freelancing endeavor focused on helping small, e-commerce business owners elevate their digital presence, improve conversion, engage their customers, and simplify backend operations.</p>
              <p>Skills used include:</p>
              <ul>
                <li>Custom Coding</li>
                <li>E-commerce Merchandising</li>
                <li>Email Marketing Strategy</li>
                <li>Brand Design</li>
                <li>App Implmentation</li>
                <li>Data Analytics</li>
              </ul>
              <a href="/assets/eCommByKaitlyn-Portfolio.pdf" alt="PDF for eComm By Kaitlyn portfolio">Download</a>
            </div>
        </div>
      </div>

    </div>


  `,
  styles: `
    .portfolio-wrapper {
      margin: 0 auto;
      text-align: center;
    }

    .education-portfolio {
      background-color: #d5a021cc;
      padding-top: 1rem;
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
      margin-bottom: 0;
    }

    p, li {
      font-family: 'Parkinsans', sans-serif;
      font-weight: 400;
      color: #fff;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
    }

    ul {
      text-align: center;
      list-style-position: inside;
      padding: 0 0 1rem;
      margin-top: 0;
    }

    .education-portfolio-wrapper {
      margin: 0 3.5em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 5em;
      padding-bottom: 4em;
    }

    .education-portfolio-wrapper h2 {
      color: #fff
    }

    .education-project {
      flex: 1 1 calc(33.333% - 5rem);
      background-color: #af3b63;
      border-radius: 15px;
      min-height: 400px;
      box-sizing: border-box;
      padding: 0 2rem 2.5rem;
      display: flex;
      flex-direction: column;
    }

    a {
      font-family: "fields", sans-serif;
      font-weight: 700;
      letter-spacing: -1.2px;
      font-size: 1.5rem;
      text-decoration: none;
      display: inline-block;
      transition: transform 0.25s ease;
      border-radius: 50px;
      padding: 0.5em 1.2em;
      color: #fff;
    }

    .education-project a {
      border: 0.2rem solid #6daedb;
      background-color: #6daedb;
      box-shadow: 0.2em 0.3em 0.3em #21333f;
      margin-top: auto;
      width: fit-content;
      align-self: center;
     }

    .education-project a:hover {
      border: 0.2rem solid #c492b1;
      box-shadow: 0.2em 0.3em 0.3em #523546;
      background-color: #c492b1;
    }

    .freelance-project a {
      border: 0.2rem solid #af3b63;
      background-color: #af3b63;
      box-shadow: 0.2em 0.3em 0.3em #642038;
      margin-top: auto;
      width: fit-content;
      align-self: center;
    }

    .freelance-project a:hover {
      border: 0.2rem solid #d5a021;
      box-shadow: 0.2em 0.3em 0.3em #523b07;
      background-color: #d5a021;
    }

    .education-project a:hover, .freelance-project a:hover {
      transform: scale(1.1);
    }

    .freelance-portfolio {
      background-color: #b1779bcc;
      padding-top: 2rem;
    }

    .freelance-portfolio-wrapper {
      margin: 0 3.5em;
      padding-bottom: 4rem;
    }

    .freelance-portfolio-wrapper h2 {
      color: #83c4f3
    }

    .freelance-project {
      background-color: #83c4f3;
      border-radius: 15px;
      min-height: 400px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: 1.5rem 2rem 2.5rem;
    }

    /* TABLET STYLES */
    @media (max-width: 1279px) {

    h1 {
      font-weight: 900;
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-weight: 400;
      letter-spacing: -0.5px;
      font-size: 1.1rem;
    }

    .education-portfolio-wrapper, .freelance-portfolio-wrapper {
      margin: 0 1.5em;
      gap: 1.2em;
      padding-bottom: 4em;
      }


    /* MOBILE STYLES */
    @media (max-width: 768px) {

    h1 {
      font-size: 1.75rem;
    }

    h2 {
        font-size: 1.4rem;
    }

    p, .freelance-project a, .education-project a {
        font-size: 1.1rem;
    }

    .education-portfolio-wrapper, .freelance-portfolio-wrapper {
      margin: 0 1.5em;
      gap: 2em;
      padding-bottom: 4em;
      }
  `
})
export class PortfolioComponent {

}
