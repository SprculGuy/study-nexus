# Install Mysql from web
# Choose: Developer(default)
# Choose: Standalone MySQL server/Classic MySQL application
# Choose: Leagacy Authentication
# give username(defaultly root) & password
# At last, to connect to the server use username and password and verify the connection
# You can either use shell, MySQL workbence, Python to run queries of MySQL

# to run MySQL queries using python, we need to use a library/package named mysql
import mysql.connector

mydatabase = mysql.connector.connect(host="localhost", user="username",passwd="password" )
mycursor = mydatabase.cursor()          # Gives access to all the names of databases from the machine
mycursor.execute("show databases")      # execute is the module to run all the MySQL queries

mydatabase = mysql.connector.connect(host="localhost", user="username",passwd="password", database="Database_Name")         #>create database Database_Name;
mycursor = mydatabase.cursor()          
mycursor.execute("select * from TableName")      
content = mycursor.fetchone()
content = mycursor.fetchall()
