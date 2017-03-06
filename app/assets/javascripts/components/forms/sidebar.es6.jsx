class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
  }

  render () {
    return(
      <div className="ui secondary vertical pointing menu">
        <a onClick="" className="active item">Short Answer</a>
        <a onClick="" className="item">Paragraph</a>
        <a onClick="" className="item">Multiple Choice</a>
        <a onClick="" className="item">Checkboxes</a>
        <a onClick="" className="item">Dropdown</a>
      </div>
    )
  }
}
