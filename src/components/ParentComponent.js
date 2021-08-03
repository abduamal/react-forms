import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
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
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>

    )
  }
}

export default ParentComponent;
