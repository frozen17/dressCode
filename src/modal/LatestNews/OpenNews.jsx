import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const OpenNews = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{
          textAlign: "start",
          color: "black",
          margin: "10px 0",
          padding:"0"
      }} onClick={handleClickOpen}>
          Хорошая новость... Мы открылись!
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Мы открылись!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
                <h6>Уважаемые клиенты! Наш офис начал свою работу. Мы поможем вам отправить в Россию и страны СНГ посылки и интернет-заказы. У нас вы можете получить отправления.</h6>
                <h6>Наш офис находится по адресу Бишкек, дордой 174кон, Кыргызстан</h6>
                <h6>Наш график работы ПН-ВС : 07:00-16:00</h6>
                <h6>Чтобы уточнить по поводу особенностей доставки, тарифов и запрещенных грузов, свяжитесь с нами по телефону +996709263684 или электронной почте zamirbekovmirlan3@gmail.com</h6>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Закрыть
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}



export default OpenNews;