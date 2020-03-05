# KIREX 
---
## What is it

KirEx is a new Approach to Risk management which eliminates the need for Forms and also provides more oversight.

## Features

[x] Logging of Risk assessments
[x] Logging of safety related incidents
[x] Each submission is tied to a user.
[x] Admins see trends over the course of a year to track amount of submissions
[x] Submissions can be filtered and viewed
[x] Submissions (and filtered results) can be exported to `Excel` format

## Setup 
### Docker
1. Install `Docker`
2. Navigate to the `Docker` folder 
3. Run the command `docker-compose up` 
4. When completed `press `ctrl-C` to stop all containers
5. Run `docker-compose start`
### Node.js
1. `Clone/Download` the repository by typing `git clone https://github.com/Vitomilix/kirex.git` or download `KirEx` from `https://github.com/Vitomilix/kirex/archive/1.0.0.zip`
2. Navigate to the `folder/repository`
3. Create a `mysql Database` called `kirex` and run the sql script included in the `db/sql-scripts` folder called `CreateDB.sql` by typing `mysql -u <YOURMYSQLUSERNAME> -p <CreateDB.sql>
It will ask you for your `MYSQL Password` 
5. In the `user/app.js` file change the MySql Config in lines `14-19` with your config
6.  In the `user/config/config.json` file change the MySql Config in lines `1-8` with your config
7.  In the `admin/app.js` file change the MySql Config in lines `15-20` with your config
8.  In the `admin/config/config.json` file change the MySql Config in lines `1-8` with your config
9. In the `user/controllers/user.js` file, change the **`localhost`** in lines `77` and `143` to your hostname /ip address
10. In the `admin/controllers/admin.js` file, change the **`localhost`** in lines `78` and `146` to your hostname /ip address
11. in the `admin/views/incidents.handlebars` file on line `247` change the **`localhost`** to your hostname /ip address

12. run the command `chmod +x setup.sh`
13. run `./setup.sh`

## Usage  

Access the User Portal on `<YOURHOSTNAME>:3000`
Access the Admin Portal on `<YOURHOSTNAME>:3001`