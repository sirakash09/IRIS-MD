//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                     LIGHT-WEIGHT WHATSAPP BOT                                        //
//                                                                                                      //
//                                             𝚅.1.2.7                                                  // 
//                                                                                                      //
//                          ██╗ ██████╗ ██╗███████╗    ███╗   ███╗ ██████╗                               //
//                          ██║ ██╔══██╗██║██╔════╝    ████╗ ████║ ██╔══██╗                             //
//                          ██║ ██████╔╝██║███████╗    ██╔████╔██║ ██║  ██║                             //
//                          ██║ ██╔══██╗██║╚════██║    ██║╚██╔╝██║ ██║  ██║                             //
//                          ██║ ██║  ██║██║███████║    ██║ ╚═╝ ██║ ██████╔╝                             //
//                          ╚═╝ ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝                              //
//                                                                                                      //
//                                          BY: VENOX-SENPAI                                            //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : IRIS-MD
* @Developer : Venox-Senpai
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : Venox-Senpai

**/

const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const toBool = (x) => x === 'true';
const DATABASE_URL = process.env.DATABASE_URL || './lib/database.db';
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}

//=========================[REQUIRED MODULES, USE IT AS U LIKE!]===================//

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '',
    HANDLERS: process.env.HANDLERS || '.',
    INFO: process.env.INFO || 'ɪʀɪꜱ-ᴍᴅ;✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚;https://imgur.com/D60nScQ.jpg',
    URL: process.env.URL || 'https://whatsapp.com/channel/0029VaHt1710AgWB1B0Lkg0Q',
    SUDO: process.env.SUDO || '919614477116',
    AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW || 'true',
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'true',
    MODE: process.env.MODE || 'public',
    STICKER_DATA: process.env.STICKER_DATA || '️আমাকে ভালো লাগে?🙄
লাগে না তাইতো?
লাগবে কিভাবে তোমার মনে তো হিংসা ভরা😒😆
 📌মারবো এখানে লাশ পরবে শ্মশানে🥱

✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚
               🚫
^⁠_₊₉₁ ₉₆₁₄₄₇₇₁₁₆_⁠^',
    HAPP: process.env.HAPP || '', // IF NOT HEROKU THEN KEEP IT BLANK
    HKEY: process.env.HKEY || '', // IF NOT HEROKU THEN KEEP IT BLANK
    DATABASE_URL: DATABASE_URL,
    DATABASE:
     DATABASE_URL === "./lib/database.db"
       ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
