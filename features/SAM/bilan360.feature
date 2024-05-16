Feature: Création de bilans 360

    Background:
        Given que l'utilisateur est sur l'application "SAM" avec la langue "FR"

    Scenario: Connexion 
        When l'utilisateur "9ZA" se connecte
        Then l'utilisateur se trouve sur la page d'accueil, onglet compteurs


    Scenario: Commencement d'un bilan 360
        Given l'utilisateur "9ZA" se connecte
        When l'utilisateur recherche le client avec un id
        Then verifier que le nom du client s'affiche
        When  l'utilisateur clique sur le nom du client
        And clique sur le bouton pour démarrer un bilan 360
        Then la page client est affichée