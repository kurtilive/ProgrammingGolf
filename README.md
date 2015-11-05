Hello new NodeJS Golf Programming v.1.0.0

Amazon Web service EC2 ubuntu
  Public DNS: ec2-54-208-42-199.compute-1.amazonaws.com
  Public IP: 54.208.42.199

  Ports: http -> 80, 9000

Development:

1. Connect for cloud: ssh -i aws\ ec2\ access/access_user.pem ubuntu@54.208.42.199
  user: ubuntu
2. Run NodeJS web server with npm: npm install | npm start (TODO://replace with script)
  before: 'export NODE_ENV=development'
3. Run web server on cloud: sudo PORT=80 DEBUG=golf-apm start (TODO://replace with script)
  Running web server in the background:

TODO:// npm install -> https://github.com/foreverjs/forever

sudo PORT=80 DEBUG=golf-app:* npm start

sudo PORT=80 nodejs bin/www

nohup nodejs bin/www > output.log &
