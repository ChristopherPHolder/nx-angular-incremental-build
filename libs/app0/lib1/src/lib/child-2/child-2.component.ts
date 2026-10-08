import { Component } from '@angular/core';
import { App0Lib1SubChild60 } from './sub-children/sub-child-60.component';
import { App0Lib1SubChild61 } from './sub-children/sub-child-61.component';
import { App0Lib1SubChild62 } from './sub-children/sub-child-62.component';
import { App0Lib1SubChild63 } from './sub-children/sub-child-63.component';
import { App0Lib1SubChild64 } from './sub-children/sub-child-64.component';
import { App0Lib1SubChild65 } from './sub-children/sub-child-65.component';
import { App0Lib1SubChild66 } from './sub-children/sub-child-66.component';
import { App0Lib1SubChild67 } from './sub-children/sub-child-67.component';
import { App0Lib1SubChild68 } from './sub-children/sub-child-68.component';
import { App0Lib1SubChild69 } from './sub-children/sub-child-69.component';
import { App0Lib1SubChild70 } from './sub-children/sub-child-70.component';
import { App0Lib1SubChild71 } from './sub-children/sub-child-71.component';
import { App0Lib1SubChild72 } from './sub-children/sub-child-72.component';
import { App0Lib1SubChild73 } from './sub-children/sub-child-73.component';
import { App0Lib1SubChild74 } from './sub-children/sub-child-74.component';
import { App0Lib1SubChild75 } from './sub-children/sub-child-75.component';
import { App0Lib1SubChild76 } from './sub-children/sub-child-76.component';
import { App0Lib1SubChild77 } from './sub-children/sub-child-77.component';
import { App0Lib1SubChild78 } from './sub-children/sub-child-78.component';
import { App0Lib1SubChild79 } from './sub-children/sub-child-79.component';
import { App0Lib1SubChild80 } from './sub-children/sub-child-80.component';
import { App0Lib1SubChild81 } from './sub-children/sub-child-81.component';
import { App0Lib1SubChild82 } from './sub-children/sub-child-82.component';
import { App0Lib1SubChild83 } from './sub-children/sub-child-83.component';
import { App0Lib1SubChild84 } from './sub-children/sub-child-84.component';
import { App0Lib1SubChild85 } from './sub-children/sub-child-85.component';
import { App0Lib1SubChild86 } from './sub-children/sub-child-86.component';
import { App0Lib1SubChild87 } from './sub-children/sub-child-87.component';
import { App0Lib1SubChild88 } from './sub-children/sub-child-88.component';
import { App0Lib1SubChild89 } from './sub-children/sub-child-89.component';

