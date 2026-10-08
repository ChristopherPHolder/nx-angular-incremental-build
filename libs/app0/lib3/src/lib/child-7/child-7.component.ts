import { Component } from '@angular/core';
import { App0Lib3SubChild210 } from './sub-children/sub-child-210.component';
import { App0Lib3SubChild211 } from './sub-children/sub-child-211.component';
import { App0Lib3SubChild212 } from './sub-children/sub-child-212.component';
import { App0Lib3SubChild213 } from './sub-children/sub-child-213.component';
import { App0Lib3SubChild214 } from './sub-children/sub-child-214.component';
import { App0Lib3SubChild215 } from './sub-children/sub-child-215.component';
import { App0Lib3SubChild216 } from './sub-children/sub-child-216.component';
import { App0Lib3SubChild217 } from './sub-children/sub-child-217.component';
import { App0Lib3SubChild218 } from './sub-children/sub-child-218.component';
import { App0Lib3SubChild219 } from './sub-children/sub-child-219.component';
import { App0Lib3SubChild220 } from './sub-children/sub-child-220.component';
import { App0Lib3SubChild221 } from './sub-children/sub-child-221.component';
import { App0Lib3SubChild222 } from './sub-children/sub-child-222.component';
import { App0Lib3SubChild223 } from './sub-children/sub-child-223.component';
import { App0Lib3SubChild224 } from './sub-children/sub-child-224.component';
import { App0Lib3SubChild225 } from './sub-children/sub-child-225.component';
import { App0Lib3SubChild226 } from './sub-children/sub-child-226.component';
import { App0Lib3SubChild227 } from './sub-children/sub-child-227.component';
import { App0Lib3SubChild228 } from './sub-children/sub-child-228.component';
import { App0Lib3SubChild229 } from './sub-children/sub-child-229.component';
import { App0Lib3SubChild230 } from './sub-children/sub-child-230.component';
import { App0Lib3SubChild231 } from './sub-children/sub-child-231.component';
import { App0Lib3SubChild232 } from './sub-children/sub-child-232.component';
import { App0Lib3SubChild233 } from './sub-children/sub-child-233.component';
import { App0Lib3SubChild234 } from './sub-children/sub-child-234.component';
import { App0Lib3SubChild235 } from './sub-children/sub-child-235.component';
import { App0Lib3SubChild236 } from './sub-children/sub-child-236.component';
import { App0Lib3SubChild237 } from './sub-children/sub-child-237.component';
import { App0Lib3SubChild238 } from './sub-children/sub-child-238.component';
import { App0Lib3SubChild239 } from './sub-children/sub-child-239.component';

