import { Component } from '@angular/core';
import { App0Lib1SubChild0 } from './sub-children/sub-child-0.component';
import { App0Lib1SubChild1 } from './sub-children/sub-child-1.component';
import { App0Lib1SubChild2 } from './sub-children/sub-child-2.component';
import { App0Lib1SubChild3 } from './sub-children/sub-child-3.component';
import { App0Lib1SubChild4 } from './sub-children/sub-child-4.component';
import { App0Lib1SubChild5 } from './sub-children/sub-child-5.component';
import { App0Lib1SubChild6 } from './sub-children/sub-child-6.component';
import { App0Lib1SubChild7 } from './sub-children/sub-child-7.component';
import { App0Lib1SubChild8 } from './sub-children/sub-child-8.component';
import { App0Lib1SubChild9 } from './sub-children/sub-child-9.component';
import { App0Lib1SubChild10 } from './sub-children/sub-child-10.component';
import { App0Lib1SubChild11 } from './sub-children/sub-child-11.component';
import { App0Lib1SubChild12 } from './sub-children/sub-child-12.component';
import { App0Lib1SubChild13 } from './sub-children/sub-child-13.component';
import { App0Lib1SubChild14 } from './sub-children/sub-child-14.component';
import { App0Lib1SubChild15 } from './sub-children/sub-child-15.component';
import { App0Lib1SubChild16 } from './sub-children/sub-child-16.component';
import { App0Lib1SubChild17 } from './sub-children/sub-child-17.component';
import { App0Lib1SubChild18 } from './sub-children/sub-child-18.component';
import { App0Lib1SubChild19 } from './sub-children/sub-child-19.component';
import { App0Lib1SubChild20 } from './sub-children/sub-child-20.component';
import { App0Lib1SubChild21 } from './sub-children/sub-child-21.component';
import { App0Lib1SubChild22 } from './sub-children/sub-child-22.component';
import { App0Lib1SubChild23 } from './sub-children/sub-child-23.component';
import { App0Lib1SubChild24 } from './sub-children/sub-child-24.component';
import { App0Lib1SubChild25 } from './sub-children/sub-child-25.component';
import { App0Lib1SubChild26 } from './sub-children/sub-child-26.component';
import { App0Lib1SubChild27 } from './sub-children/sub-child-27.component';
import { App0Lib1SubChild28 } from './sub-children/sub-child-28.component';
import { App0Lib1SubChild29 } from './sub-children/sub-child-29.component';

