-- Créer la base de données
CREATE DATABASE IF NOT EXISTS EfficaceDB;
USE EfficaceDB;

-- Table des utilisateurs
CREATE TABLE Utilisateurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    mot_de_passe VARCHAR(255),
    adresse_email VARCHAR(100),
    numero_telephone VARCHAR(15)
);

-- Table des internautes
CREATE TABLE Internautes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    adresse_email VARCHAR(100),
    numero_telephone VARCHAR(15)
);

-- Table des clients
CREATE TABLE Clients (
    id INT PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES Utilisateurs(id)
);

-- Table des administrateurs
CREATE TABLE Administrateurs (
    id INT PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES Utilisateurs(id)
);

-- Table des biens immobiliers
CREATE TABLE BiensImmobiliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(id),
    libelle VARCHAR(100),
    image_descriptif TEXT,
    galerie TEXT,
    prix DECIMAL(10, 2),
    superficie DECIMAL(10, 2),
    type_bien VARCHAR(50),
    etat VARCHAR(50),
    disponibilite_titre_foncier VARCHAR(50),
    disponibilite_certificat_propriete VARCHAR(50),
    coordonnees_geographiques VARCHAR(255),
    nombre_chambres INT,
    nombre_parking INT,
    piscine BOOLEAN
    
);

-- Table des projets immobiliers
CREATE TABLE ProjetsImmobiliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    libelle VARCHAR(100),
    date_publication DATE,
    periode_retour_investissement INT,
    prix_total_realisation DECIMAL(10, 2),
    resultat_exploitation_annuelle_estime DECIMAL(10, 2),
    croissance_estimee_du_capital DECIMAL(10, 2),
    accroissement_total_investissement DECIMAL(10, 2),
    surface_terrain DECIMAL(10, 2),
    surface_batie DECIMAL(10, 2),
    jauge_progression_capital_global INT,
    type_projet VARCHAR(50) -- Peut être 'centre_commercial', 'logement', 'appartement_meuble', 'immeuble_locatif', 'centre_education', 'centre_loisirs', 'hotel', 'lotissement', 'centre_medical', 'centre_industriel'
);

-- Table des transactions
CREATE TABLE Transactions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(id),
    bien_immobilier_id INT,
    FOREIGN KEY (bien_immobilier_id) REFERENCES BiensImmobiliers(id),
    montant DECIMAL(10, 2),
    date_transaction DATE,
    statut VARCHAR(50),
    reference_transaction VARCHAR(100),
    justificatif_paiement TEXT
);

-- Table des commentaires
CREATE TABLE Commentaires (
    id INT PRIMARY KEY AUTO_INCREMENT,
    texte TEXT,
    id_utilisateur INT,
    id_bien_immobilier INT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id),
    FOREIGN KEY (id_bien_immobilier) REFERENCES BiensImmobiliers(id),
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id)
);

