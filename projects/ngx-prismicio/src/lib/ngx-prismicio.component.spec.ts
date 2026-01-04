import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrismicioComponent } from './ngx-prismicio.component';

describe('NgxPrismicioComponent', () => {
  let component: NgxPrismicioComponent;
  let fixture: ComponentFixture<NgxPrismicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrismicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPrismicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
