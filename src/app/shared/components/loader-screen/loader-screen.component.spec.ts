import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderScreenComponent } from './loader-screen.component';

describe('LoaderScreenComponent', () => {
  let component: LoaderScreenComponent;
  let fixture: ComponentFixture<LoaderScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
