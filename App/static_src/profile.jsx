import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>Профиль</h1>
                <div>{this.props.profile.name}</div>
                <div>{this.props.profile.email}</div>
                <div>{this.props.profile.phone}</div>
                <Link to='/'> ← Назад</Link>
            </div>
        )
    }
}
const mapStateToProps = ({ profileReducer }) => ({
    profile: profileReducer.profile,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);