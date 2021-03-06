# SETUP

                                                  
echo -e "\e[1;32m _|    _|  _|_|_|  _|_|_|    _|_|_|_|  _|      _| \e[0m" 
echo -e "\e[1;32m _|  _|      _|    _|    _|  _|          _|  _|   \e[0m" 
echo -e "\e[1;32m _|_|        _|    _|_|_|    _|_|_|        _|     \e[0m" 
echo -e "\e[1;32m _|  _|      _|    _|    _|  _|          _|  _|    \e[0m"
echo -e "\e[1;32m _|    _|  _|_|_|  _|    _|  _|_|_|_|  _|      _| \e[0m"




echo Welcome to KirEx 1.0.6

echo -e "\e[1;31m Copyright © Vitomilix 2020 All rights reserved\e[0m" 

echo Simply Answer the prompts on the screen to get KirEx Running



echo getting things ready...
echo Enter the hostname/ip address of your Server \(eg. localhost\)
read hostname
echo Enter the username of your Database
read dbusername

echo Enter the password of your Database
read -s dbpassword

echo Creating Database 
mysql -u$dbusername -p$dbpassword < db/sql-scripts/CreateDB.sql
mysql -u$dbusername -p$dbpassword < db/sql-scripts/CreateTables.sql

# create .env

[ -e user/.env ] && rm user/.env

echo SENDGRID_KEY=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 > user/.env
echo MYSQL_HOST=localhost >> user/.env
echo MYSQL_PORT=3306 >> user/.env
echo MYSQL_USER=$dbusername >> user/.env
echo MYSQL_PASSWORD=$dbpassword >> user/.env
echo MYSQL_DATABASE=kirex >> user/.env
echo HOSTNAME=$hostname >> user/.env
echo SENDGRID_USERNAME=vitomilix-kirex-mintek1 >> user/.env

[ -e admin/.env ] && rm admin/.env

echo SENDGRID_KEY=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 > admin/.env
echo MYSQL_HOST=localhost >> admin/.env
echo MYSQL_PORT=3306 >> admin/.env
echo MYSQL_USER=$dbusername >> admin/.env
echo MYSQL_PASSWORD=$dbpassword >> admin/.env
echo MYSQL_DATABASE=kirex >> admin/.env
echo HOSTNAME=$hostname >> admin/.env
echo SENDGRID_USERNAME=vitomilix-kirex-mintek1 >> admin/.env



echo setting repository
npm config set registry http://registry.npmjs.org/
npm install -g pm2
echo setting up user
cd user
npm install
pm2 start --name kirex-user app.js
echo setting up admin
cd ..
cd admin 
npm install
cd views/
sed -i "s/localhost/$hostname/g" incidents.handlebars
cd ..
pm2 start --name kirex-admin app.js

cd 
pm2 startup systemd -u root --hp /root
pm2 save

echo -e "\e[1;32m Setup Completed \e[0m"
echo Access User Interface on $hostname:3000  
echo Access Admin Interface on $hostname:3001