import React from 'react'
import ListItem from '../component/ListItem.component'
import Profile from '../component/Profile.component'
import Progress from '../component/Progress.component'
import './Home.style.css'
function Home() {
    return (
        <div className='home'>
            <Profile />
            <ListItem />
            <Progress />
        </div>

    )
}

export default Home