import React from "react";
import { connect } from "react-redux";
import { addProfile } from "../src/redux/profile/profileaction"
const Home = props => {
    return (
        <div>
            <p>รหัสนักศึกษา=>{props.info}</p>
            <p>ชื่อ =></p>
            <p>นามสกุล =></p>
            <p>เลขบัตรประชาชน => </p>
        </div>
    )
}

const mapStateToProps = state => ({
    info: state.profileReducer.user
});

export default connect(mapStateToProps)(Home);