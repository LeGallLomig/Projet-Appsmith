export default {
  verifier () {
    if (!appsmith.store.userId) {
      showAlert('Veuillez vous connecter', 'warning');
      navigateTo('Connexion', {}, 'SAME_WINDOW');
    }
  }
}