FROM node:alpine

COPY . .
RUN npm ci
RUN npx update-browserslist-db@latest
CMD ["npm","start"]
