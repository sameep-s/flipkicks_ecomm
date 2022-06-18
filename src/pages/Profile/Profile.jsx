import React from 'react';
import { ProfileSidebar } from '../../components';
import Navbar from '../Navbar';
import './profile.css';

const Profile = () => {



    return (
        <>
            <Navbar />
            <main className="container__main__profile flex jc-center a-item-center">
                <div className="container__inner__profile flex">
                    <ProfileSidebar />


                </div>
            </main >
        </>
    );
}

export default Profile