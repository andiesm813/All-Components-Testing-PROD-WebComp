import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { defineComponents, IgcAccordionComponent, IgcAvatarComponent, IgcButtonComponent, IgcCalendarComponent, IgcCardComponent, IgcCheckboxComponent, IgcChipComponent, IgcComboComponent, IgcDropdownComponent, IgcExpansionPanelComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcListComponent, IgcListItemComponent, IgcRadioComponent, IgcRadioGroupComponent, IgcRatingComponent, IgcRippleComponent, IgcSelectComponent, IgcSliderComponent, IgcSwitchComponent, IgcTabsComponent, IgcTreeComponent } from 'igniteui-webcomponents';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import FinancialService from '../service/Financial-service';
import NorthwindService from '../service/Northwind-service';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent, IgcExpansionPanelComponent, IgcTreeComponent, IgcAvatarComponent, IgcChipComponent, IgcDropdownComponent, IgcCheckboxComponent, IgcSwitchComponent, IgcRadioGroupComponent, IgcRadioComponent, IgcRatingComponent, IgcSliderComponent, IgcListComponent, IgcListItemComponent, IgcComboComponent, IgcInputComponent, IgcSelectComponent, IgcTabsComponent, IgcAccordionComponent, IgcCalendarComponent);

@customElement('app-view1')
export default class View1 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      overflow: auto;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 16px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .card {
      width: 240px;
      height: max-content;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .expansion-panel {
      height: max-content;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      max-width: 360px;
      flex-shrink: 0;
    }
    .group_4 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 240px;
      min-height: 50px;
    }
    .tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .media-content {
      height: 200px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .textarea {
      height: max-content;
      min-width: min-content;
    }
    .tab-item-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .image {
      height: 100%;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
    }
    .chip {
      width: max-content;
      height: max-content;
    }
    .icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .image_1 {
      object-fit: cover;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .calendar {
      width: max-content;
      height: max-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .button_1 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .user-input_1 {
      width: max-content;
      height: max-content;
    }
    .dropdown {
      left: 0;
      top: 0;
      position: absolute;
      min-width: min-content;
    }
    .radio {
      padding: 8px;
    }
    .slider {
      height: max-content;
      min-width: 50px;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .dropdown::part(base) {
      height: max-content;
    }
    .grid {
      min-width: 320px;
      min-height: 240px;
      max-height: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .tree {
      min-width: max-content;
      min-height: max-content;
      flex-shrink: 0;
    }
    .list {
      height: max-content;
      flex-shrink: 0;
    }
  `;

  constructor() {
    super();
    this.northwindEmployees = this.northwindService.getData('Employees');
    this.financialBoxOfficeRevenue = this.financialService.getData('BoxOfficeRevenue');
  }

  private northwindService: NorthwindService = new NorthwindService();

  private financialService: FinancialService = new FinancialService();

  @property()
  private northwindEmployees?: any[];

  @query('#button')
  public button?: IgcButtonComponent;

  @query('#dropdown')
  public dropdown?: IgcDropdownComponent;

  @property()
  private financialBoxOfficeRevenue?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <igc-card class="card">
            <igc-card-media class="media-content">
              <img src="https://images.unsplash.com/photo-1503259901638-6bf44a4cd670?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGNvbG9yZnVsJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                Title goes here...
              </h3>
              <h5 slot="subtitle">
                Subtitle goes here...
              </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <p class="typography__body-1 content">
                Body 1
              </p>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="user-input">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat">
                <span class="material-icons">
                  favorite
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat">
                <span class="material-icons">
                  bookmark
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
          <div class="column-layout group_2">
            <igc-expansion-panel ?open="${true}" class="expansion-panel">
              <p class="typography__body-1 content">
                Body 1
              </p>
              <span slot="title">Title goes here...</span>
              <span slot="subtitle">Subtitle goes here...</span>
            </igc-expansion-panel>
            <igc-grid .data="${this.northwindEmployees}" primary-key="employeeID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" class="ig-typography grid">
              <igc-column field="lastName" data-type="string" header="lastName" sortable="true" selectable="false"></igc-column>
              <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" selectable="false"></igc-column>
              <igc-column field="firstName" data-type="string" header="firstName" sortable="true" selectable="false"></igc-column>
              <igc-column field="title" data-type="string" header="title" sortable="true" selectable="false"></igc-column>
              <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" selectable="false"></igc-column>
              <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" selectable="false"></igc-column>
              <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.street" data-type="string" header="address street" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.city" data-type="string" header="address city" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.region" data-type="string" header="address region" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.postalCode" data-type="string" header="address postalCode" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.country" data-type="string" header="address country" sortable="true" selectable="false"></igc-column>
              <igc-column field="address.phone" data-type="string" header="address phone" sortable="true" selectable="false"></igc-column>
              <igc-column field="managerID" data-type="number" header="managerID" sortable="true" selectable="false"></igc-column>
              <igc-column field="notes" data-type="string" header="notes" sortable="true" selectable="false"></igc-column>
              <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" selectable="false"></igc-column>
            </igc-grid>
          </div>
          <igc-tree selection="none" class="tree">
            <igc-tree-item label="Design" ?expanded="${true}">
              <igc-tree-item label="Figma" ?expanded="${true}"></igc-tree-item>
              <igc-tree-item label="Adobe XD" ?expanded="${true}"></igc-tree-item>
              <igc-tree-item label="Sketch" ?expanded="${true}"></igc-tree-item>
            </igc-tree-item>
            <igc-tree-item label="Development" ?expanded="${true}">
              <igc-tree-item label="Angular" ?expanded="${true}"></igc-tree-item>
              <igc-tree-item label="Blazor" ?expanded="${true}"></igc-tree-item>
              <igc-tree-item label="Web components" ?expanded="${true}"></igc-tree-item>
            </igc-tree-item>
          </igc-tree>
          <div class="column-layout group_3">
            <div class="row-layout group_4">
              <igc-button class="button_1">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="outlined" class="button_1">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" @click=${() => this.dropdown?.toggle(this.button)} id="button" class="button_1">
                <span>Button</span>
                <span class="material-icons">
                  add
                </span>
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="fab" class="user-input_1">
                <span class="material-icons">
                  add
                </span>
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat">
                <span class="material-icons">
                  email
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-avatar size="small" shape="circle" class="avatar">
                <span class="material-icons">people</span>
              </igc-avatar>
              <igc-chip size="large" class="chip">
                <span slot="prefix">
                  <span class="material-icons icon">
                    place
                  </span>
                </span>
                Country
              </igc-chip>
              <span class="material-icons icon_1">
                mail
              </span>
              <igc-dropdown id="dropdown" class="dropdown">
                <igc-dropdown-item>
                  Option
                </igc-dropdown-item>
              </igc-dropdown>
            </div>
            <span class="user-input">ButtonGroup not yet available in WebComponents</span>
            <div class="row-layout group_5">
              <igc-checkbox labelPosition="after" class="user-input_1">
                Label
              </igc-checkbox>
              <igc-switch class="user-input_1">
                Label
              </igc-switch>
            </div>
            <igc-radio-group class="user-input_1">
              <igc-radio class="radio">
                Label
              </igc-radio>
              <igc-radio class="radio">
                Label
              </igc-radio>
              <igc-radio class="radio">
                Label
              </igc-radio>
            </igc-radio-group>
            <igc-rating size="large" class="user-input_1"></igc-rating>
            <igc-slider value="0" min="0" max="100" step="10" ?discrete-track="${true}" class="slider"></igc-slider>
          </div>
          <igc-list class="list">
            <igc-list-item>
              <div slot="start">
                <igc-avatar size="small" shape="circle" class="avatar">
                  <span class="material-icons">person</span>
                </igc-avatar>
              </div>
              <div slot="title">Title goes here</div>
              <div slot="subtitle">Subtitle...</div>
              <div slot="end">
                <span class="material-icons icon_1">
                  star
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="start">
                <igc-avatar size="small" shape="circle" class="avatar">
                  <span class="material-icons">person</span>
                </igc-avatar>
              </div>
              <div slot="title">Title goes here</div>
              <div slot="subtitle">Subtitle...</div>
              <div slot="end">
                <span class="material-icons icon_1">
                  star
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="start">
                <igc-avatar size="small" shape="circle" class="avatar">
                  <span class="material-icons">person</span>
                </igc-avatar>
              </div>
              <div slot="title">Title goes here</div>
              <div slot="subtitle">Subtitle...</div>
              <div slot="end">
                <span class="material-icons icon_1">
                  star
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="start">
                <igc-avatar size="small" shape="circle" class="avatar">
                  <span class="material-icons">person</span>
                </igc-avatar>
              </div>
              <div slot="title">Title goes here</div>
              <div slot="subtitle">Subtitle...</div>
              <div slot="end">
                <span class="material-icons icon_1">
                  star
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="start">
                <igc-avatar size="small" shape="circle" class="avatar">
                  <span class="material-icons">person</span>
                </igc-avatar>
              </div>
              <div slot="title">Title goes here</div>
              <div slot="subtitle">Subtitle...</div>
              <div slot="end">
                <span class="material-icons icon_1">
                  star
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="start">
                <igc-avatar size="small" shape="circle" class="avatar">
                  <span class="material-icons">person</span>
                </igc-avatar>
              </div>
              <div slot="title">Title goes here</div>
              <div slot="subtitle">Subtitle...</div>
              <div slot="end">
                <span class="material-icons icon_1">
                  star
                </span>
              </div>
            </igc-list-item>
          </igc-list>
          <div class="column-layout group_6">
            <igc-combo ?outlined="${true}" .data="${this.financialBoxOfficeRevenue}" value-key="Franchise" display-key="Franchise" ?autoFocusSearch="${true}" class="user-input"></igc-combo>
            <span class="date-picker">DatePicker not yet available in WebComponents</span>
            <igc-input label="Label/Placeholder" ?outlined="${true}" class="user-input"></igc-input>
            <igc-select ?outlined="${true}" class="user-input">
              <igc-select-item value="Option">
                Option
              </igc-select-item>
            </igc-select>
            <span class="textarea">Textarea not yet available in WebComponents</span>
          </div>
        </div>
        <div class="row-layout group_1">
          <igc-tabs class="tabs">
            <igc-tab ?selected="${true}">
              <span class="material-icons">info</span>
              Label
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content">
              <img src="https://images.unsplash.com/photo-1503259901638-6bf44a4cd670?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGNvbG9yZnVsJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="image_1" />
            </igc-tab-panel>
            <igc-tab>
              <span class="material-icons">info</span>
              Label
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          </igc-tabs>
          <igc-accordion ?single-expand="${false}" class="accordion">
            <igc-expansion-panel>
              <p class="typography__body-1 content">
                Body 1
              </p>
              <span slot="title">Title goes here...</span>
            </igc-expansion-panel>
            <igc-expansion-panel>
              <p class="typography__body-1 content">
                Body 1
              </p>
              <span slot="title">Title goes here...</span>
            </igc-expansion-panel>
            <igc-expansion-panel>
              <p class="typography__body-1 content">
                Body 1
              </p>
              <span slot="title">Title goes here...</span>
            </igc-expansion-panel>
          </igc-accordion>
          <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
          <div class="column-layout group_7">
            <h1 class="content">
              Heading
            </h1>
            <h2 class="content">
              Heading
            </h2>
            <h3 class="content">
              Heading
            </h3>
            <h4 class="content">
              Heading
            </h4>
            <h5 class="content">
              Heading
            </h5>
            <h6 class="content">
              Heading
            </h6>
            <p class="typography__subtitle-1 content">
              Heading
            </p>
            <p class="typography__subtitle-2 content">
              Heading
            </p>
            <p class="typography__body-1 content">
              Body 1
            </p>
            <p class="typography__body-2 content">
              Body 1
            </p>
            <p class="typography__caption content">
              Body 1
            </p>
            <p class="typography__overline content">
              Body 1
            </p>
            <a class="typography__body-2 content">
              This is a link
            </a>
            <a class="typography__body-1 content">
              This is a link
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
