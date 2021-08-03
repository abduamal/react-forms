import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "John",
      lastName: "Henry",
      submittedData: []
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.listOfSubmissions = this.listOfSubmissions.bind(this)
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions() {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName} />
          <input type="submit" />
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;
