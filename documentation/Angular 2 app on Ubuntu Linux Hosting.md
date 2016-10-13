# Angular 2 app on Ubuntu Linux Hosting

## MongoDB

### Server

```
sudo apt-get install mongodb
```

#### Hardening

Without doing the hardening part, basically you can create and access as many databases as you want from the client apps. It's recommended to harden the setup, however, if you run only one app in the server and access only it on localhost - you probably don't need to harden.

##### Credentials

Before hardening MongoDB, you need to create at least a "super user" which has username and password, and all the privileges to make changes.

The super user created here is `admin` with password which is not shared within this documentation.

Further details on creating admin user can be read from: https://docs.mongodb.com/v2.6/tutorial/add-admin-user/


##### Configuration

The following changes have been made to the default `/etc/mongodb.conf` -configuration file.

```
# Listen on all network interfaces
# (only if you need to access MongoDB outside)
#bind_ip = 0.0.0.0

# Enable authentication
auth = true

# Enable SSL on normal ports
sslOnNormalPorts = true

# SSL Key file and password
sslPEMKeyFile = /etc/ssl/mongodb.pem
```

##### Creating SSL certificate for MongoDB

Note that the certificate is self-signed. It would be always better to use a trusted authority.

```
cd /etc/ssl
sudo openssl req -newkey rsa:2048 -new -x509 -days 365 \
    -nodes -out mongodb-cert.crt -keyout mongodb-cert.key
sudo cat mongodb-cert.key mongodb-cert.crt > mongodb.pem
```

##### Restarting MongoDB

After saving the configuration, the MongoDB server needs to be restarted:

```
sudo /etc/init.d/mongodb restart
```

##### Creating databases with credentials

In order to use multiple database securely, we need to create the databases and add user to the database:

```
mongo --ssl localhost/admin -u admin -p XXXX
```

First create a database:

```
use angular2-mean-starter
```

Then create a user with password:

```
db.createUser({ user: "angular2-mean-starter", password: "secret" })
```

For the NodeJS apps you need to specify the following MongoDB database and credentials in the following format:

```
MONGODB_URI="mongodb://angular2-mean-starter:secret@localhost:27017/staging?ssl=true&sslValidate=false"
```

Or if you are accessing the MongoDB from outside:

```
MONGODB_URI="mongodb://angular2-mean-starter:secret@db.myappdomain.com:27017/staging?ssl=true&sslValidate=false"
```

Please note, that the `ssl=true` forces all connections to use SSL and `sslValidate=false` to disable certificate checking (as our certificate is self-signed).

### Client

If you have a dedicated MongoDB server host, and want to access it from other machines - you can install the clients package:

```
sudo apt-get install mongodb-clients
```

## NGINX

First of all, we need a web server which runs on ports 80 and 443.

### Install

```
apt-get install nginx
```

### Create certificate

You need to create a certificate in order to have HTTPS. You should remember that the certificate needs to be signed by a known authority so that the users don't get nagged about it.

Please note also that you might need to have several certificates for *myappdomain.com* and *www.myappdomain* (or a wildcard certificate for *myappdomain.com* and everything *??????.myappdomain.com*).

#### Create self-signed certificate

Self-signed certificates can be used in development and small intranets, on which the users don't mind of getting browser warning:

```
sudo mkdir -p /etc/nginx/ssl
cd /etc/nginx/ssl
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout www.myappdomain.key -out www.myappdomain.com.crt
```

#### Create CSR (Certificate Signing Request)

If you want a real certificate, you need to create a CSR:

```
sudo mkdir -p /etc/nginx/ssl
cd /etc/nginx/ssl
sudo openssl req -new -nodes -days 365 -newkey rsa:2048 \
    -keyout www.myappdomain.com.key -out www.myappdomain.com.csr 
```

