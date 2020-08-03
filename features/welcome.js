// Import the BotkitConversation dialog class
const { BotkitConversation } = require('botkit');

module.exports = function (controller) {

  // Create a very simple dialog with 2 messages.
  let DIALOG_ID = 'my_dialog_1';
  let myDialog = new BotkitConversation(DIALOG_ID, controller);
  myDialog.say('Hello!');
  myDialog.say('Welcome to the world of bots!');

  // Add the dialog to the bot
  controller.addDialog(myDialog);

  // Later, trigger the dialog
  controller.on('channel_join', async (bot, message) => {
    await bot.beginDialog(DIALOG_ID);
  });
}