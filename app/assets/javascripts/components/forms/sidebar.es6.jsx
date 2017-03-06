const FIELD_TYPES = {
  shortAnswer: "SHORT_ANSWERS",
  paragraph: "PARAGRAPH",
  multipleChoice: "MCQ",
  checkbox: "CHECKBOX",
  dropdown: "DROPDOWN"
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: FIELD_TYPES.shortAnswer
    };

    this.onFieldClick = this.onFieldClick.bind(this);
  }

  onFieldClick(active) {
    console.log(active);
    this.setState({active})
  }

  render () {
    return(
      <div className="ui secondary vertical pointing menu">
        <a onClick={() => this.onFieldClick(FIELD_TYPES.shortAnswer)}
          className={this.state.active === FIELD_TYPES.shortAnswer? "active item" : "item"}>
          Short Answer
        </a>
        <a onClick={() => this.onFieldClick(FIELD_TYPES.paragraph)}
          className={this.state.active === FIELD_TYPES.paragraph? "active item" : "item"}>
          Paragraph
        </a>
        <a onClick={() => this.onFieldClick(FIELD_TYPES.multipleChoice)}
          className={this.state.active === FIELD_TYPES.multipleChoice? "active item" : "item"}>
          Multiple Choice
        </a>
        <a onClick={() => this.onFieldClick(FIELD_TYPES.checkbox)}
          className={this.state.active === FIELD_TYPES.checkbox? "active item" : "item"}>
          Checkboxes
        </a>
        <a onClick={() => this.onFieldClick(FIELD_TYPES.dropdown)}
          className={this.state.active === FIELD_TYPES.dropdown? "active item" : "item"}>
          Dropdown
        </a>
      </div>
    )
  }
}
