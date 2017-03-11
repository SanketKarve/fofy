const FORM_WIZARD_TAB = "form_wizard";
const FORM_SNIPPET_TAB = "form_snippet";

class FormsNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: FORM_WIZARD_TAB,
      formWizard: {
        formName: "",
      },
    };

    this.handleFormWizardStateChange = this.handleFormWizardStateChange.bind(this);
  }

  handleFormWizardStateChange(fieldName, fieldValue) {
    let formWizard = Object.assign({}, this.state.formWizard);
    formWizard[fieldName] = fieldValue;
    this.setState({ formWizard });
  }

  render () {
    return (
      <div>
        <div className="tabs">
          <ul>
            <li className={this.state.activeTab === FORM_WIZARD_TAB? "is-active" : ""}>
              <a onClick={() => this.setState({activeTab: FORM_WIZARD_TAB})}>Wizard</a>
            </li>
            <li className={this.state.activeTab === FORM_SNIPPET_TAB? "is-active" : ""}>
              <a onClick={() => this.setState({activeTab: FORM_SNIPPET_TAB})}>Snippet</a>
            </li>
          </ul>
        </div>

        <FormWizard
          name={FORM_WIZARD_TAB}
          activeTab={this.state.activeTab}
          formWizard={this.state.formWizard}
          handleFormWizardStateChange={this.handleFormWizardStateChange}
        />

        <FormSnippet
          name={FORM_SNIPPET_TAB}
          activeTab={this.state.activeTab}
        />
    </div>
    )
  }
}
