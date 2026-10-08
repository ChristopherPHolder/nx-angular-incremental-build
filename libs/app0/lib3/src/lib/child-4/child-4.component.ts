import { Component } from '@angular/core';
import { App0Lib3SubChild120 } from './sub-children/sub-child-120.component';
import { App0Lib3SubChild121 } from './sub-children/sub-child-121.component';
import { App0Lib3SubChild122 } from './sub-children/sub-child-122.component';
import { App0Lib3SubChild123 } from './sub-children/sub-child-123.component';
import { App0Lib3SubChild124 } from './sub-children/sub-child-124.component';
import { App0Lib3SubChild125 } from './sub-children/sub-child-125.component';
import { App0Lib3SubChild126 } from './sub-children/sub-child-126.component';
import { App0Lib3SubChild127 } from './sub-children/sub-child-127.component';
import { App0Lib3SubChild128 } from './sub-children/sub-child-128.component';
import { App0Lib3SubChild129 } from './sub-children/sub-child-129.component';
import { App0Lib3SubChild130 } from './sub-children/sub-child-130.component';
import { App0Lib3SubChild131 } from './sub-children/sub-child-131.component';
import { App0Lib3SubChild132 } from './sub-children/sub-child-132.component';
import { App0Lib3SubChild133 } from './sub-children/sub-child-133.component';
import { App0Lib3SubChild134 } from './sub-children/sub-child-134.component';
import { App0Lib3SubChild135 } from './sub-children/sub-child-135.component';
import { App0Lib3SubChild136 } from './sub-children/sub-child-136.component';
import { App0Lib3SubChild137 } from './sub-children/sub-child-137.component';
import { App0Lib3SubChild138 } from './sub-children/sub-child-138.component';
import { App0Lib3SubChild139 } from './sub-children/sub-child-139.component';
import { App0Lib3SubChild140 } from './sub-children/sub-child-140.component';
import { App0Lib3SubChild141 } from './sub-children/sub-child-141.component';
import { App0Lib3SubChild142 } from './sub-children/sub-child-142.component';
import { App0Lib3SubChild143 } from './sub-children/sub-child-143.component';
import { App0Lib3SubChild144 } from './sub-children/sub-child-144.component';
import { App0Lib3SubChild145 } from './sub-children/sub-child-145.component';
import { App0Lib3SubChild146 } from './sub-children/sub-child-146.component';
import { App0Lib3SubChild147 } from './sub-children/sub-child-147.component';
import { App0Lib3SubChild148 } from './sub-children/sub-child-148.component';
import { App0Lib3SubChild149 } from './sub-children/sub-child-149.component';