-- Table des messages (chat)
CREATE TABLE Messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    texte TEXT,
    id_utilisateur INT,
    destinataire VARCHAR(50), -- Peut être 'administrateur' ou 'service_client'
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id)
);
-- Table des duplex
CREATE TABLE Duplex (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_bien_immobilier INT,
    FOREIGN KEY (id_bien_immobilier) REFERENCES BiensImmobiliers(id),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    montant_gros_oeuvres DECIMAL(10, 2),
    montant_finition DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    superficie_batie DECIMAL(10, 2),
    nombre_chambres INT,
    nombre_parking INT,
    piscine BOOLEAN,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des villas
CREATE TABLE Villas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_bien_immobilier INT,
    FOREIGN KEY (id_bien_immobilier) REFERENCES BiensImmobiliers(id),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    superficie_batie DECIMAL(10, 2),
    nombre_chambres INT,
    nombre_parking INT,
    piscine BOOLEAN,
    prix_hors_terrain DECIMAL(10, 2),
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des immeubles
CREATE TABLE Immeubles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_bien_immobilier INT,
    FOREIGN KEY (id_bien_immobilier) REFERENCES BiensImmobiliers(id),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    montant_gros_oeuvres DECIMAL(10, 2),
    montant_finition DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    superficie_batie DECIMAL(10, 2),
    nombre_chambres INT,
    nombre_parking INT,
    nombre_etages INT,
    terrasse BOOLEAN,
    piscine BOOLEAN,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des terrains
CREATE TABLE Terrains (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_bien_immobilier INT,
    FOREIGN KEY (id_bien_immobilier) REFERENCES BiensImmobiliers(id),
    libelle VARCHAR(100),
    image_descriptif TEXT,
    galerie TEXT,
    disponibilite_titre_foncier VARCHAR(50), -- Peut être 'disponible' ou 'en_cours'
    disponibilite_certificat_propriete VARCHAR(50), -- Peut être 'disponible' ou 'en_cours'
    coordonnees_geographiques VARCHAR(255),
    prix DECIMAL(10, 2),
    superficie DECIMAL(10, 2),
    localisation VARCHAR(255),
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);

-- Table des boutiques
CREATE TABLE Boutiques (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_bien_immobilier INT,
    FOREIGN KEY (id_bien_immobilier) REFERENCES BiensImmobiliers(id),
    libelle VARCHAR(100),
    surface DECIMAL(10, 2),
    prix_metre_carre DECIMAL(10, 2),
    prix_total DECIMAL(10, 2),
    image TEXT,
    plan TEXT
);
-- Table des bureaux
CREATE TABLE Bureaux (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_bien_immobilier INT,
    FOREIGN KEY (id_bien_immobilier) REFERENCES BiensImmobiliers(id),
    libelle VARCHAR(100),
    surface DECIMAL(10, 2),
    prix_metre_carre DECIMAL(10, 2),
    prix_total DECIMAL(10, 2),
    image TEXT,
    plan TEXT
);
-- Table des hôtels
CREATE TABLE Hotels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_bien_immobilier INT,
    FOREIGN KEY (id_bien_immobilier) REFERENCES BiensImmobiliers(id),
    libelle VARCHAR(100),
    surface DECIMAL(10, 2),
    prix_metre_carre DECIMAL(10, 2),
    prix_total DECIMAL(10, 2),
    image TEXT,
    plan TEXT
);
-- Table des fonds de commerce
CREATE TABLE FondsDeCommerce (
    id INT PRIMARY KEY AUTO_INCREMENT,
    libelle VARCHAR(100),
    surface DECIMAL(10, 2),
    prix_metre_carre DECIMAL(10, 2),
    prix_total DECIMAL(10, 2),
    image TEXT,
    plan TEXT
);
-- Table des centres commerciaux
CREATE TABLE CentresCommerciaux (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    surface DECIMAL(10, 2),
    prix_metre_carre DECIMAL(10, 2),
    prix_total DECIMAL(10, 2),
    image TEXT,
    plan TEXT,
    nombre_magasins INT
);

-- Table des logements
CREATE TABLE Logements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    superficie_batie DECIMAL(10, 2),
    nombre_chambres INT,
    nombre_parking INT,
    piscine BOOLEAN,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);

-- Table des appartements meublés
CREATE TABLE AppartementsMeubles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    montant_gros_oeuvres DECIMAL(10, 2),
    montant_finition DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    superficie_batie DECIMAL(10, 2),
    nombre_chambres INT,
    nombre_parking INT,
    piscine BOOLEAN,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des immeubles locatifs
CREATE TABLE ImmeublesLocatifs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    montant_gros_oeuvres DECIMAL(10, 2),
    montant_finition DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    superficie_batie DECIMAL(10, 2),
    nombre_chambres INT,
    nombre_parking INT,
    nombre_etages INT,
    terrasse BOOLEAN,
    piscine BOOLEAN,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des centres d'éducation
CREATE TABLE CentresEducation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    nombre_salles INT,
    capacite_etudiants INT,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des centres de loisirs
CREATE TABLE CentresLoisirs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    nombre_salles INT,
    capacite_visiteurs INT,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des hôtels
CREATE TABLE HotelsProjet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    nombre_chambres INT,
    nombre_etages INT,
    piscine BOOLEAN,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des lotissements
CREATE TABLE Lotissements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    nombre_lots INT,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des centres médicaux
CREATE TABLE CentresMedicaux (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    image_descriptif TEXT,
    galerie TEXT,
    nombre_salles_consultation INT,
    capacite_patients INT,
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);
-- Table des centres industriels
CREATE TABLE CentresIndustriels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_projet_immobilier INT,
    FOREIGN KEY (id_projet_immobilier) REFERENCES ProjetsImmobiliers(id),
    libelle VARCHAR(100),
    prix DECIMAL(10, 2),
    superficie_terrain DECIMAL(10, 2),
    nombre_entrepots INT,
    capacite_production DECIMAL(10, 2),
    etat VARCHAR(50) -- Peut être 'en_location', 'a_vendre'
);


-- Utilisateur administrateur
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'mot_de_passe_admin';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;

