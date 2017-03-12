

class FormWizard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
          <div className="is-clearfix">
            <div className="is-pulled-right">
              <label className="label">Theme</label>
              <p className="control">
                <span className="select">
                  <select>
                    <option>Flat Theme</option>
                    <option>Bootstrap</option>
                  </select>
                </span>
              </p>
            </div>
          </div>


          <p className="control distance">
            <input className="input is-large" type="text" placeholder="Form Name"/>
          </p>


          <div className="distance">


            <div className="card">
              <div className="card-content">
                <div className="content">
                  <label className="label">
                    Name<sup className="red">*</sup>
                  <button className="delete is-pulled-right"></button>
                  </label>
                  <p className="control">
                    <input className="input" type="text" placeholder="Jhon Doe"/>
                  </p>
                </div>
              </div>
            </div>


            <div className="card">
              <div className="card-content">
                <div className="content">

                  <label className="label">Question</label>
                  <p className="control">
                    <input className="input" type="text" value="Name"/>
                  </p>


                  <label className="label">Placeholder</label>
                  <p className="control">
                    <input className="input" type="text" value="Jhon Doe"/>
                  </p>


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

                </div>
              </div>
            </div>

            <div className="distance">
              <p className="control has-addons">
                <a
                  className="button is-large"
                  title="Short Answer"
                  onClick={this.props.handleFormComponentAdd}
                >
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
