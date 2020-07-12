# videolist

> Developer Skill Test

## Coding language

> nuxtjs

## make docker image

```bash
docker build --tag <name>:<version> .
```

## run docker container

```bash
docker run --name <container-name> -p 3000:3000 <image-name>:<version>
```

## pull images from docker hub

```bash
docker pull sutthipot/videolist

docker run --name videolist -p 3000:3000 videolist:latest
```
