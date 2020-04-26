import React from 'react';
import './App.css';

class FormMovie extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleOnChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmitForm (e) {

  }

  render () {
    return (
      <div className='FormMovie'>
        <h1>Saisissez votre film préféré, ajoutez un lien vers son affiche et un commentaire epxliquant votre choix !</h1>
        <form onSubmit={this.handleSubmitForm}>
          <label htmlFor='title'>Titre:</label>
          <input
            type='text'
            id='title'
            name='title'
            onChange={this.handleOnChange}
            value={this.state.title}
          />
          <label htmlFor='poster'>Lien vers l'affiche:</label>
          <input
            type='text'
            id='poster'
            name='poster'
            onChange={this.handleOnChange}
            value={this.state.poster}
          />
          <label htmlFor='comment'>ton commentaire:</label>
          <input
            type='textarea'
            id='comment'
            name='comment'
            onChange={this.handleOnChange}
            value={this.state.comment}
          />
        </form>
      </div>

    );
  }
}

export default FormMovie;
