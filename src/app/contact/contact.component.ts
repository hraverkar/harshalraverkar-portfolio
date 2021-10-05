import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) { }

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://facebook.com/hraverkar',
        iconUrl: './assets/icons/facebook.svg'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/hraverkar',
        iconUrl: './assets/icons/twitter.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/i.am_harshal/',
        iconUrl: './assets/icons/instagram.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hraverkar',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/hraverkar',
        iconUrl: './assets/icons/github.svg'
      },
      {
        name: 'Hackerrank',
        url: 'https://hackerrank.com/hraverkar',
        iconUrl: './assets/icons/hackerrank.svg'
      },
      {
        name: 'Stackoverflow',
        url: 'https://stackoverflow.com/story/hraverkar',
        iconUrl: './assets/icons/stackoverflow.svg'
      },
      {
        name: 'Pluralsight',
        url: 'https://www.pluralsight.com/profile/hraverkar',
        iconUrl: './assets/icons/pluralsight.svg'
      }
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:harshal.raverkar@gmail.com',
    iconUrl: './assets/icons/email.svg'
  };

  vscodeMarketplace = {
    name: 'VSCode Extension Publisher',
    url: 'https://marketplace.visualstudio.com/publishers/ritwickdey',
    iconUrl: './assets/icons/vscode.svg'
  };
  ngOnInit() { }

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
