# SETUP
echo setting repository
npm config set registry http://registry.npmjs.org/
echo setting up user
cd user
npm install
node app.js &
echo setting up admin
cd ..
cd admin 
npm install
node app.js &
echo Access User Interface on localhost:3000 \n and Admin Interface on localhost:3001
cd ..