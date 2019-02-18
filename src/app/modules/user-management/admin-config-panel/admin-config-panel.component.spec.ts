import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminConfigPanelComponent } from './admin-config-panel.component';
import { LibraryService } from '../../../../app/services/libraryService';
import { FilterDataPipe } from '../../../utilities/pipes/bookDataFilter.pipe';

describe('AdminConfigPanelComponent', () => {
  let comp: AdminConfigPanelComponent;
  let fixture: ComponentFixture<AdminConfigPanelComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let libraryService;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AdminConfigPanelComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [LibraryService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AdminConfigPanelComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        de = fixture.debugElement; // throught this we can handle dom element.
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

