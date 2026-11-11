export default {
	Publier_buttononClick () {
		{
if (!Depart_input.text || !Destination_input.text || !DateHeure_picker.selectedDate || !Places_input.text) {
  showAlert('Merci de remplir tous les champs', 'warning');
} else {
  Publier_trajet.run().then(() => {
    showAlert('Trajet publié !', 'success');
    resetWidget('Depart_input');
    resetWidget('Destination_input');
    resetWidget('DateHeure_picker');
    resetWidget('Places_input');
    navigateTo('MainPage');
  }).catch(() => {
    showAlert('Une erreur est survenue', 'error');
  });
}
}
	}
}