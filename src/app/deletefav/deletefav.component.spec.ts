import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletefavComponent } from './deletefav.component';

describe('DeletefavComponent', () => {
  let component: DeletefavComponent;
  let fixture: ComponentFixture<DeletefavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletefavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletefavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
