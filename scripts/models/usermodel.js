var React = require("react");

var Backbone = require('backparse')({
    appId: 'Iz0wthR2pAIGCYKdg1NSnT2pgmVC8AagKtHCV1uU',
    apiKey: 'LTBEZ0tLI87GAwvBRNodLsjsp7TwfnGiC3xFiHC3',
    apiVersion: 1
});

var UserModel = Backbone.Model.extend({
    defaults: {
        email: '',
        password: '',
        confirmPassword: ''
    },
    parseClassName: 'backparse',
    idAttribute: 'objectId',
    isUser: true
});