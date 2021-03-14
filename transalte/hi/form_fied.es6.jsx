class FormField extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name : '',
    }
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }

}
