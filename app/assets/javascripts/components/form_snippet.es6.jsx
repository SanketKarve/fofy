class FormSnippet extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { name, activeTab } = this.props;
    if(name !== activeTab) return null

    return(
      <div>
        Hi
      </div>
    )
  }
}
