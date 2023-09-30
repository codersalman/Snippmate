    const express = require('express');
    const { auth, requiresAuth } = require('express-openid-connect');
    const router = express.Router();

    const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: 'WSmzVhisxskr43TbSQuXMutQbtotlRni',
    issuerBaseURL: 'https://dev-jnuy6d44dwnlazde.us.auth0.com',
    secret: 'LONG_RANDOM_STRING'
    };

    // The `auth` router attaches /login, /logout
    // and /callback routes to the baseURL
    router.use(auth(config));

    // req.oidc.isAuthenticated is provided from the auth router
    router.get('/', (req, res) => {
    res.send(
        req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
    )
    });

    // The /profile route will show the user profile as JSON
    router.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
    });

    module.exports=router