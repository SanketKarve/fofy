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

FormSnippet.propTypes = {
  name: React.PropTypes.string.isRequired,
  activeTab: React.PropTypes.string.isRequired,
}
