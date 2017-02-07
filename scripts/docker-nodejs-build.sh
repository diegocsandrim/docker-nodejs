#!/bin/bash

cd ..

docker login -u diegosandrimuux

docker build -t diegosandrimuux/docker-nodejs:1.0.0 .

docker images

docker push diegosandrimuux/docker-nodejs:1.0.0

docker tag diegosandrimuux/docker-nodejs:1.0.0 diegosandrimuux/docker-nodejs:stable
docker push diegosandrimuux/docker-nodejs:stable