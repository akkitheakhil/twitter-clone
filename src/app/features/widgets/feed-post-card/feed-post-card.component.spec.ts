import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostCardComponent } from './feed-post-card.component';

describe('FeedPostCardComponent', () => {
  let component: FeedPostCardComponent;
  let fixture: ComponentFixture<FeedPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedPostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
