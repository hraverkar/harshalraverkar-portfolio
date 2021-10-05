import { SkillsService } from './../service/skills.service';
import { Iskill } from './../iskill';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills: Iskill[];
  constructor(
    private skillsService: SkillsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