@Component({
  selector: 'app0-lib1-child-0',
  template: `
    <div class="child-component">
      <div class="child-header">
        <h3>{{title}}</h3>
        <div class="child-controls">
          @if (isExpanded) {
            <button (click)="collapse()" class="btn btn-sm">Collapse</button>
          } @else {
            <button (click)="expand()" class="btn btn-sm">Expand</button>
          }
          <button (click)="toggleMode()" class="btn btn-sm" [class]="mode === 'grid' ? 'btn-primary' : 'btn-secondary'">
            {{mode === 'grid' ? 'List View' : 'Grid View'}}
          </button>
        </div>
      </div>
      
      <div class="child-info">
        <p>Child component 0 | Status: {{status}} | Items: {{subChildren.length}}</p>
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="progress"></div>
        </div>
      </div>
      
      @if (isExpanded) {
        <div class="sub-children-container" [class]="'mode-' + mode">
          @switch (status) {
            @case ('loading') {
              <div class="loading-state">
                <p>Loading sub-components...</p>
                <div class="spinner"></div>
              </div>
            }
            @case ('error') {
              <div class="error-state">
                <p>Error loading components</p>
                <button (click)="retry()" class="btn btn-warning">Retry</button>
              </div>
            }
            @case ('loaded') {
              @if (mode === 'grid') {
                <div class="grid-layout">
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(0)) {
                      <app0-lib1-sub-child-0 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-0...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-0</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(1)) {
                      <app0-lib1-sub-child-1 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-1...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-1</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(2)) {
                      <app0-lib1-sub-child-2 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-2...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-2</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(3)) {
                      <app0-lib1-sub-child-3 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-3...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-3</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(4)) {
                      <app0-lib1-sub-child-4 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-4...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-4</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(5)) {
                      <app0-lib1-sub-child-5 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-5...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-5</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(6)) {
                      <app0-lib1-sub-child-6 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-6...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-6</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(7)) {
                      <app0-lib1-sub-child-7 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-7...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-7</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(8)) {
                      <app0-lib1-sub-child-8 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-8...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-8</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(9)) {
                      <app0-lib1-sub-child-9 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-9...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-9</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(10)) {
                      <app0-lib1-sub-child-10 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-10...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-10</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(11)) {
                      <app0-lib1-sub-child-11 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-11...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-11</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(12)) {
                      <app0-lib1-sub-child-12 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-12...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-12</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(13)) {
                      <app0-lib1-sub-child-13 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-13...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-13</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(14)) {
                      <app0-lib1-sub-child-14 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-14...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-14</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(15)) {
                      <app0-lib1-sub-child-15 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-15...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-15</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(16)) {
                      <app0-lib1-sub-child-16 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-16...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-16</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(17)) {
                      <app0-lib1-sub-child-17 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-17...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-17</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(18)) {
                      <app0-lib1-sub-child-18 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-18...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-18</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(19)) {
                      <app0-lib1-sub-child-19 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-19...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-19</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(20)) {
                      <app0-lib1-sub-child-20 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-20...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-20</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(21)) {
                      <app0-lib1-sub-child-21 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-21...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-21</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(22)) {
                      <app0-lib1-sub-child-22 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-22...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-22</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(23)) {
                      <app0-lib1-sub-child-23 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-23...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-23</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(24)) {
                      <app0-lib1-sub-child-24 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-24...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-24</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(25)) {
                      <app0-lib1-sub-child-25 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-25...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-25</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(26)) {
                      <app0-lib1-sub-child-26 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-26...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-26</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(27)) {
                      <app0-lib1-sub-child-27 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-27...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-27</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(28)) {
                      <app0-lib1-sub-child-28 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-28...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-28</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(29)) {
                      <app0-lib1-sub-child-29 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-29...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-29</p>
                        <button (click)="retryLoadComponent(29)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                </div>
              } @else {
                <div class="list-layout">
                  <div class="list-item" [class]="0 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">1</span>
                      <span class="item-selector">app0-lib1-sub-child-0</span>
                      <button (click)="toggleComponentLoad(0)" class="btn btn-xs">
                        {{isComponentLoaded(0) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn0); when isComponentLoaded(0)) {
                      <app0-lib1-sub-child-0 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-0</p>
                        <button #loadBtn0 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-0...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-0</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="1 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">2</span>
                      <span class="item-selector">app0-lib1-sub-child-1</span>
                      <button (click)="toggleComponentLoad(1)" class="btn btn-xs">
                        {{isComponentLoaded(1) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn1); when isComponentLoaded(1)) {
                      <app0-lib1-sub-child-1 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-1</p>
                        <button #loadBtn1 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-1...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-1</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="2 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">3</span>
                      <span class="item-selector">app0-lib1-sub-child-2</span>
                      <button (click)="toggleComponentLoad(2)" class="btn btn-xs">
                        {{isComponentLoaded(2) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn2); when isComponentLoaded(2)) {
                      <app0-lib1-sub-child-2 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-2</p>
                        <button #loadBtn2 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-2...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-2</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="3 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">4</span>
                      <span class="item-selector">app0-lib1-sub-child-3</span>
                      <button (click)="toggleComponentLoad(3)" class="btn btn-xs">
                        {{isComponentLoaded(3) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn3); when isComponentLoaded(3)) {
                      <app0-lib1-sub-child-3 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-3</p>
                        <button #loadBtn3 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-3...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-3</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="4 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">5</span>
                      <span class="item-selector">app0-lib1-sub-child-4</span>
                      <button (click)="toggleComponentLoad(4)" class="btn btn-xs">
                        {{isComponentLoaded(4) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn4); when isComponentLoaded(4)) {
                      <app0-lib1-sub-child-4 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-4</p>
                        <button #loadBtn4 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-4...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-4</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="5 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">6</span>
                      <span class="item-selector">app0-lib1-sub-child-5</span>
                      <button (click)="toggleComponentLoad(5)" class="btn btn-xs">
                        {{isComponentLoaded(5) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn5); when isComponentLoaded(5)) {
                      <app0-lib1-sub-child-5 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-5</p>
                        <button #loadBtn5 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-5...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-5</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="6 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">7</span>
                      <span class="item-selector">app0-lib1-sub-child-6</span>
                      <button (click)="toggleComponentLoad(6)" class="btn btn-xs">
                        {{isComponentLoaded(6) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn6); when isComponentLoaded(6)) {
                      <app0-lib1-sub-child-6 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-6</p>
                        <button #loadBtn6 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-6...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-6</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="7 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">8</span>
                      <span class="item-selector">app0-lib1-sub-child-7</span>
                      <button (click)="toggleComponentLoad(7)" class="btn btn-xs">
                        {{isComponentLoaded(7) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn7); when isComponentLoaded(7)) {
                      <app0-lib1-sub-child-7 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-7</p>
                        <button #loadBtn7 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-7...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-7</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="8 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">9</span>
                      <span class="item-selector">app0-lib1-sub-child-8</span>
                      <button (click)="toggleComponentLoad(8)" class="btn btn-xs">
                        {{isComponentLoaded(8) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn8); when isComponentLoaded(8)) {
                      <app0-lib1-sub-child-8 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-8</p>
                        <button #loadBtn8 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-8...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-8</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="9 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">10</span>
                      <span class="item-selector">app0-lib1-sub-child-9</span>
                      <button (click)="toggleComponentLoad(9)" class="btn btn-xs">
                        {{isComponentLoaded(9) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn9); when isComponentLoaded(9)) {
                      <app0-lib1-sub-child-9 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-9</p>
                        <button #loadBtn9 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-9...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-9</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="10 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">11</span>
                      <span class="item-selector">app0-lib1-sub-child-10</span>
                      <button (click)="toggleComponentLoad(10)" class="btn btn-xs">
                        {{isComponentLoaded(10) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn10); when isComponentLoaded(10)) {
                      <app0-lib1-sub-child-10 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-10</p>
                        <button #loadBtn10 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-10...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-10</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="11 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">12</span>
                      <span class="item-selector">app0-lib1-sub-child-11</span>
                      <button (click)="toggleComponentLoad(11)" class="btn btn-xs">
                        {{isComponentLoaded(11) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn11); when isComponentLoaded(11)) {
                      <app0-lib1-sub-child-11 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-11</p>
                        <button #loadBtn11 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-11...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-11</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="12 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">13</span>
                      <span class="item-selector">app0-lib1-sub-child-12</span>
                      <button (click)="toggleComponentLoad(12)" class="btn btn-xs">
                        {{isComponentLoaded(12) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn12); when isComponentLoaded(12)) {
                      <app0-lib1-sub-child-12 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-12</p>
                        <button #loadBtn12 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-12...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-12</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="13 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">14</span>
                      <span class="item-selector">app0-lib1-sub-child-13</span>
                      <button (click)="toggleComponentLoad(13)" class="btn btn-xs">
                        {{isComponentLoaded(13) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn13); when isComponentLoaded(13)) {
                      <app0-lib1-sub-child-13 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-13</p>
                        <button #loadBtn13 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-13...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-13</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="14 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">15</span>
                      <span class="item-selector">app0-lib1-sub-child-14</span>
                      <button (click)="toggleComponentLoad(14)" class="btn btn-xs">
                        {{isComponentLoaded(14) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn14); when isComponentLoaded(14)) {
                      <app0-lib1-sub-child-14 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-14</p>
                        <button #loadBtn14 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-14...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-14</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="15 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">16</span>
                      <span class="item-selector">app0-lib1-sub-child-15</span>
                      <button (click)="toggleComponentLoad(15)" class="btn btn-xs">
                        {{isComponentLoaded(15) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn15); when isComponentLoaded(15)) {
                      <app0-lib1-sub-child-15 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-15</p>
                        <button #loadBtn15 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-15...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-15</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="16 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">17</span>
                      <span class="item-selector">app0-lib1-sub-child-16</span>
                      <button (click)="toggleComponentLoad(16)" class="btn btn-xs">
                        {{isComponentLoaded(16) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn16); when isComponentLoaded(16)) {
                      <app0-lib1-sub-child-16 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-16</p>
                        <button #loadBtn16 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-16...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-16</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="17 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">18</span>
                      <span class="item-selector">app0-lib1-sub-child-17</span>
                      <button (click)="toggleComponentLoad(17)" class="btn btn-xs">
                        {{isComponentLoaded(17) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn17); when isComponentLoaded(17)) {
                      <app0-lib1-sub-child-17 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-17</p>
                        <button #loadBtn17 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-17...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-17</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="18 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">19</span>
                      <span class="item-selector">app0-lib1-sub-child-18</span>
                      <button (click)="toggleComponentLoad(18)" class="btn btn-xs">
                        {{isComponentLoaded(18) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn18); when isComponentLoaded(18)) {
                      <app0-lib1-sub-child-18 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-18</p>
                        <button #loadBtn18 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-18...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-18</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="19 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">20</span>
                      <span class="item-selector">app0-lib1-sub-child-19</span>
                      <button (click)="toggleComponentLoad(19)" class="btn btn-xs">
                        {{isComponentLoaded(19) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn19); when isComponentLoaded(19)) {
                      <app0-lib1-sub-child-19 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-19</p>
                        <button #loadBtn19 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-19...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-19</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="20 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">21</span>
                      <span class="item-selector">app0-lib1-sub-child-20</span>
                      <button (click)="toggleComponentLoad(20)" class="btn btn-xs">
                        {{isComponentLoaded(20) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn20); when isComponentLoaded(20)) {
                      <app0-lib1-sub-child-20 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-20</p>
                        <button #loadBtn20 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-20...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-20</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="21 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">22</span>
                      <span class="item-selector">app0-lib1-sub-child-21</span>
                      <button (click)="toggleComponentLoad(21)" class="btn btn-xs">
                        {{isComponentLoaded(21) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn21); when isComponentLoaded(21)) {
                      <app0-lib1-sub-child-21 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-21</p>
                        <button #loadBtn21 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-21...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-21</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="22 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">23</span>
                      <span class="item-selector">app0-lib1-sub-child-22</span>
                      <button (click)="toggleComponentLoad(22)" class="btn btn-xs">
                        {{isComponentLoaded(22) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn22); when isComponentLoaded(22)) {
                      <app0-lib1-sub-child-22 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-22</p>
                        <button #loadBtn22 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-22...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-22</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="23 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">24</span>
                      <span class="item-selector">app0-lib1-sub-child-23</span>
                      <button (click)="toggleComponentLoad(23)" class="btn btn-xs">
                        {{isComponentLoaded(23) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn23); when isComponentLoaded(23)) {
                      <app0-lib1-sub-child-23 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-23</p>
                        <button #loadBtn23 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-23...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-23</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="24 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">25</span>
                      <span class="item-selector">app0-lib1-sub-child-24</span>
                      <button (click)="toggleComponentLoad(24)" class="btn btn-xs">
                        {{isComponentLoaded(24) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn24); when isComponentLoaded(24)) {
                      <app0-lib1-sub-child-24 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-24</p>
                        <button #loadBtn24 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-24...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-24</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="25 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">26</span>
                      <span class="item-selector">app0-lib1-sub-child-25</span>
                      <button (click)="toggleComponentLoad(25)" class="btn btn-xs">
                        {{isComponentLoaded(25) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn25); when isComponentLoaded(25)) {
                      <app0-lib1-sub-child-25 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-25</p>
                        <button #loadBtn25 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-25...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-25</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="26 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">27</span>
                      <span class="item-selector">app0-lib1-sub-child-26</span>
                      <button (click)="toggleComponentLoad(26)" class="btn btn-xs">
                        {{isComponentLoaded(26) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn26); when isComponentLoaded(26)) {
                      <app0-lib1-sub-child-26 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-26</p>
                        <button #loadBtn26 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-26...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-26</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="27 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">28</span>
                      <span class="item-selector">app0-lib1-sub-child-27</span>
                      <button (click)="toggleComponentLoad(27)" class="btn btn-xs">
                        {{isComponentLoaded(27) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn27); when isComponentLoaded(27)) {
                      <app0-lib1-sub-child-27 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-27</p>
                        <button #loadBtn27 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-27...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-27</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="28 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">29</span>
                      <span class="item-selector">app0-lib1-sub-child-28</span>
                      <button (click)="toggleComponentLoad(28)" class="btn btn-xs">
                        {{isComponentLoaded(28) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn28); when isComponentLoaded(28)) {
                      <app0-lib1-sub-child-28 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-28</p>
                        <button #loadBtn28 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-28...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-28</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="29 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">30</span>
                      <span class="item-selector">app0-lib1-sub-child-29</span>
                      <button (click)="toggleComponentLoad(29)" class="btn btn-xs">
                        {{isComponentLoaded(29) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn29); when isComponentLoaded(29)) {
                      <app0-lib1-sub-child-29 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-29</p>
                        <button #loadBtn29 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-29...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-29</p>
                        <button (click)="retryLoadComponent(29)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                </div>
              }
            }
            @default {
              <div class="unknown-state">
                <p>Unknown status: {{status}}</p>
              </div>
            }
          }
        </div>
      } @else {
        <div class="collapsed-summary">
          <p>{{subChildren.length}} sub-components hidden</p>
          <button (click)="expand()" class="btn btn-link">Click to expand</button>
        </div>
      }
      
      <div class="child-footer">
        <small>Generated at: {{generatedAt}} | Mode: {{mode}} | Progress: {{progress}}%</small>
      </div>
    </div>`,
  imports: [
    App0Lib1SubChild0,
    App0Lib1SubChild1,
    App0Lib1SubChild2,
    App0Lib1SubChild3,
    App0Lib1SubChild4,
    App0Lib1SubChild5,
    App0Lib1SubChild6,
    App0Lib1SubChild7,
    App0Lib1SubChild8,
    App0Lib1SubChild9,
    App0Lib1SubChild10,
    App0Lib1SubChild11,
    App0Lib1SubChild12,
    App0Lib1SubChild13,
    App0Lib1SubChild14,
    App0Lib1SubChild15,
    App0Lib1SubChild16,
    App0Lib1SubChild17,
    App0Lib1SubChild18,
    App0Lib1SubChild19,
    App0Lib1SubChild20,
    App0Lib1SubChild21,
    App0Lib1SubChild22,
    App0Lib1SubChild23,
    App0Lib1SubChild24,
    App0Lib1SubChild25,
    App0Lib1SubChild26,
    App0Lib1SubChild27,
    App0Lib1SubChild28,
    App0Lib1SubChild29,
  ],
})
export class App0Lib1Child0 {
  title = 'App0Lib1Child0';
  isExpanded = true;
  mode: 'grid' | 'list' = 'grid';
  status: 'loading' | 'loaded' | 'error' = 'loaded';
  progress = 17;
  generatedAt = new Date().toLocaleTimeString();
  
