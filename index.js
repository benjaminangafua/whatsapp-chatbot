const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

client.on("ready", () => {
  console.log("Client is ready");
});

client.on("message_create", (message) => {
  // console.log(message);

  if (message.body.toLowerCase() === "hello") {
    client.sendMessage(message.from, "I am Ben");

    message.reply("How are you doing");
  }
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.initialize();
