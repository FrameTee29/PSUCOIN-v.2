import * as soap from 'soap';
require('tls').DEFAULT_MIN_VERSION = 'TLSv1'
const PSU_URL = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';

async function loginPSUPassport(psuPassport, password) {
    return new Promise((resolve, reject) => {
      soap.createClient(PSU_URL, (err, client) => {

        
        if (err) return reject(err);
        
        let user = {
          username: psuPassport,
          password: password
        }

        client.GetStaffDetails(user, (err, response) => {
          if (err) return reject(err);
          else
            return resolve(response.GetStaffDetailsResult.string);
        })
        
      })
    })
  }

export default async (req, res) => {
    const { username, password } = req.body;
    const result = await loginPSUPassport(username, password);
    
    console.log(JSON.stringify(result))
    return res.status(200).json(result)
}