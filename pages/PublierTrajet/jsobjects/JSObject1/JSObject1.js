export default {
  async Publier_buttononClick () {
    if (!Depart_input.text || !Destination_input.text || !DateHeure_picker.selectedDate || !Places_input.text) {
      showAlert('Merci de remplir tous les champs', 'warning');
      return;
    }
    if (Number(Places_input.text) < 1) {
      showAlert('Il faut au moins une place', 'warning');
      return;
    }
    if (!appsmith.store.userId) {
      showAlert('Session expirée, veuillez vous reconnecter', 'error');
      navigateTo('Connexion', {}, 'SAME_WINDOW');
      return;
    }
    try {
      await Publier_trajet.run();
    } catch (e) {
      showAlert('Impossible de publier le trajet', 'error');
      return;
    }
    showAlert('Trajet publié !', 'success');
    resetWidget('Depart_input');
    resetWidget('Destination_input');
    resetWidget('DateHeure_picker');
    resetWidget('Places_input');
    navigateTo('MainPage', {}, 'SAME_WINDOW');
  }
}