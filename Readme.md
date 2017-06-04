# Olm Api

Client for students to create multiple choice questions to test their knowledge of the stuff they learned.

## Firs Steps

### 0. Install dependencies

You'll need:

* Node > 7.0.0
* NPM > 4.0.0
* SASS compiler (if you want to put some paint onto it)

### 0b. Get going on Angular 4

Check out the great tutorial at <https://angular.io/>.

### 1. Check out the code

```bash
# create a directory for your great project
mkdir olm_client
# get the source code
git clone https://github.com/randomchars42/olm_client
cd olm_client
# install dependencies
npm install
```

### 4. Go and get 'em

You should be all set up now. If you ran into errors, go ahead and fix them (or report them to me ;) ). Same applies to this documentation which will - with your help - improve over time.

#### Compile Just-In-Time

Simply run:

```bash
npm start
```

#### Compile Ahea-Of-Time

Compile:

```bash
npm run build:aot
```

Compile & Uglify:

```bash
npm run buildnserve:aot
```

Server compiled:

```bash
npm run serve:aot
```

The compiled project can be found in `/dist`.

If dependencies like `zone.js` or `shim.js` were updated by you run:

```bash
node copy-dist-files.js
```

to copy the files to `/dist`.

**Note**: JIT and AOT have different `index.html` files. If you need to change those, you will have to change both files (in `/src` for JIT and in `/dist` for AOT).
