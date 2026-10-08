import { Component } from '@angular/core';
import { App0Lib0SubChild30 } from './sub-children/sub-child-30.component';
import { App0Lib0SubChild31 } from './sub-children/sub-child-31.component';
import { App0Lib0SubChild32 } from './sub-children/sub-child-32.component';
import { App0Lib0SubChild33 } from './sub-children/sub-child-33.component';
import { App0Lib0SubChild34 } from './sub-children/sub-child-34.component';
import { App0Lib0SubChild35 } from './sub-children/sub-child-35.component';
import { App0Lib0SubChild36 } from './sub-children/sub-child-36.component';
import { App0Lib0SubChild37 } from './sub-children/sub-child-37.component';
import { App0Lib0SubChild38 } from './sub-children/sub-child-38.component';
import { App0Lib0SubChild39 } from './sub-children/sub-child-39.component';
import { App0Lib0SubChild40 } from './sub-children/sub-child-40.component';
import { App0Lib0SubChild41 } from './sub-children/sub-child-41.component';
import { App0Lib0SubChild42 } from './sub-children/sub-child-42.component';
import { App0Lib0SubChild43 } from './sub-children/sub-child-43.component';
import { App0Lib0SubChild44 } from './sub-children/sub-child-44.component';
import { App0Lib0SubChild45 } from './sub-children/sub-child-45.component';
import { App0Lib0SubChild46 } from './sub-children/sub-child-46.component';
import { App0Lib0SubChild47 } from './sub-children/sub-child-47.component';
import { App0Lib0SubChild48 } from './sub-children/sub-child-48.component';
import { App0Lib0SubChild49 } from './sub-children/sub-child-49.component';
import { App0Lib0SubChild50 } from './sub-children/sub-child-50.component';
import { App0Lib0SubChild51 } from './sub-children/sub-child-51.component';
import { App0Lib0SubChild52 } from './sub-children/sub-child-52.component';
import { App0Lib0SubChild53 } from './sub-children/sub-child-53.component';
import { App0Lib0SubChild54 } from './sub-children/sub-child-54.component';
import { App0Lib0SubChild55 } from './sub-children/sub-child-55.component';
import { App0Lib0SubChild56 } from './sub-children/sub-child-56.component';
import { App0Lib0SubChild57 } from './sub-children/sub-child-57.component';
import { App0Lib0SubChild58 } from './sub-children/sub-child-58.component';
import { App0Lib0SubChild59 } from './sub-children/sub-child-59.component';

