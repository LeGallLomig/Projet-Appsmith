export default {
	Profil_buttononClick () {
		if (appsmith.store.userId) {
			navigateTo('ProfilPage', {}, 'SAME_WINDOW');
		} else {
			showAlert('Veuillez vous connecter', 'warning');
			navigateTo('Connexion', {}, 'SAME_WINDOW');
		}

	}
}