@Component({
  selector: 'app0-lib3-child-7',
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
        <p>Child component 7 | Status: {{status}} | Items: {{subChildren.length}}</p>
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
                      <app0-lib3-sub-child-210 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-210...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-210</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(1)) {
                      <app0-lib3-sub-child-211 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-211...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-211</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(2)) {
                      <app0-lib3-sub-child-212 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-212...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-212</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(3)) {
                      <app0-lib3-sub-child-213 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-213...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-213</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(4)) {
                      <app0-lib3-sub-child-214 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-214...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-214</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(5)) {
                      <app0-lib3-sub-child-215 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-215...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-215</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(6)) {
                      <app0-lib3-sub-child-216 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-216...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-216</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(7)) {
                      <app0-lib3-sub-child-217 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-217...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-217</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(8)) {
                      <app0-lib3-sub-child-218 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-218...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-218</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(9)) {
                      <app0-lib3-sub-child-219 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-219...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-219</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(10)) {
                      <app0-lib3-sub-child-220 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-220...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-220</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(11)) {
                      <app0-lib3-sub-child-221 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-221...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-221</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(12)) {
                      <app0-lib3-sub-child-222 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-222...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-222</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(13)) {
                      <app0-lib3-sub-child-223 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-223...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-223</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(14)) {
                      <app0-lib3-sub-child-224 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-224...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-224</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(15)) {
                      <app0-lib3-sub-child-225 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-225...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-225</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(16)) {
                      <app0-lib3-sub-child-226 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-226...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-226</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(17)) {
                      <app0-lib3-sub-child-227 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-227...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-227</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(18)) {
                      <app0-lib3-sub-child-228 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-228...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-228</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(19)) {
                      <app0-lib3-sub-child-229 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-229...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-229</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(20)) {
                      <app0-lib3-sub-child-230 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-230...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-230</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(21)) {
                      <app0-lib3-sub-child-231 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-231...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-231</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(22)) {
                      <app0-lib3-sub-child-232 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-232...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-232</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(23)) {
                      <app0-lib3-sub-child-233 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-233...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-233</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(24)) {
                      <app0-lib3-sub-child-234 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-234...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-234</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(25)) {
                      <app0-lib3-sub-child-235 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-235...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-235</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(26)) {
                      <app0-lib3-sub-child-236 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-236...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-236</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(27)) {
                      <app0-lib3-sub-child-237 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-237...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-237</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(28)) {
                      <app0-lib3-sub-child-238 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-238...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-238</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(29)) {
                      <app0-lib3-sub-child-239 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-239...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-239</p>
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
                      <span class="item-selector">app0-lib3-sub-child-210</span>
                      <button (click)="toggleComponentLoad(0)" class="btn btn-xs">
                        {{isComponentLoaded(0) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn0); when isComponentLoaded(0)) {
                      <app0-lib3-sub-child-210 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-210</p>
                        <button #loadBtn0 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-210...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-210</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="1 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">2</span>
                      <span class="item-selector">app0-lib3-sub-child-211</span>
                      <button (click)="toggleComponentLoad(1)" class="btn btn-xs">
                        {{isComponentLoaded(1) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn1); when isComponentLoaded(1)) {
                      <app0-lib3-sub-child-211 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-211</p>
                        <button #loadBtn1 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-211...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-211</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="2 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">3</span>
                      <span class="item-selector">app0-lib3-sub-child-212</span>
                      <button (click)="toggleComponentLoad(2)" class="btn btn-xs">
                        {{isComponentLoaded(2) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn2); when isComponentLoaded(2)) {
                      <app0-lib3-sub-child-212 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-212</p>
                        <button #loadBtn2 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-212...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-212</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="3 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">4</span>
                      <span class="item-selector">app0-lib3-sub-child-213</span>
                      <button (click)="toggleComponentLoad(3)" class="btn btn-xs">
                        {{isComponentLoaded(3) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn3); when isComponentLoaded(3)) {
                      <app0-lib3-sub-child-213 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-213</p>
                        <button #loadBtn3 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-213...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-213</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="4 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">5</span>
                      <span class="item-selector">app0-lib3-sub-child-214</span>
                      <button (click)="toggleComponentLoad(4)" class="btn btn-xs">
                        {{isComponentLoaded(4) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn4); when isComponentLoaded(4)) {
                      <app0-lib3-sub-child-214 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-214</p>
                        <button #loadBtn4 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-214...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-214</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="5 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">6</span>
                      <span class="item-selector">app0-lib3-sub-child-215</span>
                      <button (click)="toggleComponentLoad(5)" class="btn btn-xs">
                        {{isComponentLoaded(5) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn5); when isComponentLoaded(5)) {
                      <app0-lib3-sub-child-215 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-215</p>
                        <button #loadBtn5 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-215...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-215</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="6 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">7</span>
                      <span class="item-selector">app0-lib3-sub-child-216</span>
                      <button (click)="toggleComponentLoad(6)" class="btn btn-xs">
                        {{isComponentLoaded(6) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn6); when isComponentLoaded(6)) {
                      <app0-lib3-sub-child-216 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-216</p>
                        <button #loadBtn6 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-216...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-216</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="7 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">8</span>
                      <span class="item-selector">app0-lib3-sub-child-217</span>
                      <button (click)="toggleComponentLoad(7)" class="btn btn-xs">
                        {{isComponentLoaded(7) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn7); when isComponentLoaded(7)) {
                      <app0-lib3-sub-child-217 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-217</p>
                        <button #loadBtn7 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-217...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-217</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="8 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">9</span>
                      <span class="item-selector">app0-lib3-sub-child-218</span>
                      <button (click)="toggleComponentLoad(8)" class="btn btn-xs">
                        {{isComponentLoaded(8) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn8); when isComponentLoaded(8)) {
                      <app0-lib3-sub-child-218 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-218</p>
                        <button #loadBtn8 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-218...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-218</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="9 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">10</span>
                      <span class="item-selector">app0-lib3-sub-child-219</span>
                      <button (click)="toggleComponentLoad(9)" class="btn btn-xs">
                        {{isComponentLoaded(9) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn9); when isComponentLoaded(9)) {
                      <app0-lib3-sub-child-219 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-219</p>
                        <button #loadBtn9 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-219...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-219</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="10 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">11</span>
                      <span class="item-selector">app0-lib3-sub-child-220</span>
                      <button (click)="toggleComponentLoad(10)" class="btn btn-xs">
                        {{isComponentLoaded(10) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn10); when isComponentLoaded(10)) {
                      <app0-lib3-sub-child-220 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-220</p>
                        <button #loadBtn10 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-220...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-220</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="11 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">12</span>
                      <span class="item-selector">app0-lib3-sub-child-221</span>
                      <button (click)="toggleComponentLoad(11)" class="btn btn-xs">
                        {{isComponentLoaded(11) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn11); when isComponentLoaded(11)) {
                      <app0-lib3-sub-child-221 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-221</p>
                        <button #loadBtn11 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-221...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-221</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="12 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">13</span>
                      <span class="item-selector">app0-lib3-sub-child-222</span>
                      <button (click)="toggleComponentLoad(12)" class="btn btn-xs">
                        {{isComponentLoaded(12) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn12); when isComponentLoaded(12)) {
                      <app0-lib3-sub-child-222 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-222</p>
                        <button #loadBtn12 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-222...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-222</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="13 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">14</span>
                      <span class="item-selector">app0-lib3-sub-child-223</span>
                      <button (click)="toggleComponentLoad(13)" class="btn btn-xs">
                        {{isComponentLoaded(13) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn13); when isComponentLoaded(13)) {
                      <app0-lib3-sub-child-223 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-223</p>
                        <button #loadBtn13 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-223...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-223</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="14 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">15</span>
                      <span class="item-selector">app0-lib3-sub-child-224</span>
                      <button (click)="toggleComponentLoad(14)" class="btn btn-xs">
                        {{isComponentLoaded(14) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn14); when isComponentLoaded(14)) {
                      <app0-lib3-sub-child-224 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-224</p>
                        <button #loadBtn14 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-224...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-224</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="15 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">16</span>
                      <span class="item-selector">app0-lib3-sub-child-225</span>
                      <button (click)="toggleComponentLoad(15)" class="btn btn-xs">
                        {{isComponentLoaded(15) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn15); when isComponentLoaded(15)) {
                      <app0-lib3-sub-child-225 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-225</p>
                        <button #loadBtn15 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-225...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-225</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="16 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">17</span>
                      <span class="item-selector">app0-lib3-sub-child-226</span>
                      <button (click)="toggleComponentLoad(16)" class="btn btn-xs">
                        {{isComponentLoaded(16) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn16); when isComponentLoaded(16)) {
                      <app0-lib3-sub-child-226 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-226</p>
                        <button #loadBtn16 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-226...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-226</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="17 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">18</span>
                      <span class="item-selector">app0-lib3-sub-child-227</span>
                      <button (click)="toggleComponentLoad(17)" class="btn btn-xs">
                        {{isComponentLoaded(17) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn17); when isComponentLoaded(17)) {
                      <app0-lib3-sub-child-227 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-227</p>
                        <button #loadBtn17 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-227...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-227</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="18 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">19</span>
                      <span class="item-selector">app0-lib3-sub-child-228</span>
                      <button (click)="toggleComponentLoad(18)" class="btn btn-xs">
                        {{isComponentLoaded(18) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn18); when isComponentLoaded(18)) {
                      <app0-lib3-sub-child-228 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-228</p>
                        <button #loadBtn18 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-228...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-228</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="19 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">20</span>
                      <span class="item-selector">app0-lib3-sub-child-229</span>
                      <button (click)="toggleComponentLoad(19)" class="btn btn-xs">
                        {{isComponentLoaded(19) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn19); when isComponentLoaded(19)) {
                      <app0-lib3-sub-child-229 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-229</p>
                        <button #loadBtn19 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-229...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-229</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="20 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">21</span>
                      <span class="item-selector">app0-lib3-sub-child-230</span>
                      <button (click)="toggleComponentLoad(20)" class="btn btn-xs">
                        {{isComponentLoaded(20) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn20); when isComponentLoaded(20)) {
                      <app0-lib3-sub-child-230 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-230</p>
                        <button #loadBtn20 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-230...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-230</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="21 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">22</span>
                      <span class="item-selector">app0-lib3-sub-child-231</span>
                      <button (click)="toggleComponentLoad(21)" class="btn btn-xs">
                        {{isComponentLoaded(21) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn21); when isComponentLoaded(21)) {
                      <app0-lib3-sub-child-231 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-231</p>
                        <button #loadBtn21 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-231...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-231</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="22 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">23</span>
                      <span class="item-selector">app0-lib3-sub-child-232</span>
                      <button (click)="toggleComponentLoad(22)" class="btn btn-xs">
                        {{isComponentLoaded(22) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn22); when isComponentLoaded(22)) {
                      <app0-lib3-sub-child-232 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-232</p>
                        <button #loadBtn22 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-232...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-232</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="23 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">24</span>
                      <span class="item-selector">app0-lib3-sub-child-233</span>
                      <button (click)="toggleComponentLoad(23)" class="btn btn-xs">
                        {{isComponentLoaded(23) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn23); when isComponentLoaded(23)) {
                      <app0-lib3-sub-child-233 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-233</p>
                        <button #loadBtn23 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-233...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-233</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="24 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">25</span>
                      <span class="item-selector">app0-lib3-sub-child-234</span>
                      <button (click)="toggleComponentLoad(24)" class="btn btn-xs">
                        {{isComponentLoaded(24) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn24); when isComponentLoaded(24)) {
                      <app0-lib3-sub-child-234 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-234</p>
                        <button #loadBtn24 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-234...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-234</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="25 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">26</span>
                      <span class="item-selector">app0-lib3-sub-child-235</span>
                      <button (click)="toggleComponentLoad(25)" class="btn btn-xs">
                        {{isComponentLoaded(25) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn25); when isComponentLoaded(25)) {
                      <app0-lib3-sub-child-235 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-235</p>
                        <button #loadBtn25 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-235...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-235</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="26 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">27</span>
                      <span class="item-selector">app0-lib3-sub-child-236</span>
                      <button (click)="toggleComponentLoad(26)" class="btn btn-xs">
                        {{isComponentLoaded(26) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn26); when isComponentLoaded(26)) {
                      <app0-lib3-sub-child-236 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-236</p>
                        <button #loadBtn26 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-236...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-236</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="27 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">28</span>
                      <span class="item-selector">app0-lib3-sub-child-237</span>
                      <button (click)="toggleComponentLoad(27)" class="btn btn-xs">
                        {{isComponentLoaded(27) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn27); when isComponentLoaded(27)) {
                      <app0-lib3-sub-child-237 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-237</p>
                        <button #loadBtn27 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-237...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-237</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="28 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">29</span>
                      <span class="item-selector">app0-lib3-sub-child-238</span>
                      <button (click)="toggleComponentLoad(28)" class="btn btn-xs">
                        {{isComponentLoaded(28) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn28); when isComponentLoaded(28)) {
                      <app0-lib3-sub-child-238 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-238</p>
                        <button #loadBtn28 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-238...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-238</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="29 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">30</span>
                      <span class="item-selector">app0-lib3-sub-child-239</span>
                      <button (click)="toggleComponentLoad(29)" class="btn btn-xs">
                        {{isComponentLoaded(29) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn29); when isComponentLoaded(29)) {
                      <app0-lib3-sub-child-239 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-239</p>
                        <button #loadBtn29 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-239...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-239</p>
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
    App0Lib3SubChild210,
    App0Lib3SubChild211,
    App0Lib3SubChild212,
    App0Lib3SubChild213,
    App0Lib3SubChild214,
    App0Lib3SubChild215,
    App0Lib3SubChild216,
    App0Lib3SubChild217,
    App0Lib3SubChild218,
    App0Lib3SubChild219,
    App0Lib3SubChild220,
    App0Lib3SubChild221,
    App0Lib3SubChild222,
    App0Lib3SubChild223,
    App0Lib3SubChild224,
    App0Lib3SubChild225,
    App0Lib3SubChild226,
    App0Lib3SubChild227,
    App0Lib3SubChild228,
    App0Lib3SubChild229,
    App0Lib3SubChild230,
    App0Lib3SubChild231,
    App0Lib3SubChild232,
    App0Lib3SubChild233,
    App0Lib3SubChild234,
    App0Lib3SubChild235,
    App0Lib3SubChild236,
    App0Lib3SubChild237,
    App0Lib3SubChild238,
    App0Lib3SubChild239,
  ],
})
export class App0Lib3Child7 {
  title = 'App0Lib3Child7';
  isExpanded = true;
  mode: 'grid' | 'list' = 'grid';
  status: 'loading' | 'loaded' | 'error' = 'loaded';
  progress = 36;
  generatedAt = new Date().toLocaleTimeString();
  
  subChildren = [
    { selector: 'app0-lib3-sub-child-210', name: 'App0Lib3SubChild210' },
    { selector: 'app0-lib3-sub-child-211', name: 'App0Lib3SubChild211' },
    { selector: 'app0-lib3-sub-child-212', name: 'App0Lib3SubChild212' },
    { selector: 'app0-lib3-sub-child-213', name: 'App0Lib3SubChild213' },
    { selector: 'app0-lib3-sub-child-214', name: 'App0Lib3SubChild214' },
    { selector: 'app0-lib3-sub-child-215', name: 'App0Lib3SubChild215' },
    { selector: 'app0-lib3-sub-child-216', name: 'App0Lib3SubChild216' },
    { selector: 'app0-lib3-sub-child-217', name: 'App0Lib3SubChild217' },
    { selector: 'app0-lib3-sub-child-218', name: 'App0Lib3SubChild218' },
    { selector: 'app0-lib3-sub-child-219', name: 'App0Lib3SubChild219' },
    { selector: 'app0-lib3-sub-child-220', name: 'App0Lib3SubChild220' },
    { selector: 'app0-lib3-sub-child-221', name: 'App0Lib3SubChild221' },
    { selector: 'app0-lib3-sub-child-222', name: 'App0Lib3SubChild222' },
    { selector: 'app0-lib3-sub-child-223', name: 'App0Lib3SubChild223' },
    { selector: 'app0-lib3-sub-child-224', name: 'App0Lib3SubChild224' },
    { selector: 'app0-lib3-sub-child-225', name: 'App0Lib3SubChild225' },
    { selector: 'app0-lib3-sub-child-226', name: 'App0Lib3SubChild226' },
    { selector: 'app0-lib3-sub-child-227', name: 'App0Lib3SubChild227' },
    { selector: 'app0-lib3-sub-child-228', name: 'App0Lib3SubChild228' },
    { selector: 'app0-lib3-sub-child-229', name: 'App0Lib3SubChild229' },
    { selector: 'app0-lib3-sub-child-230', name: 'App0Lib3SubChild230' },
    { selector: 'app0-lib3-sub-child-231', name: 'App0Lib3SubChild231' },
    { selector: 'app0-lib3-sub-child-232', name: 'App0Lib3SubChild232' },
    { selector: 'app0-lib3-sub-child-233', name: 'App0Lib3SubChild233' },
    { selector: 'app0-lib3-sub-child-234', name: 'App0Lib3SubChild234' },
    { selector: 'app0-lib3-sub-child-235', name: 'App0Lib3SubChild235' },
    { selector: 'app0-lib3-sub-child-236', name: 'App0Lib3SubChild236' },
    { selector: 'app0-lib3-sub-child-237', name: 'App0Lib3SubChild237' },
    { selector: 'app0-lib3-sub-child-238', name: 'App0Lib3SubChild238' },
    { selector: 'app0-lib3-sub-child-239', name: 'App0Lib3SubChild239' }
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
