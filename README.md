## Express Skeleton 

An empty Express app for demonstration purposes. Includes a single route.

## Running the server

### Dependencies

    $> npm install
    # optional, for debugging node:
    $> sudo npm install -g node-inspector

Read instructions on how to run node-inspector for debugging purpoises.

### Building the Application

Before running the application, you have to build it:

    $> make build

### Configuring the Application

Copy the file `example-config.js` and save it as `config.js`. Run through the
different example settings and change them to fit your configuration.

> **NOTE:** `config.js` is ignored by git. This is a security feature as you
will be storing secret keys and passwords in this file.

> If you want to back it up or deploy this file yo your production environment,
you must copy it manually. The app will not run without `config.js`.

### Running the Application

Start app with the inspector:

    $> node-debug app.js

Browser should start inspector automatically. It will *auto-break* on the first,
you must manually press the "resume executio" button in the debugger.

> **NOTE:** if on older version of `node-inspector`, run
`node install -g node-inspector` to upgrade.

Start the node server without inspector:

    $> node app.js

## Deploying

### Environment Variables

If other than `localhost:3000`, change `HOST` to correct address.

### Running Tests

    $> make test [testfiles='path/to/testfile.js']