  subChildren = [
    { selector: 'app0-lib1-sub-child-0', name: 'App0Lib1SubChild0' },
    { selector: 'app0-lib1-sub-child-1', name: 'App0Lib1SubChild1' },
    { selector: 'app0-lib1-sub-child-2', name: 'App0Lib1SubChild2' },
    { selector: 'app0-lib1-sub-child-3', name: 'App0Lib1SubChild3' },
    { selector: 'app0-lib1-sub-child-4', name: 'App0Lib1SubChild4' },
    { selector: 'app0-lib1-sub-child-5', name: 'App0Lib1SubChild5' },
    { selector: 'app0-lib1-sub-child-6', name: 'App0Lib1SubChild6' },
    { selector: 'app0-lib1-sub-child-7', name: 'App0Lib1SubChild7' },
    { selector: 'app0-lib1-sub-child-8', name: 'App0Lib1SubChild8' },
    { selector: 'app0-lib1-sub-child-9', name: 'App0Lib1SubChild9' },
    { selector: 'app0-lib1-sub-child-10', name: 'App0Lib1SubChild10' },
    { selector: 'app0-lib1-sub-child-11', name: 'App0Lib1SubChild11' },
    { selector: 'app0-lib1-sub-child-12', name: 'App0Lib1SubChild12' },
    { selector: 'app0-lib1-sub-child-13', name: 'App0Lib1SubChild13' },
    { selector: 'app0-lib1-sub-child-14', name: 'App0Lib1SubChild14' },
    { selector: 'app0-lib1-sub-child-15', name: 'App0Lib1SubChild15' },
    { selector: 'app0-lib1-sub-child-16', name: 'App0Lib1SubChild16' },
    { selector: 'app0-lib1-sub-child-17', name: 'App0Lib1SubChild17' },
    { selector: 'app0-lib1-sub-child-18', name: 'App0Lib1SubChild18' },
    { selector: 'app0-lib1-sub-child-19', name: 'App0Lib1SubChild19' },
    { selector: 'app0-lib1-sub-child-20', name: 'App0Lib1SubChild20' },
    { selector: 'app0-lib1-sub-child-21', name: 'App0Lib1SubChild21' },
    { selector: 'app0-lib1-sub-child-22', name: 'App0Lib1SubChild22' },
    { selector: 'app0-lib1-sub-child-23', name: 'App0Lib1SubChild23' },
    { selector: 'app0-lib1-sub-child-24', name: 'App0Lib1SubChild24' },
    { selector: 'app0-lib1-sub-child-25', name: 'App0Lib1SubChild25' },
    { selector: 'app0-lib1-sub-child-26', name: 'App0Lib1SubChild26' },
    { selector: 'app0-lib1-sub-child-27', name: 'App0Lib1SubChild27' },
    { selector: 'app0-lib1-sub-child-28', name: 'App0Lib1SubChild28' },
    { selector: 'app0-lib1-sub-child-29', name: 'App0Lib1SubChild29' }
  ];
  
