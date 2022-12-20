## Setup

```bash
git clone https://github.com/Swindler36/phaser-fbinstant-boilerplate.git
```

Install dependiences

```bash
npm i
```

Create SSL

> In this step, you need to 'make'. If you are on linux, you can run it, for other platforms you should install make and openssl to create SSL.

```bash
make setssl
```

Create a build for first time

```bash
npm run build
```

Add you app id in `src/config/index.js`.

Finally, start development server and develop your game.

```bash
npm run start
```
