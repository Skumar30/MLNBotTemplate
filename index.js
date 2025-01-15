import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { HandleRequest } from './src/HandleRequest.js';
import { setupCommands } from './src/setupCommands.js';

// Create the Discord client with necessary intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const handler = new HandleRequest(client);

// Once the client is ready, register the slash commands
client.once('ready', async () => {
  await setupCommands();
  console.log(`Logged in as ${client.user.tag}`);
});

// Handle interactions (slash commands)
client.on('interactionCreate', (interaction) => handler.handleInteraction(interaction));

// Handle messages
client.on('messageCreate', (message) => handler.handleMessage(message));

client.login(process.env.DISCORD_TOKEN);