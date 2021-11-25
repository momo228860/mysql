import pymysql, json, configparser, os, datetime

path = os.path.abspath('.')
cfgpath = path.split('Capstone')[0] + 'Capstone/config.ini'

config = configparser.ConfigParser()
config.read(cfgpath)


mysql = pymysql.connect(user = config['MYSQL']["user"], password = config['MYSQL']["Password"], port = int(config["MYSQL"]["port"]), host = config['MYSQL']["host"])
cur = mysql.cursor()
cur.execute('''CREATE DATABASE Capstone;''')

cur.execute('''CREATE TABLE IF NOT EXISTS Capstone.Information (
                Account CHAR(50) NOT NULL PRIMARY KEY,
                Nick_name CHAR(50),
                Email CHAR(50),
                Password CHAR(50),
                Picture_path VARCHAR(1000)
                )ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;''')
mysql.commit()

cur.close()




