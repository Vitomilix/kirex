# Add Covid 19 fields to KirEx

## Update DB Schema
1. On the server where KirEx is installed, navigate to the `kirex` folder
2. Run the command `git fetch`
3. Run the command `git pull` 
4. Navigate to the `db/sql-scripts` folder 
5. Run the command `mysql -u<your user> -p<your password> < addCovidTables.sql` and let it complete
6. Go back to the top directory of KirEx
7. Run the script `./update.sh`
Enjoy
