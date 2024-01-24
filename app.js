const sounds = [
    'mp3/achever_50e.mp3',
    'mp3/adieu_petit_lapin.mp3',
    'mp3/albator.mp3',
    'mp3/arrete_un_bus.mp3',
    'mp3/aucune_allure.mp3',
    'mp3/autant_de_biere.mp3',
    'mp3/bercee_trop_pret_du_mur.mp3',
    'mp3/boire_un_verre.mp3',
    'mp3/boite_a_gants.mp3',
    'mp3/bonjour_sabine.mp3',
    'mp3/bouche_fermee.mp3',
    'mp3/bout_weekend.mp3',
    'mp3/ca_change_des_magasines.mp3',
    'mp3/ca_depend.mp3',
    'mp3/ca_va_suffir.mp3',
    'mp3/cabine_publique.mp3',
    'mp3/cacher.mp3',
    'mp3/camion_poubelle.mp3',
    'mp3/carjacker.mp3',
    'mp3/casser_une_jambe.mp3',
    'mp3/cendrier.mp3',
    'mp3/centre_vacances.mp3',
    'mp3/chanteur_de_rap.mp3',
    'mp3/chercher_le_poney.mp3',
    'mp3/chips.mp3',
    'mp3/cinema_porno.mp3',
    'mp3/classe_verte.mp3',
    'mp3/conasse_va.mp3',
    'mp3/couilles.mp3',
    'mp3/coup_de_boule.mp3',
    'mp3/cracher_lama.mp3',
    'mp3/deux_bieres.mp3',
    'mp3/deux_clude.mp3',
    'mp3/dites_pas_action.mp3',
    'mp3/dur_comme_boulot.mp3',
    'mp3/education_minimum.mp3',
    'mp3/elle_est_morte.mp3',
    'mp3/elle_sait_dire_merci.mp3',
    'mp3/embrasse_mere.mp3',
    'mp3/encore_une_petite.mp3',
    'mp3/enlever_le_bas.mp3',
    'mp3/epais_frein.mp3',
    'mp3/epilee_pas_epilee.mp3',
    'mp3/etudiants_tv.mp3',
    'mp3/excessivement_enervant.mp3',
    'mp3/excuse_toi.mp3',
    'mp3/flamande_bien_gaulee.mp3',
    'mp3/gang_bang.mp3',
    'mp3/grand_amour.mp3',
    'mp3/gretta.mp3',
    'mp3/he_ket.mp3',
    'mp3/iad.mp3',
    'mp3/identite_sexuelles.mp3',
    'mp3/idiot.mp3',
    'mp3/il_est_moche.mp3',
    'mp3/il_est_tout_a_fait_fou.mp3',
    'mp3/interesse_numero.mp3',
    'mp3/jalousie.mp3',
    'mp3/jamais_deux_sans_trois.mp3',
    'mp3/japonaise_gueule.mp3',
    'mp3/je_suis_claudy.mp3',
    'mp3/je_veux_quitter_cette_ville.mp3',
    'mp3/juge_pas.mp3',
    'mp3/kinder.mp3',
    'mp3/king_de_la_route.mp3',
    'mp3/king_kong.mp3',
    'mp3/la_mousse.mp3',
    'mp3/laides.mp3',
    'mp3/licenciement.mp3',
    'mp3/mal_baisee.mp3',
    'mp3/mal_reveillee.mp3',
    'mp3/materiellement_pas_le_temps.mp3',
    'mp3/messieurs_dame_bonjour.mp3',
    'mp3/michael_jackson.mp3',
    'mp3/mignon_cochon.mp3',
    'mp3/moche.mp3',
    'mp3/negocier_nichons.mp3',
    'mp3/noir_et_blanc.mp3',
    'mp3/offrir_cailloux.mp3',
    'mp3/ont_pas_rate.mp3',
    'mp3/original.mp3',
    'mp3/ou_tu_sors.mp3',
    'mp3/pas_de_tututututu.mp3',
    'mp3/pas_emporter.mp3',
    'mp3/paye_partie.mp3',
    'mp3/petite_culotte.mp3',
    'mp3/petite_soeur.mp3',
    'mp3/photo_de_charme.mp3',
    'mp3/place_poularte_croisette.mp3',
    'mp3/plait_pas_tout_le_monde.mp3',
    'mp3/poli_ou_pas_poli.mp3',
    'mp3/prendre_ta_raclee.mp3',
    'mp3/ptite_bite.mp3',
    'mp3/quel_clete.mp3',
    'mp3/quest_ce_qui_a.mp3',
    'mp3/qui_veux_jouer_au_mort.mp3',
    'mp3/remixer.mp3',
    'mp3/reussir_a_rien_foutre.mp3',
    'mp3/rime_rame_tartine.mp3',
    'mp3/rolland_garros.mp3',
    'mp3/schouf_fleau.mp3',
    'mp3/sent_la_merde.mp3',
    'mp3/si_je_te_dis.mp3',
    'mp3/soleil.mp3',
    'mp3/tas_vu_ca.mp3',
    'mp3/tchouk.mp3',
    'mp3/tendu_comme_une_crampe.mp3',
    'mp3/terminer_bonsoir.mp3',
    'mp3/tomber_sus.mp3',
    'mp3/touche_les_seins.mp3',
    "mp3/tout_negociable.mp3",
    "mp3/trou_de_balle.mp3",
    "mp3/tu_bois_pas_tout.mp3", 
    "mp3/tu_ne_me_vois_pas.mp3",
    "mp3/un_petit_clic.mp3",
    "mp3/une_ptite_vedett.mp3",
    "mp3/va_te_faire_refaire.mp3", 
    "mp3/venir_vers_moi.mp3",
    "mp3/vieille_truie.mp3",
    "mp3/vire_de_chez_vire.mp3",
    "mp3/voiture_sport.mp3", 
    "mp3/vulgaire.mp3",
    "mp3/yeux_de_cocker.mp3",
]

const soundboard = document.getElementById('soundboard');

sounds.forEach(sound => {
    const button = document.createElement('button');
    button.className = 'w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
    button.innerText = sound.split('/').pop();
    button.onclick = () => playSound(sound);

    const link = document.createElement('button');
    link.href = sound;
    link.innerText = 'Copier le lien';
    link.className = 'block text-xs text-gray-600 text-center';
    link.onclick = () => copyToClipboard(link, sound);

    const container = document.createElement('div');
    container.className = 'flex flex-col items-center'
    container.appendChild(button);
    container.appendChild(link);

    soundboard.appendChild(container);
});

function playSound(soundFile) {
    new Audio(soundFile).play();
}

function copyToClipboard(link, text) {
    navigator.clipboard.writeText(window.location.href + text);
    link.innerText = 'Copié !';
    setTimeout(() => {
        link.innerText = 'Copier le lien';
    }, "1000");
}