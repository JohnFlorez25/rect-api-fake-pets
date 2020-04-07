import React, { Component } from 'react';
import axios from 'axios';

class Pet extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        error: null,
        dataPet: undefined,
    };
  }
  _fetchPetData(){

      this.setState({
          loading: true,
          error: null,
      });

      axios.get("https://pokeapi.co/api/v2/")
        .then((res) => {
            this.setState({
                loading: false,
                dataPet: res.data
            })
            console.log(this.state.dataPet);
        })
        .catch((err) => {
            this.setState({
                loading: false,
                error: err,
            });
        });
  }

  componentDidMount(){
        this._fetchPetData();
  }
  
  render() {
    if(this.state.loading === true && !this.state.dataPet){
        return <h1>Cargando....</h1>
    }

    if(this.state.error){
        console.log(this.state.error);
        return <h1>Problemas de conexion {this.state.error.Error}</h1>
    }

    return (
        <div>
            <ul>
              <h1>Se obtuvo todos los datos</h1>
            </ul>
        </div>
    );
  }
}

export default Pet;
