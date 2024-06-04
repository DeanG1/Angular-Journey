import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';

export interface Teams {
  name: string;
  project: string;
  created_at: string;
  updated_at: string;
  members: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    CommonModule,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements AfterViewInit {
  @Input() columns: {
    key: string;
    header: string;
    sortDescription?: string;
  }[] = [];
  @Input() data: Teams[] = [];

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Teams> = new MatTableDataSource<Teams>();

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.displayedColumns = this.columns.map((column) => column.key);
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  searchText = '';
}