@Component({
  selector: 'app0-lib0-child-1',
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
        <p>Child component 1 | Status: {{status}} | Items: {{subChildren.length}}</p>
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
                      <app0-lib0-sub-child-30 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-30...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-30</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(1)) {
                      <app0-lib0-sub-child-31 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-31...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-31</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(2)) {
                      <app0-lib0-sub-child-32 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-32...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-32</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(3)) {
                      <app0-lib0-sub-child-33 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-33...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-33</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(4)) {
                      <app0-lib0-sub-child-34 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-34...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-34</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(5)) {
                      <app0-lib0-sub-child-35 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-35...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-35</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(6)) {
                      <app0-lib0-sub-child-36 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-36...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-36</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(7)) {
                      <app0-lib0-sub-child-37 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-37...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-37</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(8)) {
                      <app0-lib0-sub-child-38 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-38...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-38</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(9)) {
                      <app0-lib0-sub-child-39 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-39...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-39</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(10)) {
                      <app0-lib0-sub-child-40 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-40...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-40</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(11)) {
                      <app0-lib0-sub-child-41 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-41...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-41</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(12)) {
                      <app0-lib0-sub-child-42 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-42...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-42</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(13)) {
                      <app0-lib0-sub-child-43 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-43...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-43</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(14)) {
                      <app0-lib0-sub-child-44 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-44...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-44</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(15)) {
                      <app0-lib0-sub-child-45 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-45...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-45</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(16)) {
                      <app0-lib0-sub-child-46 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-46...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-46</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(17)) {
                      <app0-lib0-sub-child-47 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-47...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-47</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(18)) {
                      <app0-lib0-sub-child-48 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-48...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-48</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(19)) {
                      <app0-lib0-sub-child-49 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-49...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-49</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(20)) {
                      <app0-lib0-sub-child-50 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-50...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-50</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(21)) {
                      <app0-lib0-sub-child-51 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-51...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-51</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(22)) {
                      <app0-lib0-sub-child-52 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-52...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-52</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(23)) {
                      <app0-lib0-sub-child-53 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-53...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-53</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(24)) {
                      <app0-lib0-sub-child-54 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-54...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-54</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(25)) {
                      <app0-lib0-sub-child-55 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-55...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-55</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(26)) {
                      <app0-lib0-sub-child-56 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-56...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-56</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(27)) {
                      <app0-lib0-sub-child-57 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-57...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-57</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(28)) {
                      <app0-lib0-sub-child-58 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-58...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-58</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(29)) {
                      <app0-lib0-sub-child-59 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib0-sub-child-59...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib0-sub-child-59</p>
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
                      <span class="item-selector">app0-lib0-sub-child-30</span>
                      <button (click)="toggleComponentLoad(0)" class="btn btn-xs">
                        {{isComponentLoaded(0) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn0); when isComponentLoaded(0)) {
                      <app0-lib0-sub-child-30 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-30</p>
                        <button #loadBtn0 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-30...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-30</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="1 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">2</span>
                      <span class="item-selector">app0-lib0-sub-child-31</span>
                      <button (click)="toggleComponentLoad(1)" class="btn btn-xs">
                        {{isComponentLoaded(1) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn1); when isComponentLoaded(1)) {
                      <app0-lib0-sub-child-31 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-31</p>
                        <button #loadBtn1 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-31...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-31</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="2 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">3</span>
                      <span class="item-selector">app0-lib0-sub-child-32</span>
                      <button (click)="toggleComponentLoad(2)" class="btn btn-xs">
                        {{isComponentLoaded(2) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn2); when isComponentLoaded(2)) {
                      <app0-lib0-sub-child-32 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-32</p>
                        <button #loadBtn2 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-32...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-32</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="3 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">4</span>
                      <span class="item-selector">app0-lib0-sub-child-33</span>
                      <button (click)="toggleComponentLoad(3)" class="btn btn-xs">
                        {{isComponentLoaded(3) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn3); when isComponentLoaded(3)) {
                      <app0-lib0-sub-child-33 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-33</p>
                        <button #loadBtn3 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-33...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-33</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="4 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">5</span>
                      <span class="item-selector">app0-lib0-sub-child-34</span>
                      <button (click)="toggleComponentLoad(4)" class="btn btn-xs">
                        {{isComponentLoaded(4) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn4); when isComponentLoaded(4)) {
                      <app0-lib0-sub-child-34 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-34</p>
                        <button #loadBtn4 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-34...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-34</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="5 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">6</span>
                      <span class="item-selector">app0-lib0-sub-child-35</span>
                      <button (click)="toggleComponentLoad(5)" class="btn btn-xs">
                        {{isComponentLoaded(5) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn5); when isComponentLoaded(5)) {
                      <app0-lib0-sub-child-35 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-35</p>
                        <button #loadBtn5 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-35...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-35</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="6 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">7</span>
                      <span class="item-selector">app0-lib0-sub-child-36</span>
                      <button (click)="toggleComponentLoad(6)" class="btn btn-xs">
                        {{isComponentLoaded(6) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn6); when isComponentLoaded(6)) {
                      <app0-lib0-sub-child-36 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-36</p>
                        <button #loadBtn6 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-36...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-36</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="7 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">8</span>
                      <span class="item-selector">app0-lib0-sub-child-37</span>
                      <button (click)="toggleComponentLoad(7)" class="btn btn-xs">
                        {{isComponentLoaded(7) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn7); when isComponentLoaded(7)) {
                      <app0-lib0-sub-child-37 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-37</p>
                        <button #loadBtn7 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-37...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-37</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="8 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">9</span>
                      <span class="item-selector">app0-lib0-sub-child-38</span>
                      <button (click)="toggleComponentLoad(8)" class="btn btn-xs">
                        {{isComponentLoaded(8) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn8); when isComponentLoaded(8)) {
                      <app0-lib0-sub-child-38 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-38</p>
                        <button #loadBtn8 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-38...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-38</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="9 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">10</span>
                      <span class="item-selector">app0-lib0-sub-child-39</span>
                      <button (click)="toggleComponentLoad(9)" class="btn btn-xs">
                        {{isComponentLoaded(9) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn9); when isComponentLoaded(9)) {
                      <app0-lib0-sub-child-39 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-39</p>
                        <button #loadBtn9 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-39...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-39</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="10 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">11</span>
                      <span class="item-selector">app0-lib0-sub-child-40</span>
                      <button (click)="toggleComponentLoad(10)" class="btn btn-xs">
                        {{isComponentLoaded(10) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn10); when isComponentLoaded(10)) {
                      <app0-lib0-sub-child-40 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-40</p>
                        <button #loadBtn10 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-40...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-40</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="11 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">12</span>
                      <span class="item-selector">app0-lib0-sub-child-41</span>
                      <button (click)="toggleComponentLoad(11)" class="btn btn-xs">
                        {{isComponentLoaded(11) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn11); when isComponentLoaded(11)) {
                      <app0-lib0-sub-child-41 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-41</p>
                        <button #loadBtn11 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-41...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-41</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="12 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">13</span>
                      <span class="item-selector">app0-lib0-sub-child-42</span>
                      <button (click)="toggleComponentLoad(12)" class="btn btn-xs">
                        {{isComponentLoaded(12) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn12); when isComponentLoaded(12)) {
                      <app0-lib0-sub-child-42 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-42</p>
                        <button #loadBtn12 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-42...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-42</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="13 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">14</span>
                      <span class="item-selector">app0-lib0-sub-child-43</span>
                      <button (click)="toggleComponentLoad(13)" class="btn btn-xs">
                        {{isComponentLoaded(13) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn13); when isComponentLoaded(13)) {
                      <app0-lib0-sub-child-43 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-43</p>
                        <button #loadBtn13 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-43...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-43</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="14 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">15</span>
                      <span class="item-selector">app0-lib0-sub-child-44</span>
                      <button (click)="toggleComponentLoad(14)" class="btn btn-xs">
                        {{isComponentLoaded(14) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn14); when isComponentLoaded(14)) {
                      <app0-lib0-sub-child-44 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-44</p>
                        <button #loadBtn14 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-44...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-44</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="15 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">16</span>
                      <span class="item-selector">app0-lib0-sub-child-45</span>
                      <button (click)="toggleComponentLoad(15)" class="btn btn-xs">
                        {{isComponentLoaded(15) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn15); when isComponentLoaded(15)) {
                      <app0-lib0-sub-child-45 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-45</p>
                        <button #loadBtn15 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-45...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-45</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="16 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">17</span>
                      <span class="item-selector">app0-lib0-sub-child-46</span>
                      <button (click)="toggleComponentLoad(16)" class="btn btn-xs">
                        {{isComponentLoaded(16) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn16); when isComponentLoaded(16)) {
                      <app0-lib0-sub-child-46 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-46</p>
                        <button #loadBtn16 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-46...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-46</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="17 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">18</span>
                      <span class="item-selector">app0-lib0-sub-child-47</span>
                      <button (click)="toggleComponentLoad(17)" class="btn btn-xs">
                        {{isComponentLoaded(17) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn17); when isComponentLoaded(17)) {
                      <app0-lib0-sub-child-47 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-47</p>
                        <button #loadBtn17 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-47...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-47</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="18 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">19</span>
                      <span class="item-selector">app0-lib0-sub-child-48</span>
                      <button (click)="toggleComponentLoad(18)" class="btn btn-xs">
                        {{isComponentLoaded(18) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn18); when isComponentLoaded(18)) {
                      <app0-lib0-sub-child-48 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-48</p>
                        <button #loadBtn18 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-48...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-48</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="19 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">20</span>
                      <span class="item-selector">app0-lib0-sub-child-49</span>
                      <button (click)="toggleComponentLoad(19)" class="btn btn-xs">
                        {{isComponentLoaded(19) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn19); when isComponentLoaded(19)) {
                      <app0-lib0-sub-child-49 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-49</p>
                        <button #loadBtn19 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-49...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-49</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="20 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">21</span>
                      <span class="item-selector">app0-lib0-sub-child-50</span>
                      <button (click)="toggleComponentLoad(20)" class="btn btn-xs">
                        {{isComponentLoaded(20) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn20); when isComponentLoaded(20)) {
                      <app0-lib0-sub-child-50 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-50</p>
                        <button #loadBtn20 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-50...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-50</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="21 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">22</span>
                      <span class="item-selector">app0-lib0-sub-child-51</span>
                      <button (click)="toggleComponentLoad(21)" class="btn btn-xs">
                        {{isComponentLoaded(21) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn21); when isComponentLoaded(21)) {
                      <app0-lib0-sub-child-51 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-51</p>
                        <button #loadBtn21 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-51...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-51</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="22 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">23</span>
                      <span class="item-selector">app0-lib0-sub-child-52</span>
                      <button (click)="toggleComponentLoad(22)" class="btn btn-xs">
                        {{isComponentLoaded(22) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn22); when isComponentLoaded(22)) {
                      <app0-lib0-sub-child-52 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-52</p>
                        <button #loadBtn22 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-52...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-52</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="23 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">24</span>
                      <span class="item-selector">app0-lib0-sub-child-53</span>
                      <button (click)="toggleComponentLoad(23)" class="btn btn-xs">
                        {{isComponentLoaded(23) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn23); when isComponentLoaded(23)) {
                      <app0-lib0-sub-child-53 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-53</p>
                        <button #loadBtn23 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-53...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-53</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="24 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">25</span>
                      <span class="item-selector">app0-lib0-sub-child-54</span>
                      <button (click)="toggleComponentLoad(24)" class="btn btn-xs">
                        {{isComponentLoaded(24) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn24); when isComponentLoaded(24)) {
                      <app0-lib0-sub-child-54 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-54</p>
                        <button #loadBtn24 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-54...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-54</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="25 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">26</span>
                      <span class="item-selector">app0-lib0-sub-child-55</span>
                      <button (click)="toggleComponentLoad(25)" class="btn btn-xs">
                        {{isComponentLoaded(25) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn25); when isComponentLoaded(25)) {
                      <app0-lib0-sub-child-55 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-55</p>
                        <button #loadBtn25 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-55...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-55</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="26 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">27</span>
                      <span class="item-selector">app0-lib0-sub-child-56</span>
                      <button (click)="toggleComponentLoad(26)" class="btn btn-xs">
                        {{isComponentLoaded(26) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn26); when isComponentLoaded(26)) {
                      <app0-lib0-sub-child-56 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-56</p>
                        <button #loadBtn26 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-56...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-56</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="27 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">28</span>
                      <span class="item-selector">app0-lib0-sub-child-57</span>
                      <button (click)="toggleComponentLoad(27)" class="btn btn-xs">
                        {{isComponentLoaded(27) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn27); when isComponentLoaded(27)) {
                      <app0-lib0-sub-child-57 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-57</p>
                        <button #loadBtn27 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-57...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-57</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="28 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">29</span>
                      <span class="item-selector">app0-lib0-sub-child-58</span>
                      <button (click)="toggleComponentLoad(28)" class="btn btn-xs">
                        {{isComponentLoaded(28) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn28); when isComponentLoaded(28)) {
                      <app0-lib0-sub-child-58 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-58</p>
                        <button #loadBtn28 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-58...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-58</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="29 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">30</span>
                      <span class="item-selector">app0-lib0-sub-child-59</span>
                      <button (click)="toggleComponentLoad(29)" class="btn btn-xs">
                        {{isComponentLoaded(29) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn29); when isComponentLoaded(29)) {
                      <app0-lib0-sub-child-59 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib0-sub-child-59</p>
                        <button #loadBtn29 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib0-sub-child-59...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib0-sub-child-59</p>
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
    App0Lib0SubChild30,
    App0Lib0SubChild31,
    App0Lib0SubChild32,
    App0Lib0SubChild33,
    App0Lib0SubChild34,
    App0Lib0SubChild35,
    App0Lib0SubChild36,
    App0Lib0SubChild37,
    App0Lib0SubChild38,
    App0Lib0SubChild39,
    App0Lib0SubChild40,
    App0Lib0SubChild41,
    App0Lib0SubChild42,
    App0Lib0SubChild43,
    App0Lib0SubChild44,
    App0Lib0SubChild45,
    App0Lib0SubChild46,
    App0Lib0SubChild47,
    App0Lib0SubChild48,
    App0Lib0SubChild49,
    App0Lib0SubChild50,
    App0Lib0SubChild51,
    App0Lib0SubChild52,
    App0Lib0SubChild53,
    App0Lib0SubChild54,
    App0Lib0SubChild55,
    App0Lib0SubChild56,
    App0Lib0SubChild57,
    App0Lib0SubChild58,
    App0Lib0SubChild59,
  ],
})
export class App0Lib0Child1 {
  title = 'App0Lib0Child1';
  isExpanded = true;
  mode: 'grid' | 'list' = 'grid';
  status: 'loading' | 'loaded' | 'error' = 'loaded';
  progress = 94;
  generatedAt = new Date().toLocaleTimeString();
  
  subChildren = [
    { selector: 'app0-lib0-sub-child-30', name: 'App0Lib0SubChild30' },
    { selector: 'app0-lib0-sub-child-31', name: 'App0Lib0SubChild31' },
    { selector: 'app0-lib0-sub-child-32', name: 'App0Lib0SubChild32' },
    { selector: 'app0-lib0-sub-child-33', name: 'App0Lib0SubChild33' },
    { selector: 'app0-lib0-sub-child-34', name: 'App0Lib0SubChild34' },
    { selector: 'app0-lib0-sub-child-35', name: 'App0Lib0SubChild35' },
    { selector: 'app0-lib0-sub-child-36', name: 'App0Lib0SubChild36' },
    { selector: 'app0-lib0-sub-child-37', name: 'App0Lib0SubChild37' },
    { selector: 'app0-lib0-sub-child-38', name: 'App0Lib0SubChild38' },
    { selector: 'app0-lib0-sub-child-39', name: 'App0Lib0SubChild39' },
    { selector: 'app0-lib0-sub-child-40', name: 'App0Lib0SubChild40' },
    { selector: 'app0-lib0-sub-child-41', name: 'App0Lib0SubChild41' },
    { selector: 'app0-lib0-sub-child-42', name: 'App0Lib0SubChild42' },
    { selector: 'app0-lib0-sub-child-43', name: 'App0Lib0SubChild43' },
    { selector: 'app0-lib0-sub-child-44', name: 'App0Lib0SubChild44' },
    { selector: 'app0-lib0-sub-child-45', name: 'App0Lib0SubChild45' },
    { selector: 'app0-lib0-sub-child-46', name: 'App0Lib0SubChild46' },
    { selector: 'app0-lib0-sub-child-47', name: 'App0Lib0SubChild47' },
    { selector: 'app0-lib0-sub-child-48', name: 'App0Lib0SubChild48' },
    { selector: 'app0-lib0-sub-child-49', name: 'App0Lib0SubChild49' },
    { selector: 'app0-lib0-sub-child-50', name: 'App0Lib0SubChild50' },
    { selector: 'app0-lib0-sub-child-51', name: 'App0Lib0SubChild51' },
    { selector: 'app0-lib0-sub-child-52', name: 'App0Lib0SubChild52' },
    { selector: 'app0-lib0-sub-child-53', name: 'App0Lib0SubChild53' },
    { selector: 'app0-lib0-sub-child-54', name: 'App0Lib0SubChild54' },
    { selector: 'app0-lib0-sub-child-55', name: 'App0Lib0SubChild55' },
    { selector: 'app0-lib0-sub-child-56', name: 'App0Lib0SubChild56' },
    { selector: 'app0-lib0-sub-child-57', name: 'App0Lib0SubChild57' },
    { selector: 'app0-lib0-sub-child-58', name: 'App0Lib0SubChild58' },
    { selector: 'app0-lib0-sub-child-59', name: 'App0Lib0SubChild59' }
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
