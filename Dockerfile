FROM node

# Create app directory
WORKDIR /app
ADD . /app/

RUN npm install

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "dev" ]