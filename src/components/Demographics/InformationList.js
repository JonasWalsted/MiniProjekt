import React from 'react';
import { connect } from 'react-redux';
import { fetchInformation } from '../../actions';

class InformationList extends React.Component {
  componentDidMount() {
    this.props.fetchInformation();
  }

  renderList() {
    return this.props.streams.map(name => {
      return (
        <div className="item" key={name.id}>

          <div className="content">
            Fornavn: {name.fornavn} <br />
            Efternavn: {name.efternavn} <br />
            Email: {name.email}
            
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Du har indtastet følgende oplysninger:</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { fetchInformation }
)(InformationList);
