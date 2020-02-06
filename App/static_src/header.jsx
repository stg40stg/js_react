import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';



export default class Header extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className="header-wrap">
                <img className="logo" src="../assets/img/logo-messenger.png" height="50" width="50" alt="logo"/>
                <h1 className="logo-header">ProReactMessanger {this.props.title}</h1>
                <Link to='/profile/' style={ {
                    marginRight: '10px',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                } }>
                    <Avatar color='white' style={ { marginRight: '10px' } } />
                    <span>Гик</span>
                </Link>
            </div>
        );
    }
}

