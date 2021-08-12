import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      essay: 'Please write an essay about your favorite DOM element.',
      flavor: 'coconut',
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    alert('An essay was submitted: ' + this.state.essay);
    alert('Your favorite flavor is: ' + this.state.flavor);
    alert('Is going: ' + this.state.isGoing);
    alert('Number of guests: ' + this.state.numberOfGuests);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
        </lable><br />
        <lable>
          Essay:
          <textarea name="essay" value={this.state.essay} onChange={this.handleInputChange} />
        </lable><br />
        <label>
          Pick your favorite flavor:
          <select name="flavor" value={this.state.flavor} onChange={this.handleInputChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label><br />
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label><br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label><br />
        <lable>
          Read only:
          <input type="text" value="hi" />
        </lable><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
