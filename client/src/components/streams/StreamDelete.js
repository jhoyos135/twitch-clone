import React, { PureComponent, Fragment } from 'react';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends PureComponent {
  render() {
    const actions = (
      <Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </Fragment>
    );

    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this Stream?"
          actions={actions}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

export default StreamDelete;
