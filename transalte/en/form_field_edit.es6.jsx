class FormFieldEdit extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
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
                    <span className="select">
                      <select>
                        <option>Text</option>
                        <option>Number</option>
                        <option>Email</option>
                        <option>URL</option>
                      </select>
                    </span>
                </div>


                <label className="switch on" htmlFor="switch" title="required">
                  <input type="checkbox" id="switch"/>
                  <div className="slider"> </div>
                </label>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

}
