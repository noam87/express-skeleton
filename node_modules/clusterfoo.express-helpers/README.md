## Express Helpers

Just a bunch of useful middleware for reuse accross
[express](http://expressjs.com) apps.

## Usage

### npm install

    npm install git://github.com/clusterfoo/funcderscore_js

### App.js

``` js
Cf = require('clusterfoo.express-helpers');

App.use(Express.favicon());
// Pass stuff around with a res.pass object
App.use(Cf.pass);
App.use(Express.logger('dev'));

// ...

// Allow cross domain cookies
App.use(Cf.allowCrossDomain);
App.use(Express.cookieParser('secret'));

// ...

App.use(App.router);
// Handle errors with an optional callback function:
App.use(function(req, res, next) {
    // Passing an error-handling callback:
    res.pass.errFn = function(err) {
        doSomethingWithError(err);
        next(err); }
});
App.use(Cf.error);
```

--- 

The MIT License (MIT)

Copyright (c) 2014 Noam Gagliardi-Rabinovich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
