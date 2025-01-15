import { handleTest } from '.commands/test.js';

export class HandleRequest {
  constructor(client) {
    this.client = client;
  }

  async handleInteraction(interaction) {
    if (!interaction.isChatInputCommand()) return;

    try {
      switch (interaction.commandName) {
        case 'test': // sample command you can mess with
          await handleSwing(interaction);
          break;
        default:
          await interaction.reply({ 
            content: 'Unknown command', 
            ephemeral: true 
          });
      }
    } catch (error) {
      console.error('Error handling interaction:', error);
      await interaction.reply({ 
        content: 'There was an error processing your command', 
        ephemeral: true 
      });
    }
  }

  async handleMessage(message) {
   // idk do something here
  }
}