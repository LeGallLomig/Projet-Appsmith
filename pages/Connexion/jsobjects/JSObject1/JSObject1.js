export default {
	Connexion_buttononClick () {
		{
Login.run().then(() => {
  if (Login.data.length > 0) {
    storeValue('userId', Login.data[0].id);
    navigateTo('MainPage', {}, 'SAME_WINDOW');
  } else {
    showAlert('E-mail ou mot de passe incorrect', 'error');
  }
}).catch(() => {
  showAlert('Une erreur est survenue', 'error');
});
}
	}
}