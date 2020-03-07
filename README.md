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
1. `Clone/Download` the repository by typing `git clone https://github.com/Vitomilix/kirex.git` or download `KirEx` from `https://github.com/Vitomilix/kirex/archive/1.0.4.zip` and extract it
2. Navigate to the `folder/repository`
3. Create a `mysql Database` called `kirex` and run the sql script included in the `db/sql-scripts` folder called `CreateTables.sql` by typing `mysql -u <YOURMYSQLUSERNAME> -p < CreateTables.sql`
It will ask you for your `MYSQL Password` 
4. run `./setup.sh`


## Usage  

Access the User Portal on `<YOURHOSTNAME>:3000`
Access the Admin Portal on `<YOURHOSTNAME>:3001`

## Notes
To stop KirEx run `./stop.sh`
To start KirEx run `./start.sh`