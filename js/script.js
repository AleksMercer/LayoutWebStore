personalAreaButton = (displaySwitch) => {
  const registration = document.querySelector('.registration').style;
  const login = document.querySelector('.login').style;
  
  if (displaySwitch == 'registration') {
    registration.display = 'grid';
    login.display = 'none';
  } else if (displaySwitch == 'login') {
    registration.display = 'none';
    login.display = 'grid';
  }
}