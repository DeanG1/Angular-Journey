import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { Teams } from '../table/table.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { CommonModule } from '@angular/common';
const TEAM_DATA: Teams[] = [
  {
    name: 'PSD',
    project: 'Project 01',
    created_at: '2024-05-20',
    updated_at: '2024-05-20',
    members: 4,
  },
  {
    name: 'Team 2',
    project: 'Project 02',
    created_at: '2024-05-20',
    updated_at: '2024-05-20',
    members: 3,
  },
  {
    name: 'Team 3',
    project: 'Project 03',
    created_at: '2024-05-20',
    updated_at: '2024-05-20',
    members: 11,
  },
  {
    name: 'Team 4',
    project: 'Project 04',
    created_at: '2024-05-20',
    updated_at: '2024-05-20',
    members: 7,
  },
  {
    name: 'Team 5',
    project: 'Project 05',
    created_at: '2024-05-20',
    updated_at: '2024-05-20',
    members: 8,
  },
];
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, FormsModule, SearchPipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  columns = [
    { key: 'name', header: 'Teams Name', sortDescription: 'Sort by team name' },
    { key: 'project', header: 'Project', sortDescription: 'Sort by project' },
    {
      key: 'created_at',
      header: 'Created at',
      sortDescription: 'Sort by date created',
    },
    {
      key: 'updated_at',
      header: 'Updated at',
      sortDescription: 'Sort by date updated',
    },
    {
      key: 'members',
      header: 'Members',
      sortDescription: 'Sort by number of members',
    },
  ];

  data = TEAM_DATA;
  searchText = '';
  get filteredData() {
    return new SearchPipe().transform(this.data, this.searchText);
  }
}
