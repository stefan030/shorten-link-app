import { Meteor } from 'meteor/meteor';
import { Links } from './../imports/collections/links';
import { WebApp } from 'meteor/webapp'; // WebApp object => server component of Meteor - handles incoming requests and figures out what to do with them
import ConnectRoute from 'connect-route'; // Creates a middleware that will take incoming HTTP request.


Meteor.startup(() => {
    Meteor.publish('links', function() {
       return Links.find({});
    });
});

const middleware = ConnectRoute(function(router) {
    // Looks for '/:token' request, if it matches, it will run the func
   router.get('/:token', (req) => {
      return console.log(req);
   });
});

WebApp.connectHandlers.use(middleware);
