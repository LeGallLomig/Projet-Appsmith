export default {
	Button1onClick () {
		if (!appsmith.store.userId) {
			showAlert('Veuillez vous connecter', 'warning');
			navigateTo('Connexion', {}, 'SAME_WINDOW');
		} else {
			Reserver.run().then((res) => {
				if (res && res.length > 0) {
					showAlert('Réservation envoyée !', 'success');
				} else {
					showAlert('Trajet déjà réservé ou indisponible', 'warning');
				}
			}).catch((e) => {
				showAlert(String(e.message || e), 'error');
			});
		}
	}
}