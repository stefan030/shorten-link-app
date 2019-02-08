import { Meteor } from 'meteor/meteor';
import { Links } from './../imports/collections/links';
import { WebApp } from 'meteor/webapp'; // WebApp object => server component of Meteor - handles incoming requests and figures out what to do with them
import ConnectRoute from 'connect-route'; // Creates a middleware that will take incoming HTTP request.


Meteor.startup(() => {
    Meteor.publish('links', function() {
       return Links.find({});
    });
});

// Executed whenever user visits with a route like
// 'localhost:3000/abcd'
function onRoute(req, res, next) {
    // Take the token out of the url and try to find a matching link in Links collection
    const link = Links.findOne({ token: req.params.token });

    if (link) {
        // If we find link object, redirect the user to the long URL
        res.writeHead(307, { 'Location': link.url });
        res.end();
    } else {
        // If we don't find a link object, send the user to our normal React app
        next();
    }

}

const middleware = ConnectRoute(function(router) {
    // Looks for '/:token' request, if it matches, it will run the func
   router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
