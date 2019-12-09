import React from 'react';

class Form extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    name: '',
    poster: '',
    comment: '',
  }
  this.onChange = this.onChange.bind(this);
  this.submitForm = this.submitForm.bind(this);
}

onChange(e) {
  this.setState({
    [e.target.name]: e.target.value,
  });
}

submitForm(e) {
  e.preventDefault();
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(this.state),
  };
  const url = "https://post-a-form.herokuapp.com/api/movies/";
  fetch(url, config)
  .then(res => res.json())
    .then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        alert(`Film ajouté avec l'ID ${res}!`);
      }
    }).catch(e => {
      console.error(e);
      alert(`Erreur lors de l'ajout du film`);
    });
}


render(){
  return(
    <div className="FormEmployee">
      <h1>Favorite movie</h1>
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Movies</legend>
          <div className="form-data">
            <label htmlFor="name">title</label>
            <input
              type="text"
              id="name"
              name="title"
              onChange={this.onChange}
              value={this.state.lastname}
            />
          </div>
          <div className="form-data">
            <label htmlFor="poster">Poster</label>
            <input
              type="url"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.firstname}
            />
          </div>
          <div className="form-data">
            <label htmlFor="comment">Comment</label>
            <textarea
              type="text"
              id="comment"
              name="comment"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Envoyer" />
          </div>
        </fieldset>
      </form>
    </div>
  )
}
}

export default Form;