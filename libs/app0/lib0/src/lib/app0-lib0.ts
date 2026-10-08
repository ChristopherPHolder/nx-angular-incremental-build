import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App0Lib0Child0 } from './child-0/child-0.component';
import { App0Lib0Child1 } from './child-1/child-1.component';
import { App0Lib0Child2 } from './child-2/child-2.component';
import { App0Lib0Child3 } from './child-3/child-3.component';
import { App0Lib0Child4 } from './child-4/child-4.component';
import { App0Lib0Child5 } from './child-5/child-5.component';
import { App0Lib0Child6 } from './child-6/child-6.component';
import { App0Lib0Child7 } from './child-7/child-7.component';
import { App0Lib0Child8 } from './child-8/child-8.component';
import { App0Lib0Child9 } from './child-9/child-9.component';

@Component({
  selector: 'app0-lib0',
  template: `
    <div class="root-component">
      <header class="root-header">
        <h1>{{title}}</h1>
        <div class="root-controls">
          <div class="view-controls">
            <label>
              <input type="radio" name="viewMode" value="all" [(ngModel)]="viewMode" (change)="onViewModeChange()">
              Show All
            </label>
            <label>
              <input type="radio" name="viewMode" value="even" [(ngModel)]="viewMode" (change)="onViewModeChange()">
              Even Only
            </label>
            <label>
              <input type="radio" name="viewMode" value="odd" [(ngModel)]="viewMode" (change)="onViewModeChange()">
              Odd Only
            </label>
          </div>
          <div class="filter-controls">
            <select [(ngModel)]="statusFilter" (change)="onStatusFilterChange()">
              <option value="all">All Statuses</option>
              <option value="active">Active Only</option>
              <option value="warning">Warning Only</option>
              <option value="error">Error Only</option>
            </select>
          </div>
          <button (click)="toggleGlobalExpansion()" class="btn btn-primary">
            {{allExpanded ? 'Collapse All' : 'Expand All'}}
          </button>
        </div>
      </header>
      
      <div class="root-stats">
        <div class="stat-card">
          <h3>Total Components</h3>
          <span class="stat-value">{{totalComponents}}</span>
        </div>
        <div class="stat-card">
          <h3>Child Components</h3>
          <span class="stat-value">{{childComponents.length}}</span>
        </div>
        <div class="stat-card">
          <h3>Sub-Child Components</h3>
          <span class="stat-value">{{totalSubChildren}}</span>
        </div>
        <div class="stat-card">
          <h3>Visible Components</h3>
          <span class="stat-value">{{visibleComponents}}</span>
        </div>
      </div>
      
      <div class="root-content">
        @if (isLoading) {
          <div class="loading-overlay">
            <div class="spinner large"></div>
            <p>Loading components...</p>
          </div>
        } @else {
          <div class="children-container" [class]="'view-' + viewMode">
            <div class="child-wrapper" [class]="getChildWrapperClass(0)">
              @if (shouldShowComponent(0)) {
                <div class="component-header">
                  <h3>App0Lib0Child0</h3>
                  <div class="component-meta">
                    <span class="component-index">#1</span>
                    <span class="component-status" [class]="getComponentStatus(0)">
                      {{getComponentStatus(0)}}
                    </span>
                    <button (click)="toggleChildLoad(0)" class="btn btn-xs">
                      {{isChildLoaded(0) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(0); prefetch on idle) {
                  <app0-lib0-child-0 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child0...</p>
                    <button (click)="loadChild(0)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child0...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(0)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child0</p>
                    <button (click)="retryChildLoad(0)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(0)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(1)">
              @if (shouldShowComponent(1)) {
                <div class="component-header">
                  <h3>App0Lib0Child1</h3>
                  <div class="component-meta">
                    <span class="component-index">#2</span>
                    <span class="component-status" [class]="getComponentStatus(1)">
                      {{getComponentStatus(1)}}
                    </span>
                    <button (click)="toggleChildLoad(1)" class="btn btn-xs">
                      {{isChildLoaded(1) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(1); prefetch on idle) {
                  <app0-lib0-child-1 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child1...</p>
                    <button (click)="loadChild(1)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child1...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(1)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child1</p>
                    <button (click)="retryChildLoad(1)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(1)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(2)">
              @if (shouldShowComponent(2)) {
                <div class="component-header">
                  <h3>App0Lib0Child2</h3>
                  <div class="component-meta">
                    <span class="component-index">#3</span>
                    <span class="component-status" [class]="getComponentStatus(2)">
                      {{getComponentStatus(2)}}
                    </span>
                    <button (click)="toggleChildLoad(2)" class="btn btn-xs">
                      {{isChildLoaded(2) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(2); prefetch on idle) {
                  <app0-lib0-child-2 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child2...</p>
                    <button (click)="loadChild(2)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child2...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(2)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child2</p>
                    <button (click)="retryChildLoad(2)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(2)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(3)">
              @if (shouldShowComponent(3)) {
                <div class="component-header">
                  <h3>App0Lib0Child3</h3>
                  <div class="component-meta">
                    <span class="component-index">#4</span>
                    <span class="component-status" [class]="getComponentStatus(3)">
                      {{getComponentStatus(3)}}
                    </span>
                    <button (click)="toggleChildLoad(3)" class="btn btn-xs">
                      {{isChildLoaded(3) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(3); prefetch on idle) {
                  <app0-lib0-child-3 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child3...</p>
                    <button (click)="loadChild(3)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child3...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(3)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child3</p>
                    <button (click)="retryChildLoad(3)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(3)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(4)">
              @if (shouldShowComponent(4)) {
                <div class="component-header">
                  <h3>App0Lib0Child4</h3>
                  <div class="component-meta">
                    <span class="component-index">#5</span>
                    <span class="component-status" [class]="getComponentStatus(4)">
                      {{getComponentStatus(4)}}
                    </span>
                    <button (click)="toggleChildLoad(4)" class="btn btn-xs">
                      {{isChildLoaded(4) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(4); prefetch on idle) {
                  <app0-lib0-child-4 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child4...</p>
                    <button (click)="loadChild(4)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child4...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(4)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child4</p>
                    <button (click)="retryChildLoad(4)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(4)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(5)">
              @if (shouldShowComponent(5)) {
                <div class="component-header">
                  <h3>App0Lib0Child5</h3>
                  <div class="component-meta">
                    <span class="component-index">#6</span>
                    <span class="component-status" [class]="getComponentStatus(5)">
                      {{getComponentStatus(5)}}
                    </span>
                    <button (click)="toggleChildLoad(5)" class="btn btn-xs">
                      {{isChildLoaded(5) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(5); prefetch on idle) {
                  <app0-lib0-child-5 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child5...</p>
                    <button (click)="loadChild(5)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child5...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(5)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child5</p>
                    <button (click)="retryChildLoad(5)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(5)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(6)">
              @if (shouldShowComponent(6)) {
                <div class="component-header">
                  <h3>App0Lib0Child6</h3>
                  <div class="component-meta">
                    <span class="component-index">#7</span>
                    <span class="component-status" [class]="getComponentStatus(6)">
                      {{getComponentStatus(6)}}
                    </span>
                    <button (click)="toggleChildLoad(6)" class="btn btn-xs">
                      {{isChildLoaded(6) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(6); prefetch on idle) {
                  <app0-lib0-child-6 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child6...</p>
                    <button (click)="loadChild(6)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child6...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(6)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child6</p>
                    <button (click)="retryChildLoad(6)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(6)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(7)">
              @if (shouldShowComponent(7)) {
                <div class="component-header">
                  <h3>App0Lib0Child7</h3>
                  <div class="component-meta">
                    <span class="component-index">#8</span>
                    <span class="component-status" [class]="getComponentStatus(7)">
                      {{getComponentStatus(7)}}
                    </span>
                    <button (click)="toggleChildLoad(7)" class="btn btn-xs">
                      {{isChildLoaded(7) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(7); prefetch on idle) {
                  <app0-lib0-child-7 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child7...</p>
                    <button (click)="loadChild(7)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child7...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(7)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child7</p>
                    <button (click)="retryChildLoad(7)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(7)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(8)">
              @if (shouldShowComponent(8)) {
                <div class="component-header">
                  <h3>App0Lib0Child8</h3>
                  <div class="component-meta">
                    <span class="component-index">#9</span>
                    <span class="component-status" [class]="getComponentStatus(8)">
                      {{getComponentStatus(8)}}
                    </span>
                    <button (click)="toggleChildLoad(8)" class="btn btn-xs">
                      {{isChildLoaded(8) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(8); prefetch on idle) {
                  <app0-lib0-child-8 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child8...</p>
                    <button (click)="loadChild(8)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child8...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(8)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child8</p>
                    <button (click)="retryChildLoad(8)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(8)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
            <div class="child-wrapper" [class]="getChildWrapperClass(9)">
              @if (shouldShowComponent(9)) {
                <div class="component-header">
                  <h3>App0Lib0Child9</h3>
                  <div class="component-meta">
                    <span class="component-index">#10</span>
                    <span class="component-status" [class]="getComponentStatus(9)">
                      {{getComponentStatus(9)}}
                    </span>
                    <button (click)="toggleChildLoad(9)" class="btn btn-xs">
                      {{isChildLoaded(9) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(9); prefetch on idle) {
                  <app0-lib0-child-9 />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading App0Lib0Child9...</p>
                    <button (click)="loadChild(9)" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading App0Lib0Child9...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(9)"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load App0Lib0Child9</p>
                    <button (click)="retryChildLoad(9)" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(9)" class="btn btn-sm">Show</button>
                </div>
              }
            </div>
          </div>
        }
      </div>
      
      <footer class="root-footer">
        <div class="footer-info">
          <p>Generated: {{generatedAt}} | View Mode: {{viewMode}} | Filter: {{statusFilter}}</p>
          <p>Performance: {{performanceMetrics.renderTime}}ms | Memory: {{performanceMetrics.memoryUsage}}MB</p>
        </div>
        <div class="footer-actions">
          <button (click)="refresh()" class="btn btn-secondary">Refresh</button>
          <button (click)="exportData()" class="btn btn-success">Export Data</button>
        </div>
      </footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,
    App0Lib0Child0,
    App0Lib0Child1,
    App0Lib0Child2,
    App0Lib0Child3,
    App0Lib0Child4,
    App0Lib0Child5,
    App0Lib0Child6,
    App0Lib0Child7,
    App0Lib0Child8,
    App0Lib0Child9,
  ],
})
export class App0Lib0 {
  title = 'App0Lib0 Root Component';
  viewMode: 'all' | 'even' | 'odd' = 'all';
  statusFilter: 'all' | 'active' | 'warning' | 'error' = 'all';
  allExpanded = true;
  isLoading = false;
  generatedAt = new Date().toLocaleString();
  
  childComponents = [
    { selector: 'app0-lib0-child-0', name: 'App0Lib0Child0', index: 0 },
    { selector: 'app0-lib0-child-1', name: 'App0Lib0Child1', index: 1 },
    { selector: 'app0-lib0-child-2', name: 'App0Lib0Child2', index: 2 },
    { selector: 'app0-lib0-child-3', name: 'App0Lib0Child3', index: 3 },
    { selector: 'app0-lib0-child-4', name: 'App0Lib0Child4', index: 4 },
    { selector: 'app0-lib0-child-5', name: 'App0Lib0Child5', index: 5 },
    { selector: 'app0-lib0-child-6', name: 'App0Lib0Child6', index: 6 },
    { selector: 'app0-lib0-child-7', name: 'App0Lib0Child7', index: 7 },
    { selector: 'app0-lib0-child-8', name: 'App0Lib0Child8', index: 8 },
    { selector: 'app0-lib0-child-9', name: 'App0Lib0Child9', index: 9 }
  ];
  
  // Defer loading state management
  loadedChildren = new Set<number>();
  loadingChildren = new Set<number>();
  errorChildren = new Set<number>();
  childLoadProgress = new Map<number, number>();
  
  get totalComponents() {
    return 1 + this.childComponents.length + 300;
  }
  
  get totalSubChildren() {
    return 300;
  }
  
  get visibleComponents() {
    return this.filteredChildComponents.length;
  }
  
  get filteredChildComponents() {
    return this.childComponents.filter((_, index) => this.shouldShowComponent(index));
  }
  
  shouldShowComponent(index: number): boolean {
    const viewMatch = this.viewMode === 'all' || 
                     (this.viewMode === 'even' && index % 2 === 0) ||
                     (this.viewMode === 'odd' && index % 2 === 1);
    
    const statusMatch = this.statusFilter === 'all' || 
                       this.getComponentStatus(index) === this.statusFilter;
    
    return viewMatch && statusMatch;
  }
  
  getComponentStatus(index: number): string {
    const statuses = ['active', 'warning', 'error'];
    return statuses[index % statuses.length];
  }
  
  getChildWrapperClass(index: number): string {
    const classes = ['child-wrapper'];
    if (index % 2 === 0) classes.push('even');
    else classes.push('odd');
    classes.push('status-' + this.getComponentStatus(index));
    return classes.join(' ');
  }
  
  onViewModeChange() {
    console.log('View mode changed to:', this.viewMode);
  }
  
  onStatusFilterChange() {
    console.log('Status filter changed to:', this.statusFilter);
  }
  
  toggleGlobalExpansion() {
    this.allExpanded = !this.allExpanded;
    console.log('Global expansion toggled:', this.allExpanded);
  }
  
  showComponent(index: number) {
    console.log('Showing component at index:', index);
  }
  
  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.generatedAt = new Date().toLocaleString();
    }, 1000);
  }
  
  exportData() {
    const data = {
      title: this.title,
      totalComponents: this.totalComponents,
      childComponents: this.childComponents.length,
      subChildren: this.totalSubChildren,
      generatedAt: this.generatedAt,
      viewMode: this.viewMode,
      statusFilter: this.statusFilter
    };
    console.log('Exporting data:', data);
  }
  
  get performanceMetrics() {
    return {
      renderTime: Math.floor(Math.random() * 100) + 50,
      memoryUsage: Math.floor(Math.random() * 50) + 10
    };
  }
  
  // Defer loading methods
  isChildLoaded(index: number): boolean {
    return this.loadedChildren.has(index);
  }
  
  toggleChildLoad(index: number) {
    if (this.loadedChildren.has(index)) {
      this.loadedChildren.delete(index);
    } else {
      this.loadChild(index);
    }
  }
  
  loadChild(index: number) {
    this.errorChildren.delete(index);
    this.loadingChildren.add(index);
    this.childLoadProgress.set(index, 0);
    
    // Simulate progressive loading
    const interval = setInterval(() => {
      const currentProgress = this.childLoadProgress.get(index) || 0;
      const newProgress = Math.min(currentProgress + Math.random() * 20, 100);
      this.childLoadProgress.set(index, newProgress);
      
      if (newProgress >= 100) {
        clearInterval(interval);
        this.loadingChildren.delete(index);
        if (Math.random() > 0.05) { // 95% success rate
          this.loadedChildren.add(index);
        } else {
          this.errorChildren.add(index);
        }
      }
    }, 100);
  }
  
  getChildLoadProgress(index: number): number {
    return this.childLoadProgress.get(index) || 0;
  }
  
  retryChildLoad(index: number) {
    this.errorChildren.delete(index);
    this.loadChild(index);
  }
}
