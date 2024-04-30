**Rock Paper Scissors Web UI**
This is the frontend application for the Rock Paper Scissors game.

Installation Docker

You can build and run the Docker container for this application. Ensure you have Docker installed on your machine.

Clone this repository to your local machine:
git clone https://github.com/MNJUYDV/rock-paper-scissors-web-ui.git

Navigate to the project directory:
cd rock-paper-scissors-web-ui

create a .env file at the root project and copy these URLs
REACT_APP_FETCH_LEADERBOARD_URL=http://127.0.0.1:5000/api/v1/players-stats
REACT_APP_CREATE_LEADERBOARD_URL=http://127.0.0.1:5000/api/v1/leaderboard
REACT_APP_START_GAME_URL=http://127.0.0.1:5000/api/v1/start-game
NODE_ENV=development

**Build the Docker image:**
docker build -t rock-paper-scissors-web-ui .

Run the Docker container:
docker run -p 3000:3000 rock-paper-scissors-web-ui

Access the application in your web browser at http://localhost:3000.

NPM
Alternatively, you can run the application using npm.

Clone this repository to your local machine:
git clone https://github.com/MNJUYDV/rock-paper-scissors-web-ui.git

Navigate to the project directory:
cd rock-paper-scissors-web-ui

Install dependencies:
npm install

Start the development server:
npm start

Access the application in your web browser at http://localhost:3000.