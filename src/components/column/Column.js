import React, { Component } from 'react'
import KullaniciCard from '../card/KullaniciCard'
import './Column.css'

export default class Column extends Component {
    render() {
        return (
            <div className="arka-plan">
                <div className="kolon-olustur">

                <KullaniciCard 
                    gorev = {
                        {
                            aciklama:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                            gorevli:'Betül'

                        }
                    }
                />

                <KullaniciCard 
                    gorev = {
                        {
                            aciklama:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                            gorevli:'Ahmet'

                        }
                    }
                />





                </div>
            </div>
        )
    }
}
