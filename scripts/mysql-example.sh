#Get the image from repository
docker pull mysql

#List the images
docker images

#Run a mysql container
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=iwannadocker -d mysql

#List running containers
docker ps

#Run mysql CLI linked to mysql container
docker run -it --link some-mysql:mysql --rm mysql sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'

#Run inside the mysql container
#create database db1; use db1; create table tb1 (id int);
#insert into tb1 values (123);
#select * from tb1;
#exit

#Stop mysql container
docker stop some-mysql

#Remove mysql container
docker rm some-mysql

#Remove mysql image
docker rmi mysql
