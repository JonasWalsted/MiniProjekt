import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import './Template.css';
import history from '../history';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                    '57092339360-q64b0fnaskk0borgoce2olt5tcguko9n.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn((this.auth.currentUser.get().getId()));
        } else {
            this.props.signOut();
        }
    };

    onSignIn = () => {
        this.auth.signIn();
        history.push('/PageOne')
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon">
                        <p>Log ud</p>
                    </i>
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon">
                        <p>Log ind med Google</p>

                    </i>
                </button>
            )
        }
    }

    render() {
        return <div className="Googleknap" id="Virkerjeg">{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
