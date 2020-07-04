import React, { Component } from 'react'

export default class KullaniciCard extends Component {
    render() {
        return (
            

           
            
            <div className="card">
               
                <p className="gorev-aciklama">{this.props.gorev.aciklama}</p>
                <p className="gorevli">{this.props.gorev.gorevli}</p>
            </div>
           
           
        )
    }
}
