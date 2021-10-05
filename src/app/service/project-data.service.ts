import { IProject } from './../iproject';
import { Injectable } from '@angular/core';
import { ALL_PROJECT_DATA } from '../utils/data/project-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { }
  getProjects(): IProject[] {
    return ALL_PROJECT_DATA;
  }
}
