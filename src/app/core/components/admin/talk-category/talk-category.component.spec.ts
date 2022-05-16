import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkCategoryComponent } from './talk-category.component';

describe('TalkCategoryComponent', () => {
  let component: TalkCategoryComponent;
  let fixture: ComponentFixture<TalkCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
