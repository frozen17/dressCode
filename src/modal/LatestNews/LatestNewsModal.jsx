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

const LatestNews = () => {
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
      }} 
      onClick={handleClickOpen}
      >
      Доставка в Россию: это важно знать!
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Доставка в Россию: это важно знать!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
                <h6>Мы доставляем из Бишкека в Россию товары из интернет-магазинов и бизнес-отправления ― документы, образцы продукции и подарки партнерам.</h6>
                <h6>По пути в Россию все посылки проходят таможенный контроль. Для этого получатели должны заранее сообщить компании по доставке свои паспортные данные и ИНН. Сделать это можно по ссылке. Мы не передаем персональные данные третьим лицам.</h6>
                <h6>Обычно на таможенное оформление уходит от 3 до 5 дней. Иногда эти сроки увеличиваются по ряду причин: посылка вызвала сомнения у сотрудника таможенной службы и ее отправили на дополнительный досмотр; груз превысил лимиты на ввоз товаров и ждет оплаты пошлины ― вы получите sms- или email-сообщение;</h6>
                <h6>Неверно заполнены личные данные получателя; потребовалось дополнительное подтверждение личности ― в таком случае вы получите sms- или email-сообщение с просьбой выслать скан</h6>
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



export default LatestNews;