const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const message = interaction.options.getString("message");
  const channel = interaction.options.getChannel("channel");
  const title = interaction.options.getString("title") || "📢・Announcement!"; // Default title
  const color = interaction.options.getString("color") || "#0099ff"; // Default color
  const footer = interaction.options.getString("footer") || "Announcement"; // Default footer

  client.embed(
    {
      title: title,
      description: message,
      color: color,
      footer: footer,
    },
    channel
  );

  client.succNormal(
    {
      text: `Announcement has been sent successfully!`,
      fields: [
        {
          name: `📘┆Channel`,
          value: `${channel} (${channel.name})`,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};