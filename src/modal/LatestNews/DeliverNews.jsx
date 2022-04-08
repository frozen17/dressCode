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

const DeliverNews = () => {
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
      Доставка из интернет-магазинов!
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Доставка из интернет-магазинов!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
                <h6>Мы доставляем товары по СНГ. Из любых интернет-магазинов Бишкека.</h6>
                <h6>Просто зарегистрируйтесь на нашем сайте и делайте заказы с доставкой в наш офис. Мы получим ваши посылки и отправим в Россию.</h6>
                <h6>Чем CDEK Forward отличается от аналогичных сервисов?</h6>
                <h6>Разделение груза на несколько посылок. Если вы заказываете 5 женской одежды, мы получим их, упакуем в 5 посылок и отправим пятерым получателям.</h6>
                <h6>Удобный сайт с качественной мобильной версией. А специальные фильтры позволят работать, даже если у вас сотни посылок.</h6>
                <h6>Доставка заказов по всей России ― в офисы, постаматы или к вам домой.</h6>
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



export default DeliverNews;