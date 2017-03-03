import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  propTypes: {
    inputDescription: React.PropTypes.string,
    inputText: React.PropTypes.string,
    buttonText: React.PropTypes.string,
    buttonDescription: React.PropTypes.string,
    buttonHandler: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      defaultValue: '',
      active: false,
    };
  }

  render() {
    const {inputDescription, inputText, buttonDescription, buttonText}
      = this.props;
    return (
      <div className="Search">
        <form className="SearchForm">
          <input className={'SearchFormInput'
              + (this.state.active ? ' selected' : '')}
            onChange={e => this.handleChange(e, this)}
            onFocus={e => this.handleFocus(e, this)}
            onBlur={e => this.handleBlur(e, this)}
            alt={inputDescription || ''} title={inputDescription || ''}
            defaultValue={inputText || ''} />
          <button className="SearchFormButton"
            onClick={e => this.handleClick(e, this)}
            alt={buttonDescription || ''} title={buttonDescription || ''}>
            {buttonText || 'Click'}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e, caller) {
    const value = (e.target || {}).value;
    caller.setState({value});
  }

  handleFocus(e, caller) {
    const value = (e.target || {}).value;
    if (value && value === caller.props.inputText) {
      e.target.value = '';
      caller.setState({active: true});
    }
  }

  handleBlur(e, caller) {
    const value = (e.target || {}).value;
    if (value === '') {
      e.target.value = caller.props.inputText;
      caller.setState({active: false});
    }
  }

  handleClick(e, caller) {
    if (this.props.buttonHandler) {
      this.props.buttonHandler(e, caller.state.value);
    }
  }
}

export default Search;
