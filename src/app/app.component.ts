import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd, ActivatedRoute  } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ],

  template: `
  <div id="wrapper">
    <header>
      <h1 class="header-title">{{ headerTitle }}</h1>

      <!-- hamburger nav on mobile -->
      <nav class="mobile-nav">
        <button class="hamburger" (click)="toggleMenu()">
          {{ isMenuOpen ? 'X' : '☰' }}
        </button>
        <ul [class.active]="isMenuOpen">
          <li><a routerLink='/'>home</a></li>
          <li><a routerLink='/about'>about</a></li>
          <li><a routerLink='/portfolio'>portfolio</a></li>
          <li><a routerLink='/resume'>resume</a></li>
        </ul>
      </nav>

      <!-- regular nav on desktop -->
      <nav class="desktop-nav">
        <a routerLink='/'>home</a>&nbsp;|&nbsp;
        <a routerLink='/about'>about</a>&nbsp;|&nbsp;
        <a routerLink='/portfolio'>portfolio</a>&nbsp;|&nbsp;
        <a routerLink='/resume'>resume</a>
      </nav>

    </header>

    <main>

      <section class="content">
        <router-outlet />
      </section>

    </main>

    <footer>
      <div class="footer-wrapper">
        <div class="footer-columns">
          <!-- COLUMN ONE -->
          <div class="footer-column">
            <h3>Ready to Work Together?</h3>
            <div class="footer-contact-row">
              <a href="tel:+14027096360"><img src="/assets/KK-Portfolio-PhoneIcon.png" alt="Phone Icon" class="footer-img">&nbsp;&nbsp;402.709.6360</a>
            </div>
            <div class="footer-contact-row">
              <a href="mailto:ecommbykaitlyn@gmail.com.com"><img src="/assets/KK-Portfolio-EmailIcon.png" alt="Email Icon" class="footer-img">&nbsp;&nbsp;eCommByKaitlyn&#64;gmail.com</a>
            </div>
          </div>

          <!-- COLUMN TWO -->
          <div class="footer-column">
            <div class="footer-nav">
              <h3>Learn More</h3>
              <ul>
                <li><a routerLink='/'>Home</a></li>
                <li><a routerLink='/about'>About</a></li>
                <li><a routerLink='/portfolio'>Portfolio</a></li>
                <li><a routerLink='/resume'>Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

  `,styles: [

  `
  body, header, nav, main, footer, ul, li, h1, h2, p {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html, body {
    overflow-x: hidden;
  }

  #wrapper {
    min-height: 100vh;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 3em;
  }

  .header-title {
    flex-grow: 0;
    flex-shrink: 1;
    font-size: 8rem;
    font-family: "fields", sans-serif;
    font-weight: 900;
    letter-spacing: -1.9px;
    color: #2e3139;
  }

  .mobile-nav {
    display: none;
  }

  .hamburger {
    display: none;
  }

  nav {
    text-align: center;
    font-family: "fields", sans-serif;
    font-size: 1.4em;
    font-weight: 500;
    color: #780F3D;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    gap: 0.5em;
    min-width: 0;
    flex-shrink: 1;
  }

  nav a {
    text-decoration: none;
    font-family: "fields", sans-serif;
    padding: 0 1em;
    font-size: 1.4em;
    font-weight: 500;
    color: #2e3139;
    letter-spacing: -1px;
    flex-shrink: 1;
    transition: transform 0.25s ease;
  }

  nav a:visited {
    color: #780F3D;
  }

  nav a:hover {
    color: #780F3D;
    transform: scale(1.1);
  }

  main {
    width: 100%;
  }

  h2 {
    font-family: "fields", sans-serif;
    font-weight: 300;
    letter-spacing: -1px;
    color: #6daedb;
    font-size: 1.6em;
  }

  p {
    font-family: 'Parkinsans', sans-serif;
    font-weight: 400;
    color: #2E3139;
    letter-spacing: -0.5px;
    font-size: 1.1rem;
  }

  footer {
    background-color: #6daedbcc;
    width: 100%;
    max-width: 100vw;
    /* removed with background img test
    margin-top: 40px; */
    padding: 40px 0 60px;
  }

  .footer-wrapper {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }

  .footer-columns {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 12em;
    margin: 0 auto;
    max-width: 900px;
  }

  .footer-contact-row {
    justify-content: left;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }

  .footer-contact-row a {
    display: flex;
    align-items: center;
  }

  .footer-nav li {
    padding-bottom: 18px;
    list-style-type: none;
  }

  footer h3 {
    font-family: "fields", sans-serif;
    font-size: 1.7rem;
    font-weight: 300;
    color: #fff;
    letter-spacing: -1px;
  }

  footer a {
    font-family: 'Parkinsans', sans-serif;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
  }

  .footer-contact-row, .footer-nav ul {
      font-size: 1.1em;
    }

  .footer-img {
    height: 30px;
    width: auto;
    display: block;
  }

  /* TABLET STYLES */
  @media (max-width: 1279px) {

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0;
      margin-bottom: 0;
      top: 0;
      z-index: 10000;
      width: 100%;
      position: relative;
      padding: 0 rem;
    }

    .header-title {
      font-size: 5rem;
      padding-left: 2vw;
    }

    .mobile-nav {
      display: flex;
      align-items: center;
    }

    .mobile-nav ul {
      position: fixed;
      top: 0;
      right: 0;
      background-color: #af3b63;
      display: none;
      z-index: 998;
      height: 100vh;
    }

    .mobile-nav ul.active {
      display: block;
    }

    .desktop-nav {
      display: none;
    }

    .hamburger {
      color: #2e3139;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: block;
      font-size: 2.3rem;
      z-index: 999;
      position: absolute;
      right: 0.7em;
      top: 3rem;
    }

    /* hide hamburger when not active */
    nav ul {
      display: none;
    }

    /* show hamburger section when active */
    nav ul.active {
      display: block;
      width: 30vw;
    }

    nav li {
      list-style-type: none;
      font-size: 1.1rem;
      font-family: "fields", sans-serif;
      border-bottom: solid 0.1em #fff;
    }

    .mobile-nav li a:hover {
      background-color: #6daedb;
  }

    .mobile-nav li:first-child {
      padding-top: 7rem;
    }

    .mobile-nav ul li:first-child a {
      border-top: solid 0.1em #fff;
      display: block;
    }

    nav li a {
      text-decoration: none;
      color: #fff;
      padding-top: 2%;
      padding-bottom: 2%;
      display: block;
      transform: none;
    }

    .footer-columns {
      gap: 4rem;
    }

    footer h3 {
      font-size: 1.5rem;
    }

    .footer-contact-row, .footer-nav ul {
      font-size: 1.1rem;
    }
  }

  /* MOBILE STYLES */
  @media (max-width: 768px) {

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0;
      margin-bottom: 0;
      top: 0;
      z-index: 10000;
      width: 100%;
      position: relative;
      padding: 0.5rem 0;
    }

    .header-title {
      font-size: 2.2rem;
      margin-right: 0px;
    }

    .mobile-nav {
      display: flex;
      align-items: center;
    }

    .mobile-nav ul {
      position: fixed;
      top: 0;
      right: 0;
      background-color: #af3b63;
      display: none;
      z-index: 998;
      height: 100vh;
    }

    .mobile-nav ul.active {
      display: block;
      width: 40vw;
    }

    .desktop-nav {
      display: none;
    }

    .hamburger {
      color: #2e3139;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: block;
      font-size: 1.2em;
      z-index: 999;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
    }

    /* hide hamburger when not active */
    nav ul {
      display: none;
    }

    /* show hamburger section when active */
    nav ul.active {
      display: block;
    }

    nav li {
      list-style-type: none;
      font-size: 1rem;
      font-family: "fields", sans-serif;
      border-bottom: solid 0.1em #fff;
    }

    .mobile-nav li a:hover {
      background-color: #6daedb;
    }

    .mobile-nav li:first-child {
      padding-top: 4em;
    }

    .mobile-nav ul li:first-child a {
      border-top: solid 0.1em #fff;
      display: block;
    }

    nav li a {
      text-decoration: none;
      color: #fff;
      padding-top: 2%;
      padding-bottom: 2%;
      display: block;
    }

    footer {
      padding: 10px 5px 10px;
      display: block;
      text-align: center;
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
      box-sizing: border-box;
    }

    footer a {
      justify-content: center;
    }

    .footer-columns, .footer-column, .footer-contact-row {
      display: block;
    }

    .footer-columns {
      gap: 0;
    }

    .footer-column {
      margin-bottom: 2.5em;
    }

    footer h3 {
      font-size: 1.2rem;
    }

    .footer-contact-row, .footer-nav ul {
      font-size: 1rem;
    }
  }
  `
  ]
})


export class AppComponent {
  isMenuOpen = false;

  headerTitle = ''; // dynamic H1 text

  constructor(private router: Router, private route: ActivatedRoute) {

    // Close mobile menu on navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }

  ngOnInit() {
    // Listen for route changes and update header title from route data
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    )
    .subscribe(data => {
      if (data['headerTitle']) {
        this.headerTitle = data['headerTitle'];
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
