import React from 'react'
import MusicListTable from './MusicListTable'
import './../../../styles/homepagecss/maincss/PlayList.css'

export default function PlayList() {
  return (
    <section className='playListSection'>
       <div className="playListHeader">
        <h1>Playlist</h1>
        <p>Show All</p>
       </div>
       {/* Music Table */}
      <section className='table-section'>
        <table>   
            <thead>
              <tr>
                  <th>NO.</th>
                  <th>TITLE</th>
                  <th>ARTIST</th>
                  <th>TIME</th>
                  <th>ALBUM</th>
              </tr>
            </thead>
            {/* Table body */}
            <MusicListTable/>
        </table>
      </section>
    </section>
  )
}
