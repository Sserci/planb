PLAN B

About the project:
Plan B is a web appliacation designed to create and participate to events in order to meet new people.

Pre-requires :

- Mysql
- NodeJs
- Sequelize

Initialisation :
git clone git@github.com:EpitechIT2020/C-COD-260-MAR-2-3-ecp-chrystal.tiran.git

Server (/server) :
Change the MySQL credentials in the config/config.json file by yours
Run the following commands :

- npm install //(It will install all the dependencies)
- npx sequelize db:create //(database creation)
- npx sequelize-mig migration:add -n runmigrations // (create the migration files)
- npx sequelize-cli db:migrate // (create table & associations in the database)
- npm start // (start the server)

Client (/client) :
Run the following commands :

- yarn install //(It will install all the dependencies)
- yarn start // (start the server)

Admin (/admin) :
Run the following commands :

- yarn install //(It will install all the dependencies)
- yarn start // (start the server)

Usefull Command :

- Pour ajouter un model, il faut le créer à la main directement, ne pas utiliser la commande sequelize create car ça créer des conflits sur les migrations auto
  ####Modification d'un model avec sa migration ###

Security
If you notice any security issues, please contact us.

Contact
Plan B has been developped by Adrien Caillères, Benoit Berlanger, Magda hennebo Chrystal Tiran & Serge Serci.
Contact us at planbcontact@gmail.com
