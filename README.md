## Description

This is a simple example in Nestjs, where bun is creating to many instances of WebClientService. In node js environment everything running like expected.
In order to reproduce this issue, you need to use the useFactory method when declaring a provider in NestJs.

## Project setup

```bash
$ bun i
```

## Reproducing the Compile and run the project

````bash
# explicitly force to use bun engine
$ bun run --bun start:debug
````

Log output - instantiated twice:

````bash
# bun inspector
--------------------- Bun Inspector ---------------------
Listening:
  ws://localhost:6499/vrt49o8j6dd
Inspect in browser:
  https://debug.bun.sh/#localhost:6499/vrt49o8j6dd
--------------------- Bun Inspector ---------------------
[Nest] 45419  - 05/24/2025, 10:42:23 AM     LOG [NestFactory] Starting Nest application...
[Nest] 45419  - 05/24/2025, 10:42:23 AM    WARN [UserService] UserService instantiated
## here it is instantiated twice
[Nest] 45419  - 05/24/2025, 10:42:23 AM    WARN [WebClientService] instantiating WebClientService
[Nest] 45419  - 05/24/2025, 10:42:23 AM    WARN [WebClientService] instantiating WebClientService
[Nest] 45419  - 05/24/2025, 10:42:23 AM     LOG [InstanceLoader] UserModule dependencies initialized +0ms
## Web Module is also instantiated twice
[Nest] 45419  - 05/24/2025, 10:42:23 AM     LOG [InstanceLoader] WebModule dependencies initialized +0ms
[Nest] 45419  - 05/24/2025, 10:42:23 AM     LOG [InstanceLoader] WebModule dependencies initialized +0ms
[Nest] 45419  - 05/24/2025, 10:42:23 AM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 45419  - 05/24/2025, 10:42:23 AM     LOG [RoutesResolver] AppController {/}: +3ms
[Nest] 45419  - 05/24/2025, 10:42:23 AM     LOG [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 45419  - 05/24/2025, 10:42:23 AM     LOG [NestApplication] Nest application successfully started +1ms
````

## Expected behaviour (nodejs engironmehnt)

In node only one instance of WebModule and WebCLientService is instantiated.
````bash
$ npm run start:debug
````

Log output - node environment

````bash
Debugger listening on ws://127.0.0.1:9229/7526625f-eab1-4947-9afc-b165a0d3327c
For help, see: https://nodejs.org/en/docs/inspector
[Nest] 47926  - 05/24/2025, 10:52:32 AM     LOG [NestFactory] Starting Nest application...
[Nest] 47926  - 05/24/2025, 10:52:32 AM    WARN [UserService] UserService instantiated
# WebClientService and WebModule are instantiated once in NodeJs
[Nest] 47926  - 05/24/2025, 10:52:32 AM    WARN [WebClientService] instantiating WebClientService
[Nest] 47926  - 05/24/2025, 10:52:32 AM     LOG [InstanceLoader] UserModule dependencies initialized +0ms
[Nest] 47926  - 05/24/2025, 10:52:32 AM     LOG [InstanceLoader] WebModule dependencies initialized +0ms
[Nest] 47926  - 05/24/2025, 10:52:32 AM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 47926  - 05/24/2025, 10:52:32 AM     LOG [RoutesResolver] AppController {/}: +2ms
[Nest] 47926  - 05/24/2025, 10:52:32 AM     LOG [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 47926  - 05/24/2025, 10:52:32 AM     LOG [NestApplication] Nest application successfully started +1ms
````
