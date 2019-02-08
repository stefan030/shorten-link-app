import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';


Meteor.methods({
   'links.insert': function(url)  {
       // Match.Where => Used whenever we want to define custom validation
            // If we return truthy value from arrow func, then check passes and its a valid input
            // If we return falsy check throws an error
       check(url, Match.Where(url => validUrl.isUri(url)));
   }
});

export const Links = new Mongo.Collection('links');