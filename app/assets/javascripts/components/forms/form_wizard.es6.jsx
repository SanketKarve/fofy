class FormWizard extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    const { name, activeTab } = this.props;
    if(name !== activeTab) return null

    return (
      <div>
          <div className="is-clearfix">
            <div className="is-pulled-right">
              <label className="label">Theme</label>
              <p className="control">
                <span className="select">
                  <select>
                    <option>Flat Theme</option>
                    <option selected ="selected">Bootstrap</option>
                  </select>
                </span>
              </p>
            </div>
          </div>


          <p className="control distance">
            <input className="input is-large" type="text" placeholder="Form Name"/>
          </p>


          <div className="distance">


          <FormField

          />

          <FormFieldEdit
                  <div className="is-clearfix">
                    <div className="is-pulled-right">
                      <label className="label">
                        Validation
                      </label>
                      <span className="select">
                        <select>
                          <option>Text</option>
                          <option>Number</option>
                          <option>Email</option>
                          <option>URL</option>
                        </select>
                      </span>
                    </div>


                    <label className="label">
                      Required
                    </label>
                    <label className="switch on" htmlFor="switch" title="required">
                      <input type="checkbox" id="switch"/>
                      <div className="slider"> </div>
                    </label>
                  </div>
          />


            <div className="distance">
              <p className="control has-addons">
                <a className="button is-large" title="Short Answer">
                  <span className="icon is-medium">
                    <i className="fa fa-font"></i>
                  </span>
                </a>

                <a className="button is-large" title="Paragraph">
                  <span className="icon is-medium">
                    <i className="fa fa-align-left"></i>
                  </span>
                </a>

                <a className="button is-large" title="Multiple Choice">
                  <span className="icon is-medium">
                    <i className="fa fa-check-square"></i>
                  </span>
                </a>

                <a className="button is-large" title="Checkboxes">
                  <span className="icon is-medium">
                    <i className="fa fa-dot-circle-o"></i>
                  </span>
                </a>

                <a className="button is-large" title="Dropdown">
                  <span className="icon is-medium">
                    <i className="fa fa-chevron-circle-down"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
      </div>

    )
  }
}

FormSnippet.propTypes = {
  name: React.PropTypes.string.isRequired,
  activeTab: React.PropTypes.string.isRequired,
}
