import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/Consts';
import '../login/Thank.css'
import { Context } from '../../context/Context';

const Thank = () => {
    const {dispatch, user} = useContext(Context)
    return (
        <div style={{
            textAlign: "center"
        }}>
            <h3 style={{
                fontSize: "1.5rem",
                letterSpacing: ".025rem",
                lineHeight: "1.3",
                paddingTop: "32px",
                marginBottom: "32px",
                fontFamily: "AktivGrotesk-Regular"
            }}>Спасибо за регистрацию {user.login}</h3>
            <p className='thank'>Теперь воспользуйтесь нашими эксклюзивными услугами:</p>
            <p className='thank'>получать нашу рассылку с последними новостями и акциями</p>
            <p className='thank'>сохранить ваши любимые предметы в вашей Корзине</p>
            <p className='thank'>делать покупки быстрее, сохраняя свои адреса вАдресная книгаи данные вашей кредитной карты вКредитные картыраздел</p>
            <p className='thank'>просматривать все детали вашего заказа и отслеживать доставку ваших заказов и возвратов вИстория заказовраздел</p>
            <Button className='goBack' variant='outlined'><Link className='Link' to={HOME_ROUTE}>Назад к покупкам</Link></Button>
        </div>
    );
};

export default Thank;