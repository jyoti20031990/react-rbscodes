import React from 'react';
import './style.css';
class LeftComponent extends React.Component {

  state = { name: '', id: '', dob: '' }

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }
  onChangeId = (e) => {
    this.setState({ id: e.target.value })
  }
  onChangeDOB = (e) => {
    this.setState({ dob: e.target.value })
  }

  onSubmitForm = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.name, this.state.id, this.state.dob)

  }

  render() {
    console.log(this.state.term)
    return (
      <div className="App">

        <form className="myForm" onSubmit={this.onSubmitForm} >
          <div className="fields">
            <label htmlFor="username">Username:</label>

            <input
              className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
              onChange={this.onChangeName}
              placeholder='Enter name'
              onBlur={this.validateName}
              type="text"
              value={this.state.name} />


          </div>
          <div className="fields">
            <label htmlFor="username">ID:</label>

            <input onChange={this.onChangeId}
              type="text"
              value={this.state.id} />
          </div>

          <div className="fields">
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              id="birthdate"
              name="birthdate"
              type="text"
              value={this.state.dob}
              data-parse="date"
              placeholder="MM/DD//YYYY"
              pattern="\d{2}\/\d{2}/\d{4}"
              onChange={this.onChangeDOB}
              required
            />


          </div>
          <button type='submit' className='btn btn-success btn-block'>
            Submit</button>
        </form>


      </div>
    )
  }
}

export default LeftComponent