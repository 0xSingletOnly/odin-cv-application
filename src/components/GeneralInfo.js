import React, { Component } from 'react';
import GeneralInfoDisplay from './GeneralInfoDisplay';

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phoneNum: null,
      showForm: true,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePhoneNumChange(event) {
    this.setState({phoneNum: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({showForm: false});
  }

  handleEdit(event) {
    this.setState({showForm: true});
  }

  render() {
    return (
      <div>
        {this.state.showForm &&
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type='text' value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>
              Email:
              <input type='email' value={this.state.email} onChange={this.handleEmailChange} />
            </label>
            <label>
              Phone number:
              <input type='tel' value={this.state.phoneNum} onChange={this.handlePhoneNumChange} />
            </label>
            <input type='submit' value='Submit' />
          </form>
        }
        
        <GeneralInfoDisplay name={this.state.name} email={this.state.email} phoneNum={this.state.phoneNum} />

        {!this.state.showForm &&
          <button onClick={this.handleEdit}>
            Edit
          </button>
        }
      </div>
    )
  }
}

export default GeneralInfo;