docker-compose down
sudo rm -rf ./ihood-bbdd/mysql_data
mkdir ./ihood-bbdd/mysql_data
docker-compose build && docker-compose up