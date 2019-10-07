import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalWindow extends Component {

  constructor(props) {
    super(props);
  }

  handleClose = (action) => {
    this.props.closeModal('222');
    if (action === 'delete') {
      this.props.deleteUser();
    }
  }

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <h3>Are you shure?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={() => this.handleClose('delete')} inverted>
            <Icon name='checkmark' /> Yes
          </Button>
          <Button color='green' onClick={() => this.handleClose('close')} inverted>
            <Icon name='checkmark' /> No
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
