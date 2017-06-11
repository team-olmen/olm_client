# Olm Client 

Client for students to create multiple choice questions to test their knowledge of the stuff they've learned.

## First Steps

### 0a. Install dependencies

You'll need:

* `Node > 7.0.0` & `NPM > 4.0.0` (e.g. from <https://nodejs.org/en/> or <https://github.com/creationix/nvm> if you want to have several different node version installed side-by-side)
* a `SASS` compiler (if you want to change the paint. Read some more about it over at <http://sass-lang.com/install>)

### 0b. Get going on Angular 4

Check out the great tutorial at <https://angular.io/>.

### 1. Check out the code

```bash
# create a directory for your great edits
mkdir olm_client
# get the source code
git clone https://github.com/randomchars42/olm_client
cd olm_client
# install dependencies
npm install
```

There might be some warnings about unmet peer dependencies. **Ignore them**. They won't stop you ;) 

### 3. Go and get 'em

You should be all set up now. And ready to work on the code. If you run into errors, go ahead and fix them (or report them to me ;) ). Same applies to this documentation which will - with your help - improve over time.

There are two options how you can see your code in action:

1.  Compile ("transpile") **J**ust-**I**n-**T**ime:

    This will reload the page as soon as a change in code is detected. Those reloads take a bit longer since the code is compiled during loading. This lets you test small changes faster and may be your preferred method for development.

2.  Compile **A**head-**O**f-**T**ime:

    This will take a while and leave you with a project ready to deploy. Sometimes the aot-compiler finds some errors in your code which were missed by the jit-compiler. So before you commit any changes compile aot and see if you've missed something.

#### Compile Just-In-Time

Simply run:

```bash
npm start
```

Your browser will be fired up and the project is served to you.

**Note**: This uses `src/index.html`.

#### Compile Ahea-Of-Time

After you compiled the project ahead-of-time the `/dist` folder will be populated. If you want to deploy the compiled project you'll need to transfer the contents of this folder to your server. Make sure the index.html will be found at the domain's / subdomain's root.

If you update dependencies like `zone.js` or `shim.js` **or compile the code for the first time**, you'll need to run the following first:

```bash
node copy-dist-files.js
```

This will copy the necessary files to `/dist`.

##### Compile & Uglify:

```bash
npm run build:aot
```

##### Compile & Uglify & Serve:

```bash
npm run buildnserve:aot
```

##### Serve compiled:

```bash
npm run serve:aot
```

**Remember**: JIT and AOT have different `index.html` files. If you need to change those, you will have to change both files (in `/src` for JIT and in `/dist` for AOT).

#### Update styles

Style information is written in `.scss` and can be found in `/src/scss`. To keep compiling `.scss` to `.css` run:

```bash
sass --watch src/scss/styles.scss:src/styles.css src/scss/styles.scss:dist/styles.css"
```

This will update the `styles.css` in both `/dist` and `/src` as soon as you save any changes.

If you happen to be on a system with BASHA (if you're stuck on Win10 <https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/>) you may add something like the following to your `~/.bash_aliases` / `~/.bash_rc` or whatever is your system's bash config:

```bash
export $path_olm_client="/PATH/TO/THE/CODE"
alias olm_client_scss="sass --watch $path_olm_client/src/scss/styles.scss:$path_olm_client/src/styles.css $path_olm_client/src/scss/styles.scss:$path_olm_client/dist/styles.css"
```
