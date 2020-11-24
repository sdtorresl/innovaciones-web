import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTemplateComponent } from './items-template.component';

describe('ItemsTemplateComponent', () => {
  let component: ItemsTemplateComponent;
  let fixture: ComponentFixture<ItemsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
