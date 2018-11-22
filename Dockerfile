# ARG  NODE_VERSION=alpine
# FROM node:${NODE_VERSION}

# ADD ["package.json", "package-lock.json" , "/sources/"]
# WORKDIR /sources
# RUN npm ci

# ADD ./ /sources

# EXPOSE 8081

# CMD ["npm", "run", "start"]

ARG  NODE_VERSION=alpine
FROM node:${NODE_VERSION}

# install dependencies
WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /opt/app

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
EXPOSE 8080

CMD [ "npm", "run", "start" ]