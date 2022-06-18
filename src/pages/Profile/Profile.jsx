import React from 'react';
import { Footer, ProfileSidebar } from '../../components';
import Navbar from '../Navbar';
import './profile.css';

const Profile = () => {



    return (
        <>
            <Navbar />
            <main className="container__main__profile flex jc-center a-item-center">
                <div className="container__inner__profile flex">
                    <ProfileSidebar />

                    <div className="profile__data__area">
                        <div className="user__data__container pl-1 pr-1">
                            <div className="user__data__heading h-5 ">
                                Profile
                            </div>

                            <div className="user__data__fields flex">
                                <span>First Name:</span>
                                <span className='user__data__value'>Sameep</span>
                            </div>

                            <div className="user__data__fields flex">
                                <span>Last Name:</span>
                                <span className='user__data__value'>Sharma</span>
                            </div>

                            <div className="user__data__fields flex">
                                <span>Email</span>
                                <span className='user__data__value'>sameep.sharma98@gmail.com</span>
                            </div>

                            <div className="user__data__fields flex">
                                <span>ID:</span>
                                <span className='user__data__value'>iddd23r234rkjn4233</span>
                            </div>

                        </div>
                    </div>

                </div>
            </main >
            <Footer />
        </>
    );
}

export default Profile;