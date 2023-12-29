-- Table des utilisateurs
CREATE TABLE Utilisateurs (
    utilisateur_id INT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    mot_de_passe VARCHAR(255),
    email VARCHAR(255),
    numero_telephone VARCHAR(15)
);

-- Table des clients
CREATE TABLE Clients (
    client_id INT PRIMARY KEY,
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(utilisateur_id)
);

-- Table des administrateurs
CREATE TABLE Administrateurs (
    administrateur_id INT PRIMARY KEY,
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(utilisateur_id)
);

-- Table des biens immobiliers
CREATE TABLE BiensImmobilier (
    bien_id INT PRIMARY KEY,
    libelle VARCHAR(255),
    prix DECIMAL(10,2),
    superficie DECIMAL(10,2),
    image VARCHAR(255),
    plan VARCHAR(255),
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(utilisateur_id)
);

-- Table des terrains
CREATE TABLE Terrains (
    terrain_id INT PRIMARY KEY,
    bien_id INT,
    disponibilite_titre_foncier VARCHAR(50),
    disponibilite_certificat_propriete VARCHAR(50),
    coordonnees_geographiques VARCHAR(255),
    etat VARCHAR(50),
    FOREIGN KEY (bien_id) REFERENCES BiensImmobilier(bien_id)
);

-- Table des villas
CREATE TABLE Villas (
    villa_id INT PRIMARY KEY,
    bien_id INT,
    nombre_chambres INT,
    nombre_parking INT,
    piscine BOOLEAN,
    prix_hors_terrain DECIMAL(10,2),
    etat VARCHAR(50),
    FOREIGN KEY (bien_id) REFERENCES BiensImmobilier(bien_id)
);

-- Table des duplex
CREATE TABLE Duplex (
    duplex_id INT PRIMARY KEY,
    bien_id INT,
    montant_gros_oeuvres DECIMAL(10,2),
    montant_finition DECIMAL(10,2),
    nombre_chambres INT,
    nombre_parking INT,
    piscine BOOLEAN,
    etat VARCHAR(50),
    FOREIGN KEY (bien_id) REFERENCES BiensImmobilier(bien_id)
);

-- Table des projets immobiliers
CREATE TABLE ProjetsImmobilier (
    projet_id INT PRIMARY KEY,
    libelle VARCHAR(255),
    date_publication DATE,
    periode_retour_investissement INT,
    prix_total_realisation DECIMAL(10,2),
    resultat_exploitation_annuel DECIMAL(10,2),
    croissance_estimee_capital DECIMAL(10,2),
    accroissement_total_investissement DECIMAL(10,2),
    surface_terrain DECIMAL(10,2),
    surface_batie DECIMAL(10,2),
    jauge_progression_capital DECIMAL(5,2),
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(utilisateur_id)
);

-- Table des commentaires
CREATE TABLE Commentaires (
    commentaire_id INT PRIMARY KEY,
    bien_id INT,
    projet_id INT,
    utilisateur_id INT,
    commentaire_texte TEXT,
    FOREIGN KEY (bien_id) REFERENCES BiensImmobilier(bien_id),
    FOREIGN KEY (projet_id) REFERENCES ProjetsImmobilier(projet_id),
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(utilisateur_id)
);

-- Table des transactions/paiements
CREATE TABLE TransactionsPaiements (
    transaction_id INT PRIMARY KEY,
    bien_id INT,
    projet_id INT,
    utilisateur_id INT,
    montant DECIMAL(10,2),
    date_transaction DATE,
    statut VARCHAR(50),
    reference_transaction VARCHAR(255),
    justificatif_paiement VARCHAR(255),
    FOREIGN KEY (bien_id) REFERENCES BiensImmobilier(bien_id),
    FOREIGN KEY (projet_id) REFERENCES ProjetsImmobilier(projet_id),
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(utilisateur_id)
);

-- Table des investissements
CREATE TABLE Investissements (
    investissement_id INT PRIMARY KEY,
    client_id INT,
    projet_id INT,
    montant DECIMAL(10,2),
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    FOREIGN KEY (projet_id) REFERENCES ProjetsImmobilier(projet_id)
);

-- Table des conversations
CREATE TABLE Conversations (
    conversation_id INT PRIMARY KEY,
    utilisateur_id INT,
    administrateur_id INT,
    service_client_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(utilisateur_id),
    FOREIGN KEY (administrateur_id) REFERENCES Administrateurs(administrateur_id),
    FOREIGN KEY (service_client_id) REFERENCES Utilisateurs(utilisateur_id)
);
