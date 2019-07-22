import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
});

class SessionDialog extends React.Component {
  render() {
    const { classes, open, selectedDate, exercise, reps, handleClose } = this.props;
    return (
      <Dialog disableBackdropClick open={open} onClose={handleClose}>
        <DialogTitle>Enter Session Details:</DialogTitle>
        <DialogContent>
          <form className={classes.container} id='form' onSubmit={this.handleSubmit}>
            <FormControl className={classes.formControl}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  label="Date"
                  disableFuture
                  inputVariant='outlined'
                  value={selectedDate}
                  onChange={this.handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="exercise-type">Exercise</InputLabel>
              <Select
                native
                required
                name='exercise'
                value={exercise}
                onChange={this.handleChange}
                input={<Input id="exercise-type" />}
              >
                <option value=""></option>
                <option value='squats'>Squats</option>
                <option value='pushups'>Pushups</option>
                <option value='dips'>Dips</option>
                <option value='planks'>Planks</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="exercise-reps">Reps</InputLabel>
              <Select
                native
                required
                name='reps'
                value={reps}
                onChange={this.handleChange}
                input={<Input id="exercise-reps" />}
              >
                <option value=""></option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
                <option value={35}>35</option>
                <option value={40}>40</option>
                <option value={45}>45</option>
                <option value={50}>50</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
              Cancel
          </Button>
          <Button type='submit' form='form' color="primary">
              Log!
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SessionDialog);