  // Defer loading state management
  loadedComponents = new Set<number>();
  loadingComponents = new Set<number>();
  errorComponents = new Set<number>();
  
  expand() {
    this.isExpanded = true;
  }
  
  collapse() {
    this.isExpanded = false;
  }
  
  toggleMode() {
    this.mode = this.mode === 'grid' ? 'list' : 'grid';
  }
  
  retry() {
    this.status = 'loading';
    setTimeout(() => {
      this.status = 'loaded';
    }, 1000);
  }
  
  shouldLoadComponent(index: number): boolean {
    // Load components in batches or based on viewport
    return index < 10 || this.loadedComponents.has(index);
  }
  
  isComponentLoaded(index: number): boolean {
    return this.loadedComponents.has(index);
  }
  
  toggleComponentLoad(index: number) {
    if (this.loadedComponents.has(index)) {
      this.loadedComponents.delete(index);
    } else {
      this.loadedComponents.add(index);
    }
  }
  
  retryLoadComponent(index: number) {
    this.errorComponents.delete(index);
    this.loadingComponents.add(index);
    
    // Simulate loading delay
    setTimeout(() => {
      this.loadingComponents.delete(index);
      if (Math.random() > 0.1) { // 90% success rate
        this.loadedComponents.add(index);
      } else {
        this.errorComponents.add(index);
      }
    }, Math.random() * 2000 + 500);
  }
}
