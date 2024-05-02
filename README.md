# Exemple d'Authentification JWT

Ce projet illustre un exemple simple d'authentification basée sur JWT utilisant Node.js et Express. Il inclut un serveur et un client pour générer et valider les tokens JWT.

## Prise en Main

### Pré-requis
Assurez-vous d'avoir les éléments suivants installés :
- Node.js (version 14 ou supérieure)
- npm (Node Package Manager)

### Installation
1. **Cloner le Dépôt**
   ```bash
   git clone <url_du_dépôt>
   cd <répertoire_du_dépôt>
   ```

2. **Installer les Dépendances**
   ```bash
   npm install
   npm install cors body-parser dotenv jsonwebtoken
   ```

3. **Configurer les Variables d'Environnement**
   Créez un fichier `.env` à la racine du projet avec le contenu suivant :
   ```plaintext
   PORT=5000
   PASSWORD=monmotdepasse
   ```

4. **Démarrer le Serveur**
   ```bash
   node index.js
   ```

5. **Servir le Client**
   Créez un dossier nommé `public` et placez le fichier `index.html` à l'intérieur. Utilisez n'importe quel serveur web pour servir le dossier :
   - Option 1 : En utilisant le paquet `http-server` (installez-le globalement s'il n'est pas déjà installé)
     ```bash
     npm install -g http-server
     http-server public
     ```
   - Option 2 : En utilisant un serveur statique intégré aux IDEs tels que Visual Studio Code (extension Live Server) ou les IDEs JetBrains.

## Utilisation
1. **Générer un Token JWT**
   - Entrez votre nom d'utilisateur et mot de passe dans le formulaire et cliquez sur "Generate Token".
   - Vous devriez voir un token JWT généré dans une alerte et il sera stocké dans le stockage de session du navigateur.

2. **Valider le Token JWT**
   - Cliquez sur "Validate Token" pour valider le token généré.
   - Vous devriez voir un message indiquant si la validation a réussi ou non.

3. **Effacer le Token JWT**
   - Cliquez sur "Clear Token" pour supprimer le token du stockage de session du navigateur.

## Points de Terminaison
### Générer un Token JWT
- **Point de terminaison :** `/user/generateToken`
- **Méthode :** `POST`
- **Corps de la Requête :**
  ```json
  {
    "username": "<votre_nom_d_utilisateur>",
    "password": "<votre_mot_de_passe>"
  }
  ```
- **Réponse :**
  - `200 OK`: Le token est généré et renvoyé.
  - `401 Unauthorized`: Identifiants incorrects.

### Valider le Token JWT
- **Point de terminaison :** `/user/validateToken`
- **Méthode :** `GET`
- **En-têtes :**
  - `EMAIL`: `<token_généré>`
- **Réponse :**
  - `200 OK`: Le token est correctement vérifié.
  - `401 Unauthorized`: Token invalide ou pas de token fourni.
```

Ce `README.md` explique en détail comment installer, configurer, et utiliser le projet.
