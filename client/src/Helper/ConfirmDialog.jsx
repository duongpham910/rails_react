import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ConfirmDialog extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: '',
      content: '',
    }
  }

  open(title, content, onSubmit) {
    this.setState({
      open: true,
      title: title,
      content: content,
      onSubmit: onSubmit,
    })
  }

  handleClose = () => {
    let open = update(this.state.open, {$set: false});
    this.setState({
      open: open,
    })
  };

  handleSubmit = () => {
    this.state.onSubmit();
    this.handleClose();
  };

  render() {
    const actions = [
      <FlatButton
        label={'cancel'}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label={'ok'}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />
    ];

    return (
      <Dialog
        title={this.state.title}
        onRequestClose={this.handleClose}
        open={this.state.open}
        actions={actions}
        modal={true}
        style={{zIndex: 10000}}
      >
        {this.state.content}
      </Dialog>
    );
  }
}
