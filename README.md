# CurrencyBobsBananaBudget
Bob's Banana Budget Tool to check the total cost of the bananas Bob buys. This application contains a REST API to calculate the total cost based on the number of days and start date that is inputted. Redis is implemented into this application for fast and convenient caching.

# How To Use
- This application uses Redis as a cache to save data. Please have Redis installed and its server running for this application to work. 
    - Installation:
        - For MacOS users - download Redis and follow the instructions here: https://redis.io/download

        -For Windows users - download the Windows version of Redis and follow the instructions here: https://github.com/MicrosoftArchive/redis/releases

- Fork and Clone this Repository
- Open project directory
````sh
cd CurrencyBobsBananaBudget
````
- Install necessary dependencies
````sh
npm install
````

- Run build and run start to start application
````sh
npm run build 
npm start
````

- Go to localhost:3000
- Input a starting date and the number of days
- Click "Calculate Total"
- The total cost of the bananas should now be displayed

