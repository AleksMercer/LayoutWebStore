//Смена регистрации на логин и обратно—————————————————————————————————————————
personalAreaButton = (displaySwitch) => {

  const login = document.querySelector('.login').style;
  const registration = document.querySelector('.registration').style;
  
  if (displaySwitch == 'registration') {
    registration.display = 'grid';
    login.display = 'none';
  } else if (displaySwitch == 'login') {
    registration.display = '';
    login.display = 'grid';
  }
}
//——————————————————————————————————————————————————————————————————————————————