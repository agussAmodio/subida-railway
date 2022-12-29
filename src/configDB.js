const dotenv = require("dotenv");
dotenv.config();

const config = {
  firebase: {
    type: "service_account",
    project_id: "login-nodejs-9652c",
    private_key_id: "4664df7c7693a99fa149c581b1680b6faae6e42c",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCKeX5Xjnp8z5fI\ncgjW2ysJ4gfOC7NU5TXJLyievZK2vFOA8j5M0wL1ehGS7Udwp5ZD+p+FVaOMaCdd\nZPNN0R+gVL+ktSHwR+Kqa/8x/5g4rQ+r3dhHSBU/xPt/lyCmzT8Krj6ag/wlCS1M\naktQ7pOE973B4BxtzehCe7M6Q8yKqPwiFvN6hdYEYQwP5dKE9sQ2BU6fjRgb0SEV\nL0r9Ll3+LkMSuU4DsTEeAAfscWGWDH3ygme9H4K/YKQZOgXUh5T2vY3WikT4blyy\n90AlwWtP0d6ngsckhG5rca3ObfXsORYU6Jie6Lhp6jrShsCBxRdmBToZbAxeXTnT\noQY5xqjZAgMBAAECggEAEY7yPDvuwCC6iEodYNENlgU5JCFLrfoaZdY6+lXjYpRi\nqjkNOUSQXXwK+mxn4Jr/bMM8svV29XjHdQo156oaroPQgRwOn58d2Ko1A6v7K0SW\ndh59LByxxRI/KaCKHVxtH/eULJeLw050lfnsbuixf+zB/PFj6XBwgO2afkrWhsZS\n4jbfpenvS7VTKpC/1UbrTuM1ngDl22a+yKuS+mw37RLxwGdmlZyHbIJSFX+Kve42\nm+5Mli3GJOMma9n6NQmytGINbacUePw++72uZU32XUMi4641ad6qmhx3Vg1Ha2an\nBvqfJ4ZqSMXEu7G7eTH9NiGNV2YdYXOrDMXF+Yfx+QKBgQC93D6SG7mq2hdvTYYX\n8/SbeJ/K8kbmGJL50mYlunHsdZAs37tWrEqzSfKYFvkm+bp6D36Ar3pQ3AmpsJnt\ncLlmIt9aAHvrtiTYCAWuhbHm0y7SClrWZM03+lHcXVe2JI/RG3aElA19xTwLV3fC\ntowcTS8tsA4jtyASO6qFaGPOrwKBgQC6tqpMZdWO3X/N7e/EPSFwtY5JStz3Kdrz\nlgNhVT6et6mk+bfxpFHxUd+EawPGHhvHkE2jBLNLUErcnnZhvTVEwljBbkjwNSQ+\nXkb1p1HiaIFH6+yydMraPuCPIXbvelXVOHxs0k8wkFi+f/klAy7s7CS+cUUd1pYr\nVqDWuiki9wKBgAccs/9XKIpc5xnVRpupGNWmHB5HGx7NdtwC5K6vIEtiUAdOTj89\n7wJuV7cYzTaHjlO6NtvtNuDGjVoc8ncxjNBlqAZAFGRNC25IRqY1/ecOrCdUGfkE\nB6f8KYreuEVrczO7GqJ2xVabx9cI7MSPgAojXgwRF0aBOqNUNtwOgAajAoGAMpEH\n/BrURJXeaBIZjmcT6GdzOoxI3bN7Nd8Z2UFx7SBGlISA+bOL8bQ/uagV5JEA6wI8\n1HqQaEQ9khRkcUIB7DZKPVC19kAeKbn0s9D1z0CISsctWoNg8Mx4mqrwgBj8p/td\nT0eB5OAi+KzF9+0tx0KJDP62PkeAcgpLEvxl6a8CgYA4pxP7HmjRLjROsiOk/1uG\nKaTONkTlV5NL1Ie7Qv+aB/I/d8R82Yts6a6tLXsdpkSycKONcyw4a+I5FGOtDlUB\njYGfREhoc9+A9Sh1s9aGMEm6ybQRneAthPO33nXZLHMfK4B+8OIZxoV+Syz5H7RU\nyUk1bMscYjyAW6mAqevJqQ==\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-h9hfy@login-nodejs-9652c.iam.gserviceaccount.com",
    client_id: "103358132889736128719",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-h9hfy%40login-nodejs-9652c.iam.gserviceaccount.com",
  },

  mongodb: {
    conexionMongo: process.env.URLMONGO,
  },
};

module.exports = config;
