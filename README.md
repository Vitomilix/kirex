# KIREX 
---
## What is it

KirEx is a new Approach to Risk management which eliminates the need for Forms and also provides more oversight.

## Features

- [x] Logging of Risk assessments

- [x] Logging of safety related incidents

- [x] Each submission is tied to a user.

- [x] Admins see trends over the course of a year to track amount of submissions

- [x] Submissions can be filtered and viewed

- [x] Submissions (and filtered results) can be exported to `Excel` format

## Setup 
### Node.js
1. `Clone/Download` the repository by typing `git clone https://github.com/Vitomilix/kirex.git`<sup>1</sup> or download `KirEx` from `https://github.com/Vitomilix/kirex/archive/1.0.5.zip` and extract it **(Not Recommended)**
2. Navigate to the `folder/repository` 
3. run `./setup.sh`

### Docker
1. Install `Docker`
2. Navigate to the `Docker` folder 
3. Run the command `docker-compose up` 
4. When completed `press `ctrl-C` to stop all containers
5. Run `docker-compose start`
## Usage  

Access the User Portal on `<YOURHOSTNAME>:3000`

Access the Admin Portal on `<YOURHOSTNAME>:3001`

## Notes
To stop KirEx run `./stop.sh`

To start KirEx run `./start.sh`

To update KirEx run `./update.sh`


## Future Versions

- Desktop App
- Updated User Login and Registration
- New Email api


<sup>1</sup> Will make future updates easier and Git should be installed on `Ubuntu` by default 