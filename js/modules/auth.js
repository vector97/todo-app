const auth = () => {
  const currentUserName = prompt('Представьтесь, пожалуйста');
  console.log('currentUserName: ', currentUserName);

  if (currentUserName) {
    localStorage.setItem('currentUserName', currentUserName);
  } else {
    auth();
  }

  return currentUserName;
};

export default auth;
