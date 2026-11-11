export default {
  async changerMdp () {
    if (!AncienMdp_input.text || !NouvMdp_input.text) {
      showAlert('Merci de remplir tous les champs', 'warning');
      return;
    }
    if (NouvMdp_input.text.length < 8) {
      showAlert('Le nouveau mot de passe doit faire au moins 8 caractères', 'warning');
      return;
    }
    if (NouvMdp_input.text !== ConfirmNouvMdp_input.text) {
      showAlert('Les mots de passe ne correspondent pas', 'warning');
      return;
    }
    try {
      const res = await Update_Password.run();
      if (res.length > 0) {
        showAlert('Mot de passe modifié !', 'success');
        resetWidget('AncienMdp_input');
        resetWidget('NouvMdp_input');
        resetWidget('ConfirmNouvMdp_input');
        navigateTo('Connexion', {}, 'SAME_WINDOW');
      } else {
        showAlert('Ancien mot de passe incorrect', 'error');
      }
    } catch (e) {
      showAlert('Une erreur est survenue', 'error');
    }
  }
}