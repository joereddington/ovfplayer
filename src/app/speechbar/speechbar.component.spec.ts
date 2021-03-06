/*
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechbarComponent } from './speechbar.component';
import { ConfigService } from '../config.service';
import { BoardService } from '../board.service';
import { SpeechbarService } from '../speechbar.service';
import { ObfButtonComponent } from '../obf-button/obf-button.component';
import { SafePipe } from '../safe.pipe';
import { MatRippleModule, MatCardModule } from '@angular/material';
import { Observable } from 'rxjs';

describe('SpeechbarComponent', () => {
  let component: SpeechbarComponent;
  let fixture: ComponentFixture<SpeechbarComponent>;
  let configServiceStub: Partial<ConfigService>;
  let boardServiceStub: Partial<BoardService>;
  let speechbarServiceStub: Partial<SpeechbarService>;

  beforeEach(async(() => {
    configServiceStub = {
      displayedButtons: {
        showSpeakButton: false,
        showHomeButton: false,
        showBackspaceButton: false,
        showClearButton: false
      },
      scanningConfig: {
        enabled: false,
        time: 0
      }
    };
    boardServiceStub = {};
    speechbarServiceStub = {
      getButtons: () => new Observable(() => {}),
      getSpeaking: () => new Observable(() => {})
    };

    TestBed.configureTestingModule({
      declarations: [ SpeechbarComponent, ObfButtonComponent, SafePipe ],
      providers: [
        {provide: ConfigService, useValue: configServiceStub},
        {provide: BoardService, useValue: boardServiceStub},
        {provide: SpeechbarService, useValue: speechbarServiceStub}
      ],
      imports: [ MatCardModule, MatRippleModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
