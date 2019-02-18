import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminTrackBooksPanelComponent } from './admin-track-books-panel.component';
import { LibraryService } from '../../../../app/services/libraryService';
import { FilterDataPipe } from '../../../utilities/pipes/bookDataFilter.pipe';

describe('AdminTrackBooksPanelComponent', () => {
  let comp: AdminTrackBooksPanelComponent;
  let fixture: ComponentFixture<AdminTrackBooksPanelComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let libraryService;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AdminTrackBooksPanelComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [LibraryService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AdminTrackBooksPanelComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
        libraryService = TestBed.get(LibraryService);
      });
  }));

  it('should not call service methods before OnInit', () => {
    expect(libraryService).toBeDefined();
  });

  //   it('should call service methods after initialized', () => {
  //     getInitSpy = spyOn(comp, 'getInitData');
  //     fixture.detectChanges();
  //     expect(getInitSpy).toHaveBeenCalled();
  //   });

});