@Component({
  selector: 'app0-lib1-child-2',
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
        <p>Child component 2 | Status: {{status}} | Items: {{subChildren.length}}</p>
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
                      <app0-lib1-sub-child-60 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-60...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-60</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(1)) {
                      <app0-lib1-sub-child-61 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-61...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-61</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(2)) {
                      <app0-lib1-sub-child-62 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-62...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-62</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(3)) {
                      <app0-lib1-sub-child-63 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-63...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-63</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(4)) {
                      <app0-lib1-sub-child-64 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-64...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-64</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(5)) {
                      <app0-lib1-sub-child-65 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-65...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-65</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(6)) {
                      <app0-lib1-sub-child-66 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-66...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-66</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(7)) {
                      <app0-lib1-sub-child-67 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-67...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-67</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(8)) {
                      <app0-lib1-sub-child-68 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-68...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-68</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(9)) {
                      <app0-lib1-sub-child-69 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-69...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-69</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(10)) {
                      <app0-lib1-sub-child-70 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-70...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-70</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(11)) {
                      <app0-lib1-sub-child-71 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-71...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-71</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(12)) {
                      <app0-lib1-sub-child-72 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-72...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-72</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(13)) {
                      <app0-lib1-sub-child-73 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-73...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-73</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(14)) {
                      <app0-lib1-sub-child-74 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-74...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-74</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(15)) {
                      <app0-lib1-sub-child-75 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-75...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-75</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(16)) {
                      <app0-lib1-sub-child-76 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-76...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-76</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(17)) {
                      <app0-lib1-sub-child-77 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-77...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-77</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(18)) {
                      <app0-lib1-sub-child-78 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-78...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-78</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(19)) {
                      <app0-lib1-sub-child-79 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-79...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-79</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(20)) {
                      <app0-lib1-sub-child-80 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-80...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-80</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(21)) {
                      <app0-lib1-sub-child-81 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-81...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-81</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(22)) {
                      <app0-lib1-sub-child-82 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-82...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-82</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(23)) {
                      <app0-lib1-sub-child-83 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-83...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-83</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(24)) {
                      <app0-lib1-sub-child-84 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-84...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-84</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(25)) {
                      <app0-lib1-sub-child-85 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-85...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-85</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(26)) {
                      <app0-lib1-sub-child-86 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-86...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-86</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(27)) {
                      <app0-lib1-sub-child-87 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-87...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-87</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(28)) {
                      <app0-lib1-sub-child-88 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-88...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-88</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(29)) {
                      <app0-lib1-sub-child-89 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib1-sub-child-89...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib1-sub-child-89</p>
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
                      <span class="item-selector">app0-lib1-sub-child-60</span>
                      <button (click)="toggleComponentLoad(0)" class="btn btn-xs">
                        {{isComponentLoaded(0) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn0); when isComponentLoaded(0)) {
                      <app0-lib1-sub-child-60 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-60</p>
                        <button #loadBtn0 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-60...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-60</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="1 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">2</span>
                      <span class="item-selector">app0-lib1-sub-child-61</span>
                      <button (click)="toggleComponentLoad(1)" class="btn btn-xs">
                        {{isComponentLoaded(1) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn1); when isComponentLoaded(1)) {
                      <app0-lib1-sub-child-61 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-61</p>
                        <button #loadBtn1 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-61...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-61</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="2 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">3</span>
                      <span class="item-selector">app0-lib1-sub-child-62</span>
                      <button (click)="toggleComponentLoad(2)" class="btn btn-xs">
                        {{isComponentLoaded(2) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn2); when isComponentLoaded(2)) {
                      <app0-lib1-sub-child-62 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-62</p>
                        <button #loadBtn2 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-62...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-62</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="3 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">4</span>
                      <span class="item-selector">app0-lib1-sub-child-63</span>
                      <button (click)="toggleComponentLoad(3)" class="btn btn-xs">
                        {{isComponentLoaded(3) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn3); when isComponentLoaded(3)) {
                      <app0-lib1-sub-child-63 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-63</p>
                        <button #loadBtn3 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-63...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-63</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="4 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">5</span>
                      <span class="item-selector">app0-lib1-sub-child-64</span>
                      <button (click)="toggleComponentLoad(4)" class="btn btn-xs">
                        {{isComponentLoaded(4) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn4); when isComponentLoaded(4)) {
                      <app0-lib1-sub-child-64 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-64</p>
                        <button #loadBtn4 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-64...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-64</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="5 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">6</span>
                      <span class="item-selector">app0-lib1-sub-child-65</span>
                      <button (click)="toggleComponentLoad(5)" class="btn btn-xs">
                        {{isComponentLoaded(5) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn5); when isComponentLoaded(5)) {
                      <app0-lib1-sub-child-65 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-65</p>
                        <button #loadBtn5 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-65...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-65</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="6 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">7</span>
                      <span class="item-selector">app0-lib1-sub-child-66</span>
                      <button (click)="toggleComponentLoad(6)" class="btn btn-xs">
                        {{isComponentLoaded(6) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn6); when isComponentLoaded(6)) {
                      <app0-lib1-sub-child-66 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-66</p>
                        <button #loadBtn6 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-66...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-66</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="7 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">8</span>
                      <span class="item-selector">app0-lib1-sub-child-67</span>
                      <button (click)="toggleComponentLoad(7)" class="btn btn-xs">
                        {{isComponentLoaded(7) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn7); when isComponentLoaded(7)) {
                      <app0-lib1-sub-child-67 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-67</p>
                        <button #loadBtn7 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-67...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-67</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="8 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">9</span>
                      <span class="item-selector">app0-lib1-sub-child-68</span>
                      <button (click)="toggleComponentLoad(8)" class="btn btn-xs">
                        {{isComponentLoaded(8) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn8); when isComponentLoaded(8)) {
                      <app0-lib1-sub-child-68 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-68</p>
                        <button #loadBtn8 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-68...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-68</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="9 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">10</span>
                      <span class="item-selector">app0-lib1-sub-child-69</span>
                      <button (click)="toggleComponentLoad(9)" class="btn btn-xs">
                        {{isComponentLoaded(9) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn9); when isComponentLoaded(9)) {
                      <app0-lib1-sub-child-69 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-69</p>
                        <button #loadBtn9 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-69...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-69</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="10 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">11</span>
                      <span class="item-selector">app0-lib1-sub-child-70</span>
                      <button (click)="toggleComponentLoad(10)" class="btn btn-xs">
                        {{isComponentLoaded(10) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn10); when isComponentLoaded(10)) {
                      <app0-lib1-sub-child-70 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-70</p>
                        <button #loadBtn10 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-70...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-70</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="11 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">12</span>
                      <span class="item-selector">app0-lib1-sub-child-71</span>
                      <button (click)="toggleComponentLoad(11)" class="btn btn-xs">
                        {{isComponentLoaded(11) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn11); when isComponentLoaded(11)) {
                      <app0-lib1-sub-child-71 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-71</p>
                        <button #loadBtn11 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-71...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-71</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="12 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">13</span>
                      <span class="item-selector">app0-lib1-sub-child-72</span>
                      <button (click)="toggleComponentLoad(12)" class="btn btn-xs">
                        {{isComponentLoaded(12) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn12); when isComponentLoaded(12)) {
                      <app0-lib1-sub-child-72 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-72</p>
                        <button #loadBtn12 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-72...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-72</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="13 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">14</span>
                      <span class="item-selector">app0-lib1-sub-child-73</span>
                      <button (click)="toggleComponentLoad(13)" class="btn btn-xs">
                        {{isComponentLoaded(13) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn13); when isComponentLoaded(13)) {
                      <app0-lib1-sub-child-73 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-73</p>
                        <button #loadBtn13 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-73...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-73</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="14 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">15</span>
                      <span class="item-selector">app0-lib1-sub-child-74</span>
                      <button (click)="toggleComponentLoad(14)" class="btn btn-xs">
                        {{isComponentLoaded(14) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn14); when isComponentLoaded(14)) {
                      <app0-lib1-sub-child-74 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-74</p>
                        <button #loadBtn14 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-74...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-74</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="15 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">16</span>
                      <span class="item-selector">app0-lib1-sub-child-75</span>
                      <button (click)="toggleComponentLoad(15)" class="btn btn-xs">
                        {{isComponentLoaded(15) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn15); when isComponentLoaded(15)) {
                      <app0-lib1-sub-child-75 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-75</p>
                        <button #loadBtn15 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-75...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-75</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="16 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">17</span>
                      <span class="item-selector">app0-lib1-sub-child-76</span>
                      <button (click)="toggleComponentLoad(16)" class="btn btn-xs">
                        {{isComponentLoaded(16) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn16); when isComponentLoaded(16)) {
                      <app0-lib1-sub-child-76 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-76</p>
                        <button #loadBtn16 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-76...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-76</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="17 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">18</span>
                      <span class="item-selector">app0-lib1-sub-child-77</span>
                      <button (click)="toggleComponentLoad(17)" class="btn btn-xs">
                        {{isComponentLoaded(17) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn17); when isComponentLoaded(17)) {
                      <app0-lib1-sub-child-77 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-77</p>
                        <button #loadBtn17 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-77...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-77</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="18 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">19</span>
                      <span class="item-selector">app0-lib1-sub-child-78</span>
                      <button (click)="toggleComponentLoad(18)" class="btn btn-xs">
                        {{isComponentLoaded(18) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn18); when isComponentLoaded(18)) {
                      <app0-lib1-sub-child-78 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-78</p>
                        <button #loadBtn18 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-78...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-78</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="19 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">20</span>
                      <span class="item-selector">app0-lib1-sub-child-79</span>
                      <button (click)="toggleComponentLoad(19)" class="btn btn-xs">
                        {{isComponentLoaded(19) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn19); when isComponentLoaded(19)) {
                      <app0-lib1-sub-child-79 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-79</p>
                        <button #loadBtn19 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-79...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-79</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="20 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">21</span>
                      <span class="item-selector">app0-lib1-sub-child-80</span>
                      <button (click)="toggleComponentLoad(20)" class="btn btn-xs">
                        {{isComponentLoaded(20) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn20); when isComponentLoaded(20)) {
                      <app0-lib1-sub-child-80 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-80</p>
                        <button #loadBtn20 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-80...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-80</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="21 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">22</span>
                      <span class="item-selector">app0-lib1-sub-child-81</span>
                      <button (click)="toggleComponentLoad(21)" class="btn btn-xs">
                        {{isComponentLoaded(21) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn21); when isComponentLoaded(21)) {
                      <app0-lib1-sub-child-81 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-81</p>
                        <button #loadBtn21 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-81...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-81</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="22 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">23</span>
                      <span class="item-selector">app0-lib1-sub-child-82</span>
                      <button (click)="toggleComponentLoad(22)" class="btn btn-xs">
                        {{isComponentLoaded(22) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn22); when isComponentLoaded(22)) {
                      <app0-lib1-sub-child-82 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-82</p>
                        <button #loadBtn22 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-82...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-82</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="23 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">24</span>
                      <span class="item-selector">app0-lib1-sub-child-83</span>
                      <button (click)="toggleComponentLoad(23)" class="btn btn-xs">
                        {{isComponentLoaded(23) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn23); when isComponentLoaded(23)) {
                      <app0-lib1-sub-child-83 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-83</p>
                        <button #loadBtn23 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-83...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-83</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="24 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">25</span>
                      <span class="item-selector">app0-lib1-sub-child-84</span>
                      <button (click)="toggleComponentLoad(24)" class="btn btn-xs">
                        {{isComponentLoaded(24) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn24); when isComponentLoaded(24)) {
                      <app0-lib1-sub-child-84 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-84</p>
                        <button #loadBtn24 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-84...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-84</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="25 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">26</span>
                      <span class="item-selector">app0-lib1-sub-child-85</span>
                      <button (click)="toggleComponentLoad(25)" class="btn btn-xs">
                        {{isComponentLoaded(25) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn25); when isComponentLoaded(25)) {
                      <app0-lib1-sub-child-85 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-85</p>
                        <button #loadBtn25 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-85...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-85</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="26 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">27</span>
                      <span class="item-selector">app0-lib1-sub-child-86</span>
                      <button (click)="toggleComponentLoad(26)" class="btn btn-xs">
                        {{isComponentLoaded(26) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn26); when isComponentLoaded(26)) {
                      <app0-lib1-sub-child-86 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-86</p>
                        <button #loadBtn26 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-86...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-86</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="27 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">28</span>
                      <span class="item-selector">app0-lib1-sub-child-87</span>
                      <button (click)="toggleComponentLoad(27)" class="btn btn-xs">
                        {{isComponentLoaded(27) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn27); when isComponentLoaded(27)) {
                      <app0-lib1-sub-child-87 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-87</p>
                        <button #loadBtn27 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-87...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-87</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="28 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">29</span>
                      <span class="item-selector">app0-lib1-sub-child-88</span>
                      <button (click)="toggleComponentLoad(28)" class="btn btn-xs">
                        {{isComponentLoaded(28) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn28); when isComponentLoaded(28)) {
                      <app0-lib1-sub-child-88 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-88</p>
                        <button #loadBtn28 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-88...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-88</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="29 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">30</span>
                      <span class="item-selector">app0-lib1-sub-child-89</span>
                      <button (click)="toggleComponentLoad(29)" class="btn btn-xs">
                        {{isComponentLoaded(29) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn29); when isComponentLoaded(29)) {
                      <app0-lib1-sub-child-89 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib1-sub-child-89</p>
                        <button #loadBtn29 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib1-sub-child-89...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib1-sub-child-89</p>
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
    App0Lib1SubChild60,
    App0Lib1SubChild61,
    App0Lib1SubChild62,
    App0Lib1SubChild63,
    App0Lib1SubChild64,
    App0Lib1SubChild65,
    App0Lib1SubChild66,
    App0Lib1SubChild67,
    App0Lib1SubChild68,
    App0Lib1SubChild69,
    App0Lib1SubChild70,
    App0Lib1SubChild71,
    App0Lib1SubChild72,
    App0Lib1SubChild73,
    App0Lib1SubChild74,
    App0Lib1SubChild75,
    App0Lib1SubChild76,
    App0Lib1SubChild77,
    App0Lib1SubChild78,
    App0Lib1SubChild79,
    App0Lib1SubChild80,
    App0Lib1SubChild81,
    App0Lib1SubChild82,
    App0Lib1SubChild83,
    App0Lib1SubChild84,
    App0Lib1SubChild85,
    App0Lib1SubChild86,
    App0Lib1SubChild87,
    App0Lib1SubChild88,
    App0Lib1SubChild89,
  ],
})
export class App0Lib1Child2 {
  title = 'App0Lib1Child2';
  isExpanded = true;
  mode: 'grid' | 'list' = 'grid';
  status: 'loading' | 'loaded' | 'error' = 'loaded';
  progress = 86;
  generatedAt = new Date().toLocaleTimeString();
  
  subChildren = [
    { selector: 'app0-lib1-sub-child-60', name: 'App0Lib1SubChild60' },
    { selector: 'app0-lib1-sub-child-61', name: 'App0Lib1SubChild61' },
    { selector: 'app0-lib1-sub-child-62', name: 'App0Lib1SubChild62' },
    { selector: 'app0-lib1-sub-child-63', name: 'App0Lib1SubChild63' },
    { selector: 'app0-lib1-sub-child-64', name: 'App0Lib1SubChild64' },
    { selector: 'app0-lib1-sub-child-65', name: 'App0Lib1SubChild65' },
    { selector: 'app0-lib1-sub-child-66', name: 'App0Lib1SubChild66' },
    { selector: 'app0-lib1-sub-child-67', name: 'App0Lib1SubChild67' },
    { selector: 'app0-lib1-sub-child-68', name: 'App0Lib1SubChild68' },
    { selector: 'app0-lib1-sub-child-69', name: 'App0Lib1SubChild69' },
    { selector: 'app0-lib1-sub-child-70', name: 'App0Lib1SubChild70' },
    { selector: 'app0-lib1-sub-child-71', name: 'App0Lib1SubChild71' },
    { selector: 'app0-lib1-sub-child-72', name: 'App0Lib1SubChild72' },
    { selector: 'app0-lib1-sub-child-73', name: 'App0Lib1SubChild73' },
    { selector: 'app0-lib1-sub-child-74', name: 'App0Lib1SubChild74' },
    { selector: 'app0-lib1-sub-child-75', name: 'App0Lib1SubChild75' },
    { selector: 'app0-lib1-sub-child-76', name: 'App0Lib1SubChild76' },
    { selector: 'app0-lib1-sub-child-77', name: 'App0Lib1SubChild77' },
    { selector: 'app0-lib1-sub-child-78', name: 'App0Lib1SubChild78' },
    { selector: 'app0-lib1-sub-child-79', name: 'App0Lib1SubChild79' },
    { selector: 'app0-lib1-sub-child-80', name: 'App0Lib1SubChild80' },
    { selector: 'app0-lib1-sub-child-81', name: 'App0Lib1SubChild81' },
    { selector: 'app0-lib1-sub-child-82', name: 'App0Lib1SubChild82' },
    { selector: 'app0-lib1-sub-child-83', name: 'App0Lib1SubChild83' },
    { selector: 'app0-lib1-sub-child-84', name: 'App0Lib1SubChild84' },
    { selector: 'app0-lib1-sub-child-85', name: 'App0Lib1SubChild85' },
    { selector: 'app0-lib1-sub-child-86', name: 'App0Lib1SubChild86' },
    { selector: 'app0-lib1-sub-child-87', name: 'App0Lib1SubChild87' },
    { selector: 'app0-lib1-sub-child-88', name: 'App0Lib1SubChild88' },
    { selector: 'app0-lib1-sub-child-89', name: 'App0Lib1SubChild89' }
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
