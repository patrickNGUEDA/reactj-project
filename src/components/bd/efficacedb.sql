-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 04 jan. 2024 à 11:46
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `efficacedb`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrateurs`
--

CREATE TABLE `administrateurs` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `appartementsmeubles`
--

CREATE TABLE `appartementsmeubles` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `montant_gros_oeuvres` decimal(10,2) DEFAULT NULL,
  `montant_finition` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `superficie_batie` decimal(10,2) DEFAULT NULL,
  `nombre_chambres` int(11) DEFAULT NULL,
  `nombre_parking` int(11) DEFAULT NULL,
  `piscine` tinyint(1) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `biensimmobiliers`
--

CREATE TABLE `biensimmobiliers` (
  `id` int(11) NOT NULL,
  `utilisateur_id` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie` decimal(10,2) DEFAULT NULL,
  `type_bien` varchar(50) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `disponibilite_titre_foncier` varchar(50) DEFAULT NULL,
  `disponibilite_certificat_propriete` varchar(50) DEFAULT NULL,
  `coordonnees_geographiques` varchar(255) DEFAULT NULL,
  `nombre_chambres` int(11) DEFAULT NULL,
  `nombre_parking` int(11) DEFAULT NULL,
  `piscine` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `biensimmobiliers`
--

INSERT INTO `biensimmobiliers` (`id`, `utilisateur_id`, `libelle`, `image_descriptif`, `galerie`, `prix`, `superficie`, `type_bien`, `etat`, `disponibilite_titre_foncier`, `disponibilite_certificat_propriete`, `coordonnees_geographiques`, `nombre_chambres`, `nombre_parking`, `piscine`) VALUES
(1, 2, 'villa', NULL, NULL, 60000000.00, 400.00, 'terrains ', 'VENDRE', 'oui', 'oui', NULL, 12, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `boutiques`
--

CREATE TABLE `boutiques` (
  `id` int(11) NOT NULL,
  `id_bien_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `surface` decimal(10,2) DEFAULT NULL,
  `prix_metre_carre` decimal(10,2) DEFAULT NULL,
  `prix_total` decimal(10,2) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `plan` text DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `bureaux`
--

CREATE TABLE `bureaux` (
  `id` int(11) NOT NULL,
  `id_bien_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `surface` decimal(10,2) DEFAULT NULL,
  `prix_metre_carre` decimal(10,2) DEFAULT NULL,
  `prix_total` decimal(10,2) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `plan` text DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `centrescommerciaux`
--

CREATE TABLE `centrescommerciaux` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `surface` decimal(10,2) DEFAULT NULL,
  `prix_metre_carre` decimal(10,2) DEFAULT NULL,
  `prix_total` decimal(10,2) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `plan` text DEFAULT NULL,
  `nombre_magasins` int(11) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `centreseducation`
--

CREATE TABLE `centreseducation` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `nombre_salles` int(11) DEFAULT NULL,
  `capacite_etudiants` int(11) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `centresindustriels`
--

CREATE TABLE `centresindustriels` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `nombre_entrepots` int(11) DEFAULT NULL,
  `capacite_production` decimal(10,2) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `centresloisirs`
--

CREATE TABLE `centresloisirs` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `nombre_salles` int(11) DEFAULT NULL,
  `capacite_visiteurs` int(11) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `centresmedicaux`
--

CREATE TABLE `centresmedicaux` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `nombre_salles_consultation` int(11) DEFAULT NULL,
  `capacite_patients` int(11) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id` int(11) NOT NULL,
  `texte` text DEFAULT NULL,
  `id_utilisateur` int(11) DEFAULT NULL,
  `id_bien_immobilier` int(11) DEFAULT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `duplex`
--

CREATE TABLE `duplex` (
  `id` int(11) NOT NULL,
  `id_bien_immobilier` int(11) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `montant_gros_oeuvres` decimal(10,2) DEFAULT NULL,
  `montant_finition` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `superficie_batie` decimal(10,2) DEFAULT NULL,
  `nombre_chambres` int(11) DEFAULT NULL,
  `nombre_parking` int(11) DEFAULT NULL,
  `piscine` tinyint(1) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `fondsdecommerce`
--

CREATE TABLE `fondsdecommerce` (
  `id` int(11) NOT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `surface` decimal(10,2) DEFAULT NULL,
  `prix_metre_carre` decimal(10,2) DEFAULT NULL,
  `prix_total` decimal(10,2) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `plan` text DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `id_bien_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `surface` decimal(10,2) DEFAULT NULL,
  `prix_metre_carre` decimal(10,2) DEFAULT NULL,
  `prix_total` decimal(10,2) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `plan` text DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `hotelsprojet`
--

CREATE TABLE `hotelsprojet` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `nombre_chambres` int(11) DEFAULT NULL,
  `nombre_etages` int(11) DEFAULT NULL,
  `piscine` tinyint(1) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `immeubles`
--

CREATE TABLE `immeubles` (
  `id` int(11) NOT NULL,
  `id_bien_immobilier` int(11) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `montant_gros_oeuvres` decimal(10,2) DEFAULT NULL,
  `montant_finition` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `superficie_batie` decimal(10,2) DEFAULT NULL,
  `nombre_chambres` int(11) DEFAULT NULL,
  `nombre_parking` int(11) DEFAULT NULL,
  `nombre_etages` int(11) DEFAULT NULL,
  `terrasse` tinyint(1) DEFAULT NULL,
  `piscine` tinyint(1) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `immeubles`
--

INSERT INTO `immeubles` (`id`, `id_bien_immobilier`, `prix`, `superficie_terrain`, `montant_gros_oeuvres`, `montant_finition`, `image_descriptif`, `galerie`, `superficie_batie`, `nombre_chambres`, `nombre_parking`, `nombre_etages`, `terrasse`, `piscine`, `etat`, `numero_reference`) VALUES
(3, NULL, 1000000.00, 1200.00, 200000.00, 300000.00, 'chemin/vers/image_descriptif.jpg', 'chemin/vers/galerie', 800.00, 8, 4, 5, 1, 1, 'a_vendre', NULL),
(4, 1, 1000000.00, 1200.00, 200000.00, 300000.00, 'chemin/vers/image_descriptif.jpg', 'chemin/vers/galerie', 800.00, 8, 4, 5, 1, 1, 'a_vendre', NULL),
(6, 1, 1000000.00, 1200.00, 200000.00, 300000.00, 'chemin/vers/image_descriptif.jpg', 'chemin/vers/galerie', 800.00, 8, 4, 5, 1, 1, 'a_vendre', 'IMV001');

-- --------------------------------------------------------

--
-- Structure de la table `immeubleslocatifs`
--

CREATE TABLE `immeubleslocatifs` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `montant_gros_oeuvres` decimal(10,2) DEFAULT NULL,
  `montant_finition` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `superficie_batie` decimal(10,2) DEFAULT NULL,
  `nombre_chambres` int(11) DEFAULT NULL,
  `nombre_parking` int(11) DEFAULT NULL,
  `nombre_etages` int(11) DEFAULT NULL,
  `terrasse` tinyint(1) DEFAULT NULL,
  `piscine` tinyint(1) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `internautes`
--

CREATE TABLE `internautes` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `adresse_email` varchar(100) DEFAULT NULL,
  `numero_telephone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `logements`
--

CREATE TABLE `logements` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `superficie_batie` decimal(10,2) DEFAULT NULL,
  `nombre_chambres` int(11) DEFAULT NULL,
  `nombre_parking` int(11) DEFAULT NULL,
  `piscine` tinyint(1) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `lotissements`
--

CREATE TABLE `lotissements` (
  `id` int(11) NOT NULL,
  `id_projet_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `nombre_lots` int(11) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `texte` text DEFAULT NULL,
  `id_utilisateur` int(11) DEFAULT NULL,
  `destinataire` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `projetsimmobiliers`
--

CREATE TABLE `projetsimmobiliers` (
  `id` int(11) NOT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `date_publication` date DEFAULT NULL,
  `periode_retour_investissement` int(11) DEFAULT NULL,
  `prix_total_realisation` decimal(10,2) DEFAULT NULL,
  `resultat_exploitation_annuelle_estime` decimal(10,2) DEFAULT NULL,
  `croissance_estimee_du_capital` decimal(10,2) DEFAULT NULL,
  `accroissement_total_investissement` decimal(10,2) DEFAULT NULL,
  `surface_terrain` decimal(10,2) DEFAULT NULL,
  `surface_batie` decimal(10,2) DEFAULT NULL,
  `jauge_progression_capital_global` int(11) DEFAULT NULL,
  `type_projet` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `terrains`
--

CREATE TABLE `terrains` (
  `id` int(11) NOT NULL,
  `id_bien_immobilier` int(11) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `disponibilite_titre_foncier` varchar(50) DEFAULT NULL,
  `disponibilite_certificat_propriete` varchar(50) DEFAULT NULL,
  `coordonnees_geographiques` varchar(255) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie` decimal(10,2) DEFAULT NULL,
  `localisation` varchar(255) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `terrains`
--

INSERT INTO `terrains` (`id`, `id_bien_immobilier`, `libelle`, `image_descriptif`, `galerie`, `disponibilite_titre_foncier`, `disponibilite_certificat_propriete`, `coordonnees_geographiques`, `prix`, `superficie`, `localisation`, `etat`, `numero_reference`) VALUES
(1, 1, '1', 'url_image_descriptif', 'url_galerie', 'disponible', 'disponible', '12.345,67.890', 50000.00, 1000.00, 'Emplacement du terrain', 'a_vendre', NULL),
(2, 1, '1', 'url_image_descriptif', 'url_galerie', 'disponible', 'disponible', '12.345,67.890', 50000.00, 1000.00, 'Emplacement du terrain', 'a_vendre', NULL),
(3, 1, NULL, 'url_image_descriptif', 'url_galerie', 'disponible', 'disponible', '12.345,67.890', 50000.00, 1000.00, 'Emplacement du terrain', 'a_vendre', NULL),
(4, NULL, 'Terrain à vendre', 'url_image_descriptif', 'url_galerie', 'disponible', 'disponible', '12.345,67.890', 50000.00, 1000.00, 'Emplacement du terrain', 'a_vendre', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `utilisateur_id` int(11) DEFAULT NULL,
  `bien_immobilier_id` int(11) DEFAULT NULL,
  `montant` decimal(10,2) DEFAULT NULL,
  `date_transaction` date DEFAULT NULL,
  `statut` varchar(50) DEFAULT NULL,
  `reference_transaction` varchar(100) DEFAULT NULL,
  `justificatif_paiement` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `mot_de_passe` varchar(255) DEFAULT NULL,
  `adresse_email` varchar(100) DEFAULT NULL,
  `numero_telephone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `mot_de_passe`, `adresse_email`, `numero_telephone`) VALUES
(1, 'ngueda', 'patrick', 'efficace@2024', 'patrickngueda@gmail.com', '678233815'),
(2, 'efficace ', 'sa', 'efficace2023', 'efficaceinnnovation@gmail.com', '693220218');

-- --------------------------------------------------------

--
-- Structure de la table `villas`
--

CREATE TABLE `villas` (
  `id` int(11) NOT NULL,
  `id_bien_immobilier` int(11) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `superficie_terrain` decimal(10,2) DEFAULT NULL,
  `image_descriptif` text DEFAULT NULL,
  `galerie` text DEFAULT NULL,
  `superficie_batie` decimal(10,2) DEFAULT NULL,
  `nombre_chambres` int(11) DEFAULT NULL,
  `nombre_parking` int(11) DEFAULT NULL,
  `piscine` tinyint(1) DEFAULT NULL,
  `prix_hors_terrain` decimal(10,2) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `numero_reference` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `villas`
--

INSERT INTO `villas` (`id`, `id_bien_immobilier`, `prix`, `superficie_terrain`, `image_descriptif`, `galerie`, `superficie_batie`, `nombre_chambres`, `nombre_parking`, `piscine`, `prix_hors_terrain`, `etat`, `numero_reference`) VALUES
(1, 1, 500000.00, 800.00, 'chemin/vers/image_descriptif.jpg', 'chemin/vers/galerie', 300.00, 4, 2, 1, 450000.00, 'a_vendre', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `administrateurs`
--
ALTER TABLE `administrateurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `appartementsmeubles`
--
ALTER TABLE `appartementsmeubles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `biensimmobiliers`
--
ALTER TABLE `biensimmobiliers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `utilisateur_id` (`utilisateur_id`);

--
-- Index pour la table `boutiques`
--
ALTER TABLE `boutiques`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bien_immobilier` (`id_bien_immobilier`);

--
-- Index pour la table `bureaux`
--
ALTER TABLE `bureaux`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bien_immobilier` (`id_bien_immobilier`);

--
-- Index pour la table `centrescommerciaux`
--
ALTER TABLE `centrescommerciaux`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `centreseducation`
--
ALTER TABLE `centreseducation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `centresindustriels`
--
ALTER TABLE `centresindustriels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `centresloisirs`
--
ALTER TABLE `centresloisirs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `centresmedicaux`
--
ALTER TABLE `centresmedicaux`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utilisateur` (`id_utilisateur`),
  ADD KEY `id_bien_immobilier` (`id_bien_immobilier`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `duplex`
--
ALTER TABLE `duplex`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bien_immobilier` (`id_bien_immobilier`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `fondsdecommerce`
--
ALTER TABLE `fondsdecommerce`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bien_immobilier` (`id_bien_immobilier`);

--
-- Index pour la table `hotelsprojet`
--
ALTER TABLE `hotelsprojet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `immeubles`
--
ALTER TABLE `immeubles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bien_immobilier` (`id_bien_immobilier`);

--
-- Index pour la table `immeubleslocatifs`
--
ALTER TABLE `immeubleslocatifs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `internautes`
--
ALTER TABLE `internautes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `logements`
--
ALTER TABLE `logements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `lotissements`
--
ALTER TABLE `lotissements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_projet_immobilier` (`id_projet_immobilier`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `projetsimmobiliers`
--
ALTER TABLE `projetsimmobiliers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `terrains`
--
ALTER TABLE `terrains`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bien_immobilier` (`id_bien_immobilier`);

--
-- Index pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `utilisateur_id` (`utilisateur_id`),
  ADD KEY `bien_immobilier_id` (`bien_immobilier_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `villas`
--
ALTER TABLE `villas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bien_immobilier` (`id_bien_immobilier`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `appartementsmeubles`
--
ALTER TABLE `appartementsmeubles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `biensimmobiliers`
--
ALTER TABLE `biensimmobiliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `boutiques`
--
ALTER TABLE `boutiques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `bureaux`
--
ALTER TABLE `bureaux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `centrescommerciaux`
--
ALTER TABLE `centrescommerciaux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `centreseducation`
--
ALTER TABLE `centreseducation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `centresindustriels`
--
ALTER TABLE `centresindustriels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `centresloisirs`
--
ALTER TABLE `centresloisirs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `centresmedicaux`
--
ALTER TABLE `centresmedicaux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `duplex`
--
ALTER TABLE `duplex`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `fondsdecommerce`
--
ALTER TABLE `fondsdecommerce`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `hotelsprojet`
--
ALTER TABLE `hotelsprojet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `immeubles`
--
ALTER TABLE `immeubles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `immeubleslocatifs`
--
ALTER TABLE `immeubleslocatifs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `internautes`
--
ALTER TABLE `internautes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `logements`
--
ALTER TABLE `logements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `lotissements`
--
ALTER TABLE `lotissements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `projetsimmobiliers`
--
ALTER TABLE `projetsimmobiliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `terrains`
--
ALTER TABLE `terrains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `villas`
--
ALTER TABLE `villas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `administrateurs`
--
ALTER TABLE `administrateurs`
  ADD CONSTRAINT `administrateurs_ibfk_1` FOREIGN KEY (`id`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `appartementsmeubles`
--
ALTER TABLE `appartementsmeubles`
  ADD CONSTRAINT `appartementsmeubles_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `biensimmobiliers`
--
ALTER TABLE `biensimmobiliers`
  ADD CONSTRAINT `biensimmobiliers_ibfk_1` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `boutiques`
--
ALTER TABLE `boutiques`
  ADD CONSTRAINT `boutiques_ibfk_1` FOREIGN KEY (`id_bien_immobilier`) REFERENCES `biensimmobiliers` (`id`);

--
-- Contraintes pour la table `bureaux`
--
ALTER TABLE `bureaux`
  ADD CONSTRAINT `bureaux_ibfk_1` FOREIGN KEY (`id_bien_immobilier`) REFERENCES `biensimmobiliers` (`id`);

--
-- Contraintes pour la table `centrescommerciaux`
--
ALTER TABLE `centrescommerciaux`
  ADD CONSTRAINT `centrescommerciaux_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `centreseducation`
--
ALTER TABLE `centreseducation`
  ADD CONSTRAINT `centreseducation_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `centresindustriels`
--
ALTER TABLE `centresindustriels`
  ADD CONSTRAINT `centresindustriels_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `centresloisirs`
--
ALTER TABLE `centresloisirs`
  ADD CONSTRAINT `centresloisirs_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `centresmedicaux`
--
ALTER TABLE `centresmedicaux`
  ADD CONSTRAINT `centresmedicaux_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`id`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `commentaires_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`),
  ADD CONSTRAINT `commentaires_ibfk_2` FOREIGN KEY (`id_bien_immobilier`) REFERENCES `biensimmobiliers` (`id`),
  ADD CONSTRAINT `commentaires_ibfk_3` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `duplex`
--
ALTER TABLE `duplex`
  ADD CONSTRAINT `duplex_ibfk_1` FOREIGN KEY (`id_bien_immobilier`) REFERENCES `biensimmobiliers` (`id`);

--
-- Contraintes pour la table `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`id_bien_immobilier`) REFERENCES `biensimmobiliers` (`id`);

--
-- Contraintes pour la table `hotelsprojet`
--
ALTER TABLE `hotelsprojet`
  ADD CONSTRAINT `hotelsprojet_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `immeubles`
--
ALTER TABLE `immeubles`
  ADD CONSTRAINT `immeubles_ibfk_1` FOREIGN KEY (`id_bien_immobilier`) REFERENCES `biensimmobiliers` (`id`);

--
-- Contraintes pour la table `immeubleslocatifs`
--
ALTER TABLE `immeubleslocatifs`
  ADD CONSTRAINT `immeubleslocatifs_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `logements`
--
ALTER TABLE `logements`
  ADD CONSTRAINT `logements_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `lotissements`
--
ALTER TABLE `lotissements`
  ADD CONSTRAINT `lotissements_ibfk_1` FOREIGN KEY (`id_projet_immobilier`) REFERENCES `projetsimmobiliers` (`id`);

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `terrains`
--
ALTER TABLE `terrains`
  ADD CONSTRAINT `terrains_ibfk_1` FOREIGN KEY (`id_bien_immobilier`) REFERENCES `biensimmobiliers` (`id`);

--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs` (`id`),
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`bien_immobilier_id`) REFERENCES `biensimmobiliers` (`id`);

--
-- Contraintes pour la table `villas`
--
ALTER TABLE `villas`
  ADD CONSTRAINT `villas_ibfk_1` FOREIGN KEY (`id_bien_immobilier`) REFERENCES `biensimmobiliers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
