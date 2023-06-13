import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
    from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { console.log(profile); dispatch(updateUserThunk(profile)); };
    useEffect(() => {
        const getProfile =  () => {
            const { payload } = dispatch(profileThunk());
            setProfile(payload);
        };
        getProfile();
    }, []);
    console.log("myprofile", profile);
    return (
        <div>
            <h1>Profile Screen</h1>
            {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
            {profile && (<div>
                <div>
                    <label>First Name</label>
                    <input type="text" value={profile.firstName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, firstName: event.target.value,
                            };
                            setProfile(newProfile);
                        }} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={profile.lastName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, lastName: event.target.value,
                            };
                            setProfile(newProfile);
                            console.log(newProfile);
                        }} />
                </div></div>
            )}
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/tuiter/login");
                }}>                   Logout</button>
            <button onClick={save}>Save  </button>
        </div>);
}
export default ProfileScreen;
