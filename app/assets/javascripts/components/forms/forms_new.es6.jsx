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
              <a onClick={() => this.setState({activeTab: 'wizard'})}>Wizard</a>
            </li>
            <li className={this.state.activeTab === "snippet"? "is-active" : ""}>
              <a onClick={() => this.setState({activeTab: 'snippet'})}>Snippet</a>
            </li>
          </ul>
        </div>

        <FormWizard
          activeTab={this.state.activeTab}
        />


        <FormSnippet
          name="snippet"
          activeTab={this.state.activeTab}
        />

      </div>
    )
  }
}
