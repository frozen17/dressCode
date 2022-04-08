import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import './Profile.css'


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Profile = () => {
  const { dispatch, user } = useContext(Context);
  const [edit, setEdit] = useState(false);
  const [login, setLogin] = useState(user.login);
  const [surname, setSurname] = useState(user.surname);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(user.age);
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const handleChangePost = () => {
    setEdit(true);
  };

  const goBack = () => {
    navigate(-0.5);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3004/users/${user.id}`, {
        email,
        password,
        login,
        surname,
        gender,
        age,
      });
      console.log(res);
      setDone(true)
      setTimeout(goBack, 2000)
      dispatch({ type: "USER_UPDATE", payload: res.data });
    } catch (error) {
      console.log(error);
      setError(true)
    }
    setTimeout(setError,4000)
  };

  return (
    <div
      style={{
        width: "60%",
        margin: "100px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center"
      }}
    >
        {done ? <Alert severity="success">Ваши данные были обновлены правильно.</Alert> : ""}
        {error ? <Alert severity="error">Пожалуйста, проверьте ваш текущий пароль</Alert> : ""}
      {edit ? (
        <div>
          <div style={{ width: "100%", margin: "0 auto", textAlign: "center" }}>
            <h3 style={{ textAlign: "center" }}>
              Детали регистрации моей учетной записи
            </h3>
            <p style={{ textAlign: "center" }}>
              Проверьте и измените свои личные данные, адрес электронной почты и
              пароль.
            </p>
            
           
          </div>
          <div>
            <div>
              <FormControl style={{
                  margin: "15px 0"
              }}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
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
            </div>
            <div>
              <TextField
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                id="outlined-basic"
                label="Введите ваше имя"
                variant="outlined"
                className="inputUser"
                style={{
                    margin: "15px 25px"
                }}
                required
              />
              <TextField
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
                id="outlined-basic"
                label="Введите вашу фамилию"
                variant="outlined"
                required
                className="inputUser"
                style={{
                    margin: "15px 25px"
                }}
              />
            </div>
            <div>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="outlined-basic"
                label="Введите email"
                variant="outlined"
                required
                className="inputUser"
                style={{
                    margin: "15px 25px"
                }}
              />
              <TextField
                id="outlined-basic"
                label="Подвердите пароль"
                variant="outlined"
                type="password"
                onChange={(e) => new setPassword(e.target.value)}
                required
                style={{
                    margin: "15px 25px"
                }}
                className="inputUser"
              />
            </div>
            <div>
              <TextField
                onChange={(e) => setAge(e.target.value)}
                id="date"
                label="Дата рождение"
                type="date"
                defaultValue="0000-00-00"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{
                    margin: "15px 25px"
                }}
                className="inputUser"
              />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox {...label} defaultChecked />
                <p>
                  После ознакомления с Политикой конфиденциальности я даю
                  согласие на обработку моих персональных данных компанией
                  Giorgio Armani SpA в маркетинговых целях — рассылка информации
                  о рекламных акциях и новостях Armani через информационный
                  бюллетень.
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox {...label} defaultChecked />
                <p>
                  После ознакомления с « Политикой конфиденциальности» я даю
                  согласие на обработку моих данных компанией Giorgio Armani SpA
                  для записи и анализа моих предпочтений (профилирование).
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 style={{ textAlign: "center" }}>Обзор моей учетной записи</h3>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <h5>Имя: {user.login}</h5>
              <h5>email: {user.email}</h5>
              <h5>ДР: {user.age}</h5>
            </div>
            <div>
              <h5>Фамилия: {user.surname}</h5>
              <h5>Пол: {user.gender}</h5>
              <h5>Расположение: Кыргызстан</h5>
            </div>
          </div>
        </div>
      )}

      {edit ? (
        <Button
          onClick={handleUpdate}
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "30%",
            margin: "20px auto",
          }}
          type='submit'
        >
          Сохранить
        </Button>
      ) : (
        <Button
          onClick={handleChangePost}
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "30%",
            margin: "0 auto",
          }}
        >
          Изменить свои данные
        </Button>
      )}
    </div>
  );
};

export default Profile;
