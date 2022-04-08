import React from 'react';
import showPage from '../../images/showPage.jpg'
import showPageOne from  '../../images/showPageTwo.jpg'
import showPageThree from '../../images/showPageThree.jpg'
import { Link } from 'react-router-dom'
import { HOME_ROUTE, SHOP_ROUTE, SHOW_ROUTE } from '../../utils/Consts';
import '../../pages/public/Show.css'
import Button from '@mui/material/Button';
import bccImg from '../../images/backgroundImg.jpg'
import NewLogo from '../../images/newDressCode.png'

const Show = () => {
    return (
        <div className='show'>
            <div className='oneImg'>
            <img className='showPageImg' src={showPage} alt="" />
            <div className='showPageTitle'>
                <h3 className='showText'>Готовы носить</h3>
                <p className='showDescr'>Вдохновение сезона играет с романтическим и неземным очарованием, подчеркнутым палитрой светлых и нежных цветов; вдохновения, которые перерабатываются и материализуются в одежде с неформальной элегантностью, способной придать свежий и актуальный образ.</p>
                <Button variant="outlined"><Link className='Link' to={SHOP_ROUTE}>Откройте для себя выбор</Link></Button>
                
            </div>
            </div>
            <div className='twoImg'>
                <div className='showPageTitle'>
                    <h3 className='showText'>СУМКИ И АКСЕССУАРЫ</h3>
                    <p className='showDescr'>Детали, способные изменить ситуацию, являются главными героями этой подборки, в которую входят сумки и аксессуары, призванные элегантно дополнить образы в этом сезоне. Изысканные сумки и аксессуары, которые напоминают о деликатности и повседневности предложений коллекции.</p>
                    <Button variant="outlined"><Link className='Link' to={HOME_ROUTE}>Сумки</Link></Button>
                    <Button variant="outlined"><Link className='Link' to={HOME_ROUTE}>Аксессуары</Link></Button>
                </div>
                <img className='showPageImg' src={showPageOne} alt="" />
            </div>
            <div className='threeImg'>
                <img className='showPageImg' src={showPageThree} alt="" />
                <div className='showPageTitle'>
                    <h3 className='showText'>Туфли</h3>
                    <p className='showDescr'>Модели, способные сочетать изысканность и функциональность; на день и обувь с безошибочно элегантной, чтобы посвятить больше моментов; специальные предложения: предложение обуви в идеальной гармонии с готовой одеждой, которая знает, как добавить идеальный последний штрих ко всему образу.</p>

                    <Button variant='outlined'><Link className='Link' to={HOME_ROUTE}>Откройте для себя выбор</Link></Button>
                </div>
            </div>
           
            <div className="All-content">


        <div className="home-bcc-img">
          <img className="main-img" src={bccImg} alt="" />
        </div>


        <div className="home-front">
          <img className="home-brand" src={NewLogo} alt="" />
          <h3 className="showWomen">
            ШОУ ЖЕНЩИНА И МУЖЧИНА ОСЕНЬ-ЗИМА 2022-23
          </h3>
          
        </div>


      </div>
        </div>
    );
};

export default Show;