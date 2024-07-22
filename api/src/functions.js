const instance = require("./instance");
const { PrismaClient } = require('@prisma/client')
const { v4: uuidv4 } = require('uuid');
const uniqueIdentifier = uuidv4();

const prisma = new PrismaClient();

instance.interceptors.request.use(async  (config)=>{
    console.log("interceptor")
        
    const authToken = await getToken();

    console.log("authToken",authToken)
    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  }, (error) => {
        return Promise.reject(error);
})

async function authenticate() {
    try {
        console.log("authenticate start")
        const res = await instance.post(`/api/auth`, {
            "username": process.env.API_USERNAME,
            "password": process.env.API_PASSWORD
        });
        
        const tokenData = {
            token: res.data.token,
            expires: new Date(res.data.expires)
        };
        
        console.log(tokenData);

        await prisma.token.upsert({
            where: { id: '5d377c8e4321b300047e200a' },
            update: tokenData,
            create: { id: '5d377c8e4321b300047e200a', ...tokenData },
        });
      
      console.log('Authenticated and stored token in DB');
    } catch (error) {
      console.error('Error authenticating:', error);
    }
}


  async function getTokenFromDB() {

    const tokenRecord = await prisma.token.findUnique({
        where: { id: '5d377c8e4321b300047e200a' }
    })

    return tokenRecord;
  }


  async function isExpired() {
    const tokenRecord = await getTokenFromDB();
    if (!tokenRecord || new Date() >= new Date(tokenRecord.expires)) {
      return true;
    }
    return false;
  }


  async function getToken() {
    const tokenRecord = await getTokenFromDB();

    console.log("getToken",tokenRecord)

    return tokenRecord ? tokenRecord.token : null;
  }


   


  module.exports = { authenticate, isExpired, getToken };
