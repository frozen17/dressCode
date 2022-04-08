import React from 'react';
import security from '../images/security.svg'
import securityOne from '../images/securityOne.svg'
import securityTwo from '../images/securityTwo.svg'

const Security = () => {
    return (
        <div style={{
            width: "95%",
            height: "50vh",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f6f6f6",
            fontFamily: "AktivGrotesk-Medium",
            textAlign: "center",
            margin: "50px 0"
        }}>
            <div style={{
                padding: "16px 34px"
            }}>
                <img style={{
                    width: "70px"
                }} src={security} alt="" />
                <h4 style={{
                    fontSize: "18px"
                }}>БЕСПЛАТНАЯ ДОСТАВКА И ВОЗВРАТ</h4>
                <h5 style={{
                    fontSize: "15px"
                }}>Бесплатная стандартная доставка для зарегистрированных клиентов и бесплатный возврат.</h5>
            </div>
            <div style={{
                padding: "16px 34px"
            }}>
                <img style={{
                    width: "70px"
                }} src={securityOne} alt="" />
                <h4 style={{
                    fontSize: "18px"
                }}>БЕЗОПАСНЫЕ ПЛАТЕЖИ</h4>
                <h5 style={{
                    fontSize: "15px"
                }}>Все транзакции полностью безопасны благодаря нашей передовой платежной системе с шифрованием данных.</h5>
            </div>
            <div style={{
                padding: "16px 34px"
            }}>
                <img style={{
                    width: "70px"
                }} src={securityTwo} alt="" />
                <h4 style={{
                    fontSize: "18px"
                }}>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</h4>
                <h5 style={{
                    fontSize: "15px"
                }}>Свяжитесь с нами по любому поводу – мы полностью к вашим услугам.</h5>
            </div>
        </div>
    );
};

export default Security;