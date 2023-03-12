import React,{useState} from 'react'
import {FavArtistsList}  from './FavArtistsList'
import './../../../styles/homepagecss/leftcss/FavArtists.css'



export default function FavArtists() {
    const [items] = useState(FavArtistsList)
  return (
    <section className='favArtists'>
        <h1 className='fav-title'>Fav Artists</h1>
        <div className='fav-wrapper'>
            {
                items.map((items, index) => (
                    <div className='fav-container' key={items.id}>
                        <div className="artist-detail">
                            <img src={items.imgSrc} alt="artist" />
                            <div className='artist-library'>
                                <h2>{items.name}</h2>
                            <p>{items.library} </p>
                            </div>
                            </div>
                            <div>
                            <div className='icon'>
                                {items.icon}{items.icon}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
