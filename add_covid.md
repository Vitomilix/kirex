# Add Covid 19 fields to KirEx

## Update DB Schema

1. Navigate to the `db/sql-scripts` folder 
2. Run the command `mysql -u<your user> -p<your password> < addCovidTables.sql` and let it complete
3. Go back to the top directory of KirEx
4. Run the script `./update.sh`
Enjoy