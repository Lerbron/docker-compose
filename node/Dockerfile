FROM node
RUN yarn global add pm2
WORKDIR /home/Service
COPY . .
EXPOSE 3000
CMD ["pm2-docker", "pm2.json"]