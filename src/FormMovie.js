import React from 'react';
import './App.css';
import axios from 'axios';

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
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios.post(url, this.state)
      .then(res => res.data)
      .then(res => {
        alert(`Film ajouté avec l'ID ${res.id} !`)
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  }

  render () {
    return (
      <div className='FormMovie'>
        <h1>Hello Wilder ! Ecris ici ton film préféré, ajoute un lien vers son affiche et un commentaire epxliquant pourquoi tu aimes ce film.</h1>
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
          <textarea
            id='comment'
            name='comment'
            cols='50'
            rows='4'
            onChange={this.handleOnChange}
            value={this.state.comment}
          />
          <input
            type='submit'
            value='Envoyer'
          />
        </form>
      </div>

    );
  }
}

export default FormMovie;