Then just get the signed CRT file for example via [GoDaddy](https://www.godaddy.com/) or [RapidSSL](https://www.rapidssl.com/) or similar.

### Configuration

#### HTTP-only

Replace the contents of `/etc/nginx/sites-available/default` with following:

```
server {
        listen 80 default_server;

        server_name www.myappdomain.com;

        location / {
            proxy_pass http://localhost:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
}
```

#### HTTP and HTTPS allowed

Replace the contents of `/etc/nginx/sites-available/default` with following:

```
server {
        listen 80 default_server;
        listen 443 ssl;

        server_name www.myappdomain.com;

        ssl_certificate /etc/nginx/ssl/www.myappdomain.com.crt;
        ssl_certificate_key /etc/nginx/ssl/www.myappdomain.com.key;

        location / {
            proxy_pass http://localhost:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
}
```

#### Forward all HTTP traffic to HTTPS (recommended)

Replace the contents of `/etc/nginx/sites-available/default` with following:

```
server {
        listen 80 default_server;

        server_name www.myappdomain.com;

        location / {
            rewrite ^/(.*) https://www.myappdomain.com/$1 permanent;
        }
}

server {
        listen 443 ssl;

        server_name www.myappdomain.com;

        ssl_certificate /etc/nginx/ssl/www.myappdomain.com.crt;
        ssl_certificate_key /etc/nginx/ssl/www.myappdomain.com.key;

        location / {
            proxy_pass http://localhost:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
}
```

#### Naked domain redirection

For building good SEO, you shouldn't have the server running on multiple hostnames. You would want either forward *www.myappdomain.com* to *myappdomain.com* or vice verca.

Add following to `/etc/nginx/sites-available/default` -file (after the other server parts):

```
server {
        listen 80;
        listen 443 ssl;

        server_name myappdomain.com;

        ssl_certificate /etc/nginx/ssl/myappdomain.com.crt;
        ssl_certificate_key /etc/nginx/ssl/myappdomain.com.key;

        location / {
            rewrite ^/(.*) https://www.myappdomain.com/$1 permanent;
        }
}
```

## NodeJS

We need NodeJS 6.x for our application to run correctly. Ubuntu and Debian by default only install NodeJS 4.x series.

### Get APT sources for NodeJS 6.x

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

### Install NodeJS 6.x

```
sudo apt-get install -y nodejs
```

### User for NodeJS app(s)

You should create a user for running the NodeJS app(s) - instead of running the apps with anybody's personal account - or even worse with a root account.

```
sudo adduser --disabled-password nodejs
```

The user can be accessed by sudo'ers with:

```
sudo su nodejs
```

### Process Manager

In order to run any NodeJS app in production, we need to use a process manager. On local development we used `nodemon`, however, on production we need something that's started when the machine is booted up, and also restart the process whenever needed.

The solution is to use [PM2](https://github.com/Unitech/pm2) production process manager:

```
sudo npm install -g pm2
```

The process manager needs to be added to init system, which can be done just by giving command:

```
sudo pm2 startup ubuntu -u nodejs --hp /home/nodejs
```

## Application

### Initialization

The application is cloned from the GitHub repository to `/home/nodejs/app`:

```
sudo su nodejs
cd
git clone https://github.com/jussikinnula/angular2-mean-starter.git app
```

### Configuration

Application's configuration is saved to `/home/nodejs/app/.env` -file, which is not in version control (e.g. it's instance specific). Regularly environment should be propagated from a configuration management system, but for this "simple setup" purpose the environment is on a single file.

### Install & Compilation

On selected branch, you can done installation and compilation just by giving a command:

```
sudo su nodejs
cd ~/app
export `cat .env`
npm install
```

### Adding app to PM2

Initially, the application needs to be started by PM2 with command:

```
sudo su nodejs
cd ~/app
export `cat .env`
pm2 start target/assets/js/server.js
```

Note! When the environment is changed, you need to stop the application and start it again with proper environment. Stopping is done by:

```
sudo su nodejs
pm2 stop server
```

To restart application when it's been updated, run:

```
sudo su nodejs
pm2 restart server
```

Note! Check `pm2 --help` for further details. For example `pm2 list` lists processes.