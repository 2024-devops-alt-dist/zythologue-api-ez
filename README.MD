# API Zythologue

## Contexte du projet

Après la mise en place de notre base de données pleine d'infos sur les bières artisanales, il est temps de s'attaquer à la prochaine étape : le développement de l'API.

On vise à créer une API REST, à la fois simple et performante, qui va nous permettre de manipuler les informations sur les bières avec des opérations de base comme créer, lire, mettre à jour, et supprimer (les fameuses opérations CRUD). Cette API sera le pilier central de l'application mobile en devenir, offrant un accès facile à une large collection de bières et rendant l'expérience utilisateur encore plus riche.

**En utilisant la base de données créée selon les spécifications du brief précédent**, cette API permettra de naviguer à travers un univers de bières artisanales venues des quatre coins du monde, de les partager et de découvrir de nouvelles saveurs.

## Installation

### 1. Cloner le projet

Clonez ce repository sur votre machine locale en utilisant Git : `git clone https://github.com/2024-devops-alt-dist/zythologue-api-ez.git`

### 2. Configurez la base de données PostgreSQL

La base de données PostgreSQL sera lancée via le [Docker Compose](docker-compose.yml). Assurez-vous que vous avez configuré votre fichier `.env` pour correspondre à votre base de données :

#### Exemple de fichier `.env` :

```
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=my_database
DB_PORT=2000
```

### 3. Démarrez le projet avec Docker

Pour la base de données, exécutez la commande suivante pour démarrer le service PostgreSQL : `docker-compose up --build -d`

Cette commande va également installer automatiquement les dépendances et remplir les données de la bdd grâce au fichier [init.sql](src/db/init.sql).

### 4. Exécutez le serveur

Démarrez le serveur Express :

`npm run dev`

Le serveur devrait maintenant être accessible sur http://localhost:3000.


# Tester l'API 

## Avec l'interface de Swagger

Vous pouvez accéder à Swagger en suivant le lien : http://localhost:3000/api-docs/ et ensuite tester les différentes routes disponibles.

## Avec Postman

### 1. Beers :
- **Lire**: GET http://localhost:3000/api/v1/beers
- **Détails**: GET http://localhost:3000/api/v1/beers/{id}
- **Créer**: POST http://localhost:3000/api/v1/beers
  ```
  {
    "name": "Lager",
    "description": "A refreshing lager beer",
    "abv": 4.5,
    "organic": true,
    "id_category": 1,
    "id_brewery": 2
  }
  ```
- **Mettre à jour**: PUT http://localhost:3000/api/v1/beers/{id}
  ```
  {
    "name": "Updated Lager",
    "abv": 5.0
  }
  ```
- **Supprimer**: DELETE http://localhost:3000/api/v1/beers/{id}

### 2. Breweries :
- **Lire**: GET http://localhost:3000/api/v1/breweries
- **Détails**: GET http://localhost:3000/api/v1/breweries/{id}
- **Créer**: POST http://localhost:3000/api/v1/breweries
  ```
  {
    "name": "Clair de Lune Brewery",
    "country": "France",
    "description": "A family-owned brewery producing artisanal beers."
  }
  ```
- **Mettre à jour**: PUT http://localhost:3000/api/v1/breweries/{id}
  ```
  {
    "name": "Updated Clair de Lune Brewery",
    "description": "Now producing award-winning craft beers."
  }
  ```
- **Supprimer**: DELETE http://localhost:3000/api/v1/breweries/{id}