import 'dotenv/config';
import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'test',
    description: 'Check if the bot lives',
  },
];

async function setupCommands() {
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
  
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID, 
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error('Error registering commands:', error);
  }
}

// If this file is run directly (not imported)
if (process.argv[1].endsWith('setupCommands.js')) {
  setupCommands();
}

export { setupCommands }; 