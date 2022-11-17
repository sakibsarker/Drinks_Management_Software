import React from 'react'
import './Profile.style.css'
import { RiRadioButtonLine } from 'react-icons/ri'
function Profile() {
    return (
        <div className='profile_container'>
            <img className='profile_picture' src='https://somporka.com/upload/photos/2020/03/QlVQ6W5AqvhAtbsMZjUe_10_a13aa0b1f1672890f6772b61fddb6de0_avatar_full.png'
                alt='profile'
            />
            <div className='profile_textContainer'>

                <h1 className='profile_name'>Touhid Bhuiyan</h1>
                <div className='profile_status'>
                    <RiRadioButtonLine />
                    <h1>Online</h1>
                </div>
            </div>


        </div>
    )
}

export default Profile