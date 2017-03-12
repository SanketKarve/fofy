const FORM_WIZARD_TAB = 'form_wizard';
const FORM_SNIPPET_TAB = 'form_snippet';
const COMPONENT_TYPES = {
  shortAnswer: 'shortAnswer',
};

class FormsNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: FORM_WIZARD_TAB,
      formWizard: {
        formName: '',
        formTheme: '',
        formFields: [],
      },
    };
    // helper method
    this._cloneObject = this._cloneObject.bind(this);
    this._cloneArray = this._cloneArray.bind(this);

    this.handleFormWizardStateChange = this.handleFormWizardStateChange.bind(this);
    this.handleFormComponentAdd = this.handleFormComponentAdd.bind(this);
    this.getStateForComponent = this.getStateForComponent.bind(this);
  }

  _cloneArray(array) {
    return array.slice();
  }

  _cloneObject(object) {
    return Object.assign({}, object);
  }

  handleFormWizardStateChange(fieldName, fieldValue) {
    let formWizard = Object.assign({}, this.state.formWizard);
    formWizard[fieldName] = fieldValue;
    this.setState({ formWizard });
  }

  handleFormComponentAdd(component) {
    let formWizard = _cloneObject(this.state.formWizard);
    let formFields = _cloneArray(formWizard.formFields);
    formFields.push(this.getStateForComponent(component));
    formWizard.formFields = formFields
    this.setState({ formWizard });
  }

  getStateForComponent(component) {
    switch (component) {
    case COMPONENT_TYPES.shortAnswer: return {
      type: component,
      name: '',
      validation: '',
      requried: false,
    };
    default: return {};
    }
  }

  render () {
    return (
      <div>
        <div className='tabs'>
          <ul>
            <li className={this.state.activeTab === FORM_WIZARD_TAB? 'is-active' : ''}>
              <a onClick={() => this.setState({activeTab: FORM_WIZARD_TAB})}>Wizard</a>
            </li>
            <li className={this.state.activeTab === FORM_SNIPPET_TAB? 'is-active' : ''}>
              <a onClick={() => this.setState({activeTab: FORM_SNIPPET_TAB})}>Snippet</a>
            </li>
          </ul>
        </div>

        <FormWizard
          name={FORM_WIZARD_TAB}
          activeTab={this.state.activeTab}
          formWizard={this.state.formWizard}
          handleFormWizardStateChange={this.handleFormWizardStateChange}
          handleFormComponentAdd={this.handleFormComponentAdd}
        />

        <FormSnippet
          name={FORM_SNIPPET_TAB}
          activeTab={this.state.activeTab}
        />

      {/** paragaph */}
      <div className="card">
        <div className="card-content">
          <div className="content">
            <label className="label">
              Feedback<sup className="red">*</sup>
            <button className="delete is-pulled-right"></button>
            </label>
            <p className="control">
              <textarea
                className="textarea"
                type="text"
                placeholder="Your valuable feedback here..."/>
            </p>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card-content">
          <div className="content">

            <label className="label">Question</label>
            <p className="control">
              <input className="input" type="text" value="Feedback"/>
            </p>


            <label className="label">Placeholder</label>
            <p className="control">
              <input className="input" type="text" value="Your valuable feedback here..."/>
            </p>


            <div className="is-clearfix">
              <label className="label">
                Required
              </label>
              <label className="switch on" htmlFor="switch" title="required">
                <input type="checkbox" id="switch"/>
                <div className="slider"> </div>
              </label>
            </div>

          </div>
        </div>
      </div>
    </div>
    )
  }
}
