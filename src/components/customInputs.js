import { Button, TextField, withStyles } from '@material-ui/core';

export const CssButtonLogOut = withStyles({
  root: {
    textTransform: 'none',
    padding: '5px 10px',
    border: '1px solid #56b846',
    fontSize: '20px',

    color: '#fff',
    backgroundColor: '#56b846',

    transition:
      'color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

    '&:hover': {
      color: '#56b846',
      backgroundColor: '#fff',
    },
  },
})(Button);

export const CssButton = withStyles({
  root: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '30px',
  },
})(CssButtonLogOut);

export const CssTextField = withStyles({
  root: {
    width: '100%',
    maxWidth: '400px',
    background: 'rgba(0, 0, 0, 0.09)',
    borderRadius: '5px',
    '& .MuiInputLabel-outlined': {
      paddingLeft: '30px',
      '&.MuiInputLabel-shrink': {
        transform: 'translate(-6px, -6px) scale(0.75)',
      },
    },
    '& label.Mui-focused': {
      color: '#212121',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#212121',
    },
    '& .MuiOutlinedInput-root': {
      paddingLeft: '30px',
      '&.Mui-focused fieldset': {
        borderColor: '#212121',
      },
    },
  },
})(TextField);
