export default {
  async Connexion_buttononClick () {
    if (!LoginEmail_input.text || !LoginPwd_input.text) {
      showAlert('Merci de remplir tous les champs', 'warning');
      return;
    }
    try {
      const res = await Login.run();
      if (res.length > 0) {
        await storeValue('userId', res[0].id);
        navigateTo('MainPage', {}, 'SAME_WINDOW');
      } else {
        showAlert('E-mail ou mot de passe incorrect', 'error');
      }
    } catch (e) {
      showAlert('Une erreur est survenue', 'error');
    }
  }
}