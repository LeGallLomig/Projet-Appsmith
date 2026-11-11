export default {
	ModifMdp_buttononClick () {
		if (!appsmith.store.userId) { 
			navigateTo('Connexion'); 
		}
	}
}