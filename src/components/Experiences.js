import React from 'react'

function Experiences({ datas }) {
    return (
        <div className='cursus mb3'>
            <h3 className='h2'>Formations</h3>
            {datas.map(item => (
                <div className='grid_row' key={item.id}>
                    <div className='grid_item'>
                        <p className='grid_date'>{item.date}</p>
                    </div>
                    <div className='grid_item'>
                        <h2 className='grid_title'>{item.title}</h2>
                        <p className='grid_location'>{item.location}</p>
                        <p className='grid_text'>{item.text}</p>
                        <ul className='grid_missions'>
                            {item.missions.map(mission => (
                                <li className='grid_mission' key={mission.id}>
                                    {mission.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experiences