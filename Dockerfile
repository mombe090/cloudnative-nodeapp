#La directive from telecharge une
#image sur le dockerhub ici node
FROM node:12.18.3-alpine3.9

#Cette directive permet de
#mettre des infos sur la personne
#ou la societe qui maintient l'image
MAINTAINER yayamombe090@gmail.com

#WORDIR creer un dossier app a partir
#de la racine principal du conteneur
WORKDIR /app

#COPY comme son nom l'indiqu
#il copy des donnees de l'ordinateur
#physique dans le conteneur
COPY package.json .

#RUN permet d'executer une commande
#linux dans le conteneur
RUN yarn

COPY . .

#Permet d'ouvrir le port
#sur lequel notre serveur web ecoute
EXPOSE 3000

#CMD c'est la commande qui sera exec
#lorsque le conteneur vas monte
CMD ["yarn", "start"]
