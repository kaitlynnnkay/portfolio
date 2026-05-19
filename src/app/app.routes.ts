import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
        data: { headerTitle: 'Kaitlyn Kelly' }
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
        data: { headerTitle: "Kaitlyn Kelly" }
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Kaitlyn',
        data: { headerTitle: "About Kaitlyn" }
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        title: "Kaitlyn's Portfolio",
        data: { headerTitle: "Kaitlyn's Portfolio" }
    },
    {
        path: 'resume',
        component: ResumeComponent,
        title: "Kaitlyn's Resume",
        data: { headerTitle: "Kaitlyn's Resume" }
    },
];
