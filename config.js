//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "2349153596300";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://venocyberqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID ="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdoa0g1c2NBT1gwU1NZQjZCSnJrNXdnRG9lOEk1V2l6dVIzeXNKMGpsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3JPdmdwMUJRejJqbDdlVlAzWGd5MkdFanNzUFdod3N5V3Rqc2N2a0d5az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUC9GUkFFMTk1bGJubTNpQkRCM0lSU1FPYTNad0l2cDd2R21kTFVaWTJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMSXgzL3IyYnI1NEZZQUlWdytWak9TcUVKY0Z6bDZBUndTOTd4QmwzL1ZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLWFA5blh4Y0ovWTZoaFcrZktsVUpBK1l3cHVtUlFhZExCTGdzbjdObjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZdWZ3enNYVU94VzFleFp0ZjV2RjhSeFl4MVhjUzdESWU1VGlDekw0dzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RKQ1RnWG9MQkswRDFVdndWcmJyU1lmaTY3Qm44bGpsandqRXh0OEQwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzJ1Ry9XRXprZVJ2QVlMcUhtWHlzV3ByeEZsRklhR3ozaWVVK0NiRVlDbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFVcDRlY2NKWnFDNVRpdTZJYVlkdGpsdnlVZFJPSmN0bmc5VkVBRjk2UWwyQlhZSEVIa2pURHFCQnYvYW9USlNUZzNRd2V1c3RoRTdaQXVVTHJUbEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJqL2Q5MGxUQ1kwd040K2NnOEZldmVhczdoS3k2amo2ZXdBd2I2cjUycURnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNTM1OTYzMDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDE5QURGQjdFRDFFRDlBNDI3RTFENTk2Qzk1RjdENTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjI0MzkwOX1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQlFhcXRLNlBRbjZKbVJyckM4cGEtQSIsInBob25lSWQiOiIzODVkNTNiYS1hYTY1LTQ5NmEtYjM4Mi0yYWVhMmQzMGNmYmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYW1kYzZYaUlEa2FKTExZdi9XdTlrUytKb1k4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZSOWtzci94YnpOOTZqK2JQTm9kWFRhN3pxYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBM1NDVzM2QiIsIm1lIjp7ImlkIjoiMjM0OTE1MzU5NjMwMDo2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQRGdqK1VERUxPMm5iVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0U203Wis3bWZ6L0NtVHJNclBmc0FZYVNxSGVaZXVPNmpFU0dJT05oMWxVPSIsImFjY291bnRTaWduYXR1cmUiOiJTa1NCbzY2SVRJYTVubXVid0YrVDFCM2R6b3FFdVFrK3VvSk5oUDJHb0FqUEdCaEg2M3VqOXlRVTJnWW4xU1BrakxhQVJ4QmZmZ3U5QTNndDNsY2dEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOEdKdUhKQTFJZXlseWxtZjhLNFcxekpQMkVuVUlDVG9oQmVLQTZ4clRTWEpQUzBNQ0ZjMzFPakF5ODhsYVRhcUdmSk40bytpYVlFWFI2RG54NU80REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUzNTk2MzAwOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlVwdTJmdTVuOC93cGs2ekt6MzdBR0drcWgzbVhyanVveEVoaURqWWRaViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjI0MzkwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDOHIifQ=="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-VENOCYBER-𝐌𝐃😍 with supported by he.is.me checked by Wasi-ser | oyyy enjoy safe chuddy buddy any problem then https://rb.gy/izabex | don't worry we are not here to ban your accounts 😁 🦜🌝 ( https://rb.gy/izabex )",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Thügnificent 😈😈🔥😏",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
