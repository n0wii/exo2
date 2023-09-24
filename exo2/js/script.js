// Définition du tueur en série Jason avec 100 points de vie.
const jason = {
  nom: "Jason",
  pointsDeVie: 100,
  };
  
  // Caractéristiques des survivants avec probabilités associées (mourir, mettre des dégâts, mourir en mettant des dégâts).
  const caracteristiques = [
    { nom: "Nerd", probMourir: 0.3, probDegats: 0.5, probMourirDegats: 0.2 },
{
  nom: "Sportif", probMourir: 0.2, probDegats: 0.6, probMourirDegats: 0.1 },
    { nom: "Blonde", probMourir: 0.4, probDegats: 0.4, probMourirDegats: 0.2 },
    // Ajoutez d'autres caractéristiques ici
  ];
  
  // Tableau de prénoms pour les survivants.
  const prenoms = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"];
  
  // Fonction pour générer un nom aléatoire parmi les prénoms.
  function genererNomAleatoire() {
  return prenoms[Math.floor(Math.random() * prenoms.length)];
  }
  
  // Fonction pour générer un survivant aléatoire.
  function genererSurvivant() {
  const caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
    return {
nom: genererNomAleatoire(),
      
 caracteristique: caracteristique,
      pointsDeVie: 100,
    };
  }
  
  // Création d'une équipe de 5 survivants.
  const equipeSurvivants = [];
  for (let i = 0; i < 5; i++) {
    equipeSurvivants.push(genererSurvivant());
  }
  
  // Fonction pour résoudre l'action d'un survivant attaqué par Jason.
  function resoudreActionSurvivant(survivant) {
    const probaMourir = survivant.caracteristique.probMourir;
    const probaDegats = survivant.caracteristique.probDegats;
    const probaMourirDegats = survivant.caracteristique.probMourirDegats;
    const random = Math.random();
  
    if (random < probaMourir) {
      
     
  return survivant.nom + " est mort.";
    } else if (random < probaMourir + probaDegats) {
      
     
  const degats = Math.floor(Math.random() * 21); // Dégâts aléatoires entre 0 et 20
    jason
  pointsDeVie -= degats;
   
  return survivant.nom + " a esquivé et a infligé " + degats + " points de dégâts à " + jason.nom + ".";
    } else if (random < probaMourir + probaDegats + probaMourirDegats) {
      const degats = Math.floor(Math.random() * 16) + 15; // Dégâts aléatoires entre 15 et 30
      jason.pointsDeVie -= degats;
      survivant.
     
  pointsDeVie -= degats;
      
  return (
        survivant.nom +
        " a infligé " +
        degats +
        " points de dégâts à " +
        jason.
        j
    +
        ", mais est mort en le faisant."
      );
    } else {
      return survivant.nom + " a survécu sans rien faire.";
    }
  }
  
  // Fonction pour vérifier si tous les survivants sont morts.
  function tousLesSurvivantsSontMorts() {
    
   
  return equipeSurvivants.every((survivant) => survivant.pointsDeVie <= 0);
  }
  
  // Boucle principale tant que Jason n'est pas mort ou que tous les survivants ne sont pas morts.
  while (jason.pointsDeVie > 0 && !tousLesSurvivantsSontMorts()) {
    // Jason attaque un survivant aléatoire.
    
   
  const survivantAttaque = equipeSurvivants[Math.floor(Math.random() * equipeSurvivants.length)];
    
   
  const action = resoudreActionSurvivant(survivantAttaque);
  
    // Affichage du résultat de l'action.
    console.log(action);
  
    // Si le survivant est mort, il est retiré de l'équipe.
    if (action.includes("est mort.")) {
      
     
  const index = equipeSurvivants.indexOf(survivantAttaque);
      if (index !== -1) {
        equipeSurvivants.splice(index, 1);
      }
    }
  }
  
  // Affichage du résultat final.
  if (jason.pointsDeVie <= 0) {
    console.log("Jason est mort.");
  } else {
    const nomsSurvivants = equipeSurvivants.map((survivant) => survivant.nom).join(", ");
    console.log("Les survivants ont gagné, mais RIP à " + nomsSurvivants + ".");
  }