FROM mhart/alpine-node:10 as base

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

#############
# Build Stage
#############
FROM base as build

COPY ./tsconfig.json ./
COPY ./lerna.json ./

COPY ./packages/server/src/ ./packages/server/src/
COPY ./packages/server/tsconfig.json ./packages/server/

COPY ./packages/common/src/ ./packages/common/src/
COPY ./packages/common/tsconfig.json ./packages/common/

RUN npm i -g yarn
RUN yarn install
RUN yarn build

RUN ls -lart ./packages/server/lib/

###############
# Prod Build Stage
###############

FROM base as build-production

COPY --from=build /usr/src/app/packages/server/lib/ ./packages/server/lib/
COPY --from=build /usr/src/app/packages/common/lib/ ./packages/common/lib/

RUN yarn install --production

###############
# Release Stage
###############

FROM base as release

COPY --from=build-production /usr/src/app/node_modules/ ./node_modules/
COPY --from=build-production /usr/src/app/packages/common/lib/ ./packages/common/lib/
COPY --from=build-production /usr/src/app/packages/server/lib/ ./packages/server/lib/

WORKDIR ./packages/server

EXPOSE 3000

CMD ["node", "lib/main.js"]