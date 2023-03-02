# TFM-SLH23
TFM SLH 2023
## SETUP
### SLHApp

First go to SLHApp folder and install the project. Make sure you have angular cli installed.
````
cd SLHApp
npm install -g @angular/cli
````
Then run:
````
npm install
ng build
````
And try to make the server up: 
```
ng server -o
```
NOTE: 
If you have some errors about memory, you should change the budget in the angular.json file and rise it to 
2Mb or whatever is needed.

Once everything is alright you should see the localhost port where the app is running.

### SLHAuth
Secondly, we need to make sure the server database is running. We need to install the packages.
````
cd SLHAuth-Server
npm install
````
And then we can up the server: 
````
npm run dev
````
It should give a message like "BD conectada OK"

IMPORTANT: connection to mongo db is in cloud, you should get your IP whitelisted before using it (website).
