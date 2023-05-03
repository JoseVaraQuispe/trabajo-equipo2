import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer.model';
import { HttpDataService } from 'src/app/services/http-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.scss'],
})
export class ListOffersComponent {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'points',
    'businessId',
    'actions',
  ];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private router: Router,
    private HttpDataService: HttpDataService
  ) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getOfferList();
  }

  getOfferList() {
    this.HttpDataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  addNew() {
    this.router.navigate(['/admin/offers/new']);
  }
  editItem(e: any) {
    this.router.navigate(['/admin/offers/edit', e.id]);
  }
  deleteItem(id: string) {
    this.HttpDataService.deleteItem(id).subscribe((reposnse: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      });
    });
  }
}