@Component({
  selector: 'app0-lib3-child-4',
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
        <p>Child component 4 | Status: {{status}} | Items: {{subChildren.length}}</p>
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
                      <app0-lib3-sub-child-120 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-120...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-120</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(1)) {
                      <app0-lib3-sub-child-121 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-121...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-121</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(2)) {
                      <app0-lib3-sub-child-122 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-122...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-122</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(3)) {
                      <app0-lib3-sub-child-123 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-123...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-123</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(4)) {
                      <app0-lib3-sub-child-124 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-124...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-124</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(5)) {
                      <app0-lib3-sub-child-125 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-125...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-125</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(6)) {
                      <app0-lib3-sub-child-126 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-126...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-126</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(7)) {
                      <app0-lib3-sub-child-127 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-127...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-127</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(8)) {
                      <app0-lib3-sub-child-128 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-128...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-128</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(9)) {
                      <app0-lib3-sub-child-129 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-129...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-129</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(10)) {
                      <app0-lib3-sub-child-130 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-130...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-130</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(11)) {
                      <app0-lib3-sub-child-131 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-131...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-131</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(12)) {
                      <app0-lib3-sub-child-132 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-132...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-132</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(13)) {
                      <app0-lib3-sub-child-133 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-133...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-133</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(14)) {
                      <app0-lib3-sub-child-134 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-134...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-134</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(15)) {
                      <app0-lib3-sub-child-135 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-135...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-135</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(16)) {
                      <app0-lib3-sub-child-136 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-136...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-136</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(17)) {
                      <app0-lib3-sub-child-137 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-137...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-137</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(18)) {
                      <app0-lib3-sub-child-138 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-138...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-138</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(19)) {
                      <app0-lib3-sub-child-139 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-139...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-139</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(20)) {
                      <app0-lib3-sub-child-140 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-140...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-140</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(21)) {
                      <app0-lib3-sub-child-141 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-141...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-141</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(22)) {
                      <app0-lib3-sub-child-142 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-142...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-142</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(23)) {
                      <app0-lib3-sub-child-143 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-143...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-143</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(24)) {
                      <app0-lib3-sub-child-144 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-144...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-144</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(25)) {
                      <app0-lib3-sub-child-145 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-145...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-145</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(26)) {
                      <app0-lib3-sub-child-146 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-146...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-146</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(27)) {
                      <app0-lib3-sub-child-147 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-147...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-147</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(28)) {
                      <app0-lib3-sub-child-148 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-148...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-148</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(29)) {
                      <app0-lib3-sub-child-149 />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading app0-lib3-sub-child-149...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load app0-lib3-sub-child-149</p>
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
                      <span class="item-selector">app0-lib3-sub-child-120</span>
                      <button (click)="toggleComponentLoad(0)" class="btn btn-xs">
                        {{isComponentLoaded(0) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn0); when isComponentLoaded(0)) {
                      <app0-lib3-sub-child-120 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-120</p>
                        <button #loadBtn0 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-120...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-120</p>
                        <button (click)="retryLoadComponent(0)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="1 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">2</span>
                      <span class="item-selector">app0-lib3-sub-child-121</span>
                      <button (click)="toggleComponentLoad(1)" class="btn btn-xs">
                        {{isComponentLoaded(1) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn1); when isComponentLoaded(1)) {
                      <app0-lib3-sub-child-121 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-121</p>
                        <button #loadBtn1 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-121...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-121</p>
                        <button (click)="retryLoadComponent(1)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="2 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">3</span>
                      <span class="item-selector">app0-lib3-sub-child-122</span>
                      <button (click)="toggleComponentLoad(2)" class="btn btn-xs">
                        {{isComponentLoaded(2) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn2); when isComponentLoaded(2)) {
                      <app0-lib3-sub-child-122 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-122</p>
                        <button #loadBtn2 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-122...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-122</p>
                        <button (click)="retryLoadComponent(2)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="3 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">4</span>
                      <span class="item-selector">app0-lib3-sub-child-123</span>
                      <button (click)="toggleComponentLoad(3)" class="btn btn-xs">
                        {{isComponentLoaded(3) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn3); when isComponentLoaded(3)) {
                      <app0-lib3-sub-child-123 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-123</p>
                        <button #loadBtn3 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-123...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-123</p>
                        <button (click)="retryLoadComponent(3)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="4 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">5</span>
                      <span class="item-selector">app0-lib3-sub-child-124</span>
                      <button (click)="toggleComponentLoad(4)" class="btn btn-xs">
                        {{isComponentLoaded(4) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn4); when isComponentLoaded(4)) {
                      <app0-lib3-sub-child-124 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-124</p>
                        <button #loadBtn4 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-124...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-124</p>
                        <button (click)="retryLoadComponent(4)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="5 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">6</span>
                      <span class="item-selector">app0-lib3-sub-child-125</span>
                      <button (click)="toggleComponentLoad(5)" class="btn btn-xs">
                        {{isComponentLoaded(5) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn5); when isComponentLoaded(5)) {
                      <app0-lib3-sub-child-125 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-125</p>
                        <button #loadBtn5 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-125...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-125</p>
                        <button (click)="retryLoadComponent(5)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="6 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">7</span>
                      <span class="item-selector">app0-lib3-sub-child-126</span>
                      <button (click)="toggleComponentLoad(6)" class="btn btn-xs">
                        {{isComponentLoaded(6) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn6); when isComponentLoaded(6)) {
                      <app0-lib3-sub-child-126 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-126</p>
                        <button #loadBtn6 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-126...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-126</p>
                        <button (click)="retryLoadComponent(6)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="7 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">8</span>
                      <span class="item-selector">app0-lib3-sub-child-127</span>
                      <button (click)="toggleComponentLoad(7)" class="btn btn-xs">
                        {{isComponentLoaded(7) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn7); when isComponentLoaded(7)) {
                      <app0-lib3-sub-child-127 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-127</p>
                        <button #loadBtn7 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-127...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-127</p>
                        <button (click)="retryLoadComponent(7)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="8 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">9</span>
                      <span class="item-selector">app0-lib3-sub-child-128</span>
                      <button (click)="toggleComponentLoad(8)" class="btn btn-xs">
                        {{isComponentLoaded(8) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn8); when isComponentLoaded(8)) {
                      <app0-lib3-sub-child-128 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-128</p>
                        <button #loadBtn8 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-128...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-128</p>
                        <button (click)="retryLoadComponent(8)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="9 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">10</span>
                      <span class="item-selector">app0-lib3-sub-child-129</span>
                      <button (click)="toggleComponentLoad(9)" class="btn btn-xs">
                        {{isComponentLoaded(9) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn9); when isComponentLoaded(9)) {
                      <app0-lib3-sub-child-129 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-129</p>
                        <button #loadBtn9 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-129...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-129</p>
                        <button (click)="retryLoadComponent(9)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="10 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">11</span>
                      <span class="item-selector">app0-lib3-sub-child-130</span>
                      <button (click)="toggleComponentLoad(10)" class="btn btn-xs">
                        {{isComponentLoaded(10) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn10); when isComponentLoaded(10)) {
                      <app0-lib3-sub-child-130 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-130</p>
                        <button #loadBtn10 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-130...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-130</p>
                        <button (click)="retryLoadComponent(10)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="11 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">12</span>
                      <span class="item-selector">app0-lib3-sub-child-131</span>
                      <button (click)="toggleComponentLoad(11)" class="btn btn-xs">
                        {{isComponentLoaded(11) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn11); when isComponentLoaded(11)) {
                      <app0-lib3-sub-child-131 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-131</p>
                        <button #loadBtn11 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-131...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-131</p>
                        <button (click)="retryLoadComponent(11)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="12 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">13</span>
                      <span class="item-selector">app0-lib3-sub-child-132</span>
                      <button (click)="toggleComponentLoad(12)" class="btn btn-xs">
                        {{isComponentLoaded(12) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn12); when isComponentLoaded(12)) {
                      <app0-lib3-sub-child-132 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-132</p>
                        <button #loadBtn12 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-132...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-132</p>
                        <button (click)="retryLoadComponent(12)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="13 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">14</span>
                      <span class="item-selector">app0-lib3-sub-child-133</span>
                      <button (click)="toggleComponentLoad(13)" class="btn btn-xs">
                        {{isComponentLoaded(13) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn13); when isComponentLoaded(13)) {
                      <app0-lib3-sub-child-133 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-133</p>
                        <button #loadBtn13 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-133...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-133</p>
                        <button (click)="retryLoadComponent(13)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="14 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">15</span>
                      <span class="item-selector">app0-lib3-sub-child-134</span>
                      <button (click)="toggleComponentLoad(14)" class="btn btn-xs">
                        {{isComponentLoaded(14) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn14); when isComponentLoaded(14)) {
                      <app0-lib3-sub-child-134 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-134</p>
                        <button #loadBtn14 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-134...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-134</p>
                        <button (click)="retryLoadComponent(14)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="15 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">16</span>
                      <span class="item-selector">app0-lib3-sub-child-135</span>
                      <button (click)="toggleComponentLoad(15)" class="btn btn-xs">
                        {{isComponentLoaded(15) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn15); when isComponentLoaded(15)) {
                      <app0-lib3-sub-child-135 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-135</p>
                        <button #loadBtn15 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-135...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-135</p>
                        <button (click)="retryLoadComponent(15)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="16 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">17</span>
                      <span class="item-selector">app0-lib3-sub-child-136</span>
                      <button (click)="toggleComponentLoad(16)" class="btn btn-xs">
                        {{isComponentLoaded(16) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn16); when isComponentLoaded(16)) {
                      <app0-lib3-sub-child-136 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-136</p>
                        <button #loadBtn16 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-136...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-136</p>
                        <button (click)="retryLoadComponent(16)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="17 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">18</span>
                      <span class="item-selector">app0-lib3-sub-child-137</span>
                      <button (click)="toggleComponentLoad(17)" class="btn btn-xs">
                        {{isComponentLoaded(17) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn17); when isComponentLoaded(17)) {
                      <app0-lib3-sub-child-137 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-137</p>
                        <button #loadBtn17 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-137...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-137</p>
                        <button (click)="retryLoadComponent(17)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="18 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">19</span>
                      <span class="item-selector">app0-lib3-sub-child-138</span>
                      <button (click)="toggleComponentLoad(18)" class="btn btn-xs">
                        {{isComponentLoaded(18) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn18); when isComponentLoaded(18)) {
                      <app0-lib3-sub-child-138 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-138</p>
                        <button #loadBtn18 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-138...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-138</p>
                        <button (click)="retryLoadComponent(18)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="19 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">20</span>
                      <span class="item-selector">app0-lib3-sub-child-139</span>
                      <button (click)="toggleComponentLoad(19)" class="btn btn-xs">
                        {{isComponentLoaded(19) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn19); when isComponentLoaded(19)) {
                      <app0-lib3-sub-child-139 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-139</p>
                        <button #loadBtn19 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-139...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-139</p>
                        <button (click)="retryLoadComponent(19)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="20 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">21</span>
                      <span class="item-selector">app0-lib3-sub-child-140</span>
                      <button (click)="toggleComponentLoad(20)" class="btn btn-xs">
                        {{isComponentLoaded(20) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn20); when isComponentLoaded(20)) {
                      <app0-lib3-sub-child-140 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-140</p>
                        <button #loadBtn20 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-140...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-140</p>
                        <button (click)="retryLoadComponent(20)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="21 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">22</span>
                      <span class="item-selector">app0-lib3-sub-child-141</span>
                      <button (click)="toggleComponentLoad(21)" class="btn btn-xs">
                        {{isComponentLoaded(21) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn21); when isComponentLoaded(21)) {
                      <app0-lib3-sub-child-141 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-141</p>
                        <button #loadBtn21 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-141...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-141</p>
                        <button (click)="retryLoadComponent(21)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="22 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">23</span>
                      <span class="item-selector">app0-lib3-sub-child-142</span>
                      <button (click)="toggleComponentLoad(22)" class="btn btn-xs">
                        {{isComponentLoaded(22) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn22); when isComponentLoaded(22)) {
                      <app0-lib3-sub-child-142 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-142</p>
                        <button #loadBtn22 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-142...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-142</p>
                        <button (click)="retryLoadComponent(22)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="23 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">24</span>
                      <span class="item-selector">app0-lib3-sub-child-143</span>
                      <button (click)="toggleComponentLoad(23)" class="btn btn-xs">
                        {{isComponentLoaded(23) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn23); when isComponentLoaded(23)) {
                      <app0-lib3-sub-child-143 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-143</p>
                        <button #loadBtn23 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-143...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-143</p>
                        <button (click)="retryLoadComponent(23)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="24 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">25</span>
                      <span class="item-selector">app0-lib3-sub-child-144</span>
                      <button (click)="toggleComponentLoad(24)" class="btn btn-xs">
                        {{isComponentLoaded(24) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn24); when isComponentLoaded(24)) {
                      <app0-lib3-sub-child-144 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-144</p>
                        <button #loadBtn24 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-144...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-144</p>
                        <button (click)="retryLoadComponent(24)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="25 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">26</span>
                      <span class="item-selector">app0-lib3-sub-child-145</span>
                      <button (click)="toggleComponentLoad(25)" class="btn btn-xs">
                        {{isComponentLoaded(25) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn25); when isComponentLoaded(25)) {
                      <app0-lib3-sub-child-145 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-145</p>
                        <button #loadBtn25 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-145...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-145</p>
                        <button (click)="retryLoadComponent(25)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="26 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">27</span>
                      <span class="item-selector">app0-lib3-sub-child-146</span>
                      <button (click)="toggleComponentLoad(26)" class="btn btn-xs">
                        {{isComponentLoaded(26) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn26); when isComponentLoaded(26)) {
                      <app0-lib3-sub-child-146 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-146</p>
                        <button #loadBtn26 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-146...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-146</p>
                        <button (click)="retryLoadComponent(26)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="27 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">28</span>
                      <span class="item-selector">app0-lib3-sub-child-147</span>
                      <button (click)="toggleComponentLoad(27)" class="btn btn-xs">
                        {{isComponentLoaded(27) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn27); when isComponentLoaded(27)) {
                      <app0-lib3-sub-child-147 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-147</p>
                        <button #loadBtn27 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-147...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-147</p>
                        <button (click)="retryLoadComponent(27)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="28 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">29</span>
                      <span class="item-selector">app0-lib3-sub-child-148</span>
                      <button (click)="toggleComponentLoad(28)" class="btn btn-xs">
                        {{isComponentLoaded(28) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn28); when isComponentLoaded(28)) {
                      <app0-lib3-sub-child-148 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-148</p>
                        <button #loadBtn28 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-148...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-148</p>
                        <button (click)="retryLoadComponent(28)" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>
                  <div class="list-item" [class]="29 % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">30</span>
                      <span class="item-selector">app0-lib3-sub-child-149</span>
                      <button (click)="toggleComponentLoad(29)" class="btn btn-xs">
                        {{isComponentLoaded(29) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn29); when isComponentLoaded(29)) {
                      <app0-lib3-sub-child-149 />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load app0-lib3-sub-child-149</p>
                        <button #loadBtn29 class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading app0-lib3-sub-child-149...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading app0-lib3-sub-child-149</p>
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
    App0Lib3SubChild120,
    App0Lib3SubChild121,
    App0Lib3SubChild122,
    App0Lib3SubChild123,
    App0Lib3SubChild124,
    App0Lib3SubChild125,
    App0Lib3SubChild126,
    App0Lib3SubChild127,
    App0Lib3SubChild128,
    App0Lib3SubChild129,
    App0Lib3SubChild130,
    App0Lib3SubChild131,
    App0Lib3SubChild132,
    App0Lib3SubChild133,
    App0Lib3SubChild134,
    App0Lib3SubChild135,
    App0Lib3SubChild136,
    App0Lib3SubChild137,
    App0Lib3SubChild138,
    App0Lib3SubChild139,
    App0Lib3SubChild140,
    App0Lib3SubChild141,
    App0Lib3SubChild142,
    App0Lib3SubChild143,
    App0Lib3SubChild144,
    App0Lib3SubChild145,
    App0Lib3SubChild146,
    App0Lib3SubChild147,
    App0Lib3SubChild148,
    App0Lib3SubChild149,
  ],
})
export class App0Lib3Child4 {
  title = 'App0Lib3Child4';
  isExpanded = true;
  mode: 'grid' | 'list' = 'grid';
  status: 'loading' | 'loaded' | 'error' = 'loaded';
  progress = 31;
  generatedAt = new Date().toLocaleTimeString();
  
  subChildren = [
    { selector: 'app0-lib3-sub-child-120', name: 'App0Lib3SubChild120' },
    { selector: 'app0-lib3-sub-child-121', name: 'App0Lib3SubChild121' },
    { selector: 'app0-lib3-sub-child-122', name: 'App0Lib3SubChild122' },
    { selector: 'app0-lib3-sub-child-123', name: 'App0Lib3SubChild123' },
    { selector: 'app0-lib3-sub-child-124', name: 'App0Lib3SubChild124' },
    { selector: 'app0-lib3-sub-child-125', name: 'App0Lib3SubChild125' },
    { selector: 'app0-lib3-sub-child-126', name: 'App0Lib3SubChild126' },
    { selector: 'app0-lib3-sub-child-127', name: 'App0Lib3SubChild127' },
    { selector: 'app0-lib3-sub-child-128', name: 'App0Lib3SubChild128' },
    { selector: 'app0-lib3-sub-child-129', name: 'App0Lib3SubChild129' },
    { selector: 'app0-lib3-sub-child-130', name: 'App0Lib3SubChild130' },
    { selector: 'app0-lib3-sub-child-131', name: 'App0Lib3SubChild131' },
    { selector: 'app0-lib3-sub-child-132', name: 'App0Lib3SubChild132' },
    { selector: 'app0-lib3-sub-child-133', name: 'App0Lib3SubChild133' },
    { selector: 'app0-lib3-sub-child-134', name: 'App0Lib3SubChild134' },
    { selector: 'app0-lib3-sub-child-135', name: 'App0Lib3SubChild135' },
    { selector: 'app0-lib3-sub-child-136', name: 'App0Lib3SubChild136' },
    { selector: 'app0-lib3-sub-child-137', name: 'App0Lib3SubChild137' },
    { selector: 'app0-lib3-sub-child-138', name: 'App0Lib3SubChild138' },
    { selector: 'app0-lib3-sub-child-139', name: 'App0Lib3SubChild139' },
    { selector: 'app0-lib3-sub-child-140', name: 'App0Lib3SubChild140' },
    { selector: 'app0-lib3-sub-child-141', name: 'App0Lib3SubChild141' },
    { selector: 'app0-lib3-sub-child-142', name: 'App0Lib3SubChild142' },
    { selector: 'app0-lib3-sub-child-143', name: 'App0Lib3SubChild143' },
    { selector: 'app0-lib3-sub-child-144', name: 'App0Lib3SubChild144' },
    { selector: 'app0-lib3-sub-child-145', name: 'App0Lib3SubChild145' },
    { selector: 'app0-lib3-sub-child-146', name: 'App0Lib3SubChild146' },
    { selector: 'app0-lib3-sub-child-147', name: 'App0Lib3SubChild147' },
    { selector: 'app0-lib3-sub-child-148', name: 'App0Lib3SubChild148' },
    { selector: 'app0-lib3-sub-child-149', name: 'App0Lib3SubChild149' }
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
