// Avis clients. Ajoute tes avis dans la liste "reviews" (copie le bloc de "_modele").
// Le fichier garde la syntaxe JSON : guillemets doubles, virgule entre les avis, aucune apres le dernier.
// La section "Avis clients" n'apparait sur le site que si la liste n'est pas vide.
window.AVIS = {
  "_aide": "Ajoute tes avis clients dans la liste \"reviews\" ci-dessous. La section n'apparait sur le site que si la liste n'est pas vide. Copie le bloc de \"_modele\" pour chaque avis. N'y mets que de vrais avis. Les cles qui commencent par _ sont ignorees par le site.",
  "_modele": {
    "name": "Prénom N.",
    "context": {
      "fr": "Projet ou mission concernée (facultatif)",
      "en": "Project or job concerned (optional)"
    },
    "rating": 5,
    "comment": {
      "fr": "Le commentaire du client, une ou deux phrases.",
      "en": "The client's comment, one or two sentences."
    },
    "source": "Malt (facultatif : où l'avis a été laissé)",
    "url": "https://… (facultatif : lien vers l'avis d'origine)"
  },
  "_notes": [
    "rating : un nombre de 1 a 5.",
    "comment : soit { fr, en } pour les deux langues, soit une simple chaine de texte ; dans ce cas ajoute \"lang\": \"fr\" ou \"en\" pour dire dans quelle langue elle est ecrite.",
    "context, source, url : facultatifs, tu peux les supprimer.",
    "Respecte les virgules entre les avis, et pas de virgule apres le dernier."
  ],
  "reviews": [
    {
      "name": "Client fictif (exemple)",
      "rating": 5,
      "comment": {
        "fr": "Avis fictif pour visualiser la section : très bonne collaboration, code propre et livré dans les temps.",
        "en": "Fictional review to preview the section: great collaboration, clean code delivered on time."
      },
      "context": {
        "fr": "Exemple à supprimer",
        "en": "Example to delete"
      }
    },
    {
      "name": "Client fictif 2 (exemple)",
      "rating": 5,
      "comment": {
        "fr": "Avis fictif n°2 : communication claire et réactive du début à la fin.",
        "en": "Fictional review #2: clear, responsive communication from start to finish."
      },
      "context": {
        "fr": "Exemple à supprimer",
        "en": "Example to delete"
      }
    },
    {
      "name": "Client fictif 3 (exemple)",
      "rating": 4,
      "comment": {
        "fr": "Avis fictif n°3 : très bon travail, quelques ajustements en cours de route.",
        "en": "Fictional review #3: very good work, a few adjustments along the way."
      },
      "context": {
        "fr": "Exemple à supprimer",
        "en": "Example to delete"
      }
    },
    {
      "name": "Client fictif 4 (exemple)",
      "rating": 5,
      "comment": {
        "fr": "Avis fictif n°4 : outil livré proprement, documentation incluse.",
        "en": "Fictional review #4: tool delivered cleanly, documentation included."
      },
      "context": {
        "fr": "Exemple à supprimer",
        "en": "Example to delete"
      }
    },
    {
      "name": "Client fictif 5 (exemple)",
      "rating": 5,
      "comment": {
        "fr": "Avis fictif n°5 : je referais appel à lui sans hésiter.",
        "en": "Fictional review #5: I would hire again without hesitation."
      },
      "context": {
        "fr": "Exemple à supprimer",
        "en": "Example to delete"
      }
    }
  ]
};
