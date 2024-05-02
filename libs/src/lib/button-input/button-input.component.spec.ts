import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonInputComponent } from './button-input.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ButtonInputComponent', () => {
  let component: ButtonInputComponent;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<ButtonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonInputComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonInputComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send post request on submit', () => {
    component.inputData = 'test data';
    component.onSubmit();

    // const req = httpMock.expectOne('http://159.69.121.229:3000/api');
    const req = httpMock.expectOne('http://localhost:3000/api');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ data: 'test data' });
    req.flush({});
  });
});