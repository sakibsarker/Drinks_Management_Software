import React from 'react'
import './Profile.style.css'
import logo from '../assets/call.gif'
function Profile() {
    return (
        <div className='profile_container'>
            <div className='profile_info'>
                <img className='profile_picture' src='https://somporka.com/upload/photos/2020/03/QlVQ6W5AqvhAtbsMZjUe_10_a13aa0b1f1672890f6772b61fddb6de0_avatar_full.png'
                    alt='profile'
                />
                <div className='profile_textContainer'>
                    <h3 className='profile_name'>Touhid Bhuiyan</h3>
                    <p>Department Head</p>

                </div>
            </div>
            <img className='profile_icon' src={logo} alt='calling' />

        </div>
    )
}

export default Profile