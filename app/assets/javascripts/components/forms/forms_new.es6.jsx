class FormsNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortAnswers: [],
      paragraphs: [],
      checkboxes: [],
      multipleChoices: [],
      dropdowns: [],
    };
  }

  render () {
    return (
      <div className="ui grid">
        <div className="three wide column">
          <Sidebar />
        </div>
        <div className="thirteen wide column">
          Hi there
        </div>
      </div>
    )
  }
}
