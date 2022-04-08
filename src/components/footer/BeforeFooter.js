import React from "react";
import { Link } from "react-router-dom";
import "../footer/BeforeFooter.css";
import SideBar from "../side/SideBar";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BeforeFooter = () => {
  return (
    <div className="BeforeFooter">
      <div className="BeforeConteiner">


        <div className="footerLinks">
          <h3 className="footer-h3">Клиентская служба</h3>
          <p>
            <Link className="footer-link" to={`/contact`}>
              Свяжитесь с нами
            </Link>
          </p>
          <p>
            {" "}
            <Link className="footer-link" to={`/size`}>
              Размеры
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/order`}>
              Мой заказ
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/profile`}>
              Личный кабинет
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/payment`}>
              Оплата
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/quality`}>
              Подинность товар
            </Link>
          </p>
        </div>


        <div className="footerLinks">
          <h3 className="footer-h3">Доставка и возврат</h3>
          <p>
            <Link className="footer-link" to={`/delivery`}>
              Доставка
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/yourDelivery`}>
              Отслеживание вашего заказа
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/return`}>
              Возвраты
            </Link>
          </p>
        </div>


        <div className="footerLinks">
          <h3 className="footer-h3">Юридический раздел</h3>
          <p>
            <Link className="footer-link" to={`/condition`}>
              Условия прадажы
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/policy`}>
              Политика конфиденциальности
            </Link>
          </p>
        </div>


        <div className="footerLinks">
          <h3 className="footer-h3">Компания</h3>
          <p>
            <Link className="footer-link" to={`/vacancy`}>
              Ваканcии
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/responsible`}>
              Социальная ответственность
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/mediator`}>
              Торговые посредники
            </Link>
          </p>
        </div>
      </div>
  <SideBar/>





      <div className="mobileFooter">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            width: "100%"
          }}
        >
          <Typography>Клиентская служба</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            <Link className="footer-link" to={`/contact`}>
              Свяжитесь с нами
            </Link>
          </p>
          <p>
            {" "}
            <Link className="footer-link" to={`/size`}>
              Размеры
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/order`}>
              Мой заказ
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/profile`}>
              Личный кабинет
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/payment`}>
              Оплата
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/quality`}>
              Подинность товар
            </Link>
          </p>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Доставка и возврат</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
            <Link className="footer-link" to={`/delivery`}>
              Доставка
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/yourDelivery`}>
              Отслеживание вашего заказа
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/return`}>
              Возвраты
            </Link>
          </p>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Юридический раздел</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
            <Link className="footer-link" to={`/condition`}>
              Условия прадажы
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/policy`}>
              Политика конфиденциальности
            </Link>
          </p>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Компания</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
            <Link className="footer-link" to={`/vacancy`}>
              Ваканcии
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/responsible`}>
              Социальная ответственность
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={`/mediator`}>
              Торговые посредники
            </Link>
          </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

    </div>
  );
};

export default BeforeFooter;
