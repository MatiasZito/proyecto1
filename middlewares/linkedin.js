import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';

const emails = ["matiaszito@gmail.com"]


passport.use(
    "auth-linkedin",
    new LinkedInStrategy(
    {
  clientID: LINKEDIN_KEY,
  clientSecret: LINKEDIN_SECRET,
  callbackURL: "http://localhost:3000/auth/linkedin",
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function(accessToken, refreshToken, profile, done) {
    const response = emails.includes(profile.emails[0].value);
    if (response) {
        done (null,profile);
    } else {
        emails.push(profile.emails[0].value);
        done (null,profile);
    }
  
}));