import React, { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../side/SideBar.css'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import axios from 'axios'
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Email } from '@mui/icons-material';


function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'Поле адреса электронной почты обязательно.';
    }

  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}


const SideBar = () => {
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("")
  const [letter ,setLetter] = useState(false)

const newLetter = async(e) => {
  e.preventDefault()
  try{
    const res = await axios.post('http://localhost:3004/newletter', {
      userEmail: email,
      userGender: gender
    })
    .then(res => (res))
    setLetter(true)
    setGender("")
    setGender("")
  }catch(err){
    console.log(err)
  }
    
}



    return (
      <div className="SideBar">
        <div className="icons">
          <div className="location">
            <LanguageIcon />
            <h3 className="shopsIn">Магазин в: Кыргызстане</h3>
          </div>

          <div className="location">
            <LocationOnIcon />
            <h3 className="shopsIn">Поиск магазинов</h3>
          </div>
        </div>
        <hr className="line" />
        <h3 className="title">ПОДПИШИТЕСЬ НА НАШУ НОВОСТНУЮ РАССЫЛКУ</h3>

        {letter ?  
          (
            <div className="thankspage">
              <h4 className="thanksforSub">Спасибо.</h4>
              <h5>Ваша подписка на новостную рассылку интернет-магазина DressCode подтверждена.</h5>
              <p>Пожалуйста перейдите по ссылке</p>
              <a href="https://t.me/+NMo0biLHM9I0ODhi">https://t.me/+NMo0biLHM9I0ODhi</a>
            </div>
          )
           : 
          (<div>
            <p className='required'>*Обязательные поля</p>
            <form onSubmit={newLetter}>
            <TextField  
                className='emailAdress' 
                id="outlined-basic" 
                label="Адрес электронной почты" 
                variant="outlined" 
                type="email"
                onChange={e => setEmail(e.target.value)} 
                required
            />
              <div>
                
                <p className='side-gender'>Пол*</p>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    
                  >
                    <FormControlLabel
                      onChange={(e) => setGender(e.target.value)}
                      value="Мужчина"
                      control={<Radio />}
                      label="Мужчина"
                    />
                    <FormControlLabel
                      onChange={(e) => setGender(e.target.value)}
                      value="Женщина"
                      control={<Radio />}
                      label="Женщина"
                    />
                  </RadioGroup>
                </FormControl>
  
                <p className="sideTitle">
                  Нажимая «Зарегистрироваться», вы заявляете, что вам исполнилось
                  16 лет, и соглашаетесь на обработку ваших персональных данных
                  для регистрации на персонализированную рассылку новостей
                  DressCode, как указано в политике
                </p>
              </div>
              <Button
              type='submit'
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "5px 10px",
                }}
                variant="outlined"
              >
                Подпиcаться
              </Button>
            </form>
          </div>)
        
        }
        
      </div>
    );
};

export default SideBar;