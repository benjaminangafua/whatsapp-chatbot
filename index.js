const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const client = new Client();
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("QR Code received, scan it with your WhatsApp mobile app.");
});
client.on("ready", () => {
  console.log("Client is ready");
});

client.on("message", async (message) => {
  // console.log(message);

  let reply = `Hi, I am Benjamin's chatbot.\n If you need his attention urgently please reply with\n\n '009'`;
  if (
    message.body.toLowerCase().includes("009")
    // ||
    // message.body.toLowerCase().includes("hi")
  ) {
    // client.sendMessage(message.from, "I am Ben");
    reply = `We have informed him about your need. He will join you ASAP.
      \nIs there anything else I can help with? Please reply with the option that apply\n\n
      (Y) Yes
      (N) No`;
  } else if (
    message.body.toLowerCase().includes("yes") ||
    message.body.toLowerCase().includes("y")
  ) {
    reply = "What is it?";
  } else if (
    message.body.toLowerCase().includes("no") ||
    message.body.toLowerCase().includes("n")
  ) {
    reply = "Thanks, it was nice meeting you.";
  }
  await message.reply(reply);
});

client.initialize();
