class FormsNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'wizard',

    };
  }

  render () {
    return (
      <div>
        <div className="tabs">
          <ul>
            <li className={this.state.activeTab === "wizard"? "is-active" : ""}>
              <a>Wizard</a>
            </li>
            <li className={this.state.activeTab === "snippet"? "is-active" : ""}>
              <a>Snippet</a>
            </li>
          </ul>
        </div>

        <FormWizard
          activeTab={this.state.activeTab}
        />

        <FormSnippet
          activeTab={this.state.activeTab}
        />
    </div>
    )
  }
}
