npm init -y
npm install --save graphql apollo-server
npm install --save-dev @types/node nodemon ts-node
npm install -g typescript
tsc --init
nodemon src/server.ts
