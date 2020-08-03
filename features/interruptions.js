
const { BotkitConversation } = require("botkit");

module.exports = function (controller) {

  controller.interrupts('help', 'message', async (bot, message) => {
    // start a help dialog, then eventually resume any ongoing dialog
    await bot.beginDialog(HELP_DIALOG);
  });

  controller.interrupts('quit', 'message', async (bot, message) => {
    await bot.reply(message, 'Quitting!');

    // cancel any active dialogs
    await bot.cancelAllDialogs();
  });
}