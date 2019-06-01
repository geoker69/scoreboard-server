# Scoreboard Server
A very quick AFL scoreboard I hacked together for a friend of mine. Has a separate [client](https://github.com/tennantje/scoreboard-client) and [server](https://github.com/tennantje/scoreboard-server). Written in NodeJS (JavaScript) with SocketIO to communicate between client and server.

# Get Started
1. Install [NodeJS](https://nodejs.org/en) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Install the Server
```
git clone git@github.com:tennantje/scoreboard-server.git
cd ./scoreboard-server
npm install
cd ..
```
3. Install the Client
```
git clone git@github.com:tennantje/scoreboard-client.git
cd ./scoreboard-client
npm install
# Manually update the file ./public/js/scoreboard.js with the IP address of your server
nano ./public/js/scoreboard.js
npm start
cd ..
```
4. Browse to http://<your-server-ip-address>:4000 or http://<your-server-ip-address>:4000/admin.html
5. You may want to create a script for the client and server webservers to start when the OS boots...

# License
Copyright 2019 Jeremy Tennant

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.